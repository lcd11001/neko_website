import * as Icons from '../Components/CmsIcons'
import SubIcon from '@material-ui/icons/RadioButtonCheckedOutlined'
import TEXT from './Text'

export const ACCESS_VERSION = 115

export const DataMenu = [
    {
        text: TEXT.MENU_DASHBOARD, link: '/dashboard', icon: Icons.IconDashboard,
        permission: {
            view: ['super_admin', 'client_tech', 'gameloft_tech'],
            search: ['super_admin', 'client_tech', 'gameloft_tech']
        },
        api_permission: {
            '/logs': 'view'
        }
    },
    {
        text: TEXT.MENU_CAMPAIGN, link: '/campaigns', icon: Icons.IconCampaign,
        permission: {
            view: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing', 'user'],
            add: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing'],
            edit: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing'],
            export: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing'],
            delete: ['super_admin']
        },
        api_permission: {
            '/campaigns': 'view',
            '/campaigns/load': 'view',
            '/campaigns/search': 'view',
            '/campaigns-add': 'add',
            '/campaigns/update': 'edit',
            '/campaigns/delete': 'delete'
        }
    },
    {
        text: TEXT.MENU_DOWNLOADABLE, link: '/assets', icon: Icons.IconDownloadable,
        permission: {
            view: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
            add: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
            edit: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
            refresh: ['super_admin', 'admin', 'gameloft_tech'],
            copy: ['super_admin', 'admin', 'gameloft_tech'],
        },
        api_permission: {
            '/assets/load': 'view',
            '/assets/upload': 'add',
            '/assets/refresh-dl-link': 'refresh'
        }
    },
    {
        text: TEXT.MENU_PARENTAL, link: '/parent', icon: Icons.IconParentControl,
        permission: {
            view: [],
        },
        submenu: [
            {
                text: TEXT.MENU_PARENTAL_DATA_MANAGEMENT, link: '/parent/management', icon: SubIcon,
                permission: {
                    view: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing'],
                    export: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing'],
                    edit: ['super_admin', 'admin', 'gameloft_tech']
                },
                api_permission: {
                    '/parental/get-devices': 'view',
                    '/parental/device/update-status': 'edit'
                },
                personal_data_restriction: {
                    'email': ['admin', 'gameloft_tech', 'gameloft_marketing']
                }
            },
            {
                text: TEXT.MENU_PARENTAL_INACTIVE_USER, link: '/parent/inactive', icon: SubIcon,
                permission: {
                    view: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing'],
                    export: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing'],
                    edit: ['super_admin', 'admin', 'gameloft_tech'],
                    anonymize: ['super_admin'],
                },
                api_permission: {
                    "/parental/inactive-users": "view",
                    "/parental/action-anonymized": "anonymize",
                    "/parental/action-warning-email": "edit",
                    "/parental/action-refresh-login": "edit"
                },
                personal_data_restriction: {
                    'email': ['admin', 'gameloft_tech', 'gameloft_marketing']
                }
            }
        ]

    },
    {
        text: TEXT.MENU_REMOTE, link: '/remote', icon: Icons.IconRemoteConfig,
        permission: {
            view: []
        },
        submenu: [
            {
                text: TEXT.MENU_REMOTE_OVERVIEW, link: '/remote/overview', icon: SubIcon,
                permission: {
                    view: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
                    add: ['super_admin', 'admin', 'gameloft_tech'],
                    edit: ['super_admin', 'admin', 'gameloft_tech'],
                    duplicate: ['super_admin', 'admin', 'gameloft_tech'],
                    setlive: ['super_admin', 'admin', 'gameloft_tech'],
                    delete: ['super_admin']
                },
                api_permission: {
                    '/tuna': 'view',
                    '/tuna/getconfig': 'view',
                    '/tuna/create-version-id': 'add',
                    '/tuna/addconfig': 'add',
                    '/tuna/updateconfig': 'edit',
                    '/tuna/update-current-env': 'edit',
                    '/tuna/clone-config': 'duplicate',
                    '/tuna/clone-config-override': 'duplicate',
                    '/tuna/set-live': 'setlive',
                    '/tuna/delete-version-env': 'delete'
                }
            },
            {
                text: TEXT.MENU_REMOTE_CLIENT_ID, link: '/remote/clientid', icon: SubIcon,
                permission: {
                    view: ['super_admin', 'admin', 'gameloft_tech'],
                    add: ['super_admin', 'admin', 'gameloft_tech'],
                    undelete: ['super_admin']
                },
                api_permission: {
                    '/tuna/create-client-id': 'add',
                    '/tuna/undelete-version-env': 'undelete'
                }
            }
        ]
    },
    {
        text: TEXT.MENU_ATTRIBUTION, link: '/attribution', icon: Icons.IconAttribution,
        permission: {
            view: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing', 'user'],
            export: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech'],
        },
        api_permission: {
            '/attribution': 'view',
            '/attribution/users': 'view',
            '/attribution/campaign': 'view',
            '/attribution/statistic-active-users': 'view',
            '/attribution/statistic-mau': 'view',
            '/attribution/get-conversion-rate': 'view'
        },
        submenu: [
            {
                text: TEXT.MENU_ATTRIBUTION_OVERVIEW, link: '/attribution/overview', icon: SubIcon,
            },
            {
                text: TEXT.MENU_ATTRIBUTION_REGISTERD_SUBCRIBED_USERS, link: '/attribution/registerd-subcribed', icon: SubIcon,
            },
            {
                text: TEXT.MENU_ATTRIBUTION_CAMPAIGN_REDIRECTION_METRICS, link: '/attribution/campaign-redirection', icon: SubIcon,
            },
            {
                text: TEXT.MENU_ATTRIBUTION_ACTIVE_USERS, link: '/attribution/active-users', icon: SubIcon,
            },
            {
                text: TEXT.MENU_ATTRIBUTION_CONVERSATION_RATE, link: '/attribution/conversion-rate', icon: SubIcon,
            },
        ]
    },
    // {
    //     text: TEXT.MENU_REPORT, link: '/report', icon: Icons.IconWeeklyReport,
    //     permission: {
    //         view: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing', 'user'],
    //         add: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
    //         edit: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
    //     },
    // },
    // {
    //     text: TEXT.MENU_TEMPLATE, link: '/template', icon: Icons.IconEmailTemplate,
    //     permission: {
    //         view: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing', 'user'],
    //         add: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
    //         edit: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
    //     },
    // },
    // {
    //     text: TEXT.MENU_GENERIC, link: '/generic', icon: Icons.IconGenericPage,
    //     permission: {
    //         view: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing', 'user'],
    //         add: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
    //         edit: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
    //     },
    // },
    {
        text: TEXT.MENU_TRACKING, link: '/tracking', icon: Icons.IconConsentTracking,
        permission: {
            view: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech', 'gameloft_marketing'],
            export: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech'],
            search: ['super_admin', 'admin', 'client_tech', 'client_marketing', 'gameloft_tech']
        },
        api_permission: {
            '/user-consent/consent-data': 'view',
            '/user-minisite/minisite-data': 'view',
            '/user-consent/customer-care': 'view',
            '/user-minisite/getVisitID': 'view'
        },
        submenu: [
            {
                text: TEXT.MENU_TRACKING_AGE, link: '/tracking/age', icon: SubIcon,
            },
            {
                text: TEXT.MENU_TRACKING_CAMERA, link: '/tracking/camera', icon: SubIcon,
            },
            {
                text: TEXT.MENU_TRACKING_EMAIL, link: '/tracking/email', icon: SubIcon,
            },
            {
                text: TEXT.MENU_TRACKING_WEEKLY_REPORT, link: '/tracking/weekly', icon: SubIcon,
            },
            {
                text: TEXT.MENU_TRACKING_DATA_TRANSFER, link: '/tracking/data', icon: SubIcon,
            },
            {
                text: TEXT.MENU_TRACKING_DISCLAIMER_ACCEPTANCE, link: '/tracking/minisite', icon: SubIcon,
            },
            {
                text: TEXT.MENU_TRACKING_DOWNLOAD_FULL_PACKAGE, link: '/tracking/download', icon: SubIcon,
            },
            // {
            //     text: TEXT.MENU_TRACKING_DEFERRED_DEEP_LINKING, link: '/tracking/deffered-deep-linking', icon: SubIcon,
            // },
            {
                text: TEXT.MENU_TRACKING_SEARCH, link: '/tracking/search-app', icon: SubIcon,
            },
            {
                text: TEXT.MENU_TRACKING_SEARCH_MINISITE, link: '/tracking/search-minisite', icon: SubIcon,
            },
            {
                text: TEXT.MENU_TRACKING_INSTALL_REFERRER, link: '/tracking/install-referrer', icon: SubIcon
            }
        ]
    },
    {
        text: TEXT.MENU_CMS, link: '/accounts', icon: Icons.IconUserManagement,
        permission: {
            view: []
        },
        submenu: [
            {
                text: TEXT.MENU_CMS_OVERVIEW, link: '/accounts/overview', icon: SubIcon,
                permission: {
                    view: ['super_admin', 'admin', 'client_tech', 'gameloft_tech'],
                    add: ['super_admin', 'admin'],
                    edit: ['super_admin', 'admin'],
                    revoke_password: ['super_admin', 'admin'],
                    delete: ['super_admin']
                },
                api_permission: {
                    '/accounts': 'view',
                    '/accounts/create-account': 'add',
                    '/accounts/change-status': 'edit',
                    '/accounts/change-privilege': 'edit',
                    '/accounts/get-profiles': 'edit',
                    '/accounts/revoke-password': 'revoke_password',
                    '/accounts/delete-account': 'delete',
                },
                personal_data_restriction: {
                    'email': ['client_tech', 'gameloft_tech'],
                    'privilege': ['client_tech', 'gameloft_tech']
                }
            },
            {
                text: TEXT.MENU_CMS_PERMISSION, link: '/accounts/permission', icon: SubIcon,
                permission: {
                    view: ['super_admin', 'admin'],
                    edit: ['super_admin', 'admin'],
                },
                api_permission: {
                    '/accounts/accounts-permission': 'view',
                    '/accounts/update-access': 'edit'
                }
            },
            {
                text: TEXT.MENU_CMS_GROUP_PERMISSION, link: '/accounts/group-permission', icon: SubIcon,
                permission: {
                    view: ['super_admin'],
                    edit: ['super_admin'],
                },
                api_permission: {
                    '/accounts/get-groups': 'view',
                    '/accounts/update-group-access': 'edit'
                }
            }
        ]
    },
    // {
    //     text: TEXT.MENU_DIVIDER, link: null, icon: null
    // },
    {
        text: TEXT.MENU_PROFILE, link: '/profile', icon: Icons.IconUser
    }
]

