import avatar from '../assets/images/avatar.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://koray.me',
    avatar: {
        src: avatar,
        alt: 'Koray Alkan'
    },
    title: 'koray.me',
    subtitle: 'Personal blog',
    description: 'Personal blog and writings by Koray Alkan.',
    image: {
        src: '/og-image.jpg',
        alt: 'koray.me'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [],
    hero: {
        title: 'Hi, I’m Koray',
        text: "Engineer and Builder. Thoughts, stories, and ideas on engineering, life, and whatever else seems worth slowing down for. Somewhere between a notebook and a conversation. Pull up a chair, or [say hello](/contact)."
    },
    subscribe: {
        enabled: false,
        title: '',
        text: '',
        form: {
            action: '#'
        }
    },
    postsPerPage: 10
};

export default siteConfig;
