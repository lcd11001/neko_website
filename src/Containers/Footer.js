import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { withRouter } from 'react-router-dom'

import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import Logo from './Logo'

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
        borderRadius: 30
    },

    copyright: {
        color: '#FFF',
        padding: '5px 0'
    },

    title: {
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
    }
});

class Footer extends React.Component {
    renderSecondary() {
        const { classes } = this.props;

        return (
            <div className={classes.rootSecondary}>

            </div>
        )
    }

    renderPrimary() {
        const { classes } = this.props;

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
                            <Typography className={clsx(classes.copyright, classes.textTitle, classes.title)}>
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
                            <Typography className={clsx(classes.copyright, classes.textTitle, classes.title)}>
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
                            <Typography className={clsx(classes.copyright, classes.textTitle, classes.title)}>
                                <Trans i18nKey={ID.FOOTER.PRIMARY_SOCIAL} />
                            </Typography>
                        </div>
                        <div>
                            <IconButton className={classes.iconButton}>
                                <img className={classes.icon} alt='facebook' src={Utils.getIconUrl('facebook.png')} />
                            </IconButton>
                            <IconButton className={classes.iconButton}>
                                <img className={classes.icon} alt='instagram' src={Utils.getIconUrl('instagram.png')} />
                            </IconButton>
                            <IconButton className={classes.iconButton}>
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