export const DataProfileMenu = [
    {
        text: TEXT.MENU_DIVIDER, link: null, icon: null
    },
    {
        text: TEXT.PROFILE_MENU_SETTINGS, link: '/profile', icon: null
    },
    {
        text: TEXT.PROFILE_MENU_LOG_OUT, link: '/logout', icon: null
    }
]

export const DataTableRows = [
    {
        text: '10', value: 10
    },
    {
        text: '20', value: 20
    },
    {
        text: '30', value: 30
    }
]

export const CampaignStatus = {
    ACTIVE: 'active',
    INACTIVE: 'inactive'
}

export const DialogType = {
    NONE: 'NONE',
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DUPLICATE: 'DUPLICATE',
    REFRESH: 'REFRESH',
    DELETE: 'DELETE'
}

export const OSList = [
    { name: 'all', value: '' },
    { name: 'Android', value: 'Android' },
    { name: 'IOS', value: 'IOS' },
    { name: 'Unknown OS', value: 'Unknown_OS' },
]

export const ReportDateDelay = {
    'super_admin': 0,
    'admin': 0,
    'client_tech': 0,
    'client_marketing': 4,
    'gameloft_tech': 0,
    'gameloft_marketing': 4,
    'user': 4
}

export const VisibleList = [
    'Yes', 'No'
]

export const ApplayduLogo = 'Appplaydu_Logo_v08_small.png'
export const PageNotFoundLogo = 'WebPageNotFound.jpg'
export const PageUnderConstructionLogo = 'WebPageConstruction.jpg'
export const NoCampaignImgFound = 'noimage.png'
export const NoQRCodeImgFound = 'noqrcode.png'