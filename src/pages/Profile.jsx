import { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getUserCampaigns } = useStateContext();

    const fetchUserCampaigns = async () => {
        setIsLoading(true);
        const data = await getUserCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    };

    useEffect(() => {
        if (contract) {
            fetchUserCampaigns();
        }
    }, [address, contract]);

    return (
        <div>
            {!address ? (
                <div className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                    Connect your wallet first
                </div>
            ) : (
                <DisplayCampaigns
                    title="User Campaigns"
                    isLoading={isLoading}
                    campaigns={campaigns}
                />
            )}
        </div>
    );
};

export default Profile;
