import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import ID from './Translations/ID.json'
import EN from './Translations/EN.json'
import VN from './Translations/VN.json'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from './Styles'

import { AnimatePresence, motion } from 'framer-motion'

import store from './Redux/Store'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'

import App from './Containers/App'
import Home from './Containers/Home'
import About from './Containers/About'
import Works from './Containers/Works'

import PageNotFound from './Components/PageError/PageNotFound'

import { CssBaseline } from '@material-ui/core'
import Utils from './Utils'
import WorksDetail from './Containers/WorksDetail'

window.isWaterWaveSupported = false; // Utils.isWaterWaveSupported()
console.log('isWaterWaveSupported', window.isWaterWaveSupported)

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
    .then(t =>
    {
        const divLoading = document.getElementById('loading')
        document.body.removeChild(divLoading)
    })

// https://github.com/framer/motion/issues/466
const MotionRedirect = ({ children, ...props }) => (
    <motion.div exit={'undefined'}>
        <Redirect {...props} />
    </motion.div>
)

const Routes = () =>
{
    console.log('WORKS_ALL', i18next.t(ID.LINK.WORKS_ALL))
    return (
        <MuiThemeProvider theme={defaultTheme}>
            <Provider store={store}>
                <I18nextProvider i18n={i18next}>
                    <Router>
                        <Fragment>
                            <CssBaseline />
                            <App>
                                <Route render={({ location }) => (
                                    <AnimatePresence initial={false} exitBeforeEnter={true}>
                                        <Switch location={location} key={location.pathname}>
                                            {/* Homepage === Profile because of user permission */}
                                            <MotionRedirect exact from='/' to={i18next.t(ID.LINK.HOME)} />
                                            <MotionRedirect exact from={i18next.t(ID.LINK.WORKS)} to={i18next.t(ID.LINK.WORKS_ALL)} />

                                            {/* single page */}
                                            <Route exact path={i18next.t(ID.LINK.HOME)} component={Home} />
                                            <Route exact path={i18next.t(ID.LINK.ABOUT)} component={About} />

                                            {/* has sub page */}
                                            <Route key={location.pathname} path={i18next.t(ID.LINK.WORKS_CATEGORY)} component={({match}) => <Works category={match.params.category} />} />
                                            {/* <Route exact path={i18next.t(ID.LINK.WORKS_ALL)} render={(props) => <Works category={'all'} />} />
                                            <Route exact path={i18next.t(ID.LINK.WORKS_BRAND)} component={Works} />
                                            <Route exact path={i18next.t(ID.LINK.WORKS_MOTION)} component={Works} />
                                            <Route exact path={i18next.t(ID.LINK.WORKS_INTERFACE)} component={Works} />
                                            <Route exact path={i18next.t(ID.LINK.WORKS_GRAPHIC)} component={Works} />
                                            <Route exact path={i18next.t(ID.LINK.WORKS_DIGITAL)} component={Works} /> */}

                                            <Route key={location.pathname} path={i18next.t(ID.LINK.WORKS_DETAIL)} component={({match}) => <WorksDetail id={match.params.id}/>} />

                                            {/* invalid path */}
                                            <Route path='*' component={PageNotFound} />
                                        </Switch>
                                    </AnimatePresence>
                                )} />
                            </App>
                        </Fragment>
                    </Router>
                </I18nextProvider>
            </Provider>
        </MuiThemeProvider>
    )
}

// remove React.StrictMode to fix findDOMNode is deprecated
// https://stackoverflow.com/questions/61220424/material-ui-drawer-finddomnode-is-deprecated-in-strictmode
ReactDOM.render(
    <Fragment>
        <Routes />
    </Fragment>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
