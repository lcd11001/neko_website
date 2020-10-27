import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles';
import clsx from 'clsx'

import { withWidth, isWidthDown, IconButton, Collapse } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List'
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

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
    constructor(props) {
        super(props)
        this.state = {
            menuOpened: false
        }
    }

    handleMenu = (evt) => {
        this.setState((state) => ({
            menuOpened: !state.menuOpened
        }))
    }

    renderShortHeader() {
        const { classes } = this.props;
        const { menuOpened } = this.state
        return (
            <div className={clsx(classes.root, classes.divColumn)}>
                <div className={clsx(classes.divRow, classes.divBetween)}>
                    <div className={clsx(classes.divRow, classes.divCenter)}>
                        <IconButton onClick={this.handleMenu} style={{ paddingLeft: 0 }}>
                            {
                                menuOpened
                                    ? <MenuOpenIcon />
                                    : <MenuIcon />
                            }
                        </IconButton>
                        <Logo />
                    </div>
                    <Languages />
                </div>

                <Collapse in={menuOpened}>
                    <Menu shortMenu={true} />
                </Collapse>
            </div>
        );
    }

    renderHeader() {
        const { classes } = this.props;

        return (
            <div className={clsx(classes.root, classes.divRow, classes.divBetween)}>
                <Logo />
                <Menu />
                <Languages />
            </div>
        );
    }

    render() {
        const { width } = this.props
        if (isWidthDown('sm', width)) {
            return this.renderShortHeader()
        }

        return this.renderHeader()
    }
}

Header.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withWidth()
)(Header);