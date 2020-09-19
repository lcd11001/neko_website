const defaultState = {
    title: 'TITLE',
    forceRerender: false
}

const ReducerGlobal = (state = defaultState, action) => {
    switch (action.type) {
        case 'GLOBAL_TITLE': {
            return {
                ...state,
                title: action.payload
            }
        }
        case 'GLOBAL_RERENDER': {
            return {
                ...state,
                forceRerender: !state.forceRerender
            }
        }

        default:
            return state
    }
}

export default ReducerGlobal