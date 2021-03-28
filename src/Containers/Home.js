import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import WaterWave from 'react-water-wave'

import { Trans, withTranslation } from 'react-i18next'
import i18next from 'i18next';
import ID from '../Translations/ID.json'

import compose from 'recompose/compose'

import Utils from '../Utils'
import { Avatar, Button, Divider, Fade, IconButton, isWidthDown, Paper, Toolbar, Typography, withWidth } from '@material-ui/core';

import * as Icons from '../Components/NekoIcons'

import { HomeMenu } from '../Data/Defines'
import { Link } from 'react-router-dom';

import CarouselMulti from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

import AspectRatio from '../Components/AspectRatio'
import InViewElement from '../Components/InViewElement';

const MAX_BLOG_LINE_HEIGHT = 6
const MAX_LINE_HEIGHT = 3

const AVATAR_SIZE = 150
const AVATAR_VARIANT = 21

const HASH_TAG_SIZE = 60
const HASH_TAG_VARIANT = 6

const STAR_SIZE = 50
const STAR_VARIANT = 5
const STAR_NUM = 5

const styles = theme => ({
    section1: {
        backgroundImage: `linear-gradient(${theme.palette.primary.secondary}, ${theme.palette.primary.main})`,
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop'],
                value: [150],
                variant: [10],
                unit: ['px']
            }
        ),
        // fixed: section6 wrong inview effect
        minHeight: '101vh',
    },

    section1_img1: {
        objectFit: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['padding-left', 'width', 'margin'],
                value: [50, 45, 0],
                variant: [10, 2, 0],
                variantSM: [12.5, -13.75, -12],
                unit: ['px', '%', 'px']
            }
        ),
    },

    section1_img2: {
        objectFit: 'contain',
        ...breakpointsStyle(theme,
            {
                key: ['padding-right', 'width', 'marginTop'],
                value: [50, 55, 0],
                variant: [10, 3, 0],
                variantSM: [12.5, -11.25, -12],
                unit: ['px', '%', 'px']
            }
        ),
    },

    section1_img3: {
        objectFit: 'contain',
        backgroundColor: `${theme.palette.primary.secondary}1E`, // 1E = 12%
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        left: '100%',
        bottom: '-50%',
        width: '30%'
    },

    section1_txt1: {
        color: 'white'
    },

    section1_txt2: {
        color: 'white',
        position: 'relative'
    },

    section1_txt3: {
        color: 'white',
        paddingTop: 15
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
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#E5E7EA',
        }
    },

    section2_header: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center'
        }
    },

    section2_menu: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center'
        }
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
        width: '100%',
        height: 'auto',
        position: 'absolute',
        right: 0,
        objectFit: 'contain',
    },

    section2_txt1: {
        position: 'relative',
        fontWeight: 'bold',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
        color: '#424242',
        opacity: 0.6,
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop', 'paddingBottom'],
                value: [0, 0],
                variant: [0, 0],
                variantSM: [-10, -10],
                unit: ['px', 'px']
            }
        ),
    },

    menuLink: {
        // color: 'green',
        color: theme.palette.text.primary,
        opacity: 1,

        '&--not-hover': {
            color: '#424242',
            opacity: 0.6
        }
    },

    menuItem: {
        textAlign: 'left',
        color: 'inherit',
        marginLeft: 0,

        transition: theme.transitions.create(['color', 'margin-left'], {
            duration: 500
        }),

        '&--hover': {
            color: 'black',
            opacity: 1,
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
        // because menu text line-height = 55
        // => make icon V-center
        height: 55,
        transition: theme.transitions.create(['color', 'width'], {
            duration: 300
        }),

        '&--hover': {
            color: theme.palette.text.primary,
            ...breakpointsStyle(theme,
                {
                    key: ['width'],
                    value: [65],
                    variant: [7],
                    unit: ['px']
                }
            ),
        }
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section3: {
        paddingBottom: 0,
        ...breakpointsStyle(theme,
            {
                key: ['marginTop', 'marginBottom'],
                value: [60, 60],
                variant: [5, 5],
                unit: ['px', 'px']
            }
        ),
    },

    section3_txt1: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [25, 25],
                variant: [3, 5],
                variantSM: [1, 1],
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
                variantSM: [5],
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
                variantSM: [10, 10],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 500,
        textAlign: 'center',
        color: 'inherit',
    },

    section3_txt2: {
        textAlign: 'left',
        color: 'inherit'
    },

    section3_vertical_divider: {
        minWidth: 40,
        [theme.breakpoints.down('sm')]: {
            minWidth: 0,
        }
    },

    section3_img1: {
        objectFit: 'contain',
        width: 'auto',
        ...breakpointsStyle(theme,
            {
                key: ['height'],
                value: [300],
                variant: [30],
                variantSM: [10],
                unit: ['px']
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
                variantSM: [0],
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
                variantSM: [3],
                unit: ['%']
            }
        ),
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section4: {
        backgroundColor: '#f6f6f6',
    },

    section4_info_stars: {
        backgroundImage: `linear-gradient(to right,  ${theme.palette.primary.main} 0%, ${theme.palette.primary.secondary} 60%)`,

        // ...breakpointsStyle(theme,
        //     {
        //         key: ['width', 'height', 'maskSize'],
        //         value: [STAR_NUM * STAR_SIZE, STAR_SIZE, STAR_SIZE],
        //         variant: [STAR_NUM * STAR_VARIANT, STAR_VARIANT, STAR_VARIANT],
        //         unit: ['px', 'px', 'px']
        //     }
        // ),
        // maskImage: `url("${Utils.getUrl(i18next.t(ID.IMAGE.HOME_4_2))}")`,
        // maskRepeat: 'repeat-x',

        ...breakpointsStyle(theme,
            {
                key: ['width', 'height', 'maskSize'],
                value: [STAR_NUM * STAR_SIZE, STAR_SIZE, STAR_NUM * STAR_SIZE],
                variant: [STAR_NUM * STAR_VARIANT, STAR_VARIANT, STAR_NUM * STAR_VARIANT],
                unit: ['px', 'px', 'px']
            }
        ),
        maskImage: `url("${Utils.getUrl(i18next.t(ID.IMAGE.HOME_4_1))}")`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center'
    },

    section4_info: {
        ...breakpointsStyle(theme,
            {
                key: ['marginLeft', 'marginRight'],
                value: [150, 0],
                variant: [30, 0],
                valueSM: [0, 0],
                variantSM: [0, 0],
                unit: ['px', 'px']
            }
        ),
    },

    section4_info_text: {
        textAlign: 'center',
        // textOverflow: 'unset',
        padding: '50px 0'
    },

    section4_info_text_1: {
        color: theme.palette.text.secondary
    },

    section4_btn1: {
        // because section4_case_study_logo has width = 40%
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
        width: '100%',
        height: '100%'
    },

    section4_carousel_slider: {
        height: '100%',
        minWidth: '100%',

        '& > li:first-child': {
            paddingLeft: '5px !important'
        },

        '& > li:last-child': {
            paddingRight: '5px !important'
        }
    },

    section4_carousel_item: {
        ...breakpointsStyle(theme,
            {
                key: ['padding'],
                value: [10],
                variant: [1],
                unit: ['px']
            }
        ),
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },

    section4_carousel_multi_item_container: {
        '& > div': {
            backgroundColor: 'white',
            marginTop: 20,
            marginBottom: 20,
            [theme.breakpoints.up('md')]: {
                padding: `20px 50px`
            },
            [theme.breakpoints.down('sm')]: {
                padding: `20px 10px`
            }
        },
        '& > div:first-child': {
            [theme.breakpoints.up('md')]: {

                marginRight: 0,
                marginLeft: 50
            }
        },

        '& > div:last-child': {
            [theme.breakpoints.up('md')]: {
                marginLeft: 0,
                marginRight: 50
            }
        }
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
        color: 'black',
        padding: '0 12px',
        "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.primary.secondary
        },
        '&.Mui-disabled': {
            color: '#A2A3A7'
        }
    },

    section4_logo_container: {
        ...breakpointsStyle(theme,
            {
                key: ['minWidth', 'maxWidth'],
                value: [120, 150],
                variant: [10, 10],
                variantSM: [15, 15],
                unit: ['px !important', 'px !important']
            }
        ),
        paddingRight: 20,
        alignSelf: 'flex-start'
    },

    section4_case_study_text: {
        textOverflow: 'unset',
        textAlign: 'left'
    },

    section4_text_1: {
        // color: theme.palette.text.secondary,
        // fontWeight: 'bold'
        fontWeight: 500
    },

    section4_case_study_title: {
        paddingTop: 30,
        fontWeight: 'bold'
    },

    section4_case_study_subtitle: {
        paddingTop: 5,
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
                variant: [30],
                variantSM: [15],
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
        paddingTop: 20,
        paddingBottom: 20
    },

    section5_blog: {
    },

    section5_div_img: {
        overflow: 'hidden',
        ...breakpointsStyle(theme,
            {
                key: ['maxHeight', 'height'],
                value: [60, 60],
                variant: [7, 7],
                variantSM: [3, 3],
                unit: ['%', '%']
            }
        ),
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
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
        marginBottom: 20,
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
        marginTop: 20,
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
                variantSM: [5, 5],
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
                variantSM: [15, 10, 0, 0],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        fontWeight: 'bold',

        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        }
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

    section6_text_root: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            paddingTop: 50
        }
    },

    section6_dialog_root: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    section6_dialog1: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [550, 150],
                variant: [60, 10],
                unit: ['px', 'px', 'px']
            }
        ),
        border: '2px solid #707070',
        borderRadius: 7,
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 2
    },

    section6_dialog1_pos: {
        marginLeft: '15%',

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },

    section6_dialog1_avatar_container: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height', 'left', 'top'],
                value: [AVATAR_SIZE, AVATAR_SIZE, -AVATAR_SIZE / 2, AVATAR_SIZE / 3],
                variant: [AVATAR_VARIANT, AVATAR_VARIANT, -AVATAR_VARIANT / 2, AVATAR_VARIANT / 7],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        position: 'absolute',
    },

    section6_dialog1_hash_tag_container: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height', 'right', 'top'],
                value: [HASH_TAG_SIZE, HASH_TAG_SIZE, -0, -HASH_TAG_SIZE / 2],
                variant: [HASH_TAG_VARIANT, HASH_TAG_VARIANT, -0, -HASH_TAG_VARIANT / 2],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        position: 'absolute',
    },

    section6_dialog2: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [600, 245],
                variant: [80, 25],
                unit: ['px', 'px']
            }
        ),
        borderRadius: 7,
        backgroundColor: '#EC6966',
        position: 'relative',
        zIndex: 1
    },

    section6_dialog2_pos: {
        marginLeft: '35%',
        marginTop: '5%',

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },

    section6_dialog2_avatar_container: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height', 'right', 'top'],
                value: [AVATAR_SIZE, AVATAR_SIZE, -AVATAR_SIZE / 2, AVATAR_SIZE / 3],
                variant: [AVATAR_VARIANT, AVATAR_VARIANT, -AVATAR_VARIANT / 2, AVATAR_VARIANT / 7],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        position: 'absolute',
    },

    section6_dialog2_hash_tag_container: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height', 'left', 'bottom'],
                value: [HASH_TAG_SIZE, HASH_TAG_SIZE, -HASH_TAG_SIZE / 2, HASH_TAG_SIZE],
                variant: [HASH_TAG_VARIANT, HASH_TAG_VARIANT, -HASH_TAG_VARIANT / 2, HASH_TAG_VARIANT],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        position: 'absolute',
    },

    section6_dialog3: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [550, 190],
                variant: [55, 20],
                unit: ['px', 'px', 'px']
            }
        ),
        borderRadius: 7,
        backgroundColor: '#555593',
        position: 'relative',
        zIndex: 3
    },

    section6_dialog3_pos: {
        marginLeft: '10%',
        marginTop: '-5%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },

    section6_dialog3_avatar_container: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height', 'left'],
                value: [AVATAR_SIZE, AVATAR_SIZE, AVATAR_SIZE / 10],
                variant: [AVATAR_VARIANT, AVATAR_VARIANT, AVATAR_VARIANT / 10],
                unit: ['px', 'px', 'px']
            }
        ),
        position: 'absolute',
    },

    section6_dialog3_hash_tag_container: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height', 'right', 'bottom'],
                value: [HASH_TAG_SIZE, HASH_TAG_SIZE, -HASH_TAG_SIZE / 2, 0],
                variant: [HASH_TAG_VARIANT, HASH_TAG_VARIANT, -HASH_TAG_VARIANT / 2, 0],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        position: 'absolute',
    },

    section6_dialog1_txt: {
        paddingLeft: '15%'
    },

    section6_dialog2_txt: {
        paddingLeft: '10%',
        paddingBottom: '10%',
        color: 'white',
    },

    section6_dialog3_txt: {
        paddingLeft: '35%',
        ...breakpointsStyle(theme,
            {
                key: ['paddingLeft'],
                value: [35],
                variant: [3],
                unit: ['%']
            }
        ),
        color: 'white'
    }
});

