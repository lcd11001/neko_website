import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from './Styles'

import store from './Redux/Store'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

import App from './Containers/App'
import Home from './Containers/Home'

import PageNotFound from './Components/PageError/PageNotFound'
import ProtectedRoute from './Components/ProtectedRoute'

import { CssBaseline } from '@material-ui/core'

const metadata = require('./metadata.json')
console.log('metadata', metadata)

const divLoading = document.getElementById('loading')
document.body.removeChild(divLoading)

const Routes = () => {
    return (
        <MuiThemeProvider theme={defaultTheme}>
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <CssBaseline />
                        <App>
                            <Switch>
                                {/* Homepage === Profile because of user permission */}
                                <Redirect exact from='/' to={'/home'} />

                                {/* Force login if needed by using protected route */}
                                <Route exact path='/home' component={Home} />
                                
                                {/* invalid path */}
                                <Route path='*' component={PageNotFound} />
                            </Switch>
                        </App>
                    </React.Fragment>
                </Router>
            </Provider>
        </MuiThemeProvider>
    )
}

// remove React.StrictMode to fix findDOMNode is deprecated
// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
ReactDOM.render(
    <React.Fragment>
        <Routes />
    </React.Fragment>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
