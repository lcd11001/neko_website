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
        ...breakpointsStyle(theme,
            {
                key: ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'],
                value: [10, 10, 3, 10],
                variant: [2, 2, 0.5, 0.5],
                unit: ['%', '%', '%', '%']
            }
        )
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