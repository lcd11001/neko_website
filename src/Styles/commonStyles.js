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
    
    divTop:{
        justifyContent: 'flex-start'
    },

    divLeft: {
        alignItems: 'flex-start'
    },

    divRight: {
        alignItems: 'flex-end'
    },

    fullWidth: {
        width: '100%'
    },

    fullHeight: {
        height: '100%'
    },

    textNormal: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [13, 15],
                variant: [2, 2],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 400
    },

    textTitle: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [15, 18],
                variant: [2, 2],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    }
})

export default styles