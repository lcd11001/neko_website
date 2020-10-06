import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import { Typography } from '@material-ui/core';

import { IconMenuLogo as AppLogo } from '../Components/NekoIcons'

import { Trans } from 'react-i18next'
import ID from '../Translations/ID.json'

import clsx from 'clsx'

const TEXT_OFFSET = -6
const TEXT_OFFSET_DELTA = -1

const styles = theme => ({
    root: {
        // backgroundColor: 'blue'
    },

    logo: {
        width: 53,
        height: 53,
        color: theme.palette.text.secondary,

        '&--secondary': {
            color: 'white'
        }
    },

    title: {
        marginLeft: 30,
        textAlign: 'center',
        fontWeight: 700,
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'bottom'],
                value: [40, TEXT_OFFSET],
                variant: [5, TEXT_OFFSET_DELTA],
                unit: ['px', 'px']
            }
        ),
        position: 'relative',

        '&--secondary': {
            color: 'white'
        }
    },

    subtitle: {
        textAlign: 'center',
        letterSpacing: 6.05,
        fontWeight: 700,
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'top'],
                value: [11, TEXT_OFFSET],
                variant: [1, TEXT_OFFSET_DELTA],
                unit: ['px', 'px']
            }
        ),
        position: 'relative',

        '&--secondary': {
            color: 'white'
        }
    }
});

class Logo extends React.Component {


    render() {
        const {
            classes,
            secondary
        } = this.props

        let classLogo = clsx(classes.logo, {
            [classes.logo + '--secondary']: secondary
        })

        let classTitle = clsx(classes.title, {
            [classes.title + '--secondary']: secondary
        })

        let classSubTitle = clsx(classes.subtitle, {
            [classes.subtitle + '--secondary']: secondary
        })

        return (
            <div className={clsx(classes.root, classes.divRow, classes.divCenter)}>
                <AppLogo className={classLogo} />
                <div className={classes.divColumn, classes.divCenter} >
                    <Typography className={classTitle} >
                        <Trans i18nKey={ID.COMMON.LOGO_TITLE} />
                    </Typography>
                    <Typography className={classSubTitle} >
                        <Trans i18nKey={ID.COMMON.LOGO_SUBTITLE} />
                    </Typography>
                </div>
            </div>
        );
    }


}

Logo.propTypes =
{
    classes: PropTypes.object.isRequired,
    secondary: PropTypes.bool
};

Logo.defaultProps = {
    secondary: false
}

export default withMultipleStyles(commonStyles, styles)(Logo);
