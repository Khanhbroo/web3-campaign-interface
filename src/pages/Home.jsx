import { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getCampaigns } = useStateContext();

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    };

    useEffect(() => {
        if (contract) {
            fetchCampaigns();
        }
    }, [address, contract]);

    return (
        <div>
            {!address ? (
                <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#3D8D7A]">
                    Connect wallet to see all campaigns
                </p>
            ) : (
                <DisplayCampaigns
                    title="All Campaigns"
                    isLoading={isLoading}
                    campaigns={campaigns}
                />
            )}
        </div>
    );
};

export default Home;
