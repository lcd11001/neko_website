import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import WaterWave from 'react-water-wave'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import Utils from '../Utils'
import PageUnderContruction from '../Components/PageError/PageUnderContruction';
import { Button, Divider, Fade, IconButton, isWidthDown, Paper, Toolbar, Typography, withWidth } from '@material-ui/core';

import * as Icons from '../Components/NekoIcons'

import { HomeMenu } from '../Data/Defines'
import { Link } from 'react-router-dom';

import Carousel from 'react-material-ui-carousel';
import CarouselMulti from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

import AspectRatio from '../Components/AspectRatio'
import InViewElement from '../Components/InViewElement';

const MAX_BLOG_LINE_HEIGHT = 6
const MAX_LINE_HEIGHT = 3

const styles = theme => ({
    section1: {
        backgroundImage: `linear-gradient(${theme.palette.primary.secondary}, ${theme.palette.primary.main})`,
    },

    section1_img1: {
        objectFit: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['padding-left', 'width'],
                value: [50, 45],
                variant: [10, 2],
                unit: ['px', '%']
            }
        ),
    },

    section1_img2: {
        objectFit: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['padding-right', 'width'],
                value: [50, 55],
                variant: [10, 3],
                unit: ['px', '%']
            }
        ),
    },

    section1_img3: {
        width: '15%',
        objectFit: 'contain',
        backgroundColor: `${theme.palette.primary.secondary}1E`, // 1E = 12%
        borderRadius: '50%',
        // transform: 'translateX(-25%) scaleX(-1)'
    },

    section1_txt1: {
        color: 'white'
    },

    section1_txt2: {
        color: 'white',
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
        color: 'white',
        fontWeight: 400
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

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section2: {
        position: 'relative',
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop', 'paddingBottom'],
                value: [130, 130],
                variant: [10, 10],
                unit: ['px', 'px']
            }
        ),
    },

    section2_bg: {
        zIndex: -1,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
    },

    section2_img_bg: {
        width: 'auto',
        height: '100%',
        position: 'absolute',
        right: 0,
        objectFit: 'contain',
    },

    section2_txt1: {
        position: 'relative',
        ...breakpointsStyle(theme,
            {
                key: ['paddingBottom'],
                value: [100],
                variant: [10],
                unit: ['px']
            }
        ),
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: '#A2A3A7'
    },

    menuLink: {
        color: 'black',

        '&--not-hover': {
            color: '#A2A3A7'
        }
    },

    menuItem: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height', 'paddingBottom'],
                value: [40, 40, 70],
                variant: [5, 5, 10],
                unit: ['px', 'px', 'px']
            }
        ),
        fontWeight: '600',
        textAlign: 'left',
        color: 'inherit',
        marginLeft: 0,

        transition: theme.transitions.create(['color', 'font-weight', 'margin-left'], {
            duration: 500
        }),

        '&--hover': {
            fontWeight: '600',
            color: theme.palette.text.primary,
            marginLeft: 30
        }
    },

    menuIcon: {
        ...breakpointsStyle(theme,
            {
                key: ['marginLeft'],
                value: [40],
                variant: [8],
                unit: ['px']
            }
        ),
        color: 'transparent',
        width: 0,
        position: 'relative',
        top: 5,
        transition: theme.transitions.create(['color', 'width'], {
            duration: 300
        }),

        '&--hover': {
            color: theme.palette.text.primary,
            ...breakpointsStyle(theme,
                {
                    key: ['width'],
                    value: [50],
                    variant: [8],
                    unit: ['px']
                }
            ),
        }
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section3: {
        paddingBottom: 0
    },

    section3_txt1: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [25, 25],
                variant: [3, 5],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 600,
        textAlign: 'center',
        color: 'inherit',
        transform: 'translateY(50%)'
    },

    section3_txt1_plus: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size'],
                value: [80],
                variant: [10],
                unit: ['px']
            }
        ),
        fontWeight: 200,
    },

    section3_project_num: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [150, 170],
                variant: [25, 30],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500,
        textAlign: 'center',
        color: 'inherit',
    },

    section3_txt2: {
        fontWeight: 500,
        textAlign: 'left',
        color: 'inherit',
        whiteSpace: 'pre-wrap'
    },

    section3_img1: {
        objectFit: 'contain',
        width: 'auto',
        ...breakpointsStyle(theme,
            {
                key: ['paddingRight', 'height'],
                value: [40, 250],
                variant: [5, 30],
                unit: ['px', 'px']
            }
        ),
    },

    section3_img2: {
        objectFit: 'contain',
        backgroundColor: 'transparent',
        marginRight: 10,
        ...breakpointsStyle(theme,
            {
                key: ['width'],
                value: [50],
                variant: [5],
                unit: ['px']
            }
        ),
        height: 'auto'
    },

    section3_divider: {
        height: 2,
        color: '#707070',
        margin: '20px 0'
    },

    section3_carousel: {
        // backgroundColor: 'red'
        ...breakpointsStyle(theme,
            {
                key: ['height'],
                value: [300],
                variant: [40],
                unit: ['px']
            }
        ),
        width: '100%'
    },

    section3_carousel_slider: {
        height: '100%',
        minWidth: '100%'
    },

    section3_logo: {
        width: '100%',
        ...breakpointsStyle(theme,
            {
                key: ['padding'],
                value: [20],
                variant: [-2],
                unit: ['%']
            }
        ),
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section4: {
        backgroundColor: '#f6f6f6',
    },

    section4_btn1: {
        // because section4_logo has width = 40%
        // => section4_btn1 has marginLeft 40%
        ...breakpointsStyle(theme,
            {
                key: ['padding-top', 'padding-bottom', 'marginLeft'],
                value: [40, 40, 40],
                variant: [5, 5, 3],
                unit: ['px', 'px', '%']
            }
        ),
    },

    section4_carousel: {

    },

    section4_carousel_indicators: {
        ...breakpointsStyle(theme,
            {
                key: ['marginLeft'],
                value: [40],
                variant: [3],
                unit: ['%']
            }
        ),
    },

    section4_carousel_buttons: {
        "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.primary.secondary
        }
    },

    section4_logo: {
        ...breakpointsStyle(theme,
            {
                key: ['min-width'],
                value: [40],
                variant: [3],
                unit: ['%']
            }
        ),
        paddingRight: '10%'
    },

    section4_text: {
        ...breakpointsStyle(theme,
            {
                key: ['line-height', 'max-height'],
                value: [32, 32 * MAX_LINE_HEIGHT],
                variant: [3, 3 * MAX_LINE_HEIGHT],
                unit: ['px', 'px']
            }
        ),
    },

    section4_title: {
        paddingTop: 30,
        fontWeight: 'bold'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section5: {

    },

    section5_txt1: {

    },

    section5_btn1: {

    },

    section5_carousel: {
        // backgroundColor: 'red'
        ...breakpointsStyle(theme,
            {
                key: ['height'],
                value: [500],
                variant: [50],
                unit: ['px']
            }
        ),
        width: '100%',
    },

    section5_carousel_slider: {
        height: '100%',
        minWidth: '100%',

        '& > li:first-child': {
            paddingLeft: '5px !important'
        },

        '& > li:last-child': {
            paddingRight: '5px !important'
        }
    },

    section5_carousel_item: {
        ...breakpointsStyle(theme,
            {
                key: ['padding'],
                value: [30],
                variant: [5],
                unit: ['px']
            }
        ),
        height: '100%'
    },

    section5_blogs: {
        paddingTop: 20
    },

    section5_blog: {
    },

    section5_div_img: {
        overflow: 'hidden',
        maxHeight: '60%',
        height: '60%',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },

    section5_img_motion: {
        width: '100%',
        objectFit: 'cover',
    },

    section5_date: {
        ...breakpointsStyle(theme,
            {
                key: ['line-height'],
                value: [48],
                variant: [3],
                unit: ['px']
            }
        ),
        marginLeft: 20,
        color: '#B3B3B3'
    },

    section5_title: {
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20,
        ...breakpointsStyle(theme,
            {
                key: ['line-height', 'max-height'],
                value: [25, 25 * MAX_BLOG_LINE_HEIGHT],
                variant: [1, 1 * MAX_BLOG_LINE_HEIGHT],
                unit: ['px', 'px']
            }
        ),
        '&:hover': {
            color: theme.palette.primary.main
        }
    },

    section5_content: {
        textAlign: 'left',
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 20,
        ...breakpointsStyle(theme,
            {
                key: ['line-height', 'max-height'],
                value: [20, 20 * MAX_BLOG_LINE_HEIGHT],
                variant: [1, 1 * MAX_BLOG_LINE_HEIGHT],
                unit: ['px', 'px']
            }
        ),
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section6: {
        
    },

    section6_txt1: {
        color: 'white',
        textShadow: `
            #555593 1px 1px 0px,
            #555593 -1px 1px 0px,
            #555593 1px -1px 0px,
            #555593 -1px -1px 0px
        `,
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [80, 80],
                variant: [10, 10],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500
    },

    section6_txt2: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height', 'paddingTop', 'paddingBottom'],
                value: [180, 140, 50, 50],
                variant: [20, 20, 5, 5],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        fontWeight: 'bold'
    },

    section6_arrow: {
        // https://css-tricks.com/snippets/css/css-triangle/        
        width: 0,
        height: 0,
        borderLeft: 'solid transparent',
        borderRight: 'solid transparent',
        borderTop: `solid ${theme.palette.primary.main}`,
        ...breakpointsStyle(theme,
            {
                key: ['borderTopWidth', 'borderLeftWidth', 'borderRightWidth'],
                value: [35, 35, 35],
                variant: [5, 5, 5],
                unit: ['px', 'px', 'px']
            }
        ),
    },

    section6_bg_arrow: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [70, 70],
                variant: [5, 5],
                unit: ['px', 'px']
            }
        ),
        backgroundRepeat: 'no-repeat'
    },

    section6_dialog_root: {
        overflow: 'unset',
        width: '100%'
    },

    section6_dialog1: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [550, 150],
                variant: [80, 20],
                unit: ['px', 'px', 'px']
            }
        ),
        border: '2px solid #707070',
        borderRadius: 7,
    },

    section6_dialog1_pos: {
        marginLeft: '15%',

        [theme.breakpoints.down('sm')]: {
            marginLeft: '25%',
        }
    },

    section6_dialog2: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [600, 245],
                variant: [90, 35],
                unit: ['px', 'px']
            }
        ),
        borderRadius: 7,
        backgroundColor: '#EC6966',
    },

    section6_dialog2_pos: {
        marginLeft: '30%',
        marginTop: '5%',

        [theme.breakpoints.down('sm')]: {
            marginLeft: '30%',
        },
    },

    section6_dialog3: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [550, 190],
                variant: [80, 30],
                unit: ['px', 'px', 'px']
            }
        ),
        borderRadius: 7,
        backgroundColor: '#555593',
    },

    section6_dialog3_pos: {
        marginLeft: '10%',
        marginTop: '-5%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '20%',
        }
    },

    section6_dialog1_txt: {
        paddingLeft: '15%'
    },

    section6_dialog2_txt: {
        paddingLeft: '15%',
        color: 'white'
    },

    section6_dialog3_txt: {
        paddingLeft: '15%',
        color: 'white'
    }
});

