import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withMultipleStyles, breakpointsStyle } from '../Styles';
import { Drawer, List, ListItem, ListItemText, Toolbar, ListItemIcon, Tooltip, Divider, IconButton, Collapse } from '@material-ui/core';
import { DataMenu } from '../Data/Defines'

// import { IconMenuShow, IconMenuHide } from '../Components/CmsIcons'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Utils from '../Utils'

import clsx from 'clsx'


const styles = theme => ({
    root: {
        backgroundColor: 'red',
        width: 800,
        height: 100
    },
    
});

class Menu extends React.Component {
    

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

Menu.propTypes =
{
    classes: PropTypes.object.isRequired
};

export default withMultipleStyles(styles)(Menu);
