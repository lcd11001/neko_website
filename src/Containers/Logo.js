import React from 'react';
import PropTypes from 'prop-types';
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import { Typography } from '@material-ui/core';

import { IconMenuLogo as AppLogo } from '../Components/NekoIcons'

import { Trans } from 'react-i18next'
import ID from '../Translations/ID.json'

import clsx from 'clsx'

const TEXT_OFFSET = -3
const TEXT_OFFSET_DELTA = 0

const styles = theme => ({
    root: {
        // backgroundColor: 'blue'
    },

    logo: {
        ...breakpointsStyle(theme,
            {
                key: ['width', 'height'],
                value: [53, 53],
                variant: [5, 5],
                unit: ['px', 'px']
            }
        ),
        color: theme.palette.text.secondary,

        '&--secondary': {
            color: 'white'
        }
    },

    title: {
        letterSpacing: 0,
        fontWeight: 600,
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'bottom'],
                value: [40, TEXT_OFFSET],
                variant: [5, TEXT_OFFSET_DELTA],
                unit: ['px', 'px']
            }
        ),
        position: 'relative',
        
        color: theme.palette.text.primary,
        '&--secondary': {
            color: 'white'
        }
    },

    subtitle: {
        fontWeight: 600,
        // letterSpacing + marginRight remove letter-spacing for the last letter of an element in CSS
        ...breakpointsStyle(theme,
            {
                key: ['font-size', 'top', 'letterSpacing', 'marginRight'],
                value: [10, TEXT_OFFSET, 6, -6],
                variant: [1, TEXT_OFFSET_DELTA, 1, -1],
                unit: ['px', 'px', 'px', 'px']
            }
        ),
        position: 'relative',

        color: theme.palette.text.primary,
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
                <div className={clsx(classes.divColumn, classes.divCenter)} style={{ paddingLeft: 15 }}>
                    <Typography className={clsx(classTitle, classes.divRow, classes.divCenter)} >
                        <Trans i18nKey={ID.COMMON.LOGO_TITLE} />
                    </Typography>
                    <Typography className={clsx(classSubTitle, classes.divRow, classes.divCenter)} >
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