// {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}
const carouselMultiResponsive = {
    xl: {
        breakpoint: { max: Number.MAX_SAFE_INTEGER, min: 1920 },
        items: 8,
        partialVisibilityGutter: 0
    },
    lg: {
        breakpoint: { max: 1920 - 1, min: 1280 },
        items: 7,
        partialVisibilityGutter: 0
    },
    md: {
        breakpoint: { max: 1280 - 1, min: 960 },
        items: 6,
        partialVisibilityGutter: 0
    },
    sm: {
        breakpoint: { max: 960 - 1, min: 600 },
        items: 5,
        partialVisibilityGutter: 0
    },
    xs: {
        breakpoint: { max: 600 - 1, min: 0 },
        items: 4,
        partialVisibilityGutter: 0
    }
}

const carouselMultiResponsiveBlogs = {
    xl: {
        breakpoint: { max: Number.MAX_SAFE_INTEGER, min: 1920 },
        items: 3,
        partialVisibilityGutter: 0
    },
    lg: {
        breakpoint: { max: 1920 - 1, min: 1280 },
        items: 3,
        partialVisibilityGutter: 0
    },
    md: {
        breakpoint: { max: 1280 - 1, min: 960 },
        items: 3,
        partialVisibilityGutter: 0
    },
    sm: {
        breakpoint: { max: 960 - 1, min: 600 },
        items: 1,
        partialVisibilityGutter: 80
    },
    xs: {
        breakpoint: { max: 600 - 1, min: 0 },
        items: 1,
        partialVisibilityGutter: 80
    }
}

