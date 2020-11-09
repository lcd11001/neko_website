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
        backgroundColor: '#FFFFFF',
        marginTop: '15vw'
    },

    rootPrimary: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        minHeight: '50vw',
        paddingTop: '30vw',
        ...breakpointsStyle(theme,
            {
                key: ['paddingLeft', 'paddingRight', 'paddingBottom'],
                value: [8, 8, 5],
                variant: [1, 1, 1],
                unit: ['vw', 'vw', 'vw']
            }
        ),
    },

    rootSecondary: {
        width: '83%',
        height: '25vw',
        backgroundColor: theme.palette.primary.secondary,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        ...breakpointsStyle(theme,
            {
                key: ['borderRadius'],
                value: [30],
                variant: [5],
                unit: ['px']
            }
        ),
    },

    txtWhite: {
        color: '#FFF',
        padding: '5px 0'
    },

    copyright: {
        ...breakpointsStyle(theme,
            {
                key: ['fontSize'],
                value: [10],
                variant: [1],
                unit: ['px']
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
                key: ['font-size', 'line-height'],
                value: [15, 18],
                variant: [2.0, 2.5],
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
                variant: [10, 5],
                unit: ['px', 'px']
            }
        ),
    },

    footerLink: {
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
        const { classes,
            location: {
                pathname
            },
            t
        } = this.props;

        let classFooterLink = clsx(classes.footerLink, classes.textLinkHidden, {
            [classes.footerLink + '--hover']: this.state.isHover
        })

        const img = t(ID.IMAGE.FOOTER_1)
        const imgUrl = pathname === t(ID.LINK.ABOUT) ? 'none' : `url(${Utils.getUrl(img)})`

        return (
            <div className={classes.rootSecondary} style={{ backgroundImage: imgUrl }}>
                <div className={clsx(classes.divColumn, classes.divCenter, classes.divRight, classes.fullHeight)} style={{ paddingRight: '4%' }}>
                    <div className={clsx(classes.divColumn, classes.divCenter)}>
                        <Typography className={clsx(classes.txtWhite, classes.title)}>
                            <Trans i18nKey={ID.FOOTER.SECONDARY_TITLE} />
                        </Typography>
                        <Link to={'/form-contact'} className={classFooterLink} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                            <div className={clsx(classes.divRow, classes.divCenter)}>
                                <Typography className={clsx(classes.txtWhite, classes.subTitle)}>
                                    <Trans i18nKey={ID.FOOTER.SECONDARY_SUBTITLE} />
                                </Typography>
                                <Icons.IconMenuArrow className={classes.iconArrow} />
                            </div>
                        </Link>
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
                            <Logo secondary />
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
                <div style={{ padding: '20px 0' }}>
                    <Typography className={clsx(classes.txtWhite, classes.copyright)}>
                        <Trans i18nKey={ID.FOOTER.PRIMARY_COPYRIGHT} />
                    </Typography>
                </div>
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