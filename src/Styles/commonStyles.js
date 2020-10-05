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
                value: [15, 18],
                variant: [2, 2],
                unit: ['px', 'px']
            }
        ),
    },

    textTitle: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [20, 24],
                variant: [2, 2],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    }
})

export default styles