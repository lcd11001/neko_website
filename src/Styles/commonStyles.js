import breakpointsStyle from './breakpointsStyle'

const styles = (theme) => ({
    divRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    divColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    divCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    divBetween: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    divTop: {
        justifyContent: 'flex-start'
    },

    divBottom: {
        justifyContent: 'flex-end'
    },

    divLeft: {
        alignItems: 'flex-start'
    },

    divRight: {
        alignItems: 'flex-end'
    },

    fullWidth: {
        width: '100% !important'
        // backgroundColor: 'red'
    },

    fullHeight: {
        height: '100% !important',
        // backgroundColor: 'red'
    },

    relative: {
        position: 'relative'
    },

    absolute: {
        position: 'absolute'
    },

    textNormal: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [13, 15],
                variant: [1.5, 1.5],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 400
    },

    textTitle: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [20, 24],
                variant: [3, 3],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    textSubTitle: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [15, 18],
                variant: [2, 2],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    textBreak: {
        whiteSpace: 'pre'
    },

    textLinkHidden: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

export default styles