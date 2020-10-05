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
        margin: '0 30px'
    },

    title: {
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
        position: 'relative'
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
        position: 'relative'
    }
});

class Logo extends React.Component {


    render() {
        const {
            classes
        } = this.props

        return (
            <div className={clsx(classes.root, classes.divRow, classes.divCenter)}>
                <AppLogo className={classes.logo} />
                <div className={classes.divColumn, classes.divCenter} >
                    <Typography className={classes.title} >
                        <Trans i18nKey={ID.COMMON.LOGO_TITLE} />
                    </Typography>
                    <Typography className={classes.subtitle} >
                        <Trans i18nKey={ID.COMMON.LOGO_SUBTITLE} />
                    </Typography>
                </div>
            </div>
        );
    }


}

Logo.propTypes =
{
    classes: PropTypes.object.isRequired
};

export default withMultipleStyles(commonStyles, styles)(Logo);
