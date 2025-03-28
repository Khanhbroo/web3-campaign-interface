import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { sepolia } from '@reown/appkit/networks';

import { Sidebar, Navbar } from './components';
import { CampaginDetails, CreateCampaign, Home, Profile } from './pages';
import { useStateContext } from './context';

// Get projectId
const projectId = import.meta.env.VITE_WALLET_CONNECT_ID;

// Set the networks
const networks = [sepolia];

// Create a metadata object
const metadata = {
    name: 'CrowdFunding website',
    description: 'CrowdFunding Website for campaigns',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/'],
};

// 4. Create a AppKit instance
createAppKit({
    adapters: [new EthersAdapter()],
    networks,
    metadata,
    projectId,
    features: {
        analytics: true,
    },
});

function App() {
    let themeMain = 'bg-[#FBFFE4]';
    const { toggleTheme } = useStateContext();

    if (toggleTheme) {
        themeMain = 'bg-[#181a09]';
    } else {
        themeMain = 'bg-[#FBFFE4]';
    }

    return (
        <div
            className={`relative sm:p-8 p-4 ${themeMain} min-h-screen flex transition-all duration-500`}
        >
            <div className="sm:flex hidden mr-10 relative">
                <Sidebar />
            </div>
            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/createCampaign"
                        element={<CreateCampaign />}
                    />
                    <Route
                        path="/campaignDetails/:id"
                        element={<CampaginDetails />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
