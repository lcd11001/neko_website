import { ActionType } from 'redux-promise-middleware'
import TEXT from '../../Data/Text'
import Utils from '../../Utils'

const defaultState = {
    isLoading: 0,
    loadingMessage: '',
    hiddenMessage: '',
    notifyMessage: '',
    notifyErrorMessage: '',
    error: null,
    isLoggedIn: false,
    needRefresh: false,

    // CMS_LOAD_CONFIG
    configCMS: {},

    // CMS_LOGIN
    email: '',
    username: '',
    expire_warning: -1,
    privilege: '',
    status: '',
    access: null,
    access_group: null,

    // CMS_LOAD_ASSETS
    assets: {}
}

const ReducerCMS = (state = defaultState, action) => {
    switch (action.type) {
        case 'CMS_CLEAR_ERROR': {
            return {
                ...state,
                error: null,
            }
        }

        case 'CMS_CLEAR_REFRESH': {
            return {
                ...state,
                needRefresh: false,
            }
        }

        case 'CMS_CLEAR_NOTIFY': {
            return {
                ...state,
                notifyMessage: '',
                notifyErrorMessage: ''
            }
        }

        default:
            return state
    }
}

export default ReducerCMS