import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { sepolia } from '@reown/appkit/networks';

import { Sidebar, Navbar } from './components';
import { CampaginDetails, CreateCampaign, Home, Profile } from './pages';

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
    return (
        <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex">
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
