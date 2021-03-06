import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import { Link, withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import compose from 'recompose/compose'

import Utils from '../Utils'
import PageUnderContruction from '../Components/PageError/PageUnderContruction';
import { withWidth, Typography, Button, GridList, Grid, isWidthDown, isWidthUp } from '@material-ui/core';

import InViewElement from '../Components/InViewElement'

import * as Icons from '../Components/NekoIcons'
import SendEmail from '../Components/SendEmail';

const QUESTION_SPACING = 20

const diagonalFrames = (color1 = 'black', color2 = 'transparent', angle = 'to right top', step = 1) =>
{
    let result = Array.apply(0, Array((100 * step) + 1))
        .reduce((frames, _, index) =>
        {
            let key = `${index / step}%`
            let value = {
                backgroundImage: `linear-gradient(${angle}, ${color1} ${key}, ${color2} 100%)`
            }
            frames[key] = value

            return frames
        }, {})

    console.log('diagonalFrames', result)
    return result
}

const styles = theme => ({
    section1: {
        backgroundImage: `linear-gradient(${theme.palette.primary.secondary}, ${theme.palette.primary.main})`,
    },

    section1_txt1: {
        color: 'white',
        ...breakpointsStyle(theme,
            {
                key: ['maxWidth'],
                value: [50],
                variant: [-10],
                unit: ['%']
            }
        ),
        textAlign: 'left',
        marginTop: 'calc(var(--spacing) / 2)',
        marginBottom: 'calc(var(--spacing) / 3)'
    },

    section1_txt2: {
        color: 'white',
        opacity: 0.25,
        ...breakpointsStyle(theme,
            {
                key: ['maxWidth'],
                value: [45],
                variant: [-10],
                unit: ['%']
            }
        ),
        textAlign: 'left',
        marginBottom: 'calc(var(--spacing) / 3)'
    },

    section1_txt3: {
        color: 'white',
        ...breakpointsStyle(theme,
            {
                key: ['maxWidth'],
                value: [40],
                variant: [-10],
                unit: ['%']
            }
        ),
        textAlign: 'left',
        marginBottom: 'calc(var(--spacing) / 4)'
    },

    section1_txt4: {
        color: 'white',
        ...breakpointsStyle(theme,
            {
                key: ['maxWidth'],
                value: [40],
                variant: [-10],
                unit: ['%']
            }
        ),
        textAlign: 'left',
        marginBottom: 'calc(var(--spacing) / 4)'
    },

    section1_button1: {
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: '#191919',
        },
        '&:active': {
            backgroundColor: '#323232',
        },
        marginBottom: 'calc(var(--spacing) / 2)'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section2: {

    },

    section2_txt1: {
        textAlign: 'center',
        marginTop: 'calc(var(--spacing) / 3)',
        marginBottom: 'calc(var(--spacing) / 3)'
    },

    section2_txt_title: {
        textAlign: 'center',
        marginBottom: 'calc(var(--spacing) / 4)',
        ...breakpointsStyle(theme,
            {
                key: ['maxWidth'],
                value: [70],
                variant: [-10],
                unit: ['%']
            }
        ),
    },

    section2_txt_description: {
        textAlign: 'center',
        marginBottom: 'calc(var(--spacing) / 4)',
        ...breakpointsStyle(theme,
            {
                key: ['maxWidth'],
                value: [80],
                variant: [-10],
                unit: ['%']
            }
        ),
    },

    section2_img_container: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [200, 200],
                variant: [20, 20],
                unit: ['px', 'px']
            }
        ),
        marginBottom: 'calc(var(--spacing) / 4)',
        position: 'relative'
    },

    section2_img: {
        width: 'auto',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section3: {
        backgroundColor: '#F8F8F8',
        ...breakpointsStyle(theme,
            {
                key: ['minHeight'],
                value: [500],
                variant: [10],
                unit: ['px']
            }
        ),
    },

    section3_txt1: {
        marginLeft: '50%',
        ...breakpointsStyle(theme,
            {
                key: ['marginRight'],
                value: [10],
                variant: [2],
                unit: ['%']
            }
        ),
        marginTop: 'calc(var(--spacing) / 2)',
        marginBottom: 'calc(var(--spacing) / 4)',
        textAlign: 'left',

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },

    section3_button1_container: {
        marginLeft: '50%',

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },

    section3_button1: {
        backgroundImage: `linear-gradient(to right,  ${theme.palette.primary.main} 0%, ${theme.palette.primary.secondary} 100%)`,
        marginBottom: 'calc(var(--spacing) / 2)',

        // '&:hover': {
        //     backgroundImage: `linear-gradient(to right,  #464b87 0%, #d95f5a 100%)`,
        // },
        // '&:active': {
        //     backgroundImage: `linear-gradient(to right,  #3e4378 0%, #c15450 100%)`,
        // },

        ...breakpointsStyle(theme,
            {
                key: ['width'],
                value: [280],
                variant: [10],
                variantSM: [-5],
                unit: ['px']
            }
        ),

        transition: 'background 0.3s ease-out',

        '&:hover': {
            background: `linear-gradient(to right,  ${theme.palette.primary.main} 0%, #3e4378 100%)`,
            ...breakpointsStyle(theme,
                {
                    key: ['backgroundPosition'],
                    value: [280],
                    variant: [10],
                    variantSM: [-5],
                    unit: ['px']
                }
            ),
        }
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section4: {
        position: 'relative',
        marginTop: 'calc(var(--spacing) / 2)',
        marginBottom: 'calc(var(--spacing) / 2)'
    },

    section4_txt1: {
        color: theme.palette.primary.main,
        textAlign: 'left',
        marginLeft: QUESTION_SPACING,
        marginRight: 0,
        marginBottom: 60,

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },

    section4_txt2: {
        textAlign: 'left',
        marginLeft: QUESTION_SPACING,
        marginRight: 0,
        marginBottom: 15,
        fontWeight: 'bold',

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },

    section4_txt3: {
        textAlign: 'left',
        marginLeft: QUESTION_SPACING,
        marginRight: 0,
        fontWeight: 'normal',

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },

    section4_txt_question_container: {
        maxHeight: '100%'
    },

    section4_txt_question_mask: {
        position: 'absolute',
        right: '100%',
        width: 'auto',
        zIndex: -1,
        // fixed: image doesn't v-align to text
        // paddingTop: 15
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section5: {
        backgroundImage: `linear-gradient(${theme.palette.primary.secondary}, #FFFFFF)`,
    },

    section5_txt1: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 'calc(var(--spacing) / 2)'
    },

    section5_txt2: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 'calc(var(--spacing) / 2)'
    },

    section5_form_container: {
        ...breakpointsStyle(theme,
            {
                key: ['width'],
                value: [50],
                variant: [-10],
                unit: ['%']
            }
        ),
        backgroundColor: '#FFFFFF',

        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },

    section5_form_send_button: {
        // backgroundImage: `linear-gradient(to right,  ${theme.palette.primary.main} 0%, ${theme.palette.primary.secondary} 100%)`,
        // '&:hover': {
        //     animationName: '$diagonal-hover',
        //     animationDuration: '0.3s',
        //     animationTimingFunction: 'linear',
        //     animationIterationCount: '1',
        //     animationFillMode: 'forwards',
        //     animationDirection: 'alternate'
        // },

        // '&:hover-backward': {
        //     animationName: '$diagonal-hover',
        //     animationDuration: '0.3s',
        //     animationTimingFunction: 'linear',
        //     animationIterationCount: '1',
        //     animationFillMode: 'forwards',
        //     animationDirection: 'reverse'
        // }

        ...breakpointsStyle(theme,
            {
                key: ['width'],
                value: [280],
                variant: [10],
                variantSM: [5],
                unit: ['px']
            }
        ),

        background: `linear-gradient(to right,  ${theme.palette.primary.main} 0%, ${theme.palette.primary.secondary} 100%)`,
        transition: 'background 0.3s ease-out',

        '&:hover': {
            background: `linear-gradient(to right,  ${theme.palette.primary.main} 0%, #3e4378 100%)`,
            ...breakpointsStyle(theme,
                {
                    key: ['backgroundPosition'],
                    value: [280],
                    variant: [10],
                    variantSM: [5],
                    unit: ['px']
                }
            ),
        }
    },

    '@keyframes diagonal-hover': diagonalFrames(theme.palette.primary.main, theme.palette.primary.secondary, 'to right', 10)
});

