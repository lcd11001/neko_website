import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { withRouter } from 'react-router-dom'

import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import clsx from 'clsx'

import { Trans, withTranslation } from 'react-i18next'
import ID from '../Translations/ID.json'

import Logo from './Logo'
import Menu from './Menu'
import Languages from './Languages'
import { Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        position: 'relative',
        backgroundColor: '#FFFFFF'
    },

    rootPrimary: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '66vw',
    },

    rootSecondary: {
        width: '82%',
        height: '30vw',
        backgroundColor: theme.palette.primary.secondary,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -150%)',
        borderRadius: 30
    },

    logo: {
        color: '#FFF',
        width: 53
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
            <div className={clsx(classes.rootPrimary, classes.divColum, classes.divCenter)}>
                <div className={clsx(classes.divRow, classes.divBetween)}>
                    <div id={'logo'}>
                        <Logo />
                    </div>
                    <div id={'work'}></div>
                    <div id={'support'}></div>
                    <div id={'social'}></div>
                </div>
                <Typography>
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