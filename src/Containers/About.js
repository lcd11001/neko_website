import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import { connect } from 'react-redux'
import compose from 'recompose/compose'
import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import Utils from '../Utils'

import { Link } from 'react-router-dom';

import { Button, Divider, Fade, IconButton, Typography, withWidth, isWidthUp, Toolbar } from '@material-ui/core';

import * as Icons from '../Components/NekoIcons'

import AspectRatio from '../Components/AspectRatio';
import { isMatchWith } from 'lodash';

const styles = theme => ({
    section1: {
        backgroundColor: theme.palette.primary.main,
        ...breakpointsStyle(theme,
            {
                key: ['height'],
                value: [25],
                variant: [-2],
                unit: ['vw']
            }
        ),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '5% !important'
    },

    section1_txt1: {
        color: '#FFFFFF'
    },

    section1_txt1_dim: {
        color: '#FFFFFF40'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    section2: {

    },

    section2_title: {
        textTransform: 'uppercase',
        padding: '10% 0',
        fontWeight: 'bold'
    },

    section2_subtitle: {
        padding: '0 15%',
        textAlign: 'center',
        ...breakpointsStyle(theme,
            {
                key: ['minHeight'],
                value: [80],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    section2_img: {
        backgroundColor: theme.palette.primary.secondary,
        ...breakpointsStyle(theme,
            {
                key: ['height', 'width'],
                value: [150, 150],
                variant: [20, 20],
                unit: ['px', 'px']
            }
        ),
        borderRadius: 10,
        transform: 'rotate(-20deg)',
        marginBottom: '10%'
    },

    section2_btn: {
        padding: '10% 0',
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section3: {
        backgroundColor: '#F8F8F8',
        ...breakpointsStyle(theme,
            {
                key: ['height'],
                value: [35],
                variant: [-2],
                unit: ['vw']
            }
        ),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: '5% !important'
    },

    section3_txt1: {
        textAlign: 'center',
        marginRight: '10%'
    },

    section3_txt1_custom: {
        fontWeight: 'bold',
        fontStyle: 'italic'
    },

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    section4: {

    },

    section4_txt1: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },

    section4_txt2: {
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop', 'paddingBottom'],
                value: [50, 50],
                variant: [5, 5],
                unit: ['px', 'px']
            }
        ),
    },

    section4_txt3: {
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
    },

    section4_box: {
        ...breakpointsStyle(theme,
            {
                key: ['padding', 'margin'],
                value: [30, 20],
                variant: [5, 4],
                unit: ['px', 'px']
            }
        ),
        backgroundColor: 'white'
    },

    section4_avatar_outer: {
        minWidth: 150
    },

    section4_avatar_inner: {

    },

    section4_avatar: {
        borderRadius: 10,
        border: '1px solid #707070',
        height: '100%',
        width: '100%'
    },

    section4_contact_title: {
        fontWeight: 'bold',
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop'],
                value: [25],
                variant: [3],
                unit: ['px']
            }
        )
    },

    section4_contact_position: {
        color: '#C3C3C3'
    }
})

