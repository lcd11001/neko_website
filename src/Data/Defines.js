import * as Icons from '../Components/CmsIcons'
import ContactIcon from '@material-ui/icons/TrendingFlat'

import ID from '../Translations/ID.json'


export const ACCESS_VERSION = 115

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
            color: '#F26A65'
        }
    },
    {
        text: ID.MENU.BLOG, link: '/blog',
    },
    {
        text: ID.MENU.CONTACT, link: '/contact',
        customStyle: {
            border: '1px solid #707070',
            borderRadius: 10,
            padding: '10px 25px'
        },
        icon: ContactIcon
    },
]

export const AppLogo = 'neko_logo.png'
export const ENFlag = 'uk.png'
export const VNFlag = 'vn.png'

export const PageNotFoundLogo = 'WebPageNotFound.jpg'
export const PageUnderConstructionLogo = 'WebPageConstruction.jpg'
export const NoCampaignImgFound = 'noimage.png'
export const NoQRCodeImgFound = 'noqrcode.png'