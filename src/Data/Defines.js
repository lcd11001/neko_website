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
        text: ID.HOME.SECTION_2_MENU_1, link: ID.LINK.WORKS_BRAND, icon: Icons.IconMenuArrow
    },
    {
        text: ID.HOME.SECTION_2_MENU_2, link: ID.LINK.WORKS_MOTION, icon: Icons.IconMenuArrow
    },
    {
        text: ID.HOME.SECTION_2_MENU_3, link: ID.LINK.WORKS_INTERFACE, icon: Icons.IconMenuArrow
    },
    {
        text: ID.HOME.SECTION_2_MENU_4, link: ID.LINK.WORKS_GRAPHIC, icon: Icons.IconMenuArrow
    },
    {
        text: ID.HOME.SECTION_2_MENU_5, link: ID.LINK.WORKS_DIGITAL, icon: Icons.IconMenuArrow
    },
]

export const AppLogo = 'neko_logo.png'

export const PageNotFoundLogo = 'WebPageNotFound.jpg'
export const PageUnderConstructionLogo = 'WebPageConstruction.jpg'
export const NoCampaignImgFound = 'noimage.png'
export const NoQRCodeImgFound = 'noqrcode.png'