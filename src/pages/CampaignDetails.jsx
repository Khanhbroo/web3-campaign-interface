import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { Button, CountBox, Loader } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { user } from '../assets';

const CampaginDetails = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { fund, getFunders, contract, address } = useStateContext();

    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState('');
    const [funders, setFunders] = useState([]);

    const remainingDays = daysLeft(state.deadline);

    const fetchFunders = async () => {
        const data = await getFunders(state.pId);
        setFunders(data);
    };

    useEffect(() => {
        if (contract) fetchFunders();
    }, [contract, address]);

    const handleDonate = async () => {
        if (!amount || isNaN(amount) || amount <= 0) {
            alert('Enter a valid ETH amount!');
            return;
        }

        setIsLoading(true);

        await fund(state.pId, amount);

        navigate('/');
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading && <Loader />}
            <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
                <div className="flex-1 flex-col">
                    <img
                        src={state.image}
                        alt="campaign"
                        className="w-full h-[410px] object-cover rounded-xl"
                    />
                    <div className="relative w-full h-[5px] bg-[#A3D1C6] mt-2">
                        <div
                            className="absolute h-full bg-[#3D8D7A]"
                            style={{
                                width: `${calculateBarPercentage(
                                    state.target,
                                    state.amountCollected,
                                )}%`,
                                maxWidth: '100%',
                            }}
                        ></div>
                    </div>
                </div>

                <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
                    <CountBox title="Days Left" value={remainingDays} />
                    <CountBox
                        title={`Raised of ${state.target} ETH`}
                        value={state.amountCollected}
                    />
                    <CountBox title="Total Funders" value={funders.length} />
                </div>
            </div>

            <div className="mt-[60px] flex lg:flex-row flex-col gap-5">
                <div className="flex-[2] flex flex-col gap-[40px]">
                    <div>
                        <h4 className="font-epilogue font-semibold text-[18px] text-[#173622] uppercase">
                            Creator
                        </h4>
                        <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[40px]">
                            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#3D8D7A] cursor-pointer">
                                <img
                                    src={user}
                                    alt="creator"
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>
                            <div>
                                <h4 className="font-epilogue font-semibold text-[14px] text-[#173622] hover:opacity-80 break-all">
                                    <a
                                        target="_blank"
                                        href={`https://sepolia.etherscan.io/address/${state.owner}`}
                                    >
                                        {state.owner}
                                    </a>
                                </h4>
                                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#3D8D7A]">
                                    10 Campaigns
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-epilogue font-semibold text-[18px] text-[#173622] uppercase">
                            Description
                        </h4>

                        <div className="mt-[20px] ">
                            <p className="font-epilogue font-normal text-[16px] text-[#3D8D7A] leading-[26px] text-justify">
                                {state.description}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-epilogue font-semibold text-[18px] text-[#173622] uppercase">
                            Funders
                        </h4>

                        <div className="mt-[20px] flex flex-col gap-4">
                            {funders.length > 0 ? (
                                funders.map((funder, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center gap-4"
                                    >
                                        <a
                                            className="font-epilogue font-normal text-[16px] text-[#306f44] leading-[26px] hover:opacity-70 break-all"
                                            target="_blank"
                                            href={`https://sepolia.etherscan.io/address/${funder.funder}`}
                                        >
                                            {index + 1}. {funder.funder}
                                        </a>
                                        <p className="font-epilogue font-normal text-[16px] text-[#3D8D7A] leading-[26px] break-all">
                                            {funder.funded} ETH
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="font-epilogue font-normal text-[16px] text-[#3D8D7A] leading-[26px] text-justify">
                                    No funder yet. Be the first one!
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <h4 className="font-epilogue font-semibold text-[18px] text-[#173622] uppercase">
                        Fund
                    </h4>

                    <div className="mt-[20px] flex flex-col p-4 bg-[#B3D8A8] rounded-[10px]">
                        <p className="font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#3D8D7A]">
                            Fund the campaign
                        </p>
                        <div className="mt-[30px]">
                            <input
                                type="number"
                                placeholder="ETH 0.1"
                                step="0.01"
                                className="w-full py-[10px] sm:px-[20px] px-[16px] outline-none border-[1px] border-[#3D8D7A] bg-transparent font-epilogue text-[#173622] text-[18px] leading-[30px] placeholder:text-[#6D706B] rounded-[10px]"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />

                            <div className="my-[20px] p-4 bg-[#FBFFE4] rounded-[10px]">
                                <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-[#173622]">
                                    Support it because you trust in its vision.
                                </h4>
                                <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#3D8D7A]">
                                    Fund the project expecting nothing in
                                    return, just because it truly connects with
                                    you.
                                </p>
                            </div>

                            {!address ? (
                                <Button
                                    btnType="button"
                                    title="You need to connect your wallet first"
                                    styles="w-full bg-[#3D8D7A] text-white opacity-50 cursor-not-allowed"
                                    handleClick={() => {}}
                                    disabled
                                />
                            ) : (
                                <Button
                                    btnType="button"
                                    title="Fund Campaign"
                                    styles="w-full bg-[#3D8D7A] text-white"
                                    handleClick={handleDonate}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaginDetails;