class Home extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            caseIndex: 0,
            caseStudyNum: props.t(ID.HOME.SECTION_4_CASE_STUDY_NUM),
            lastHover: props.t(ID.LINK.WORKS_BRAND),
            countHover: 0
        }

        this.carouselCaseStudyRef = React.createRef()
    }

    handleMouseEnter = (type, link) => (evt) =>
    {
        if (type === 'menu')
        {
            this.setState((prevState) => ({
                [`hover_${link}`]: true,
                lastHover: link,
                countHover: prevState.countHover + 1
            }))
        } else if (type === 'blog')
        {
            this.setState({
                [`blog_${link}`]: true,
            })
        }
    }

    handleMouseLeave = (type, link) => (evt) =>
    {
        if (type === 'menu')
        {
            this.setState((prevState) => ({
                [`hover_${link}`]: false,
                countHover: prevState.countHover - 1
            }))
        } else if (type === 'blog')
        {
            this.setState({
                [`blog_${link}`]: false,
            })
        }
    }

    handleCaseStudy = (delta) => (evt) =>
    {
        this.setState(
            (state, props) => ({
                caseIndex: ((state.caseIndex + delta) + state.caseStudyNum) % state.caseStudyNum
            }),
            () =>
            {
                delta > 0
                    ? this.carouselCaseStudyRef.current.next()
                    : this.carouselCaseStudyRef.current.prev()
            }
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection1 = () =>
    {
        const {
            classes,
            t
        } = this.props

        return (
            <div id={'section1'} className={clsx(classes.divColumn, classes.section, classes.section1)}>
                <Toolbar disableGutters={true} className={classes.toolbarHome} style={{ backgroundColor: 'transparent' }} />

                <InViewElement variants={commonMotion.groupTransition}>
                    <motion.div variants={commonMotion.delayTransition(0)} id={'section1.1'} className={clsx(classes.divRow, classes.divCenter)}>
                        <div className={clsx(classes.divColumn, classes.divColumn)}>
                            <motion.div variants={commonMotion.elementTransition}>
                                <Typography className={clsx(classes.textBreak, classes.textSubHeader, classes.section1_txt1)}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_1_TEXT_1}
                                    />
                                </Typography>
                            </motion.div>

                            <motion.div variants={commonMotion.elementTransition} className={classes.section1_btn1}>
                                <Link to={Utils.i18Link(t, ID.HOME.SECTION_1_BUTTON_1_LINK)} className={classes.textLinkHidden}>
                                    <Button variant={'contained'} color={'primary'}>
                                        <Trans
                                            i18nKey={ID.HOME.SECTION_1_BUTTON_1}
                                        />
                                        <Icons.IconMenuArrow className={classes.iconArrow} />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>

                        <motion.img
                            variants={commonMotion.elementTransition}
                            alt={t(ID.IMAGE.HOME_1_1)}
                            src={Utils.getUrl(t(ID.IMAGE.HOME_1_1))}
                            className={classes.section1_img1}
                        />
                    </motion.div>
                </InViewElement>

                <InViewElement variants={commonMotion.groupTransition}>
                    <motion.div variants={commonMotion.delayTransition(2)} id={'section1.2'} className={clsx(classes.divRow, classes.divCenter)} style={{ paddingTop: 10 }}>
                        <motion.img
                            variants={commonMotion.elementTransition}
                            alt={t(ID.IMAGE.HOME_1_2)}
                            src={Utils.getUrl(t(ID.IMAGE.HOME_1_2))}
                            className={classes.section1_img2}
                        />

                        <div className={clsx(classes.divColumn, classes.divColumn)}>
                            <div className={clsx(classes.divRow, classes.divCenter, classes.divTop)}>
                                <motion.div variants={commonMotion.elementTransition}>
                                    <Typography className={clsx(classes.textBreak, classes.section1_txt2)}>
                                        <Trans
                                            i18nKey={ID.HOME.SECTION_1_TEXT_2}
                                        />
                                    </Typography>
                                </motion.div>
                                <motion.img
                                    variants={commonMotion.elementTransition}
                                    alt={t(ID.IMAGE.HOME_1_3)}
                                    src={Utils.getUrl(t(ID.IMAGE.HOME_1_3))}
                                    className={classes.section1_img3}
                                />
                            </div>

                            <motion.div variants={commonMotion.elementTransition}>
                                <Typography className={clsx(classes.textBreak, classes.textSubTitle, classes.section1_txt3)}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_1_TEXT_3}
                                    />
                                </Typography>
                            </motion.div>

                            <motion.div variants={commonMotion.elementTransition} className={classes.section1_btn1}>
                                <Link to={Utils.i18Link(t, ID.HOME.SECTION_1_BUTTON_2_LINK)} className={classes.textLinkHidden}>
                                    <Button variant={'contained'} color={'primary'}>
                                        <Trans
                                            i18nKey={ID.HOME.SECTION_1_BUTTON_2}
                                        />
                                        <Icons.IconMenuArrow className={classes.iconArrow} />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </InViewElement>
            </div >
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection2 = () =>
    {
        const {
            classes,
            t
        } = this.props

        return (
            <div id={'section2'} className={clsx(classes.divColumn, classes.section, classes.section2)}>
                <div id={'section2.1'}>
                    <InViewElement variants={commonMotion.groupTransition}>
                        <motion.div variants={commonMotion.elementTransition}>
                            <Typography className={clsx(classes.textBreak, classes.textNormal, classes.section2_txt1)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_2_TEXT_1}
                                />
                            </Typography>
                        </motion.div>
                    </InViewElement>
                </div>
                <div id={'section2.2'}>
                    <InViewElement variants={commonMotion.groupTransition}>
                        {
                            HomeMenu.map((menu, index) => (
                                this.renderSection2Menu(menu, index)
                            ))
                        }
                    </InViewElement>
                </div>
            </div>
        )
    }

    renderSection2Menu(menu, index)
    {
        const {
            classes,
            t
        } = this.props

        let menuLink = t(menu.link)

        let isHover = this.state[`hover_${menuLink}`] === true
        let notHover = this.state.countHover !== 0
        let isShowBackground = this.state.lastHover === menuLink

        let classMenuLink = clsx(classes.menuLink, {
            [classes.menuLink + '--not-hover']: notHover
        })

        let classMenuItem = clsx(classes.menuItem, {
            [classes.menuItem + '--hover']: isHover
        })

        let classMenuIcon = clsx(classes.menuIcon, {
            [classes.menuIcon + '--hover']: isHover
        })

        return (
            <div key={menu.text} className={clsx(classes.divRow)}>
                <AnimatePresence initial={!false} exitBeforeEnter={true}>
                    {
                        isShowBackground &&

                        <motion.div className={classes.section2_bg}
                            key={`bg-${menu.text}`}
                            style={{
                                backgroundColor: t(menu.bg),
                            }}
                            variants={commonMotion.backgroundTransition}
                            initial={'hidden'}
                            animate={'in'}
                            exit={'out'}
                        >
                            <motion.img
                                key={`img-${menu.text}`}
                                alt={`img-${menu.text}`}
                                className={classes.section2_img_bg}
                                src={Utils.getUrl(t(ID.IMAGE[`WORK_SPECIALIZED_${index + 1}`]))}
                                variants={commonMotion.specializeTransition}
                            />
                        </motion.div>
                    }
                </AnimatePresence>

                <Link to={menuLink} className={clsx(classMenuLink, classes.textLinkHidden, classes.divRow, classes.fullWidth, classes.divTop)} onMouseEnter={this.handleMouseEnter('menu', menuLink)} onMouseLeave={this.handleMouseLeave('menu', menuLink)}>
                    <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow, classes.divCenter, classes.divLeft)}>
                        <Typography className={clsx(classMenuItem)} noWrap>
                            <Trans
                                i18nKey={menu.text}
                            />
                        </Typography>
                        <menu.icon className={classMenuIcon} />
                    </motion.div>
                </Link>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection3()
    {
        const {
            classes,
            t
        } = this.props

        const carouselAnim = 'slide'
        // const carouselAnim = 'fade'

        const numLogo = 5
        const totalLogo = 20

        return (
            <div id={'section3'} className={clsx(classes.divColumn, classes.section, classes.section3)}>
                <InViewElement variants={commonMotion.groupTransition}>
                    <div id={'section3.1'} className={clsx(classes.divRow, classes.divCenter)}>
                        <motion.img
                            variants={commonMotion.elementTransition}
                            alt={t(ID.IMAGE.HOME_3_1)}
                            src={Utils.getUrl(t(ID.IMAGE.HOME_3_1))}
                            className={classes.section3_img1}
                        />
                        <motion.div variants={commonMotion.groupTransition} className={clsx(classes.divColumn, classes.divTop)} >

                            <motion.div variants={commonMotion.elementTransition} id={'section3.1.a'} className={clsx(classes.divRow, classes.divTop)}>
                                <Typography className={clsx(classes.textBreak, classes.section3_project_num)}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_3_PROJECTS_NUM}
                                    />
                                </Typography>
                                <Typography className={clsx(classes.textBreak, classes.section3_txt1)}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_3_TEXT_1}
                                        components={{ span: <span /> }}
                                        values={{
                                            custom: clsx(classes.secondaryText, classes.section3_txt1_plus)
                                        }}
                                    />
                                </Typography>
                            </motion.div>

                            <motion.hr variants={commonMotion.elementTransition} className={classes.section3_divider} />

                            <motion.div variants={commonMotion.groupTransition} id={'section3.1.b'} className={clsx(classes.divRow, classes.divCenter, classes.divTop)}>
                                <motion.img
                                    variants={commonMotion.elementTransition}
                                    alt={t(ID.IMAGE.HOME_3_2)}
                                    src={Utils.getUrl(t(ID.IMAGE.HOME_3_2))}
                                    className={classes.section3_img2}
                                />
                                <motion.div variants={commonMotion.elementTransition}>
                                    <Typography className={clsx(classes.textBreak, classes.textSubTitle, classes.section3_txt2)}>
                                        <Trans
                                            i18nKey={ID.HOME.SECTION_3_TEXT_2}
                                        />
                                    </Typography>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    </div>
                </InViewElement>

                <InViewElement variants={commonMotion.groupTransition}>
                    <motion.div variants={commonMotion.delayTransition(3)} id={'section3.2'} className={clsx(classes.divRow, classes.divCenter)}>
                        {/*
                        <Carousel
                            className={clsx(classes.divColumn, classes.divCenter, classes.section3_carousel)}
                            autoPlay={true}
                            indicators={false}
                            navButtonsAlwaysInvisible={true}
                            animation={carouselAnim}
                            interval={3000}
                        >
                            {
                                Array.apply(0, Array(totalLogo))
                                    .filter((value, index) => {
                                        if (carouselAnim === 'slide') {
                                            return index % numLogo === 0
                                        }
                                        return true
                                    })
                                    .map((value, index) => {
                                        if (carouselAnim === 'slide') {
                                            return this.renderSection3LogoSlide(index, numLogo, totalLogo)
                                        }
                                        return this.renderSection3LogoFade(index, numLogo, totalLogo)
                                    })
                            }
                        </Carousel>
                    */}
                        {
                            <CarouselMulti
                                containerClass={clsx(classes.divColumn, classes.divLeft, classes.section3_carousel)}
                                sliderClass={clsx(classes.section3_carousel_slider)}
                                responsive={carouselMultiResponsive}
                                ssr={false}
                                partialVisible={false}
                                centerMode={false}
                                infinite={true}
                                showDots={false}
                                arrows={false}
                                draggable={false}
                                swipeable={false}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                            >
                                {
                                    Array.apply(0, Array(totalLogo))
                                        .map((value, index) =>
                                        {
                                            return this.renderSection3LogoFade(index, 1, totalLogo)
                                        })
                                }
                            </CarouselMulti>
                        }
                    </motion.div>
                </InViewElement>

            </div>
        )
    }

    renderSection3LogoFade(index, len, total)
    {
        const {
            classes,
            t
        } = this.props

        // console.log('=============')

        return (
            <div key={index} className={clsx(classes.divRow, classes.divCenter, classes.fullHeight)} style={{ flex: len }}>
                {
                    Array.apply(0, Array(len))
                        .map((v, i) =>
                        {
                            // let name = Utils.zeroPadding((index + i) % total, 2)
                            let name = t(ID.IMAGE[`LOGO_${((index + i) % total) + 1}`])
                            let path = Utils.getUrl(name)
                            // console.log('path', path)

                            return (
                                <div key={name} style={{ flex: 1 }}>
                                    <img alt={name} src={path} className={classes.section3_logo} />
                                </div>
                            )
                        })
                }
            </div >
        )

    }

    renderSection3LogoSlide(index, len, total)
    {
        return this.renderSection3LogoFade(index * len, len, total)
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection4()
    {
        const {
            classes,
            t,
            width
        } = this.props

        const {
            caseIndex,
            caseStudyNum
        } = this.state

        const totalCaseStudy = 5
        // const carouselAnim = 'slide'
        const carouselAnim = 'fade'

        const caseStudiLink = ID.HOME[`SECTION_4_LINK_${caseIndex + 1}`]

        return (
            <InViewElement variants={commonMotion.groupTransition}>
                <div id={'section4'} className={clsx(classes.divColumn, classes.section, classes.section4)}>
                    <motion.div variants={commonMotion.elementTransition} id={'section4.1'} className={clsx(classes.divRow, classes.divCenter)}>
                        <Carousel
                            key={width}
                            ref={this.carouselCaseStudyRef}
                            className={clsx(classes.divColumn, classes.divCenter, classes.section4_carousel)}
                            autoPlay={!true}
                            indicators={false}
                            navButtonsAlwaysInvisible={true}
                            animation={carouselAnim}
                            interval={3000}
                            startAt={caseIndex}
                        >
                            {
                                Array.apply(0, Array(totalCaseStudy))
                                    .map((value, index) =>
                                    {
                                        return this.renderSection4CaseStudy(index)
                                    })
                            }
                        </Carousel>
                    </motion.div>
                    <motion.div variants={commonMotion.elementTransition} id={'section4.2'} className={classes.section4_btn1}>
                        <Link to={Utils.i18Link(t, caseStudiLink)} className={classes.textLinkHidden}>
                            <Button variant={'contained'} color={'primary'}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_4_BUTTON_1}
                                />
                                <Icons.IconMenuArrow className={classes.iconArrow} />
                            </Button>
                        </Link>
                    </motion.div>
                    <motion.div variants={commonMotion.elementTransition} id={'section4.3'} className={clsx(classes.divRow, classes.divBetween)}>
                        <div className={classes.section4_carousel_indicators}>
                            <Typography className={clsx(classes.textSubTitle)}>{Utils.zeroPadding(caseIndex + 1, 2)}/{Utils.zeroPadding(caseStudyNum, 2)}</Typography>
                        </div>
                        <div className={clsx(classes.divRow, classes.divBetween)}>
                            <IconButton
                                onClick={this.handleCaseStudy(-1)}
                                disableRipple
                                className={classes.section4_carousel_buttons}
                                disabled={caseIndex === 0}
                            >
                                <Icons.IconMenuArrow className={classes.iconArrow} style={{ transform: 'scaleX(-1)' }} />
                            </IconButton>
                            <IconButton
                                onClick={this.handleCaseStudy(1)}
                                disableRipple
                                className={classes.section4_carousel_buttons}
                                disabled={caseIndex + 1 === caseStudyNum}
                            >
                                <Icons.IconMenuArrow className={classes.iconArrow} />
                            </IconButton>
                        </div>
                    </motion.div>
                </div>
            </InViewElement>
        )
    }

    renderSection4CaseStudy(index)
    {
        const {
            classes,
            t
        } = this.props

        const LOGO = Utils.i18Image(t, ID.HOME[`SECTION_4_LOGO_${index + 1}`])
        const TEXT = t(ID.HOME[`SECTION_4_TEXT_${index + 1}`])
        const TITILE = t(ID.HOME[`SECTION_4_TITLE_${index + 1}`])

        const path = Utils.getUrl(LOGO)

        return (
            <div key={`case-study-${index}`} className={clsx(classes.divRow, classes.divCenter)}>
                <img alt={LOGO} src={path} className={classes.section4_logo} />
                <div className={clsx(classes.divColumn, classes.divLeft)}>
                    <Typography className={clsx(classes.textSubTitle, classes.section4_text, classes.textLimitMultiline)}>{TEXT}</Typography>
                    <Typography className={clsx(classes.textSubTitle, classes.section4_title)}>{TITILE}</Typography>
                </div>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection5()
    {
        const {
            classes,
            t,
            width
        } = this.props

        const totalBlogs = 3
        const isAutoPlay = isWidthDown('sm', width)

        return (
            <InViewElement variants={commonMotion.groupTransition}>
                <div id={'section5'} className={clsx(classes.divColumn, classes.section, classes.section5)}>
                    <motion.div variants={commonMotion.elementTransition} id={'section5.1'} className={clsx(classes.divRow, classes.divBetween)}>

                        <Typography className={clsx(classes.textBreak, classes.textHeader, classes.section5_txt1)}>
                            <Trans
                                i18nKey={ID.HOME.SECTION_5_TEXT_1}
                            />
                        </Typography>

                        <div className={classes.section5_btn1}>
                            <Link to={Utils.i18Link(t, ID.HOME.SECTION_5_BUTTON_1_LINK)} className={classes.textLinkHidden}>
                                <Button variant={'contained'} color={'primary'}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_5_BUTTON_1}
                                    />
                                    <Icons.IconMenuArrow className={classes.iconArrow} />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div variants={commonMotion.elementTransition} id={'section5.2'} className={clsx(classes.divRow, classes.divCenter, classes.section5_blogs)}>
                        <CarouselMulti
                            key={width}
                            responsive={carouselMultiResponsiveBlogs}
                            containerClass={clsx(classes.divColumn, classes.divLeft, classes.section5_carousel)}
                            sliderClass={clsx(classes.section5_carousel_slider)}
                            itemClass={clsx(classes.section5_carousel_item)}
                            ssr={false}
                            partialVisible={isAutoPlay}
                            centerMode={false}
                            infinite={isAutoPlay}
                            showDots={false}
                            arrows={false}
                            draggable={false}
                            swipeable={false}
                            autoPlay={isAutoPlay}
                            autoPlaySpeed={3000}
                        >
                            {
                                Array.apply(0, Array(totalBlogs))
                                    .map((value, index) =>
                                    {
                                        return this.renderSection5Blog(index)
                                    })
                            }
                        </CarouselMulti>
                    </motion.div>
                </div>
            </InViewElement>
        )
    }

    renderSection5Blog(index)
    {
        const {
            classes,
            t
        } = this.props

        const IMG = Utils.i18Image(t, ID.BLOG[`IMG_${index + 1}`])
        const DATE = t(ID.BLOG[`DATE_${index + 1}`])
        const TITILE = t(ID.BLOG[`TITLE_${index + 1}`])
        const LINK = ID.BLOG[`LINK_${index + 1}`]

        const path = Utils.getUrl(IMG)

        return (
            <div key={`blog-${index}`} className={clsx(classes.divColumn, classes.divTop, classes.section5_blog, classes.divBox)}>
                <Link to={Utils.i18Link(t, LINK)} className={clsx(classes.textLinkHidden, classes.divColumn, classes.fullHeight)}>
                    <div className={classes.section5_div_img}>
                        <motion.img
                            alt={IMG}
                            src={path}
                            className={classes.section5_img_motion}
                            whileHover={{
                                scale: 1.1
                            }}
                            transition={commonMotion.transition}
                        />
                    </div>

                    <div className={clsx(classes.divColumn, classes.divLeft)} style={{ flex: 10 }}>
                        <div style={{ flex: 3 }}>
                            <Typography className={clsx(classes.textSubTitle, classes.section5_date)}>{DATE}</Typography>
                        </div>
                        <div style={{ flex: 7 }}>
                            <Typography className={clsx(classes.textSubTitle, classes.section5_title)}>{TITILE}</Typography>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection6()
    {
        const {
            classes,
            t
        } = this.props

        return (
            <div id={'section6'} className={clsx(classes.divRow2ColumnRevert, classes.divCenter, classes.section, classes.section6, classes.divDot)} style={{ flex: 3 }}>
                <InViewElement variants={commonMotion.groupTransition} style={{ flex: 1 }}>
                    <div id={'section6.1'} className={clsx(classes.divColumn, classes.divLeft)}>
                        <motion.div variants={commonMotion.elementTransition}>
                            <Typography className={clsx(classes.textBreak, classes.section6_txt1)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_6_TEXT_1}
                                />
                            </Typography>
                        </motion.div>

                        <motion.div variants={commonMotion.elementTransition}>
                            <Typography className={clsx(classes.textBreak, classes.section6_txt2, classes.secondaryText)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_6_TEXT_2}
                                />
                            </Typography>
                        </motion.div>

                        <motion.div variants={commonMotion.elementTransition}>
                            <div id={'down-arrow'}
                                className={classes.section6_bg_arrow}
                                style={{
                                    backgroundImage: `url('${Utils.getUrl(t(ID.IMAGE.HOME_6_1))}')`
                                }}
                            />
                        </motion.div>
                    </div>
                </InViewElement>


                <InViewElement variants={commonMotion.groupTransition} style={{ flex: 2 }}>
                    <div id={'section6.2'} className={clsx(classes.divColumn, classes.divCenter)} style={{ width: '100%' }}>

                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow, classes.divBetween, classes.section6_dialog1, classes.section6_dialog1_pos)}>
                            <Typography className={clsx(classes.textBreak, classes.textTitle, classes.section6_dialog1_txt)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_6_TEXT_3}
                                />
                            </Typography>
                        </motion.div>

                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow, classes.divBetween, classes.section6_dialog2, classes.section6_dialog2_pos)}>
                            <Typography className={clsx(classes.textBreak, classes.textTitle, classes.section6_dialog2_txt)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_6_TEXT_4}
                                />
                            </Typography>
                        </motion.div>

                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow, classes.divBetween, classes.section6_dialog3, classes.section6_dialog3_pos)}>
                            <Typography className={clsx(classes.textBreak, classes.textTitle, classes.section6_dialog3_txt)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_6_TEXT_5}
                                />
                            </Typography>
                        </motion.div>
                    </div>
                </InViewElement>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    render()
    {
        const { classes } = this.props;
        // console.log('Home::render', this.props)
        return (
            <motion.div
                className={classes.root}
                initial={'in'}
                animate={'in'}
                exit={'out'}
                transition={commonMotion.transition}
                variants={commonMotion.pageTransition}
            >
                {this.renderSection1()}

                {this.renderSection6()}

                {this.renderSection2()}

                {this.renderSection3()}

                {this.renderSection4()}

                {this.renderSection5()}

            </motion.div>
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
    SetTitle: (title) =>
    {
        dispatch(ActionGlobal.SetTitle(title))
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withWidth()
)(Home);

