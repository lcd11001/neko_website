import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import { Drawer, List, ListItem, ListItemText, Toolbar, ListItemIcon, Tooltip, Divider, IconButton, Collapse, Typography } from '@material-ui/core';
import { AppLogo } from '../Data/Defines'

import { Trans } from 'react-i18next'
import ID from '../Translations/ID.json'

// import { IconLogoShow, IconLogoHide } from '../Components/CmsIcons'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Utils from '../Utils'

import clsx from 'clsx'
import { relative } from 'path';

const TEXT_OFFSET = -6
const TEXT_OFFSET_DELTA = -1

const styles = theme => ({
    root: {
        // backgroundColor: 'blue'
    },

    logo: {
        width: 53,
        height: 53,
        transform: 'rotate(-15deg) translate(10px, 10px)',
        transformOrigin: 'center',
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
                <img className={classes.logo} alt='logo' src={Utils.getIconUrl(AppLogo)} />
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
