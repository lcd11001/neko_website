import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import compose from 'recompose/compose'

import Utils from '../Utils'

import { Link } from 'react-router-dom';

import { Button, Divider, Fade, IconButton, Typography, withWidth, isWidthUp, Toolbar, Popover, Tooltip, Avatar, isWidthDown } from '@material-ui/core';

import * as Icons from '../Components/NekoIcons'

import AspectRatio from '../Components/AspectRatio';
import InViewElement from '../Components/InViewElement';

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
        alignItems: 'center'
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
        fontWeight: 'bold'
    },

    section4_txt3: {
        textAlign: 'left',
        whiteSpace: 'pre-wrap',
    },

    section4_box_container_top: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop'],
                value: [100],
                variant: [10],
                unit: ['px']
            }
        ),
    },

    section4_box_container_bottom: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingBottom'],
                value: [100],
                variant: [10],
                unit: ['px']
            }
        ),
    },

    section4_box: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop', 'paddingLeft', 'paddingRight', 'margin'],
                value: [30, 30, 30, 30],
                variant: [5, 5, 5, 5],
                unit: ['px', 'px', 'px', 'px', 'px']
            }
        ),
        backgroundColor: 'white',
        paddingBottom: 0,
        borderRadius: 14
    },

    section4_avatar_outer: {
        ...breakpointsStyle(theme,
            {
                key: ['minWidth'],
                value: [250],
                variant: [40],
                unit: ['px']
            }
        ),
    },

    section4_avatar_inner: {

    },

    section4_avatar: {
        borderRadius: 14,
        border: '1px solid #707070',
        height: '100%',
        width: '100%'
    },

    section4_contact_title: {
        fontWeight: 'bold',
        ...breakpointsStyle(theme,
            {
                key: ['paddingTop'],
                value: [40],
                variant: [5],
                unit: ['px']
            }
        )
    },

    section4_contact_position: {
        color: theme.palette.text.disabled,
        ...breakpointsStyle(theme,
            {
                key: ['paddingBottom'],
                value: [40],
                variant: [5],
                unit: ['px']
            }
        )
    },

    section4_icon_outer: {
        ...breakpointsStyle(theme,
            {
                key: ['minWidth'],
                value: [75],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    section4_icon_inner: {

    },

    section4_icon_1: {
        position: 'absolute',
        top: '20%',
        left: '10%',

        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [80, 80],
                variant: [10, 10],
                unit: ['px', 'px']
            }
        )
    },

    section4_icon_2: {
        position: 'absolute',
        bottom: '0%',
        left: '35%',

        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [60, 60],
                variant: [10, 10],
                unit: ['px', 'px']
            }
        )
    },

    section4_icon_3: {
        position: 'absolute',
        right: '5%',
        bottom: '25%',

        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [150, 150],
                variant: [10, 10],
                unit: ['px', 'px']
            }
        )
    },
})

class About extends React.Component
{
    constructor(props)
    {
        super(props)

        this.refContactBox1 = React.createRef()
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    renderSection1()
    {
        const { classes, width } = this.props;
        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section1-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section1'} className={clsx(classes.section, classes.section1)}>
                    <Typography className={clsx(classes.textBreak, classes.textSubHeader, classes.section1_txt1, classes.section1_txt1_dim)} >
                        <Trans
                            i18nKey={ID.ABOUT.SECTION_1_TEXT_1}
                            components={{ span: <span /> }}
                            values={{
                                custom: clsx(classes.section1_txt1)
                            }}
                        />
                    </Typography>
                </motion.div>
            </InViewElement>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    renderSection2()
    {
        const { classes, width } = this.props;
        const totalColumn = 2
        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section2-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section2'} className={clsx(classes.divRow, classes.divCenter, classes.section, classes.section2)} style={{ flex: totalColumn }}>
                    {
                        Array.apply(0, Array(totalColumn))
                            .map((value, index) => (
                                this.renderSection2Contact(index)
                            ))
                    }
                </motion.div>
            </InViewElement>
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
            <motion.div variants={commonMotion.elementTransition} key={index} id={`section2.${index + 1}`} className={clsx(classes.divColumn, classes.divBetween)} style={{ flex: 1 }}>
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

            </motion.div>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection3()
    {
        const { classes, width } = this.props;
        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section3-${width}`}>
                <motion.div variants={commonMotion.elementTransition} id={'section3'} className={clsx(classes.section, classes.section3)}>
                    <Typography className={clsx(classes.textBreak, classes.textHeader, classes.section3_txt1)} color={'textSecondary'} >
                        <Trans
                            i18nKey={ID.ABOUT.SECTION_3_TEXT_1}
                            components={{ span: <span /> }}
                            values={{
                                custom: clsx(classes.section3_txt1_custom)
                            }}
                        />
                    </Typography>
                </motion.div>
            </InViewElement>
        )
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    renderSection4()
    {
        const { classes, width, t } = this.props;
        return (
            <InViewElement variants={commonMotion.groupTransition} key={`section4-${width}`}>
                <div id={'section4'} className={clsx(classes.divRow2Column, classes.divBetween, classes.section, classes.section4, classes.divDot)} style={{ flex: 5 }}>
                    <motion.div variants={commonMotion.elementTransition} id={'section4.1'} className={clsx(classes.divColumn, classes.divLeft, classes.divBetween, classes.fullHeight)} style={{ flex: 1.2 }}>
                        <Typography className={clsx(classes.textTitle, classes.section4_txt1)} color={'textSecondary'} >
                            <Trans i18nKey={ID.ABOUT.SECTION_4_TEXT_1} />
                        </Typography>
                        <Typography className={clsx(classes.textCaption, classes.section4_txt2)} >
                            <Trans i18nKey={ID.ABOUT.SECTION_4_TEXT_2} />
                        </Typography>
                        <Typography className={clsx(classes.textTitle, classes.section4_txt3)} >
                            <Trans i18nKey={ID.ABOUT.SECTION_4_TEXT_3} />
                        </Typography>
                    </motion.div>

                    {
                        isWidthDown('sm', width) &&
                        <div style={{ padding: 20 }} />
                    }

                    <motion.div variants={commonMotion.elementTransition} id={'section4.2'} className={clsx(classes.divRow, classes.divCenter, classes.divRight, classes.fullHeight)} style={{ flex: 3.8, position: 'relative' }}>
                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.fullHeight, classes.section4_box_container_bottom)} >
                            <div id={'section4.2a'} ref={this.refContactBox1} className={clsx(classes.divColumn, classes.divCenter, classes.divBox, classes.section4_box)} >
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
                        </motion.div>



                        <motion.div variants={commonMotion.elementTransition} className={clsx(classes.fullHeight, classes.section4_box_container_top)} >
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
                        </motion.div>

                        {
                            isWidthUp('md', width) &&
                            <motion.div variants={commonMotion.elementTransition} className={clsx(classes.fullHeight, classes.fullWidth)} style={{ position: 'absolute', zIndex: 1 }}>
                                <Avatar src={Utils.getIconUrl('neko_logo.png')} className={classes.section4_icon_1} />
                                <Avatar src={Utils.getIconUrl('neko_logo.png')} className={classes.section4_icon_2} />
                                <Avatar src={Utils.getIconUrl('neko_logo.png')} className={classes.section4_icon_3} variant={'square'} />
                            </motion.div>
                        }
                    </motion.div>
                </div>
            </InViewElement>
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


export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withWidth()
)(About);