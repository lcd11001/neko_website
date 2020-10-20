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
import { Button, Divider, IconButton, Typography } from '@material-ui/core';

import * as Icons from '../Components/NekoIcons'

import { HomeMenu } from '../Data/Defines'
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

import AspectRatio from '../Components/AspectRatio'

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',

        '& div:first-child': {
            paddingTop: '0 !important'
        },
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
        paddingTop: '8%',
        paddingBottom: '5%',
        ...breakpointsStyle(theme,
            {
                key: ['paddingLeft', 'paddingRight'],
                value: [15, 15],
                variant: [3, 3],
                unit: ['%', '%']
            }
        ),
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section1: {

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
                value: [50, 65],
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
        backgroundColor: 'rgb(195, 228, 226)',
        backgroundImage: `url(${Utils.getImageUrl('home/specialized_digital.png')})`,
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    },

    section2_txt1: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingBottom'],
                value: [8],
                variant: [0.5],
                unit: ['%']
            }
        ),
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: 'uppercase'
    },

    menuLink: {
        color: 'white'
    },

    menuItem: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height', 'paddingBottom'],
                value: [30, 40, 40],
                variant: [5, 5, 8],
                unit: ['px', 'px', 'px']
            }
        ),
        fontWeight: 300,
        textAlign: 'left',
        color: 'inherit',

        transition: theme.transitions.create(['color', 'font-weight'], {
            duration: 300
        }),

        '&--hover': {
            fontWeight: 600,
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
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section3: {

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
        fontWeight: 400,
        textAlign: 'left',
        color: 'inherit',
    },

    section3_img1: {
        objectFit: 'contain',
        width: '30%'
    },

    section3_img2: {
        objectFit: 'contain',
        width: '15%',
        backgroundColor: `${theme.palette.primary.secondary}1E`,
        borderRadius: '50%',
        marginRight: 10
    },

    section3_divider: {
        width: '90%',
        height: 2,
        color: '#707070',
        margin: '10px 0'
    },

    section3_carousel: {
        height: '25vw',
        // backgroundColor: 'red'
    },

    section3_logo: {
        width: '100%',
        padding: '10%'
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
        textAlign: 'justify',
        textJustify: 'inter-word',
        ...breakpointsStyle(theme,
            {
                key: ['line-height'],
                value: [32],
                variant: [3],
                unit: ['px']
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
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [75, 89],
                variant: [10, 10],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 600
    },

    section5_btn1: {

    },

    section5_blogs: {
        alignItems: 'flex-start',
        '& div:first-child': {
            marginLeft: '0 !important'
        },

        '& div:last-child': {
            marginRight: '0 !important'
        },
        paddingTop: 20
    },

    section5_blog: {
        ...breakpointsStyle(theme,
            {
                key: ['margin'],
                value: [20,],
                variant: [3],
                unit: ['px']
            }
        )
    },

    section5_div_img: {
        overflow: 'hidden',
        ...breakpointsStyle(theme,
            {
                key: ['borderRadius'],
                value: [20],
                variant: [3],
                unit: ['px']
            }
        )
    },

    section5_img: {
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
    },

    section5_title: {
        textAlign: 'left',
        fontWeight: 'bold'
    },
});

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            caseIndex: 0,
            caseStudyNum: props.t(ID.HOME.SECTION_4_CASE_STUDY_NUM)
        }

        this.carouselCaseStudyRef = React.createRef()
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

    handleCaseStudy = (delta) => (evt) => {
        this.setState(
            (state, props) => ({
                caseIndex: ((state.caseIndex + delta) + state.caseStudyNum) % state.caseStudyNum
            }),
            () => {
                this.carouselCaseStudyRef.current.pressIndicator(this.state.caseIndex)
            }
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection1 = () => {
        const { classes, t } = this.props

        return (
            <div id={'section1'} className={clsx(classes.divColumn, classes.section, classes.section1)}>
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
                            <Link to={Utils.i18Link(t, ID.HOME.SECTION_1_BUTTON_1_LINK)} className={classes.textLinkHidden}>
                                <Button variant={'contained'} color={'primary'}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_1_BUTTON_1}
                                    />
                                    <Icons.IconMenuArrow className={classes.iconArrow} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <img alt={'but_chi_nho.png'} src={Utils.getImageUrl('home/but_chi_nho.png')} className={classes.section1_img1} />
                </div>
                <div id={'section1.2'} className={clsx(classes.divRow, classes.divCenter)} style={{ paddingTop: 10 }}>
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
                        <Typography className={clsx(classes.textBreak, classes.textSubTitle, classes.section1_txt3)}>
                            <Trans
                                i18nKey={ID.HOME.SECTION_1_TEXT_3}
                                components={{ span: <span /> }}
                                values={{
                                    custom: clsx(classes.secondaryText)
                                }}
                            />
                        </Typography>
                        <div className={classes.section1_btn1}>
                            <Link to={Utils.i18Link(t, ID.HOME.SECTION_1_BUTTON_2_LINK)} className={classes.textLinkHidden}>
                                <Button variant={'contained'} color={'primary'}>
                                    <Trans
                                        i18nKey={ID.HOME.SECTION_1_BUTTON_2}
                                    />
                                    <Icons.IconMenuArrow className={classes.iconArrow} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection2 = () => {
        const { classes } = this.props

        return (
            <div id={'section2'} className={clsx(classes.divColumn, classes.section, classes.section2)}>
                <div id={'section2.1'}>
                    <Typography className={clsx(classes.textBreak, classes.textSubTitle, classes.section2_txt1)}>
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
                <Link to={menuLink} className={clsx(classes.menuLink, classes.textLinkHidden)} onMouseEnter={this.handleMouseEnter(menuLink)} onMouseLeave={this.handleMouseLeave(menuLink)}>
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

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection3() {
        const {
            classes
        } = this.props

        const carouselAnim = 'slide'
        // const carouselAnim = 'fade'

        const numLogo = 5
        const totalLogo = 20

        return (
            <div id={'section3'} className={clsx(classes.divColumn, classes.section, classes.section3)}>
                <div id={'section3.1'} className={clsx(classes.divRow, classes.divCenter)}>
                    <img alt={'85.png'} src={Utils.getImageUrl('home/85.png')} className={classes.section3_img1} />
                    <div className={clsx(classes.divColumn, classes.divCenter)} >
                        <div id={'section3.1.a'} className={clsx(classes.divRow, classes.divCenter)}>
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
                        </div>
                        <Divider className={classes.section3_divider} />
                        <div id={'section3.1.b'} className={clsx(classes.divRow, classes.divCenter)}>
                            <img alt={'pen.svg'} src={Utils.getImageUrl('home/pen.svg')} className={classes.section3_img2} />
                            <Typography className={clsx(classes.textBreak, classes.textTitle, classes.section3_txt2)}>
                                <Trans
                                    i18nKey={ID.HOME.SECTION_3_TEXT_2}
                                />
                            </Typography>
                        </div>
                    </div>
                </div>

                <div id={'section3.2'} className={clsx(classes.divRow, classes.divCenter)}>
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
                </div>
            </div>
        )
    }

    renderSection3LogoFade(index, len, total) {
        const {
            classes
        } = this.props

        // console.log('=============')

        return (
            <div key={index} className={clsx(classes.divRow, classes.divCenter, classes.fullHeight)} style={{ flex: len }}>
                {
                    Array.apply(0, Array(len))
                        .map((v, i) => {
                            let name = Utils.zeroPadding((index + i) % total, 2)
                            let path = Utils.getLogoUrl(`${name}.svg`)
                            // console.log('path', path)

                            return (
                                <div key={name} style={{ flex: 1 }}>
                                    <img alt={`${name}.svg`} src={path} className={classes.section3_logo} />
                                </div>
                            )
                        })
                }
            </div >
        )

    }

    renderSection3LogoSlide(index, len, total) {
        return this.renderSection3LogoFade(index * len, len, total)
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection4() {
        const {
            classes,
            t
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
            <div id={'section4'} className={clsx(classes.divColumn, classes.section, classes.section4)}>
                <div id={'section4.1'} className={clsx(classes.divRow, classes.divCenter)}>
                    <Carousel
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
                                .map((value, index) => {
                                    return this.renderSection4CaseStudy(index)
                                })
                        }
                    </Carousel>
                </div>
                <div id={'section4.2'} className={classes.section4_btn1}>
                    <Link to={Utils.i18Link(t, caseStudiLink)} className={classes.textLinkHidden}>
                        <Button variant={'contained'} color={'primary'}>
                            <Trans
                                i18nKey={ID.HOME.SECTION_4_BUTTON_1}
                            />
                            <Icons.IconMenuArrow className={classes.iconArrow} />
                        </Button>
                    </Link>
                </div>
                <div id={'section4.3'} className={clsx(classes.divRow, classes.divBetween)}>
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
                </div>
            </div>
        )
    }

    renderSection4CaseStudy(index) {
        const {
            classes,
            t
        } = this.props

        const LOGO = t(ID.HOME[`SECTION_4_LOGO_${index + 1}`])
        const TEXT = t(ID.HOME[`SECTION_4_TEXT_${index + 1}`])
        const TITILE = t(ID.HOME[`SECTION_4_TITLE_${index + 1}`])

        const path = Utils.getLogoUrl(LOGO)

        return (
            <div key={`case-study-${index}`} className={clsx(classes.divRow, classes.divCenter)}>
                <img alt={LOGO} src={path} className={classes.section4_logo} />
                <div className={clsx(classes.divColumn, classes.divLeft)}>
                    <Typography className={clsx(classes.textTitle, classes.section4_text)}>{TEXT}</Typography>
                    <Typography className={clsx(classes.textTitle, classes.section4_title)}>{TITILE}</Typography>
                </div>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection5() {
        const {
            classes,
            t
        } = this.props

        const totalBlogs = 3

        return (
            <div id={'section5'} className={clsx(classes.divColumn, classes.section, classes.section5)}>
                <div id={'section5.1'} className={clsx(classes.divRow, classes.divBetween)}>
                    <Typography className={clsx(classes.textBreak, classes.section5_txt1)}>
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
                </div>
                <div id={'section5.2'} className={clsx(classes.divRow, classes.divBetween, classes.section5_blogs)} style={{ flex: totalBlogs }}>
                    {
                        Array.apply(0, Array(totalBlogs))
                            .map((value, index) => {
                                return this.renderSection5Blog(index)
                            })
                    }
                </div>
            </div>
        )
    }

    renderSection5Blog(index) {
        const {
            classes,
            t
        } = this.props

        const IMG = t(ID.HOME[`SECTION_5_IMG_${index + 1}`])
        const DATE = t(ID.HOME[`SECTION_5_DATE_${index + 1}`])
        const TITILE = t(ID.HOME[`SECTION_5_TITLE_${index + 1}`])

        const path = Utils.getImageUrl(`home/${IMG}`)

        return (
            <div key={`blog-${index}`} className={clsx(classes.divColumn, classes.divCenter, classes.section5_blog)} style={{ flex: 1 }}>
                <AspectRatio ratio={16 / 9} classes={{ outerWrapper: classes.section5_div_img }}>
                    <img alt={IMG} src={path} className={classes.section5_img} />
                </AspectRatio>
                <div className={clsx(classes.divColumn, classes.divLeft)}>
                    <Typography className={clsx(classes.textSubTitle, classes.section5_date)}>{DATE}</Typography>
                    <Typography className={clsx(classes.textTitle, classes.section5_title)}>{TITILE}</Typography>
                </div>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    render() {
        const { classes } = this.props;
        // console.log('Home::render', this.props)
        return (
            <div className={classes.root}>
                {this.renderSection1()}
                {this.renderSection2()}
                {this.renderSection3()}
                {this.renderSection4()}
                {this.renderSection5()}
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

