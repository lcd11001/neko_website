import React from 'react'
import ReactDOM from 'react-dom'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import ID from './Translations/ID.json'
import EN from './Translations/EN.json'
import VN from './Translations/VN.json'

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

i18next
    // first: init multi language
    .init({
        debug: process.env.NODE_ENV === 'development',
        react: {
            wait: true
        },
        interpolation: {
            escapeValue: false
        },
        lng: ID.COMMON.LANGUAGE_EN,
        fallbackLng: ID.COMMON.LANGUAGE_EN,
        resources: {
            [ID.COMMON.LANGUAGE_EN]: EN,
            [ID.COMMON.LANGUAGE_VN]: VN
        },
        ns: Object.keys(ID)
    })
    // then: remove loading icon
    .then(t => {
        const divLoading = document.getElementById('loading')
        document.body.removeChild(divLoading)
    })

const Routes = () => {
    return (
        <MuiThemeProvider theme={defaultTheme}>
            <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                    <Router>
                        <React.Fragment>
                            <CssBaseline />
                            <App>
                                <Switch>
                                    {/* Homepage === Profile because of user permission */}
                                    <Redirect exact from='/' to={i18next.t(ID.LINK.HOME)} />

                                    {/* Force login if needed by using protected route */}
                                    <Route exact path={i18next.t(ID.LINK.HOME)} component={Home} />

                                    {/* invalid path */}
                                    <Route path='*' component={PageNotFound} />
                                </Switch>
                            </App>
                        </React.Fragment>
                    </Router>
                </I18nextProvider>
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
