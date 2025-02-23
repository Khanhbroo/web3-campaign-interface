import { useState, useEffect, createContext, useContext } from 'react';
import { contractAddr, contractABI } from '../contracts/contractData';
import {
    useAppKit,
    useAppKitProvider,
    useAppKitAccount,
} from '@reown/appkit/react';
import {
    BrowserProvider,
    Contract,
    AlchemyProvider,
    formatEther,
    parseEther,
} from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { open } = useAppKit();
    const { walletProvider } = useAppKitProvider('eip155');
    const { address, isConnected } = useAppKitAccount();

    const [contract, setContract] = useState(null);

    const fetchContractData = async () => {
        let ethersProvider, signer;
        if (walletProvider) {
            ethersProvider = new BrowserProvider(walletProvider);
            signer = await ethersProvider.getSigner();
        } else {
            ethersProvider = new AlchemyProvider(
                'sepolia',
                import.meta.env.VITE_ALCHEMY_SEPOLIA_KEY,
            );
            signer = null;
        }

        if (signer) {
            const contractInstance = new Contract(
                contractAddr,
                contractABI,
                signer,
            );
            setContract(contractInstance);
        }
    };

    useEffect(() => {
        fetchContractData();
    }, [walletProvider]); // Runs when walletProvider changes

    const publishCampaign = async (form) => {
        try {
            const data = await contract.createCampaign(
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image,
            );
            await data.wait();
            console.log('Contract Called Success!', data);
        } catch (error) {
            console.log('Contract Called Failed!', error);
        }
    };

    const getCampaigns = async () => {
        const campaigns = await contract.getCampaigns();
        const parseCampaigns = campaigns.map((campaign, index) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: formatEther(campaign.target.toString()),
            deadline: Number(campaign.deadline),
            amountCollected: formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: index,
        }));

        return parseCampaigns;
    };

    const getUserCampaigns = async () => {
        const campaigns = await getCampaigns();
        const filteredCampaigns = campaigns.filter((campaign) => {
            return campaign.owner.toLowerCase() === address.toLowerCase();
        });
        return filteredCampaigns;
    };

    const fund = async (pId, amount) => {
        const data = await contract.fundToCampaign(pId, {
            value: parseEther(amount),
        });
        await data.wait();
        return data;
    };

    const getFunders = async (pId) => {
        const funders = await contract.getFunders(pId);
        const numberOfFunders = funders[0].length;

        const parseFunders = [];

        for (let i = 0; i < numberOfFunders; i++) {
            parseFunders.push({
                funder: funders[0][i],
                funded: formatEther(funders[1][i].toString()),
            });
        }

        return parseFunders;
    };

    return (
        <StateContext.Provider
            value={{
                open,
                address,
                isConnected,
                contract,
                createCampaign: publishCampaign,
                getCampaigns,
                getUserCampaigns,
                fund,
                getFunders,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
