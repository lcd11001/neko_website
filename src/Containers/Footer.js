import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { Link, withRouter } from 'react-router-dom'

import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import Logo from './Logo'
import * as Icons from '../Components/NekoIcons'

import { IconButton, Typography } from '@material-ui/core';
import Utils from '../Utils';

const styles = theme => ({
    root: {
        position: 'relative',
        backgroundColor: '#FFFFFF'
    },

    rootPrimary: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '66vw',
        padding: '32% 10% 8%'
    },

    rootSecondary: {
        width: '82%',
        height: '30vw',
        backgroundColor: theme.palette.primary.secondary,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -158%)',
        padding: '10% 10% 10% 30%',
        ...breakpointsStyle(theme,
            {
                key: ['borderRadius'],
                value: [30],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    copyright: {
        color: '#FFF',
        padding: '5px 0'
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
                variant: [2],
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
                value: [75, 85],
                variant: [15, 15],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 600
    },

    subTitle: {
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'line-height'],
                value: [20, 24],
                variant: [4, 4],
                unit: ['px', 'px']
            }
        ),
        fontWeight: 400,
        textTransform: 'uppercase',
        color: 'inherit',
    },

    iconArrow: {
        color: 'inherit',
        ...breakpointsStyle(theme,
            {
                key: ['width', 'marginLeft'],
                value: [63, 30],
                variant: [7, 5],
                unit: ['px', 'px']
            }
        ),
    },

    footerLink: {
        textDecoration: 'none',
        color: 'white',
        transition: theme.transitions.create(['color'], {
            duration: 300
        }),

        '&--hover': {
            color: theme.palette.primary.main,
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
        const { classes } = this.props;

        let classFooterLink = clsx(classes.footerLink, {
            [classes.footerLink + '--hover']: this.state.isHover
        })

        return (
            <div className={classes.rootSecondary}>
                <div className={clsx(classes.divColumn, classes.divCenter, classes.fullHeight)}>
                    <Typography className={clsx(classes.copyright, classes.title)}>
                        <Trans i18nKey={ID.FOOTER.SECONDARY_TITLE} />
                    </Typography>
                    <Link to={'/form-contact'} className={classFooterLink} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <div className={clsx(classes.divRow, classes.divCenter)}>
                            <Typography className={clsx(classes.copyright, classes.subTitle)}>
                                <Trans i18nKey={ID.FOOTER.SECONDARY_SUBTITLE} />
                            </Typography>
                            <Icons.IconMenuArrow className={classes.iconArrow} />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

    renderPrimary() {
        const { classes, t } = this.props;

        return (
            <div className={clsx(classes.rootPrimary, classes.divColumn, classes.divBetween)}>
                <div className={clsx(classes.divRow, classes.divBetween, classes.fullWidth)}>
                    <div id={'logo'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)} style={{ position: "relative", minWidth: '50%' }}>
                        <div className={classes.logo}>
                            <Logo secondary />
                        </div>
                        <div className={clsx(classes.divColumn, classes.divCenter, classes.divLeft, classes.fullHeight)}>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT} />
                            </Typography>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT_EMAIL} />
                            </Typography>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_CONTACT_PHONE} />
                            </Typography>
                        </div>
                    </div>
                    <div id={'work'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)}>
                        <div>
                            <Typography className={clsx(classes.copyright, classes.textTitle, classes.caption)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS} />
                            </Typography>
                        </div>
                        <div>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_BRAND} />
                            </Typography>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_MOTION} />
                            </Typography>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_WEB} />
                            </Typography>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_2D} />
                            </Typography>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_WORKS_DIGITAL} />
                            </Typography>
                        </div>
                    </div>
                    <div id={'support'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)}>
                        <div>
                            <Typography className={clsx(classes.copyright, classes.textTitle, classes.caption)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_SUPPORT} />
                            </Typography>
                        </div>
                        <div>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_SUPPORT_CONTACT} />
                            </Typography>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_SUPPORT_POLICY} />
                            </Typography>
                            <Typography className={clsx(classes.copyright, classes.textNormal)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_SUPPORT_TERMS} />
                            </Typography>
                        </div>
                    </div>
                    <div id={'social'} className={clsx(classes.divColumn, classes.divTop, classes.fullHeight)}>
                        <div>
                            <Typography className={clsx(classes.copyright, classes.textTitle, classes.caption)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_SOCIAL} />
                            </Typography>
                        </div>
                        <div>
                            <IconButton
                                className={classes.iconButton}
                                onClick={this.handleOpenUrl(t(ID.FOOTER.PRIMARY_SOCIAL_LINK_FACEBOOK))}
                            >
                                <img className={classes.icon} alt='facebook' src={Utils.getIconUrl('facebook.png')} />
                            </IconButton>
                            <IconButton
                                className={classes.iconButton}
                                onClick={this.handleOpenUrl(t(ID.FOOTER.PRIMARY_SOCIAL_LINK_INSTAGRAM))}
                            >
                                <img className={classes.icon} alt='instagram' src={Utils.getIconUrl('instagram.png')} />
                            </IconButton>
                            <IconButton
                                className={classes.iconButton}
                                onClick={this.handleOpenUrl(t(ID.FOOTER.PRIMARY_SOCIAL_LINK_YOUTUBE))}
                            >
                                <img className={classes.icon} alt='youtube' src={Utils.getIconUrl('youtube.png')} />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <Typography className={clsx(classes.copyright, classes.textNormal)}>
                    <Trans i18nKey={ID.FOOTER.PRIMARY_COPYRIGHT} />
                </Typography>
            </div>
        )
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={clsx(classes.root, classes.divRow, classes.divBetween)}>
                {
                    this.renderPrimary()
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
    withRouter
)(Footer);