# Web3 Campaign – Decentralized Crowdfunding Platform
🚀 Overview
Web3 Campaign is a decentralized crowdfunding platform built on the Ethereum blockchain, enabling users to create, fund, and manage campaigns transparently. By leveraging smart contracts, this platform ensures trustless transactions, security, and decentralization, removing the need for intermediaries.

**🎯 Key Features**
- 🏗 Create Campaigns – Users can launch fundraising campaigns with details like title, description, target, and deadline.
- 💰 Fund Campaigns – Supporters can donate ETH directly to campaigns using smart contracts.
- 📊 Transparent Funding – All transactions are recorded on-chain, providing full transparency.
- 🔐 Secure & Trustless – Funds are automatically transferred to the campaign owner via smart contract logic.
- 🎨 User-Friendly UI – Built with React & TailwindCSS for a seamless user experience.

**🛠 Tech Stack**
- Frontend: React.js, TailwindCSS
- Blockchain: Solidity, Ethereum, Foundry
- Smart Contracts: Ethers.js, Alchemy, Sepolia Testnet
- Wallet Integration: Reown AppKit

**📌 How It Works**
- Connect Wallet – Users connect their Ethereum wallet (e.g., MetaMask).
- Create a Campaign – Fill out the form with project details & set a funding goal.
- Fund a Campaign – Users can send ETH to support campaigns.
- Track Progress – The UI dynamically updates funding progress.
- Withdraw Funds – Campaign owners can withdraw everytime the campaign funded.

**🏆 Vision & Goals**
- Our mission is to redefine crowdfunding by making it decentralized, trustless, and community-driven. With blockchain technology, we empower creators and backers by ensuring fair, transparent, and immutable transactions.

## Installation  
To get started with this project, install all required dependencies:  

```bash
npm install
```

## Usage  
First, create a `.env` file and add your **Project ID** and **Alchemy Sepolia Key**:  

```env
VITE_WALLET_CONNECT_ID=YOUR_PROJECT_ID  
VITE_ALCHEMY_SEPOLIA_KEY=YOUR_SEPOLIA_KEY  
```

### Don't have a **Project ID** or **Alchemy Key**? Follow these steps:  
1. **Get a Project ID from Reown:**  
   - Visit [Reown Cloud](https://cloud.reown.com/sign-in) and create an account.  
   - Navigate to the **Dashboard** to find your **Project ID**.
    ![image](https://github.com/user-attachments/assets/eb6f7bb4-78ef-4907-9e72-aa1b597c6d18)

2. **Get an Alchemy Sepolia Key:**  
   - Sign up on [Alchemy](https://dashboard.alchemy.com/) and create a new project.  
   - Locate the **RPC URL** for the **Sepolia** network.  

💡 **Note:** You can switch to a different RPC provider if preferred.


## To launch the project, run the following command in your terminal:
``` bash
npm run dev
```
Once the development server starts, open **http://localhost:5173/** in your browser to view the project. Your application should now be visible, similar to the example shown below:

![image](https://github.com/user-attachments/assets/2018d16c-0997-4626-9a0a-1ed4852d3281)


## Contributing  
Contributions are welcome! If you’d like to improve this project, feel free to submit a pull request. Please ensure your contributions follow best practices and include clear documentation.  

## License  
This project is licensed under the **MIT License** – feel free to use, modify, and distribute it as needed.

# I've included a comprehensive description of all the available functions in the 📌 How It Works section. I encourage you to try out the app, and if you enjoy using it, I’d truly appreciate it if you could give it a star! 😊⭐

