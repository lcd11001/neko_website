export const SetTitle = (title) => ({
    type: 'GLOBAL_TITLE',
    payload: title
})

export const ForceRerender = () => ({
    type: 'GLOBAL_RERENDER'
})