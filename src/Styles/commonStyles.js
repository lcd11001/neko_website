import breakpointsStyle from './breakpointsStyle'

const DOT_SIZE = 7
const DOT_VSPACE = 50
const DOT_HSPACE = 50

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '100%',

        // > means only apply to div.root instead of all div
        // '& > div:first-child': {
        //     paddingTop: 0
        // },
    },

    appbar: {
        // backgroundColor: 'transparent'
        width: '100%'
    },

    toolbar: {
        backgroundColor: 'transparent',
        ...breakpointsStyle(theme,
            {
                key: ['marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
                value: [100, 100, 15, 15],
                variant: [22, 22, 2, 2],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
    },

    toolbarHome: {
        ...breakpointsStyle(theme,
            {
                key: 'minHeight',
                value: 150,
                variant: 15,
                unit: 'px'
            }
        )
    },

    secondaryText: {
        color: theme.palette.text.secondary
    },

    iconArrow: {
        color: 'inherit',
        ...breakpointsStyle(theme,
            {
                key: ['width', 'marginLeft'],
                value: [45, 30],
                variant: [7, 5],
                unit: ['px', 'px']
            }
        ),
    },

    section: {
        width: '100%',
        ...breakpointsStyle(theme,
            {
                key: ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'],
                value: [150, 150, 100, 100],
                variant: [35, 35, 10, 10],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
    },

    divRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    divColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    divRow2Column: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    divRow2ColumnRevert: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        }
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

    divDot: {
        // https://dev.to/clairecodes/how-to-create-a-polka-dot-background-with-css-23m0
        backgroundImage: `radial-gradient(#EEEEEE ${DOT_SIZE}%, #ffffff ${DOT_SIZE}%)`,
        // width: DOT_SIZE,
        // height: DOT_SIZE,
        backgroundPosition: '0 0',
        backgroundSize: `${DOT_HSPACE}px ${DOT_VSPACE}px`,
        overflow: 'hidden'
    },

    divBox: {
        borderRadius: 7,
        height: '100%',
        // border: '1px solid #EAEAEA',
        border: 'none',
        boxShadow: '2px 5px 10px #EAEAEAEA'
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
                variant: [1, 1],
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
                variant: [2, 2],
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
                variant: [1, 1],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    textHeader: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [75, 89],
                variant: [12, 15],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 600
    },

    textSubHeader: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [55, 65],
                variant: [10, 12],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 600
    },

    textCaption: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [50, 59],
                variant: [8, 8],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 600
    },

    textBreak: {
        whiteSpace: 'pre'
    },

    textLimitMultiline: {
        textAlign: 'justify',
        textJustify: 'inter-word',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        wordWrap: 'break-word',
        wordBreak: 'break-word'
    },

    textLinkHidden: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

export default styles