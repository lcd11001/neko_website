import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import clsx from 'clsx'

import Logo from './Logo'
import Menu from './Menu'
import Languages from './Languages'

const styles = theme => ({
    root: {
        padding: '0 10%'
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
            <div className={clsx(classes.root, classes.divRow, classes.divBetween)}>
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

export default withMultipleStyles(commonStyles, styles)(Header);