import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withRouter } from 'react-router-dom'

import { withMultipleStyles, breakpointsStyle } from '../Styles'
import { Toolbar, Typography } from '@material-ui/core'

import * as ActionGlobal from '../Redux/Actions/ActionGlobal'

import Header from './Header';
import CircularLoading from '../Components/CircularLoading'


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
});

class App extends React.Component {

    render() {
        const {
            classes,
            children,
            ...others
        } = this.props;

        return (
            <React.Fragment>
                <div className={classes.root}>
                    <Header {...others} />
                    {children}
                </div>
                {
                    others.isLoading > 0 && <CircularLoading message={others.loadingMessage} />
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
    withMultipleStyles(styles),
    withRouter
)(App);
