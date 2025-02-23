import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { Button } from './';
import { logo, menu, search, thirdweb } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const navigate = useNavigate();
    const { open, address, isConnected } = useStateContext();
    const [isActive, setIsActive] = useState('dashboard');
    const [toggleDrawer, setToggleDrawer] = useState(false);

    return (
        <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
            <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
                <input
                    className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
                    type="text"
                    placeholder="Search for campaigns..."
                />

                <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
                    <img
                        className="w-[15px] h-[15px] object-contain"
                        src={search}
                        alt="search"
                    />
                </div>
            </div>

            <div className="sm:flex hidden flex-row justify-end items-center gap-4">
                <Button
                    btnType="button"
                    title={isConnected ? 'Create a campaign' : 'Connect'}
                    styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
                    handleClick={() => {
                        if (isConnected) navigate('createCampaign');
                        else open();
                    }}
                />

                <Link to="/profile">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointerk">
                        <img
                            src={thirdweb}
                            alt="user"
                            className="w-[60%] h-[60%] object-contain"
                        />
                    </div>
                </Link>
            </div>

            {/* Smart phone navigation */}
            <div className="sm:hidden flex justify-between items-center relative">
                <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                    <img
                        src={logo}
                        alt="user"
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
                <img
                    src={menu}
                    alt="menu"
                    className="w-[34px] h-[34px] object-contain cursor-pointer"
                    onClick={() => setToggleDrawer((prev) => !prev)}
                />

                <div
                    className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
                        !toggleDrawer
                            ? '-translate-y-[100vh] opacity-0'
                            : '-translate-y-0 opacity-100'
                    } transition-all duration-800`}
                >
                    <ul className="mb-4">
                        {navLinks.map((navLink) => (
                            <li
                                key={navLink.name}
                                className={`flex p-4 cursor-pointer hover:opacity-75 ${
                                    isActive === navLink.name && 'bg-[#3a3a43]'
                                }`}
                                onClick={() => {
                                    setIsActive(navLink.name);
                                    setToggleDrawer(false);
                                    navigate(navLink.link);
                                }}
                            >
                                <img
                                    src={navLink.imgUrl}
                                    alt={navLink.name}
                                    className={`w-[24px] h-[24px] object-contain ${
                                        isActive === navLink.name
                                            ? 'grayscale-0'
                                            : 'grayscale'
                                    }`}
                                />
                                <p
                                    className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                                        isActive === navLink.name
                                            ? 'text-[#1dc071]'
                                            : 'text-[#808191]'
                                    }`}
                                >
                                    {navLink.name.charAt(0).toUpperCase() +
                                        navLink.name.slice(1)}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex mx-4">
                        <Button
                            btnType="button"
                            title={address ? 'Create a campaign' : 'Connect'}
                            styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
                            handleClick={() => {
                                if (address) navigate('createCampaign');
                                else open();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
