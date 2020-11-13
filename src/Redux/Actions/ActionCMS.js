import { ActionType } from 'redux-promise-middleware'
import * as ActionGlobal from './ActionGlobal'

// Fixed: share state between 2 reducers
export const ChangeLanguage = (language) =>
{
    return (dispatch) =>
    {
        dispatch(ActionGlobal.SetLoading())

        return dispatch({
            type: 'CHANGE_LANGUAGE',
            payload: new Promise.resolve({ language })
                .catch(err =>
                {
                    dispatch(ActionGlobal.SetError(err))
                })
                .finally(() =>
                {
                    dispatch(ActionGlobal.ClearLoading())
                })
        })
    }
}


