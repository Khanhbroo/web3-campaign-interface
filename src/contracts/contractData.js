export const contractAddr = '0x954eAE984E4091b8aA6f9060C9e8A35fb9955aC1';
export const contractABI = [
    { inputs: [], name: 'CrowdFunding__UseFundToCampaign', type: 'error' },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'campaignId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'funder',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'CampaignFunded',
        type: 'event',
    },
    { stateMutability: 'payable', type: 'fallback' },
    {
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'campaigns',
        outputs: [
            { internalType: 'address', name: 'owner', type: 'address' },
            { internalType: 'string', name: 'title', type: 'string' },
            { internalType: 'string', name: 'description', type: 'string' },
            { internalType: 'uint256', name: 'target', type: 'uint256' },
            { internalType: 'uint256', name: 'deadline', type: 'uint256' },
            { internalType: 'string', name: 'image', type: 'string' },
            {
                internalType: 'uint256',
                name: 'amountCollected',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            { internalType: 'address', name: '_owner', type: 'address' },
            { internalType: 'string', name: '_title', type: 'string' },
            { internalType: 'string', name: '_description', type: 'string' },
            { internalType: 'uint256', name: '_target', type: 'uint256' },
            { internalType: 'uint256', name: '_deadline', type: 'uint256' },
            { internalType: 'string', name: '_image', type: 'string' },
        ],
        name: 'createCampaign',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
        name: 'fundToCampaign',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getCampaigns',
        outputs: [
            {
                components: [
                    { internalType: 'address', name: 'owner', type: 'address' },
                    { internalType: 'string', name: 'title', type: 'string' },
                    {
                        internalType: 'string',
                        name: 'description',
                        type: 'string',
                    },
                    {
                        internalType: 'uint256',
                        name: 'target',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'deadline',
                        type: 'uint256',
                    },
                    { internalType: 'string', name: 'image', type: 'string' },
                    {
                        internalType: 'uint256',
                        name: 'amountCollected',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address[]',
                        name: 'funders',
                        type: 'address[]',
                    },
                    {
                        internalType: 'uint256[]',
                        name: 'funded',
                        type: 'uint256[]',
                    },
                ],
                internalType: 'struct CrowdFunding.Campaign[]',
                name: '',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
        name: 'getFunders',
        outputs: [
            { internalType: 'address[]', name: '', type: 'address[]' },
            { internalType: 'uint256[]', name: '', type: 'uint256[]' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'numberOfCampaigns',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
    { stateMutability: 'payable', type: 'receive' },
];
