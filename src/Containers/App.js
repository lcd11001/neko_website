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
        paddingRight: 0,
        overflowX: 'hidden'
    }
});

class App extends React.Component {
    renderAppbar(position, backgroundColor, secondary) {
        const { classes } = this.props
        return (
            <AppBar elevation={0} className={classes.appbar} position={position} style={{ backgroundColor: backgroundColor }}>
                <Toolbar disableGutters={true} className={classes.toolbar}>
                    <Header secondary={secondary} />
                </Toolbar>
            </AppBar>
        )
    }

    render() {
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

        const isHome = t(ID.LINK.HOME) === pathname
        const shortMenu = isWidthDown('sm', width)
        const isSecondary = isHome && !shortMenu

        return (
            <React.Fragment>
                <div className={classes.root}>
                    {
                        this.renderAppbar(isSecondary ? 'absolute' : 'relative', 'transparent', isSecondary)
                    }
                    <HideOnScroll offsetY={0} timeout={0}>
                        {
                            this.renderAppbar('fixed', 'white', false)
                        }
                    </HideOnScroll>
                    {children}
                    <Footer />
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
    ...state.cms,
    ...state.global
})

const mapDispatchToProps = (dispatch) => ({
    ClearError: () => {
        dispatch(ActionGlobal.ClearError())
    },
    ClearNotify: () => {
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