class Streamline extends React.Component
{
    renderSection1() 
    {
        const {
            classes,
            t,
            width
        } = this.props;

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section1-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section1'} className={clsx(classes.divColumn, classes.divCenter, classes.divLeft, classes.section, classes.section1)}>
                    <Typography className={clsx(classes.textLimitMultiline, classes.text125, classes.section1_txt1)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_1_TEXT_1}
                        />
                    </Typography>

                    <Typography className={clsx(classes.textLimitMultiline, classes.text50, classes.section1_txt2)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_1_TEXT_2}
                        />
                    </Typography>

                    <Typography className={clsx(classes.textLimitMultiline, classes.text25, classes.section1_txt3)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_1_TEXT_3}
                        />
                    </Typography>

                    <Typography className={clsx(classes.textLimitMultiline, classes.text25, classes.section1_txt4)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_1_TEXT_4}
                        />
                    </Typography>

                    <Link to={Utils.i18Link(t, ID.STREAMLINE.SECTION_1_LINK_1)} className={classes.textLinkHidden}>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            endIcon={<Icons.IconMenuArrow className={classes.iconArrow} />}
                            type={'submit'}
                            classes={{ containedPrimary: classes.section1_button1 }}
                        >
                            <Trans
                                i18nKey={ID.STREAMLINE.SECTION_1_BUTTON_1}
                            />
                        </Button>
                    </Link>
                </motion.div>
            </InViewElement>
        )

    }

    renderSection2() 
    {
        const {
            classes,
            t,
            width
        } = this.props;

        const gridSpacing = {
            xl: 8,
            lg: 6,
            md: 4,
            sm: 3,
            xs: 2
        }

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section2-${width}`}>
                <div id={'section2'} className={clsx(classes.divColumn, classes.divCenter, classes.section, classes.divDot, classes.section2)}>
                    <Grid container spacing={gridSpacing[width]}>
                        <Grid item xs={12}>
                            <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.divCenter, classes.fullWidth)}>
                                <Typography className={clsx(classes.textLimitMultiline, classes.text75, classes.section2_txt1)} >
                                    <Trans
                                        i18nKey={ID.STREAMLINE.SECTION_2_HEADER}
                                    />
                                </Typography>
                            </motion.div>
                        </Grid>
                        {
                            Array.apply(0, Array(3))
                                .map((_, index) => (
                                    <Grid key={index} item md={4} xs={12}>
                                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.divCenter, classes.fullWidth)}>
                                            <div className={classes.section2_img_container}>
                                                <img
                                                    alt={ID.STREAMLINE[`SECTION_2_IMG_${index + 1}`]}
                                                    src={Utils.getUrl(Utils.i18Image(t, ID.STREAMLINE[`SECTION_2_IMG_${index + 1}`]))}
                                                    className={clsx(classes.imgMotionContain, classes.section2_img)}
                                                />
                                            </div>
                                            <Typography className={clsx(classes.text40, classes.section2_txt_title)} >
                                                <Trans
                                                    i18nKey={ID.STREAMLINE[`SECTION_2_TITLE_${index + 1}`]}
                                                />
                                            </Typography>

                                            <Typography className={clsx(classes.text18, classes.section2_txt_description)} >
                                                <Trans
                                                    i18nKey={ID.STREAMLINE[`SECTION_2_DESCRIPTION_${index + 1}`]}
                                                />
                                            </Typography>

                                        </motion.div>
                                    </Grid>
                                ))
                        }

                    </Grid>
                </div>
            </InViewElement>
        )
    }

    renderSection3() 
    {
        const {
            classes,
            t,
            width
        } = this.props;

        const isSmallScreen = isWidthDown('sm', width)

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section3-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section3'} className={clsx(classes.divColumn, isSmallScreen ? classes.divBottom : classes.divCenter, classes.divLeft, classes.section, classes.section3)}>
                    <Typography className={clsx(classes.textLimitMultiline, classes.text40, classes.section3_txt1)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_3_TEXT_1}
                        />
                    </Typography>
                    <Link to={Utils.i18Link(t, ID.STREAMLINE.SECTION_3_LINK_1)} className={clsx(classes.textLinkHidden, classes.section3_button1_container)}>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            endIcon={<Icons.IconMenuArrow className={classes.iconArrow} />}
                            type={'submit'}
                            classes={{ containedPrimary: classes.section3_button1 }}
                        >
                            <Trans
                                i18nKey={ID.STREAMLINE.SECTION_3_BUTTON_1}
                            />
                        </Button>
                    </Link>
                </motion.div>
            </InViewElement>
        )
    }

    renderSection4() 
    {
        const {
            classes,
            t,
            width
        } = this.props;

        const isSmallScreen = isWidthDown('sm', width)

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section4-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section4'} className={clsx(classes.divRow, classes.divCenter, classes.section, classes.section4)} style={{ flex: 2 }}>
                    <div className={clsx(classes.section4_txt_question_container)} style={{ flex: isSmallScreen ? 0 : 1 }}>
                        {
                            // empty space
                        }
                    </div>

                    <div className={clsx(classes.divColumn, classes.divLeft)} style={{ flex: 1, position: 'relative' }}>
                        {
                            !isSmallScreen &&
                            <img
                                className={clsx(classes.imgMotionContain, classes.section4_txt_question_mask)}
                                alt={t(ID.IMAGE.STREAMLINE_QUESTION_MARK)}
                                src={Utils.getUrl(t(ID.IMAGE.STREAMLINE_QUESTION_MARK))}
                            />
                        }
                        <Typography className={clsx(classes.textLimitMultiline, classes.text75, classes.section4_txt1)} >
                            <Trans
                                i18nKey={ID.STREAMLINE.SECTION_4_TEXT_1}
                            />
                        </Typography>
                        <Typography className={clsx(classes.textLimitMultiline, classes.text25, classes.section4_txt2)} >
                            <Trans
                                i18nKey={ID.STREAMLINE.SECTION_4_TEXT_2}
                            />
                        </Typography>
                        <Typography className={clsx(classes.textLimitMultiline, classes.text25, classes.section4_txt3)} >
                            <Trans
                                i18nKey={ID.STREAMLINE.SECTION_4_TEXT_3}
                            />
                        </Typography>
                    </div>
                </motion.div>
            </InViewElement>
        )
    }

    renderSection5() 
    {
        const {
            classes,
            t,
            width
        } = this.props;

        const isSmallScreen = isWidthDown('sm', width)

        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section5-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section5'} className={clsx(classes.divColumn, classes.divCenter, classes.section, classes.section5)}>
                    <Typography className={clsx(classes.textBreak, isSmallScreen ? classes.text50 : classes.text75, classes.section5_txt1)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_5_TEXT_1}
                        />
                    </Typography>
                    <Typography className={clsx(classes.textLimitMultiline, classes.text25, classes.section5_txt2)} >
                        <Trans
                            i18nKey={ID.STREAMLINE.SECTION_5_TEXT_2}
                        />
                    </Typography>
                    <div className={classes.section5_form_container}>
                        <SendEmail classes={{
                            sendButton: classes.section5_form_send_button
                        }} />
                    </div>
                </motion.div>
            </InViewElement>
        )
    }

    render()
    {
        const { classes, t } = this.props;
        // console.log('Streamline::render', this.props)
        return (
            <motion.div
                className={clsx(classes.root, classes.spacing)}
                initial={'in'}
                animate={'in'}
                exit={'out'}
                transition={commonMotion.transition}
                variants={commonMotion.pageTransition}
            >
                {
                    this.renderSection1()
                }
                {
                    this.renderSection2()
                }
                {
                    this.renderSection3()
                }
                {
                    this.renderSection4()
                }
                {
                    this.renderSection5()
                }
            </motion.div>
        );
    }
}

Streamline.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withWidth()
)(Streamline);

