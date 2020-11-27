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
                value: [50],
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
                value: [50],
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
                value: [50],
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
                value: [60],
                variant: [-15],
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

    section2_img: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [200, 200],
                variant: [20, 20],
                unit: ['px', 'px']
            }
        ),
    }
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
                    <Typography className={clsx(classes.textLimitMultiline, classes.text75, classes.section1_txt1)} >
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
                <motion.div variants={commonMotion.elementTransition} id={'section2'} className={clsx(classes.divColumn, classes.divCenter, classes.section, classes.divDot, classes.section2)}>
                    <Grid container spacing={gridSpacing[width]}>
                        <Grid item xs={12}>
                            <Typography className={clsx(classes.textLimitMultiline, classes.text75, classes.section2_txt1)} >
                                <Trans
                                    i18nKey={ID.STREAMLINE.SECTION_2_HEADER}
                                />
                            </Typography>
                        </Grid>
                        {
                            isWidthDown('sm', width) &&
                            Array.apply(0, Array(3))
                                .map((_, index) => (
                                    <Grid key={index} item md={4} xs={12}>
                                        <div className={clsx(classes.divColumn, classes.divCenter, classes.fullWidth)}>
                                            <div className={classes.section2_img}>
                                                <img
                                                    alt={ID.STREAMLINE[`SECTION_2_IMG_${index + 1}`]}
                                                    src={Utils.getUrl(Utils.i18Image(t, ID.STREAMLINE[`SECTION_2_IMG_${index + 1}`]))}
                                                    className={classes.imgMotionContain}
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

                                        </div>
                                    </Grid>
                                ))
                        }
                        {
                            isWidthUp('md', width) &&
                            Array.apply(0, Array(3))
                                .map((_, index) => (
                                    <Grid key={index} item md={4} xs={12}>
                                        <div className={clsx(classes.divColumn, classes.divCenter, classes.fullWidth)}>
                                            <div className={classes.section2_img}>
                                                <img
                                                    alt={ID.STREAMLINE[`SECTION_2_IMG_${index + 1}`]}
                                                    src={Utils.getUrl(Utils.i18Image(t, ID.STREAMLINE[`SECTION_2_IMG_${index + 1}`]))}
                                                    className={classes.imgMotionContain}
                                                />
                                            </div>
                                        </div>
                                    </Grid>
                                ))
                        }
                        {
                            isWidthUp('md', width) &&
                            Array.apply(0, Array(3))
                                .map((_, index) => (
                                    <Grid key={index} item md={4} xs={12}>
                                        <div className={clsx(classes.divColumn, classes.divCenter, classes.fullWidth)}>
                                            <Typography className={clsx(classes.text40, classes.section2_txt_title)} >
                                                <Trans
                                                    i18nKey={ID.STREAMLINE[`SECTION_2_TITLE_${index + 1}`]}
                                                />
                                            </Typography>
                                        </div>
                                    </Grid>
                                ))
                        }
                        {
                            isWidthUp('md', width) &&
                            Array.apply(0, Array(3))
                                .map((_, index) => (
                                    <Grid key={index} item md={4} xs={12}>
                                        <div className={clsx(classes.divColumn, classes.divCenter, classes.fullWidth)}>
                                            <Typography className={clsx(classes.text18, classes.section2_txt_description)} >
                                                <Trans
                                                    i18nKey={ID.STREAMLINE[`SECTION_2_DESCRIPTION_${index + 1}`]}
                                                />
                                            </Typography>
                                        </div>
                                    </Grid>
                                ))
                        }
                    </Grid>
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

