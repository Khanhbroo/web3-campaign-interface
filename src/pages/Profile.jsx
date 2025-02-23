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
            <DisplayCampaigns
                title="User Campaigns"
                isLoading={isLoading}
                campaigns={campaigns}
            />
        </div>
    );
};

export default Profile;
