import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { Link, withRouter } from 'react-router-dom'

import { withMultipleStyles, breakpointsStyle, commonStyles, commonMotion } from '../Styles';
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import Logo from './Logo'
import * as Icons from '../Components/NekoIcons'

import { IconButton, isWidthDown, withWidth, Typography } from '@material-ui/core';
import Utils from '../Utils';
import InViewElement from '../Components/InViewElement';
import { motion } from 'framer-motion'

const SECONDARY_HEIGHT = 500
const SECONDARY_HEIGHT_VARIANT = 80

const PRIMARY_PADDING = Math.floor(SECONDARY_HEIGHT * 2 / 3)
const PRIMARY_PADDING_VARIANT = Math.floor(SECONDARY_HEIGHT_VARIANT / 2)

const COPYRIGHT_PADDING = Math.floor((SECONDARY_HEIGHT - PRIMARY_PADDING) / 2)
const COPYRIGHT_PADDING_VARIANT = Math.floor((SECONDARY_HEIGHT_VARIANT - PRIMARY_PADDING_VARIANT) / 2)

const styles = theme => ({
    root: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        ...breakpointsStyle(theme,
            {
                key: ['marginTop'],
                value: [SECONDARY_HEIGHT / 2],
                variant: [PRIMARY_PADDING_VARIANT],
                unit: ['px']
            }
        ),
    },

    rootPrimary: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        ...breakpointsStyle(theme,
            {
                key: ['paddingLeft', 'paddingRight', 'paddingTop'],
                value: [150, 150, PRIMARY_PADDING],
                variant: [35, 35, PRIMARY_PADDING_VARIANT],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        paddingBottom: 0
    },

    rootSecondary: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        ...breakpointsStyle(theme,
            {
                key: ['height', 'paddingRight', 'paddingLeft'],
                value: [SECONDARY_HEIGHT, 150, 150],
                variant: [SECONDARY_HEIGHT_VARIANT, 35, 35],
                unit: ['px', 'px', 'px']
            }
        ),
    },

    bgSecondary: {
        borderRadius: 9,
        backgroundColor: theme.palette.primary.secondary,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',

        ...breakpointsStyle(theme,
            {
                key: ['padding'],
                value: [50],
                variant: [10],
                unit: ['px']
            }
        ),
    },

    bgSecondarySize: {
        backgroundSize: 'cover',

        [theme.breakpoints.down('sm')]: {
            backgroundSize: 'contain'
        }
    },

    txtWhite: {
        color: '#FFF',
        padding: '5px 0'
    },

    txtContact: {
        padding: '10px 0'
    },

    copyrightContainer: {
        backgroundColor: theme.palette.primary.main,
        // ...breakpointsStyle(theme,
        //     {
        //         key: ['paddingTop'],
        //         value: [COPYRIGHT_PADDING],
        //         variant: [COPYRIGHT_PADDING_VARIANT],
        //         unit: ['px']
        //     }
        // ),
    },

    copyright: {
        width: '100%',
        backgroundColor: '#3C4570',
        paddingTop: 15,
        paddingBottom: 15,
        ...breakpointsStyle(theme,
            {
                key: ['marginTop'],
                value: [COPYRIGHT_PADDING],
                variant: [COPYRIGHT_PADDING_VARIANT],
                unit: ['px']
            }
        ),
        color: '#FFFFFF7F'
    },

    caption: {
        ...breakpointsStyle(theme,
            {
                key: ['paddingBottom'],
                value: [54],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    logo: {
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'relative'
    },

    logoRoot: {
        transform: 'translate(0, -30%) scale(1.2)',
        transformOrigin: 'left'
    },

    icon: {
        ...breakpointsStyle(theme,
            {
                key: ['height'],
                value: [24],
                variant: [3],
                unit: ['px']
            }
        ),
        width: 'auto',
        objectFit: 'cover'
    },

    iconButton: {
        padding: 5,
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },

    title: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [60, 75],
                variant: [8, 15],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 600
    },

    subTitle: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height', 'paddingLeft'],
                value: [15, 18, 45],
                variant: [2.0, 2.5, 5],
                unit: ['px', 'px', 'px']
            }
        ),
        fontWeight: 400,
        textTransform: 'uppercase',
        color: 'inherit',
        letterSpacing: 'inherit'
    },

    iconContainer: {
        borderRadius: '50%',
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [63, 60],
                variant: [10, 10],
                unit: ['px', 'px']
            }
        ),
    },

    iconArrow: {
        color: 'inherit',
        ...breakpointsStyle(theme,
            {
                key: ['width', 'marginLeft'],
                value: [63, 30],
                variant: [10, 5],
                unit: ['px', 'px']
            }
        ),

        transition: theme.transitions.create(['width'], {
            duration: 300
        }),

        '&--hover': {
            ...breakpointsStyle(theme,
                {
                    key: ['width'],
                    value: [43],
                    variant: [8],
                    unit: ['px']
                }
            ),
        }
    },

    footerLink: {
        color: 'white',
        letterSpacing: '1px',
        transition: theme.transitions.create(['letter-spacing'], {
            duration: 300
        }),

        '&--hover': {
            letterSpacing: '3px',
        }
    }
});

