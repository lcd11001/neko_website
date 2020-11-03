import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next';

import { withMultipleStyles, breakpointsStyle, commonStyles } from '../Styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

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

class App extends React.Component {

    render() {
        const {
            classes,
            children,
            location: {
                pathname
            },
            t,
            isLoading,
            loadingMessage
        } = this.props;

        const isHome = t(ID.LINK.HOME) === pathname

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <HideOnScroll>
                        <AppBar elevation={0} className={classes.appbar}>
                            <Toolbar disableGutters={true} className={classes.toolbar}>
                                <Header />
                            </Toolbar>
                        </AppBar>
                    </HideOnScroll>
                    {
                        !isHome &&
                        <Toolbar disableGutters={true} className={classes.toolbar} />
                    }
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
    withRouter
)(App);
