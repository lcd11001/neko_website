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
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import ID from '../Translations/ID.json'

const styles = theme => ({
    root: {
        width: '100%'
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

    renderShortHeader(isHome) {
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
                        <Logo secondary={isHome} />
                    </div>
                </div>

                <Collapse in={menuOpened}>
                    <Menu shortMenu={true} secondary={isHome} />
                </Collapse>
            </div>
        );
    }

    renderHeader(isHome) {
        const { classes } = this.props;

        return (
            <div className={clsx(classes.root, classes.divRow, classes.divBetween)}>
                <Logo secondary={isHome} />
                <Menu secondary={isHome} />
            </div>
        );
    }

    render() {
        const {
            width,
            t,
            location: {
                pathname
            }
        } = this.props

        const isHome = t(ID.LINK.HOME) === pathname

        if (isWidthDown('sm', width)) {
            return this.renderShortHeader(isHome)
        }

        return this.renderHeader(isHome)
    }
}

Header.propTypes =
{
    classes: PropTypes.object.isRequired,
};

export default compose(
    withMultipleStyles(commonStyles, styles),
    withWidth(),
    withTranslation(),
    withRouter
)(Header);