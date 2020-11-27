import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles'
import { AppBar, isWidthDown, Toolbar, Typography, withWidth } from '@material-ui/core'

import * as ActionGlobal from '../Redux/Actions/ActionGlobal'
import ID from '../Translations/ID.json'

import Header from './Header'
import Footer from './Footer'
import CircularLoading from '../Components/CircularLoading'
import HideOnScroll from '../Components/HideOnScroll';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 0,
        paddingRight: 0
    }
});

class App extends React.Component
{
    renderAppbar(position, backgroundColor, secondary)
    {
        const { classes } = this.props
        return (
            <AppBar id={`appbar-${position}`} elevation={0} className={classes.appbar} position={position} style={{ backgroundColor: backgroundColor }}>
                <Toolbar disableGutters={true} className={classes.toolbar}>
                    <Header secondary={secondary} />
                </Toolbar>
            </AppBar>
        )
    }

    render()
    {
        const {
            classes,
            children,
            location: {
                pathname
            },
            t,
            isLoading,
            loadingMessage,
            width
        } = this.props;

        const isFormContact = t(ID.LINK.FORM_CONTACT) === pathname
        const isStreamline = t(ID.LINK.STREAMLINE) === pathname
        const isHome = t(ID.LINK.HOME) === pathname
        const shortMenu = isWidthDown('sm', width)
        const isSecondary = isHome && !shortMenu
        const isDot = false
        const classRoot = clsx(
            classes.root,
            isDot ? classes.divDot : ''
        )

        return (
            <React.Fragment>
                <div className={classRoot}>
                    {
                        !isFormContact &&
                        this.renderAppbar('absolute', isSecondary ? 'transparent' : 'white', isSecondary)
                    }
                    <HideOnScroll offsetY={isFormContact ? 0 : -400} timeout={0}>
                        {
                            this.renderAppbar('fixed', 'white', false)
                        }
                    </HideOnScroll>
                    {
                        // Fixed: missing menu when page transition
                        !isHome && !isFormContact &&
                        this.renderAppbar('relative', 'white', false)
                    }
                    {children}
                    {
                        !isFormContact &&
                        <Footer simpleFooter={isStreamline} />
                    }
                </div>
                {
                    isLoading > 0 && <CircularLoading message={loadingMessage} />
                }
            </React.Fragment>
        );
    }
}

App.propTypes =
{
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    ...state.global
})

const mapDispatchToProps = (dispatch) => ({
    ClearError: () =>
    {
        dispatch(ActionGlobal.ClearError())
    },
    ClearNotify: () =>
    {
        dispatch(ActionGlobal.ClearNotify())
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withMultipleStyles(commonStyles, styles),
    withTranslation(),
    withRouter,
    withWidth()
)(App);
