import * as Icons from '../Components/NekoIcons'
import ID from '../Translations/ID.json'

export const HeaderMenu = [
    {
        text: ID.MENU.HOMEPAGE, link: ID.LINK.HOME,
    },
    {
        text: ID.MENU.WORKS, link: ID.LINK.WORKS,
    },
    {
        text: ID.MENU.ABOUT, link: ID.LINK.ABOUT,
    },
    {
        text: ID.MENU.CAPABILITIES, link: ID.LINK.CAPABILITIES,
    },
    {
        text: ID.MENU.STREAMLINE, link: ID.LINK.STREAMLINE,
        customStyle: {
            color: 'custom-color-1',
            underlineColor: 'custom-underline-color-1'
        }
    },
    {
        text: ID.MENU.BLOG, link: ID.LINK.BLOG,
    },
    {
        text: ID.MENU.CONTACT, link: ID.LINK.CONTACT,
        customStyle: {
            border: 'custom-border-1',
            icon: 'custom-icon-1'
        },
        icon: Icons.IconMenuArrow,
        underline: 'disable'
    },
]

export const HomeMenu = [
    {
        text: ID.MENU.WORKS_BRAND, link: ID.LINK.WORKS_BRAND, icon: Icons.IconMenuArrow, bg: ID.MENU.WORKS_BRAND_BG
    },
    {
        text: ID.MENU.WORKS_MOTION, link: ID.LINK.WORKS_MOTION, icon: Icons.IconMenuArrow, bg: ID.MENU.WORKS_MOTION_BG
    },
    {
        text: ID.MENU.WORKS_INTERFACE, link: ID.LINK.WORKS_INTERFACE, icon: Icons.IconMenuArrow, bg: ID.MENU.WORKS_INTERFACE_BG
    },
    {
        text: ID.MENU.WORKS_GRAPHICS, link: ID.LINK.WORKS_GRAPHICS, icon: Icons.IconMenuArrow, bg: ID.MENU.WORKS_GRAPHICS_BG
    },
    {
        text: ID.MENU.WORKS_DIGITAL, link: ID.LINK.WORKS_DIGITAL, icon: Icons.IconMenuArrow, bg: ID.MENU.WORKS_DIGITAL_BG
    },
]

export const WorksMenu = [
    {
        text: ID.MENU.WORKS_ALL, link: ID.LINK.WORKS_ALL
    },
    {
        text: ID.MENU.WORKS_BRAND, link: ID.LINK.WORKS_BRAND
    },
    {
        text: ID.MENU.WORKS_MOTION, link: ID.LINK.WORKS_MOTION
    },
    {
        text: ID.MENU.WORKS_INTERFACE, link: ID.LINK.WORKS_INTERFACE
    },
    {
        text: ID.MENU.WORKS_GRAPHICS, link: ID.LINK.WORKS_GRAPHICS
    },
    {
        text: ID.MENU.WORKS_DIGITAL, link: ID.LINK.WORKS_DIGITAL
    },
]

export const AppLogo = 'neko_logo.png'

export const PageNotFoundLogo = 'WebPageNotFound.jpg'
export const PageUnderConstructionLogo = 'WebPageConstruction.jpg'
export const NoCampaignImgFound = 'noimage.png'
export const NoQRCodeImgFound = 'noqrcode.png'