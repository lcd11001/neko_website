import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withMultipleStyles, breakpointsStyle } from '../Styles';
import { Drawer, List, ListItem, ListItemText, Toolbar, ListItemIcon, Tooltip, Divider, IconButton, Collapse } from '@material-ui/core';
import { DataLogo } from '../Data/Defines'

// import { IconLogoShow, IconLogoHide } from '../Components/CmsIcons'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Utils from '../Utils'

import clsx from 'clsx'


const styles = theme => ({
    root: {
        backgroundColor: 'blue',
        width: 100,
        height: 100
    },
    
});

class Logo extends React.Component {
    

    render() {
        const {
            classes
        } = this.props

        return (
            <div className={classes.root}>

            </div>
        );
    }

    
}

Logo.propTypes =
{
    classes: PropTypes.object.isRequired
};

export default withMultipleStyles(styles)(Logo);
