import * as Icons from '../Components/NekoIcons'
import ID from '../Translations/ID.json'

export const DataMenu = [
    {
        text: ID.MENU.HOMEPAGE, link: '/home',
    },
    {
        text: ID.MENU.WORKS, link: '/works',
    },
    {
        text: ID.MENU.ABOUT, link: '/about',
    },
    {
        text: ID.MENU.CAPABILITIES, link: '/capabilities',
    },
    {
        text: ID.MENU.STREAMLINE, link: '/streamline',
        customStyle: {
            color: 'custom-color-1',
            underlineColor: 'custom-underline-color-1'
        }
    },
    {
        text: ID.MENU.BLOG, link: '/blog',
    },
    {
        text: ID.MENU.CONTACT, link: '/contact',
        customStyle: {
            border: 'custom-border-1',
            icon: 'custom-icon-1'
        },
        icon: Icons.IconMenuArrow,
        underline: 'disable'
    },
]

export const AppLogo = 'neko_logo.png'
export const ENFlag = 'uk.png'
export const VNFlag = 'vn.png'

export const PageNotFoundLogo = 'WebPageNotFound.jpg'
export const PageUnderConstructionLogo = 'WebPageConstruction.jpg'
export const NoCampaignImgFound = 'noimage.png'
export const NoQRCodeImgFound = 'noqrcode.png'