class Footer extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isHover: false
        }
    }

    handleOpenUrl = (url) => (evt) =>
    {
        console.log(url)
        window.open(url, '_blank', undefined, false)
    }

    handleMouseEnter = (evt) =>
    {
        this.setState({
            isHover: true
        })
    }

    handleMouseLeave = (evt) =>
    {
        this.setState({
            isHover: false
        })
    }

    renderSecondary()
    {
        const { classes,
            location: {
                pathname
            },
            t,
            width
        } = this.props;

        let classFooterLink = clsx(classes.footerLink, classes.textLinkHidden, {
            [classes.footerLink + '--hover']: this.state.isHover
        })

        let classIconArrow = clsx(classes.iconArrow, {
            [classes.iconArrow + '--hover']: this.state.isHover
        })

        const img = t(ID.IMAGE.FOOTER_1)
        const imgUrl = pathname === t(ID.LINK.ABOUT) ? 'none' : `url(${Utils.getUrl(img)})`

        const isSmall = isWidthDown('sm', width)
        const classTitleContainer = clsx(classes.divColumn, classes.divCenter, classes.fullHeight, classes.fullWidth,
            isSmall ? classes.divBottom : classes.divRight
        )

        return (
            <div className={classes.rootSecondary}>
                <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divColumn, classes.divCenter, classes.bgSecondary, classes.bgSecondarySize, classes.fullHeight)} style={{ backgroundImage: imgUrl }}>
                    <div className={classTitleContainer}>
                        <div className={clsx(classes.divColumn, classes.divLeft)}>
                            <Typography className={clsx(classes.txtWhite, classes.title)}>
                                <Trans i18nKey={ID.FOOTER.SECONDARY_TITLE} />
                            </Typography>

                            <Link to={'/form-contact'} className={classFooterLink} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                <div className={clsx(classes.divRow, classes.divCenter)}>
                                    <Typography className={clsx(classes.txtWhite, classes.subTitle)}>
                                        <Trans i18nKey={ID.FOOTER.SECONDARY_SUBTITLE} />
                                    </Typography>
                                    <Icons.IconMenuArrow className={classIconArrow} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }

    renderPrimary()
    {
        const { classes, t } = this.props;

        return (
            <div className={clsx(classes.rootPrimary, classes.divColumn, classes.divBetween)}>
                <motion.div variants={commonMotion.elementTransition} className={clsx(classes.divRow2Column, classes.divTop, classes.fullWidth)}>
                    <div id={'group1'} className={clsx(classes.divRow, classes.divTop, classes.fullWidth)}>
                        <div id={'logo'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ position: "relative", flex: 3, minHeight: 200 }}>
                            <div className={classes.logo} style={{ flex: 2 }}>
                                <Logo secondary classes={{ root: classes.logoRoot }} />
                            </div>
                            <div className={clsx(classes.divColumn, classes.divCenter, classes.divLeft, classes.fullHeight)} style={{ flex: 1 }}>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal, classes.txtContact)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT} />
                                </Typography>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal, classes.txtContact)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT_EMAIL} />
                                </Typography>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal, classes.txtContact)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT_PHONE} />
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div id={'group2'} className={clsx(classes.divRow, classes.divTop, classes.fullWidth)}>
                        <div id={'work'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ flex: 1, minHeight: 200 }}>
                            <div>
                                <Typography className={clsx(classes.txtWhite, classes.textSubTitle, classes.caption)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS} />
                                </Typography>
                            </div>
                            <div>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_BRAND} />
                                </Typography>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_MOTION} />
                                </Typography>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_WEB} />
                                </Typography>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_2D} />
                                </Typography>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_DIGITAL} />
                                </Typography>
                            </div>
                        </div>
                        <div id={'support'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ flex: 1, minHeight: 200 }}>
                            <div>
                                <Typography className={clsx(classes.txtWhite, classes.textSubTitle, classes.caption)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_SUPPORT} />
                                </Typography>
                            </div>
                            <div>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_SUPPORT_CONTACT} />
                                </Typography>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_SUPPORT_POLICY} />
                                </Typography>
                                <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_SUPPORT_TERMS} />
                                </Typography>
                            </div>
                        </div>
                        <div id={'social'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ flex: 1, minHeight: 200 }}>
                            <div>
                                <Typography className={clsx(classes.txtWhite, classes.textSubTitle, classes.caption)}>
                                    <Trans i18nKey={ID.FOOTER.PRIMARY_SOCIAL} />
                                </Typography>
                            </div>
                            <div>
                                <IconButton
                                    className={classes.iconButton}
                                    onClick={this.handleOpenUrl(t(ID.LINK.FACEBOOK))}
                                >
                                    <img className={classes.icon} alt='facebook' src={Utils.getIconUrl('fb.svg')} />
                                </IconButton>
                                <IconButton
                                    className={classes.iconButton}
                                    onClick={this.handleOpenUrl(t(ID.LINK.INSTAGRAM))}
                                >
                                    <img className={classes.icon} alt='instagram' src={Utils.getIconUrl('IG.svg')} />
                                </IconButton>
                                <IconButton
                                    className={classes.iconButton}
                                    onClick={this.handleOpenUrl(t(ID.LINK.YOUTUBE))}
                                >
                                    <img className={classes.icon} alt='youtube' src={Utils.getIconUrl('youtube.svg')} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }

    renderCopyright()
    {
        const { classes, t } = this.props;

        return (
            <div className={clsx(classes.divColumn, classes.divCenter, classes.fullWidth, classes.copyrightContainer)}>
                <div className={clsx(classes.divRow, classes.divCenter, classes.fullWidth)}>
                    <Typography className={clsx(classes.txtWhite, classes.textNormal, classes.copyright)} align={'center'}>
                        <Trans i18nKey={ID.FOOTER.PRIMARY_COPYRIGHT} />
                    </Typography>
                </div>
            </div>
        )
    }

    render()
    {
        const { classes } = this.props;

        return (
            <InViewElement variants={commonMotion.groupTransition}>
                <div className={clsx(classes.root, classes.divColumn, classes.divBetween)}>
                    {
                        this.renderSecondary()
                    }
                    {
                        this.renderPrimary()
                    }
                    {
                        this.renderCopyright()
                    }
                </div>
            </InViewElement>
        );
    }
}

Footer.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withRouter,
    withWidth()
)(Footer);