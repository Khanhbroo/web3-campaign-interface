import {
    createCampaign,
    dashboard,
    logout,
    payment,
    profile,
    withdraw,
} from '../assets';

export const navLinks = [
    {
        name: 'dashboard',
        imgUrl: dashboard,
        link: '/',
    },
    {
        name: 'campaign',
        imgUrl: createCampaign,
        link: '/createCampaign',
    },
    {
        name: 'payment',
        imgUrl: payment,
        link: '/',
        disabled: true,
    },
    {
        name: 'withdraw',
        imgUrl: withdraw,
        link: '/',
        disabled: true,
    },
    {
        name: 'profile',
        imgUrl: profile,
        link: '/profile',
    },
];
