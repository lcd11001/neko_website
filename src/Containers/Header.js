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
    }
});

class Header extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            menuOpened: false
        }
    }

    handleMenu = (evt) =>
    {
        this.setState((state) => ({
            menuOpened: !state.menuOpened
        }))
    }

    renderShortHeader()
    {
        const { classes, secondary } = this.props;
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
                        <Logo secondary={secondary} />
                    </div>
                </div>

                <Collapse in={menuOpened}>
                    <Menu shortMenu={true} secondary={secondary} />
                </Collapse>
            </div>
        );
    }

    renderHeader()
    {
        const { classes, secondary } = this.props;

        return (
            <div className={clsx(classes.root, classes.divRow, classes.divBetween)}>
                <Logo secondary={secondary} />
                <Menu secondary={secondary} />
            </div>
        );
    }

    render()
    {
        const {
            width,
            t
        } = this.props

        if (isWidthDown('sm', width))
        {
            return this.renderShortHeader()
        }

        return this.renderHeader()
    }
}

Header.propTypes =
{
    classes: PropTypes.object.isRequired,
    secondary: PropTypes.bool
};


Header.defaultProps = {
    secondary: false
}

export default compose(
    withMultipleStyles(commonStyles, styles),
    withWidth(),
    withTranslation()
)(Header);