// {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}
const carouselMultiResponsiveLogo = {
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
        items: 3,
        partialVisibilityGutter: 0
    },
    xs: {
        breakpoint: { max: 600 - 1, min: 0 },
        items: 3,
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
        partialVisibilityGutter: 100
    },
    xs: {
        breakpoint: { max: 600 - 1, min: 0 },
        items: 1,
        partialVisibilityGutter: 50
    }
}

const carouselMultiResponsiveCaseStudy = {
    big: {
        breakpoint: { max: Number.MAX_SAFE_INTEGER, min: 960 },
        items: 1,
        partialVisibilityGutter: 0
    },
    small: {
        breakpoint: { max: 960 - 1, min: 0 },
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
        delta > 0
            ? this.carouselCaseStudyRef.current.next(1)
            : this.carouselCaseStudyRef.current.previous(1)

        this.setState(
            (state, props) => ({
                caseIndex: ((state.caseIndex + delta) + state.caseStudyNum) % state.caseStudyNum
            })
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
                <InViewElement variants={commonMotion.groupTransition}>
                    <motion.div variants={commonMotion.delayTransition(0)} id={'section1.1'} className={clsx(classes.divRow2Column, classes.divCenter)}>
                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.divColumn)}>

                            <Typography className={clsx(classes.textBreak, classes.text62, classes.section1_txt1)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_1_TEXT_1}
                                />
                            </Typography>

                            <div className={classes.section1_btn1}>
                                <Link to={Utils.i18Link(t, ID.HOME.SECTION_1_BUTTON_1_LINK)} className={classes.textLinkHidden}>
                                    <Button
                                        variant={'contained'}
                                        color={'primary'}
                                        endIcon={<Icons.IconMenuArrow className={classes.iconArrow} />}
                                    >
                                        <Trans
                                            i18nKey={ID.HOME.SECTION_1_BUTTON_1}
                                        />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.img
                            variants={commonMotion.elementTransition}
                            alt={t(ID.IMAGE.HOME_1_1)}
                            src={Utils.getUrl(t(ID.IMAGE.HOME_1_1))}
                            className={classes.section1_img1}
                        />
                    </motion.div>
                </InViewElement>

                <InViewElement variants={commonMotion.groupTransition}>
                    <motion.div variants={commonMotion.delayTransition(1.5)} id={'section1.2'} className={clsx(classes.divRow2ColumnRevert, classes.divCenter)} style={{ paddingTop: 10 }}>
                        <motion.img
                            variants={commonMotion.elementTransition}
                            alt={t(ID.IMAGE.HOME_1_2)}
                            src={Utils.getUrl(t(ID.IMAGE.HOME_1_2))}
                            className={classes.section1_img2}
                        />

                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.divColumn)}>
                            <div className={clsx(classes.divRow, classes.divCenter, classes.divTop)} >
                                <Typography component={'div'} className={clsx(classes.textBreak, classes.text40, classes.section1_txt2)}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_1_TEXT_2}
                                    />

                                    <img
                                        alt={t(ID.IMAGE.HOME_1_3)}
                                        src={Utils.getUrl(t(ID.IMAGE.HOME_1_3))}
                                        className={classes.section1_img3}
                                    />
                                </Typography>
                            </div>

                            <Typography className={clsx(classes.textBreak, classes.text18, classes.section1_txt3)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_1_TEXT_3}
                                />
                            </Typography>

                            <div className={classes.section1_btn1}>
                                <Link to={Utils.i18Link(t, ID.HOME.SECTION_1_BUTTON_2_LINK)} className={classes.textLinkHidden}>
                                    <Button
                                        variant={'contained'}
                                        color={'secondary'}
                                        endIcon={<Icons.IconMenuArrow className={classes.iconArrow} />}
                                    >
                                        <Trans
                                            i18nKey={ID.HOME.SECTION_1_BUTTON_2}
                                        />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
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
            t,
            width
        } = this.props

        let isDisable = isWidthDown('sm', width) ? true : false

        return (
            <AspectRatio ratio={1920 / 990} disable={isDisable}>
                <div id={'section2'} className={clsx(classes.divColumn, classes.section, classes.section2)}>

                    <InViewElement variants={commonMotion.groupTransition} classes={{ root: clsx(classes.divColumn, classes.section2_header) }} style={{ flex: 10 }}>
                        <div style={{ flex: 1 }} />
                        <motion.div variants={commonMotion.elementTransition} style={{ flex: 1 }}>
                            <Typography className={clsx(classes.textBreak, classes.text14, classes.section2_txt1)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_2_TEXT_1}
                                />
                            </Typography>
                        </motion.div>

                        <motion.div variants={commonMotion.groupHeaderTransition} className={clsx(classes.divColumn, classes.section2_menu)} style={{ flex: 8 }}>
                            {
                                HomeMenu.map((menu, index) => (
                                    this.renderSection2Menu(menu, index)
                                ))
                            }
                        </motion.div>
                        <div style={{ flex: 1 }} />
                    </InViewElement>

                </div>
            </AspectRatio>
        )
    }

    renderSection2Menu(menu, index)
    {
        const {
            classes,
            t,
            width
        } = this.props

        let menuLink = t(menu.link)

        let isHover = this.state[`hover_${menuLink}`] === true
        let notHover = this.state.countHover !== 0
        let isShowBackground = isWidthDown('sm', width) ? false : this.state.lastHover === menuLink

        let classMenuLink = clsx(classes.menuLink, {
            [classes.menuLink + '--not-hover']: notHover && !isHover
        })

        let classMenuItem = clsx(classes.text40, classes.menuItem, {
            [classes.menuItem + '--hover']: isHover
        })

        let classMenuIcon = clsx(classes.menuIcon, {
            [classes.menuIcon + '--hover']: isHover
        })

        let IMG_URL = Utils.getUrl(t(ID.IMAGE[`WORK_SPECIALIZED_${index + 1}`]))

        return (
            <div key={menu.text} className={clsx(classes.divRow)} style={{ flex: 1 }}>
                <AnimatePresence key={IMG_URL} initial={!false} exitBeforeEnter={true}>
                    {
                        isShowBackground &&

                        <motion.div className={classes.section2_bg}
                            id={`bg-${menu.text}`}
                            key={`bg-${menu.text}`}
                            style={{
                                // backgroundColor: t(menu.bg),
                                backgroundImage: `url(${IMG_URL})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right'
                            }}
                            variants={commonMotion.backgroundTransition}
                            initial={'hidden'}
                            animate={'in'}
                            exit={'out'}
                        >
                            {/* <motion.img
                                key={`img-${menu.text}`}
                                alt={`img-${menu.text}`}
                                className={classes.section2_img_bg}
                                src={IMG_URL}
                                variants={commonMotion.specializeTransition}
                            /> */}
                        </motion.div>
                    }
                </AnimatePresence>

                <Link to={menuLink} className={clsx(classMenuLink, classes.textLinkHidden, classes.divRow, classes.fullWidth, classes.divTop)} onMouseEnter={this.handleMouseEnter('menu', menuLink)} onMouseLeave={this.handleMouseLeave('menu', menuLink)}>
                    <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow, classes.divCenter, classes.divRight)}>
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
            t,
            width
        } = this.props

        const carouselAnim = 'slide'
        // const carouselAnim = 'fade'

        const numLogo = 5
        const totalLogo = 20

        return (
            <div id={'section3'} className={clsx(classes.divColumn, classes.section, classes.section3)}>
                <InViewElement variants={commonMotion.groupTransition}>
                    <div id={'section3.1'} className={clsx(classes.divRow2Column, classes.divCenter)}>
                        <motion.img
                            variants={commonMotion.elementTransition}
                            alt={t(ID.IMAGE.HOME_3_1)}
                            src={Utils.getUrl(t(ID.IMAGE.HOME_3_1))}
                            className={classes.section3_img1}
                        />

                        <div className={classes.section3_vertical_divider} />

                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.divTop)} >

                            <div id={'section3.1.a'} className={isWidthDown('sm', width) ? clsx(classes.divRow, classes.divCenter) : clsx(classes.divRow, classes.divTop)}>
                                <Typography className={clsx(classes.textBreak, classes.section3_project_num)}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_3_PROJECTS_NUM}
                                    />
                                </Typography>
                                <Typography className={clsx(classes.textBreakForce, classes.section3_txt1)}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_3_TEXT_1}
                                        components={{ span: <span /> }}
                                        values={{
                                            custom: clsx(classes.secondaryText, classes.section3_txt1_plus)
                                        }}
                                    />
                                </Typography>
                            </div>

                            <hr className={clsx(classes.section3_divider)} />

                            <div id={'section3.1.b'} className={isWidthDown('sm', width) ? clsx(classes.divRow, classes.divCenter) : clsx(classes.divRow, classes.divTop)}>
                                <img
                                    variants={commonMotion.elementTransition}
                                    alt={t(ID.IMAGE.HOME_3_2)}
                                    src={Utils.getUrl(t(ID.IMAGE.HOME_3_2))}
                                    className={classes.section3_img2}
                                />

                                <Typography className={clsx(classes.textBreak, classes.text18, classes.section3_txt2)}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_3_TEXT_2}
                                    />
                                </Typography>

                            </div>

                        </motion.div>
                    </div>
                </InViewElement>

                <InViewElement variants={commonMotion.groupTransition}>
                    <motion.div variants={commonMotion.delayTransition(1.5)} id={'section3.2'} className={clsx(classes.divRow, classes.divCenter)}>
                        <CarouselMulti
                            key={width}
                            containerClass={clsx(classes.divColumn, classes.divLeft, classes.section3_carousel)}
                            sliderClass={clsx(classes.section3_carousel_slider)}
                            responsive={carouselMultiResponsiveLogo}
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

        const isAutoPlay = isWidthDown('sm', width)
        const numSlideCaseStudy = isAutoPlay ? 1 : 2
        // const carouselAnim = 'slide'
        const carouselAnim = 'fade'

        // const caseStudiLink = ID.HOME[`SECTION_4_LINK_${caseIndex + 1}`]
        const caseStudiLink = ID.HOME.SECTION_4_BUTTON_1_LINK


        return (
            <div id={'section4'} className={clsx(classes.divColumn, classes.section, classes.section4)}>
                <InViewElement key={width} variants={commonMotion.groupTransition}>
                    <div className={clsx(classes.divRow2ColumnRevert, classes.fullWidth)} >
                        <motion.div variants={commonMotion.elementTransition} id={'section4.1'} className={clsx(classes.divColumn, classes.divCenter, isAutoPlay ? classes.fullWidth : classes.halfWidth)} >

                            <CarouselMulti
                                key={width}
                                ref={this.carouselCaseStudyRef}
                                responsive={carouselMultiResponsiveCaseStudy}
                                containerClass={clsx(classes.divColumn, classes.divLeft, classes.section4_carousel)}
                                sliderClass={clsx(classes.section4_carousel_slider)}
                                itemClass={clsx(classes.section4_carousel_item)}
                                ssr={false}
                                partialVisible={!isAutoPlay}
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
                                    Array.apply(0, Array(caseStudyNum))
                                        .filter((value, index) =>
                                        {
                                            return index % numSlideCaseStudy === 0
                                        })
                                        .map((value, index) =>
                                        {
                                            return this.renderSection4MultiCaseStudy(index, numSlideCaseStudy, caseStudyNum)
                                        })
                                }
                            </CarouselMulti>


                            <motion.div variants={commonMotion.elementTransition} id={'section4.3'} className={clsx(classes.divRow, classes.divCenter, classes.fullWidth)}>
                                <div className={clsx(classes.divRow, classes.divBetween)}>
                                    <IconButton
                                        onClick={this.handleCaseStudy(-numSlideCaseStudy)}
                                        disableRipple
                                        className={classes.section4_carousel_buttons}
                                        disabled={caseIndex === 0}
                                    >
                                        <Icons.IconMenuArrow className={classes.iconArrowBig} style={{ transform: 'scaleX(-1)' }} />
                                    </IconButton>
                                    <IconButton
                                        onClick={this.handleCaseStudy(numSlideCaseStudy)}
                                        disableRipple
                                        className={classes.section4_carousel_buttons}
                                        disabled={caseIndex + 1 === caseStudyNum}
                                    >
                                        <Icons.IconMenuArrow className={classes.iconArrowBig} />
                                    </IconButton>
                                </div>
                            </motion.div>

                        </motion.div>
                        <motion.div variants={commonMotion.elementTransition} id={'section4.2'} className={clsx(classes.divColumn, classes.divCenter, isAutoPlay ? classes.fullWidth : classes.halfWidth, classes.section4_info)} >
                            <div className={clsx(classes.section4_info_stars)} />
                            <Typography className={clsx(classes.text40, classes.textLimitMultiline, classes.section4_info_text)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_4_HEADER_1}
                                    components={{ span: <span /> }}
                                    values={{
                                        custom: clsx(classes.section4_info_text_1)
                                    }}
                                />
                            </Typography>
                            <Link to={Utils.i18Link(t, caseStudiLink)} className={classes.textLinkHidden}>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    endIcon={<Icons.IconMenuArrow className={classes.iconArrow} />}
                                >
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_4_BUTTON_1}
                                    />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                </InViewElement >
            </div>
        )
    }

    renderSection4MultiCaseStudy(parentIndex, len, total)
    {
        const { classes } = this.props

        return (
            <div key={`case-study-parent-${parentIndex}`} className={clsx(classes.divColumn, classes.section4_carousel_multi_item_container)}>
                {
                    Array.apply(0, Array(len))
                        .map((value, index) =>
                        {
                            let childIndex = (parentIndex * len) + index
                            return (
                                this.renderSection4CaseStudy(childIndex, total)
                            )
                        })
                }
            </div>
        )

    }

    renderSection4CaseStudy(index, total)
    {
        if (index < 0 || index >= total)
        {
            return null
        }

        const {
            classes,
            t
        } = this.props

        const LOGO = Utils.i18Image(t, ID.HOME[`SECTION_4_LOGO_${index + 1}`])
        // const TEXT = t(ID.HOME[`SECTION_4_TEXT_${index + 1}`])
        const TITILE = t(ID.HOME[`SECTION_4_TITLE_${index + 1}`])
        const SUBTITILE = t(ID.HOME[`SECTION_4_SUBTITLE_${index + 1}`])

        const path = Utils.getUrl(LOGO)

        return (
            <div key={`case-study-${index}`} className={clsx(classes.divRow, classes.divCenter, classes.divBox)}>
                <div className={classes.section4_logo_container}>
                    <img alt={LOGO} src={path} className={classes.imgMotionContain} />
                </div>
                <div className={clsx(classes.divColumn, classes.divLeft)}>
                    <Typography className={clsx(classes.text18, classes.textLimitMultiline, classes.section4_case_study_text)}>
                        <Trans
                            i18nKey={ID.HOME[`SECTION_4_TEXT_${index + 1}`]}
                            components={{ span: <span /> }}
                            values={{
                                custom: clsx(classes.section4_text_1)
                            }}
                        />
                    </Typography>
                    <Typography className={clsx(classes.text18, classes.section4_case_study_title)}>{TITILE}</Typography>
                    <Typography className={clsx(classes.text14, classes.section4_case_study_subtitle)}>{SUBTITILE}</Typography>
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
            <div id={'section5'} className={clsx(classes.divColumn, classes.section, classes.section5)}>
                <InViewElement variants={commonMotion.groupTransition}>
                    <motion.div variants={commonMotion.elementTransition} id={'section5.1'} className={clsx(classes.divRow, classes.divBetween)}>

                        <Typography className={clsx(classes.textBreak, classes.text40, classes.section5_txt1)}>
                            <Trans
                                i18nKey={ID.HOME.SECTION_5_TEXT_1}
                            />
                        </Typography>

                        {
                            !isAutoPlay &&
                            <div className={classes.section5_btn1}>
                                <Link to={Utils.i18Link(t, ID.HOME.SECTION_5_BUTTON_1_LINK)} className={classes.textLinkHidden}>
                                    <Button
                                        variant={'contained'}
                                        color={'primary'}
                                        endIcon={<Icons.IconMenuArrow className={classes.iconArrow} />}
                                    >
                                        <Trans
                                            i18nKey={ID.HOME.SECTION_5_BUTTON_1}
                                        />
                                    </Button>
                                </Link>
                            </div>
                        }

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

                    {
                        isAutoPlay &&
                        <motion.div variants={commonMotion.elementTransition} id={'section5.3'} className={classes.section5_btn1}>
                            <Link to={Utils.i18Link(t, ID.HOME.SECTION_5_BUTTON_1_LINK)} className={classes.textLinkHidden}>
                                <Button
                                    variant={'contained'}
                                    color={'primary'}
                                    endIcon={<Icons.IconMenuArrow className={classes.iconArrow} />}
                                >
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_5_BUTTON_1}
                                    />
                                </Button>
                            </Link>
                        </motion.div>
                    }
                </InViewElement>
            </div>
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
                            className={classes.imgMotion}
                            whileHover={{
                                scale: 1.1
                            }}
                            transition={commonMotion.transition}
                        />
                    </div>

                    <div className={clsx(classes.divColumn, classes.divLeft)} style={{ flex: 10 }}>
                        <div style={{ flex: 3 }}>
                            <Typography className={clsx(classes.text12, classes.section5_date)}>{DATE}</Typography>
                        </div>
                        <div style={{ flex: 7 }}>
                            <Typography className={clsx(classes.text18, classes.section5_title)}>{TITILE}</Typography>
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
                    <motion.div variants={commonMotion.elementTransition} id={'section6.1'} className={clsx(classes.divColumn, classes.section6_text_root)}>
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
                            <motion.div variants={commonMotion.hashTagTransition} id={'down-arrow'}
                                className={classes.section6_bg_arrow}
                                style={{
                                    backgroundImage: `url('${Utils.getUrl(t(ID.IMAGE.HOME_6_1))}')`
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </InViewElement>


                <InViewElement variants={commonMotion.groupTransition} style={{ flex: 2 }}>
                    <motion.div variants={commonMotion.elementTransition} id={'section6.2'} className={clsx(classes.divColumn, classes.section6_dialog_root)}>

                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow, classes.divBetween, classes.section6_dialog1, classes.section6_dialog1_pos)}>
                            <Typography component={'div'} className={clsx(classes.textBreakForce, classes.text25, classes.section6_dialog1_txt)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_6_TEXT_3}
                                />
                                {/* <InViewElement variants={commonMotion.groupTextTransition(0.08)}>
                                    {

                                        t(ID.HOME.SECTION_6_TEXT_3).split('').map((char, index) => (
                                            <motion.span key={index} variants={commonMotion.textTransition}>{char}</motion.span>
                                        ))
                                    }
                                </InViewElement> */}
                            </Typography>
                            <div className={classes.section6_dialog1_avatar_container}>
                                <img alt={ID.HOME.SECTION_6_IMG_3_1} src={Utils.getUrl(Utils.i18Image(t, ID.HOME.SECTION_6_IMG_3_1))} className={classes.imgMotionContain} />
                            </div>
                            <div className={classes.section6_dialog1_hash_tag_container}>
                                <motion.img variants={commonMotion.hashTagTransition} alt={ID.HOME.SECTION_6_IMG_3_2} src={Utils.getUrl(Utils.i18Image(t, ID.HOME.SECTION_6_IMG_3_2))} className={classes.imgMotionContain} />
                            </div>
                        </motion.div>

                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow, classes.divBetween, classes.section6_dialog2, classes.section6_dialog2_pos)}>
                            <Typography component={'div'} className={clsx(classes.textBreak, classes.text25, classes.section6_dialog2_txt)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_6_TEXT_4}
                                />
                                {/* <InViewElement variants={commonMotion.groupTextTransition(0.05)}>
                                    {

                                        t(ID.HOME.SECTION_6_TEXT_4).split('').map((char, index) => (
                                            <motion.span key={index} variants={commonMotion.textTransition}>{char}</motion.span>
                                        ))
                                    }
                                </InViewElement> */}
                            </Typography>
                            <div className={classes.section6_dialog2_avatar_container}>
                                <img alt={ID.HOME.SECTION_6_IMG_4_1} src={Utils.getUrl(Utils.i18Image(t, ID.HOME.SECTION_6_IMG_4_1))} className={classes.imgMotionContain} />
                            </div>
                            <div className={classes.section6_dialog2_hash_tag_container}>
                                <motion.img variants={commonMotion.hashTagTransition} alt={ID.HOME.SECTION_6_IMG_4_2} src={Utils.getUrl(Utils.i18Image(t, ID.HOME.SECTION_6_IMG_4_2))} className={classes.imgMotionContain} />
                            </div>
                        </motion.div>

                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow, classes.divBetween, classes.section6_dialog3, classes.section6_dialog3_pos)}>
                            <Typography component={'div'} className={clsx(classes.textBreakForce, classes.text25, classes.section6_dialog3_txt)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_6_TEXT_5}
                                />
                                {/* <InViewElement variants={commonMotion.groupTextTransition(0.1)}>
                                    {

                                        t(ID.HOME.SECTION_6_TEXT_5).split('').map((char, index) => (
                                            <motion.span key={index} variants={commonMotion.textTransition}>{char}</motion.span>
                                        ))
                                    }
                                </InViewElement> */}
                            </Typography>
                            <div className={classes.section6_dialog3_avatar_container}>
                                <img alt={ID.HOME.SECTION_6_IMG_5_1} src={Utils.getUrl(Utils.i18Image(t, ID.HOME.SECTION_6_IMG_5_1))} className={classes.imgMotionContain} />
                            </div>
                            <div className={classes.section6_dialog3_hash_tag_container}>
                                <motion.img variants={commonMotion.hashTagTransition} alt={ID.HOME.SECTION_6_IMG_5_2} src={Utils.getUrl(Utils.i18Image(t, ID.HOME.SECTION_6_IMG_5_2))} className={classes.imgMotionContain} />
                            </div>
                        </motion.div>
                    </motion.div>
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

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withWidth()
)(Home);

