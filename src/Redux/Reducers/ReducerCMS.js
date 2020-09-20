import { ActionType } from 'redux-promise-middleware'
import TEXT from '../../Data/Text'
import Utils from '../../Utils'

const defaultState = {
    languages: [
        {
            EN: {
                flag: 'images/US.png',
                key: 'language'
            }
        },
        {
            VN: {
                flag: 'images/VN.png',
                key: 'language'
            }
        }
    ],
    currentLang: 'EN'
}

const ReducerCMS = (state = defaultState, action) => {
    switch (action.type) {
        case `CHANGE_LANGUAGE_${ActionType.Fulfilled}`: {
            return {
                ...state,
                currentLang: action.payload.language
            }
        }

        default:
            return state
    }
}

export default ReducerCMS