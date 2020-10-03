import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { withMultipleStyles, breakpointsStyle } from '../Styles';
import clsx from 'clsx'

import Logo from './Logo'
import Menu from './Menu'
import Languages from './Languages'

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    logo: {
        color: '#FFF',
        width: 53
    }
});

class Header extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Logo />
                <Menu />
                <Languages />
            </div>
        );
    }
}

Header.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default withMultipleStyles(styles)(Header);