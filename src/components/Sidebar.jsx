import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';

import { logo, sun, logout } from '../assets';
import { navLinks } from '../constants';
import { Icon } from './';

const Sidebar = () => {
    const { open, address, disconnect } = useStateContext();
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');

    const handleLogOut = async () => {
        if (address) {
            await disconnect();
        }
    };

    return (
        <div className="flex justify-between items-center flex-col sticky top-5">
            <Link to="/">
                <Icon styles="w-[52px] h-[52px] bg-[#3D8D7A]" imgUrl={logo} />
            </Link>

            <div className="flex-1 flex flex-col justify-between items-center bg-[#B3D8A8] rounded-[20px] w-[76px] py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    {navLinks.map((navLink) => (
                        <Icon
                            key={navLink.name}
                            {...navLink}
                            isActive={isActive}
                            styles={''}
                            handleClick={() => {
                                if (!navLink.disabled) {
                                    setIsActive(navLink.name);
                                    navigate(navLink.link);
                                }

                                if (navLink.close) {
                                    open();
                                }
                            }}
                        />
                    ))}
                    {address && (
                        <Icon
                            styles="w-1/2 h-1/2 grayscale"
                            imgUrl={logout}
                            handleClick={handleLogOut}
                        />
                    )}
                </div>

                <Icon styles="bg-[#B3D8A8] shadow-secondary" imgUrl={sun} />
            </div>
        </div>
    );
};

export default Sidebar;
