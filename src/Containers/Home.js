import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import Utils from '../Utils'
import PageUnderContruction from '../Components/PageError/PageUnderContruction';
import { Button, Typography } from '@material-ui/core';

import * as Icons from '../Components/NekoIcons'

import { HomeMenu } from '../Data/Defines'
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
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

    section1: {
        width: '100%',
        // minHeight: '50vw'
    },

    section1_img1: {
        width: '45%',
        objectFit: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['padding-left'],
                value: [50],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    section1_img2: {
        width: '60%',
        objectFit: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['padding-right'],
                value: [50],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    section1_img3: {
        width: '15%',
        objectFit: 'contain',
        backgroundColor: `${theme.palette.primary.secondary}1E`, // 1E = 12%
        borderRadius: '50%',
        transform: 'translateX(-25%) scaleX(-1)'
    },

    section1_txt1: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [55, 65],
                variant: [10, 12],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    section1_txt2: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [40, 65],
                variant: [7, 8],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    section1_txt3: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [15, 17],
                variant: [2, 2],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    section1_btn1: {
        ...breakpointsStyle(theme,
            {
                key: ['padding-top'],
                value: [40],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    section2: {
        width: '100%',
        // minHeight: '50vw',
        backgroundColor: 'rgb(195, 228, 226)',
        backgroundImage: `url(${Utils.getImageUrl('home/specialized_digital.png')})`,
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop', 'paddingLeft', 'paddingBottom'],
                value: [10, 15, 5],
                variant: [0.5, 1.5, 0.5],
                unit: ['%', '%', '%']
            }
        ),
    },

    section2_txt1: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height', 'paddingBottom'],
                value: [15, 17, 8],
                variant: [2, 2, 0.5],
                unit: ['px', 'px', '%']
            }
        ),
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
    },

    menuLink: {
        textDecoration: 'none',
        color: 'white'
    },

    menuItem: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height', 'paddingBottom'],
                value: [35, 41, 50],
                variant: [5, 5, 10],
                unit: ['px', 'px', 'px']
            }
        ),
        fontWeight: 400,
        textAlign: 'left',
        color: 'inherit',

        transition: theme.transitions.create(['color', 'font-weight'], {
            duration: 300
        }),

        '&--hover': {
            fontWeight: 700,
            color: theme.palette.text.primary
        }
    },

    menuIcon: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'marginLeft'],
                value: [50, 40],
                variant: [8, 8],
                unit: ['px', 'px']
            }
        ),
        color: 'inherit',
        position: 'relative',
        top: 5,
        transition: theme.transitions.create(['color'], {
            duration: 300
        }),

        '&--hover': {
            color: theme.palette.text.primary
        }
    }
});

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleMouseEnter = (link) => (evt) => {
        this.setState({
            [`hover_${link}`]: true
        })
    }

    handleMouseLeave = (link) => (evt) => {
        this.setState({
            [`hover_${link}`]: false
        })
    }

    renderSection1 = () => {
        const { classes } = this.props

        return (
            <div id={'section1'} className={clsx(classes.divColumn, classes.section1)}>
                <div id={'section1.1'} className={clsx(classes.divRow, classes.divCenter)}>
                    <div className={clsx(classes.divColumn, classes.divColumn)}>
                        <Typography className={clsx(classes.textBreak, classes.section1_txt1)}>
                            <Trans
                                i18nKey={ID.HOME.SECTION_1_TEXT_1}
                                components={{ span: <span /> }}
                                values={{
                                    custom: clsx(classes.secondaryText)
                                }}
                            />
                        </Typography>
                        <div className={classes.section1_btn1}>
                            <Button variant={'contained'} color={'primary'}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_1_BUTTON_1}
                                />
                                <Icons.IconMenuArrow className={classes.iconArrow} />
                            </Button>
                        </div>
                    </div>
                    <img alt={'but_chi_nho.png'} src={Utils.getImageUrl('home/but_chi_nho.png')} className={classes.section1_img1} />
                </div>
                <div id={'section1.2'} className={clsx(classes.divRow, classes.divCenter)}>
                    <img alt={'Con_Meo0001_nho.png'} src={Utils.getImageUrl('home/Con_Meo0001_nho.png')} className={classes.section1_img2} />
                    <div className={clsx(classes.divColumn, classes.divColumn)}>
                        <div className={clsx(classes.divRow, classes.divCenter, classes.divTop)}>
                            <Typography className={clsx(classes.textBreak, classes.section1_txt2)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_1_TEXT_2}
                                    components={{ span: <span /> }}
                                    values={{
                                        custom: clsx(classes.secondaryText)
                                    }}
                                />
                            </Typography>
                            <img alt={'magic-wand.png'} src={Utils.getImageUrl('home/magic-wand.png')} className={classes.section1_img3} />
                        </div>
                        <Typography className={clsx(classes.textBreak, classes.section1_txt3)}>
                            <Trans
                                i18nKey={ID.HOME.SECTION_1_TEXT_3}
                                components={{ span: <span /> }}
                                values={{
                                    custom: clsx(classes.secondaryText)
                                }}
                            />
                        </Typography>
                        <div className={classes.section1_btn1}>
                            <Button variant={'contained'} color={'primary'}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_1_BUTTON_2}
                                />
                                <Icons.IconMenuArrow className={classes.iconArrow} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderSection2 = () => {
        const { classes } = this.props

        return (
            <div id={'section2'} className={clsx(classes.divColumn, classes.section2)}>
                <div id={'section2.1'}>
                    <Typography className={clsx(classes.textBreak, classes.section2_txt1)}>
                        <Trans
                            i18nKey={ID.HOME.SECTION_2_TEXT_1}
                        />
                    </Typography>
                </div>
                <div id={'section2.2'}>
                    {
                        HomeMenu.map(menu => (
                            this.renderSection2Menu(menu)
                        ))
                    }
                </div>
            </div>
        )
    }

    renderSection2Menu(menu) {
        const {
            classes,
            t
        } = this.props

        let menuLink = t(menu.link)

        let isHover = this.state[`hover_${menuLink}`] === true

        let classMenuItem = clsx(classes.menuItem, {
            [classes.menuItem + '--hover']: isHover
        })

        let classMenuIcon = clsx(classes.menuIcon, {
            [classes.menuIcon + '--hover']: isHover
        })

        return (
            <div key={menu.text} className={clsx(classes.divRow)}>
                <Link to={menuLink} className={classes.menuLink} onMouseEnter={this.handleMouseEnter(menuLink)} onMouseLeave={this.handleMouseLeave(menuLink)}>
                    <div className={clsx(classes.divRow, classes.divCenter, classes.divLeft)}>
                        <Typography className={clsx(classMenuItem)} noWrap>
                            <Trans
                                i18nKey={menu.text}
                            />
                        </Typography>
                        {
                            isHover && <menu.icon className={classMenuIcon} />
                        }
                    </div>
                </Link>
            </div>
        )
    }

    render() {
        const { classes } = this.props;
        // console.log('Home::render', this.props)
        return (
            <div className={classes.root}>
                {this.renderSection1()}
                {this.renderSection2()}
                <PageUnderContruction />
            </div>
        );
    }
}

Home.propTypes =
{
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    ...state.global,
    ...state.cms
})

const mapDispatchToProps = (dispatch) => ({
    SetTitle: (title) => {
        dispatch(ActionGlobal.SetTitle(title))
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withMultipleStyles(commonStyles, styles),
    withTranslation()
)(Home);

