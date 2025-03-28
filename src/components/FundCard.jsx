import { tagType, user } from '../assets';
import { daysLeft } from '../utils';

import { shortenAddress } from '../utils';

const FundCard = ({
    owner,
    title,
    description,
    target,
    deadline,
    amountCollected,
    image,
    handleClick,
}) => {
    const remainingDays = daysLeft(deadline);

    return (
        <div
            className="sm:w-[288px] w-full rounded-[16px] bg-[#B3D8A8] cursor-pointer"
            onClick={handleClick}
        >
            <img
                src={image}
                alt="fund"
                className="w-full h-[158px] object-cover rounded-[15px]"
            />
            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center mb-[18px]">
                    <img
                        src={tagType}
                        alt="tag"
                        className="w-[17px] h-[17px] object-contain"
                    />
                    <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#3D8D7A]">
                        Education
                    </p>
                </div>

                <div className="block">
                    <h3 className="font-epilogue font-semibold text-[16px] text-[#173622] text-left leading-[26px] truncate">
                        {title}
                    </h3>
                    <p className="mt-[5px] font-epilogue font-normal text-[#3D8D7A] text-left leading-[18px] truncate">
                        {description}
                    </p>
                </div>

                <div className="flex justify-between flex-wrap mt-[16px] gap-2">
                    <div className="flex flex-col">
                        <h4 className="font-epilogue font-semibold text-[14px] text-[#306f44] leading-[22px]">
                            Collected: {amountCollected} ETH
                        </h4>
                        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#3D8D7A] sm:max-w[120px] truncate">
                            Raise of {target} ETH
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h4 className="font-epilogue font-semibold text-[14px] text-[#306f44] leading-[22px]">
                            {remainingDays}
                        </h4>
                        <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#3D8D7A] sm:max-w[120px] truncate">
                            Days Left
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-[20px] gap-[12px]">
                    <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#3D8D7A]">
                        <img
                            src={user}
                            alt="user"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                    <a className="font-epilogue font-normal text-[12px] text-[#3D8D7A]">
                        Owner{' '}
                        <span className="text-[#173622]">
                            {shortenAddress(owner)}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FundCard;
