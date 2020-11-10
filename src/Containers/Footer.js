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

const SECONDARY_HEIGHT = 500
const SECONDARY_HEIGHT_VARIANT = 50

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
                value: [PRIMARY_PADDING],
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
                key: ['borderRadius', 'height', 'paddingRight', 'paddingLeft'],
                value: [30, SECONDARY_HEIGHT, 150, 150],
                variant: [5, SECONDARY_HEIGHT_VARIANT, 35, 35],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
    },

    bgSecondary: {
        borderRadius: 14,
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
        paddingTop: 10,
        paddingBottom: 10,
        ...breakpointsStyle(theme,
            {
                key: ['fontSize', 'marginTop'],
                value: [10, COPYRIGHT_PADDING],
                variant: [1, COPYRIGHT_PADDING_VARIANT],
                unit: ['px', 'px']
            }
        ),
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
        position: 'relative',
        transform: 'translate(0, -50%) scale(1.5)',
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
                variant: [10, 15],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 600
    },

    subTitle: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height', 'paddingLeft'],
                value: [15, 18, 35],
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
                    variant: [5],
                    unit: ['px']
                }
            ),
        }
    },

    footerLink: {
        color: 'white',
        letterSpacing: '2px',
        transition: theme.transitions.create(['letter-spacing'], {
            duration: 300
        }),

        '&--hover': {
            letterSpacing: '3px',
        }
    }
});

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHover: false
        }
    }

    handleOpenUrl = (url) => (evt) => {
        console.log(url)
        window.open(url, '_blank', undefined, false)
    }

    handleMouseEnter = (evt) => {
        this.setState({
            isHover: true
        })
    }

    handleMouseLeave = (evt) => {
        this.setState({
            isHover: false
        })
    }

    renderSecondary() {
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
                <div className={clsx(classes.divColumn, classes.divCenter, classes.bgSecondary, classes.bgSecondarySize, classes.fullHeight)} style={{ backgroundImage: imgUrl }}>
                    <div className={classTitleContainer}>
                        <div className={clsx(classes.divColumn, classes.divLeft)}>
                            <InViewElement
                                variants={commonMotion.dialogTransition(0, 100, 0, 1)}
                            >
                                <Typography className={clsx(classes.txtWhite, classes.title)}>
                                    <Trans i18nKey={ID.FOOTER.SECONDARY_TITLE} />
                                </Typography>
                            </InViewElement>

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
                </div>
            </div>
        )
    }

    renderPrimary() {
        const { classes, t } = this.props;

        return (
            <div className={clsx(classes.rootPrimary, classes.divColumn, classes.divBetween)}>
                <div className={clsx(classes.divRow, classes.divTop, classes.fullWidth)}>
                    <div id={'logo'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ position: "relative", flex: 3 }}>
                        <div className={classes.logo}>
                            <InViewElement
                                variants={commonMotion.dialogTransition(0, 100, 0, 1)}
                            >
                                <Logo secondary />
                            </InViewElement>
                        </div>
                        <div className={clsx(classes.divColumn, classes.divCenter, classes.divLeft, classes.fullHeight)}>
                            <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT} />
                            </Typography>
                            <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT_EMAIL} />
                            </Typography>
                            <Typography className={clsx(classes.txtWhite, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT_PHONE} />
                            </Typography>
                        </div>
                    </div>
                    <div id={'work'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ flex: 1 }}>
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
                    <div id={'support'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ flex: 1 }}>
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
                    <div id={'social'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ flex: 1 }}>
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
            </div>
        )
    }

    renderCopyright() {
        const { classes, t } = this.props;

        return (
            <div className={clsx(classes.divColumn, classes.divCenter, classes.fullWidth, classes.copyrightContainer)}>
                <div className={clsx(classes.divRow, classes.divCenter, classes.fullWidth)}>
                    <Typography className={clsx(classes.txtWhite, classes.copyright)} align={'center'}>
                        <Trans i18nKey={ID.FOOTER.PRIMARY_COPYRIGHT} />
                    </Typography>
                </div>
            </div>
        )
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={clsx(classes.root, classes.divColumn, classes.divBetween)}>
                {
                    this.renderPrimary()
                }
                {
                    this.renderCopyright()
                }
                {
                    this.renderSecondary()
                }
            </div>
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