class About extends React.Component
{

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    renderSection1()
    {
        const { classes } = this.props;
        return (
            <div id={'section1'} className={clsx(classes.section, classes.section1)}>
                <Typography className={clsx(classes.textBreak, classes.textSubHeader, classes.section1_txt1, classes.section1_txt1_dim)} >
                    <Trans
                        i18nKey={ID.ABOUT.SECTION_1_TEXT_1}
                        components={{ span: <span /> }}
                        values={{
                            custom: clsx(classes.section1_txt1)
                        }}
                    />
                </Typography>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    renderSection2()
    {
        const { classes } = this.props;
        const totalColumn = 2
        return (
            <div id={'section2'} className={clsx(classes.divRow, classes.divCenter, classes.section, classes.section2)} style={{ flex: totalColumn }}>
                {
                    Array.apply(0, Array(totalColumn))
                        .map((value, index) => (
                            this.renderSection2Contact(index)
                        ))
                }
            </div>
        )
    }

    renderSection2Contact(index)
    {
        const {
            classes,
            t
        } = this.props

        const TITILE = t(ID.ABOUT[`SECTION_2_TEXT_${index + 1}_A`])
        const SUB_TITILE = t(ID.ABOUT[`SECTION_2_TEXT_${index + 1}_B`])
        const LINK = Utils.i18Link(t, ID.ABOUT[`SECTION_2_BUTTON_${index + 1}_LINK`])
        const BUTTON = t(ID.ABOUT[`SECTION_2_BUTTON_${index + 1}`])

        return (
            <div key={index} id={`section2.${index + 1}`} className={clsx(classes.divColumn, classes.divBetween)} style={{ flex: 1 }}>
                <div className={classes.section2_img} />
                <Typography className={clsx(classes.textTitle, classes.section2_title)}>{TITILE}</Typography>
                <Typography className={clsx(classes.textSubTitle, classes.section2_subtitle)}>{SUB_TITILE}</Typography>
                <div className={classes.section2_btn}>
                    <Link to={LINK} className={classes.textLinkHidden}>
                        <Button variant={'contained'} color={'primary'}>
                            {BUTTON}
                            <Icons.IconMenuArrow className={classes.iconArrow} />
                        </Button>
                    </Link>
                </div>

            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection3()
    {
        const { classes } = this.props;
        return (
            <div id={'section3'} className={clsx(classes.section, classes.section3)}>
                <Typography className={clsx(classes.textBreak, classes.textHeader, classes.section3_txt1)} color={'textSecondary'} >
                    <Trans
                        i18nKey={ID.ABOUT.SECTION_3_TEXT_1}
                        components={{ span: <span /> }}
                        values={{
                            custom: clsx(classes.section3_txt1_custom)
                        }}
                    />
                </Typography>
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection4()
    {
        const { classes, width } = this.props;
        return (
            <div id={'section4'} className={clsx(classes.divRow, classes.divBetween, classes.section, classes.section4, classes.divDot)} style={{ flex: 6 }}>
                <div id={'section4.1'} className={clsx(classes.divColumn, classes.divLeft, classes.divBetween, classes.fullHeight)} style={{ flex: 2 }}>
                    <Typography className={clsx(classes.textTitle, classes.section4_txt1)} color={'textSecondary'} >
                        <Trans i18nKey={ID.ABOUT.SECTION_4_TEXT_1} />
                    </Typography>
                    <Typography className={clsx(classes.textCaption, classes.section4_txt2)} >
                        <Trans i18nKey={ID.ABOUT.SECTION_4_TEXT_2} />
                    </Typography>
                    <Typography className={clsx(classes.textTitle, classes.section4_txt3)} >
                        <Trans i18nKey={ID.ABOUT.SECTION_4_TEXT_3} />
                    </Typography>
                </div>

                <div id={'section4.2'} className={clsx(classes.divRow, classes.divCenter, classes.divRight, classes.fullHeight)} style={{ flex: 4 }}>
                    <div id={'section4.2a'} className={clsx(classes.divColumn, classes.divCenter, classes.divBox, classes.section4_box)} >
                        <div>
                            <AspectRatio
                                ratio={1}
                                classes={{
                                    outerWrapper: classes.section4_avatar_outer,
                                    innerWrapper: classes.section4_avatar_inner,
                                }}
                            >
                                <div className={clsx(classes.section4_avatar)}>

                                </div>
                            </AspectRatio>
                        </div>
                        <Typography className={clsx(classes.textTitle, classes.section4_contact_title)} >
                            <Trans i18nKey={ID.ABOUT.CONTACT_1} />
                        </Typography>
                        <Typography className={clsx(classes.textNormal, classes.section4_contact_position)} >
                            <Trans i18nKey={ID.ABOUT.CONTACT_1_POSITION} />
                        </Typography>
                    </div>

                    <div id={'section4.2b'} className={clsx(classes.divColumn, classes.divCenter, classes.divBox, classes.section4_box)} >
                        <div>
                            <AspectRatio
                                ratio={1}
                                classes={{
                                    outerWrapper: classes.section4_avatar_outer,
                                    innerWrapper: classes.section4_avatar_inner,
                                }}
                            >
                                <div className={clsx(classes.section4_avatar)}>

                                </div>
                            </AspectRatio>
                        </div>
                        <Typography className={clsx(classes.textTitle, classes.section4_contact_title)} >
                            <Trans i18nKey={ID.ABOUT.CONTACT_2} />
                        </Typography>
                        <Typography className={clsx(classes.textNormal, classes.section4_contact_position)} >
                            <Trans i18nKey={ID.ABOUT.CONTACT_2_POSITION} />
                        </Typography>
                    </div>

                </div>

                {
                    // use MUI popover
                    // isWidthUp('md', width) &&
                    // <div id={'section4.2c'}>
                    //     <AspectRatio ratio={1}>
                    //         <div className={clsx(classes.section4_avatar)} style={{ borderColor: 'green', backgroundColor: 'antiquewhite' }}>

                    //         </div>
                    //     </AspectRatio>
                    // </div>
                }
            </div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    render()
    {
        const { classes } = this.props;
        // console.log('About::render', this.props)
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
                {this.renderSection2()}
                {this.renderSection3()}
                {this.renderSection4()}
            </motion.div>
        );
    }
}

About.propTypes =
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
)(About);