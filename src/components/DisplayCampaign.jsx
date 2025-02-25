import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';
import { FundCard } from './';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaignDetails/${campaign.title}`, { state: campaign });
    };

    return (
        <div>
            <h1 className="font-epilogue font-semibold text-[#173622] text-left">
                {title} ({campaigns.length})
            </h1>
            <div className="flex flex-wrap mt-[20px] gap-[26px]">
                {isLoading && (
                    <img
                        src={loader}
                        alt="loader"
                        className="w-[100px] h-[100px] object-contain"
                    />
                )}

                {!isLoading && campaigns.length === 0 && (
                    <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#3D8D7A]">
                        No campaign has been created yet.
                    </p>
                )}

                {!isLoading &&
                    campaigns.length > 0 &&
                    campaigns.map((campaign, index) => (
                        <FundCard
                            key={index}
                            {...campaign}
                            handleClick={() => handleNavigate(campaign)}
                        />
                    ))}
            </div>
        </div>
    );
};

export default DisplayCampaigns;
