import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'

import { connect } from 'react-redux'
import compose from 'recompose/compose'

import { withRouter } from 'react-router-dom'

import { withMultipleStyles, breakpointsStyle } from '../Styles'
import { Toolbar, Typography } from '@material-ui/core'

import * as ActionCMS from '../Redux/Actions/ActionCMS'

import Header from './Header';
import Menu from './Menu';
import CircularLoading from '../Components/CircularLoading'
import ModalDialog from '../Components/Dialogs/ModalDialog'

import TEXT from '../Data/Text'
import NotifySnackbar from '../Components/NotifySnackbar';
import Utils from '../Utils'

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        maxHeight: '100vh',
        maxWidth: '100vw',
        overflow: 'hidden'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'hidden'
    },
    container: {
        '&--loggedin': {
            ...breakpointsStyle(theme, {
                key: 'padding',
                value: theme.spacing(3),
                variant: theme.spacing(0.5),
                unit: 'px'
            })
        },
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'hidden'
    },
    containerHeader: {
        ...breakpointsStyle(theme, {
            key: ['paddingBottom'],
            value: [10],
            variant: [2],
            unit: ['px']
        })
    },
    containerContent: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
        '&--loggedin': {
            backgroundColor: 'white',
            border: '1px solid #D6D6D6',
            borderRadius: 5,
            flexGrow: 1,
            padding: theme.spacing(2)
        }
    },
    verticalScrollContainer: {
        '&::-webkit-scrollbar': {
            '-webkit-appearance': 'none'
        },
        '&::-webkit-scrollbar:vertical': {
            height: 16
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            border: '2px solid white',
            backgroundColor: 'rgba(0, 0, 0, .3)',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, .5)',
            }
        }
    },
    header: {
        ...breakpointsStyle(theme, {
            key: 'fontSize',
            value: 2.0,
            variant: 0.2,
            unit: 'rem'
        }),
        fontWeight: 500
    }
});

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCmsConfig: false,
            refreshTitle: false
        }
    }

    _handleCloseDialog = (errorCode) => () => {
        const {
            ClearError,
            SessionExpired
        } = this.props

        ClearError()

        if (errorCode === 401) {
            Utils.clearAllItems()
            SessionExpired()
        }
    }

    _handleCloseSnackbar = () => {
        this.props.ClearNotify()
    }

    _handleRefreshTitle = () => {
        this.setState((prevState, props) => ({
            refreshTitle: !prevState.refreshTitle
        }))
    }

    renderTitle = () => {
        const {
            classes,
            title,
            ...others
        } = this.props

        if (title === null) {
            return null
        }

        if (typeof (title) === 'string') {
            // console.log('App::renderTitle as string', title)
            return (
                <div className={classes.containerHeader}>
                    <Typography className={classes.header} color={'textPrimary'} noWrap={true}>{title}</Typography>
                </div>
            )
        }

        if (typeof (title) === 'object' && title.hasOwnProperty('createElement')) {
            // console.log('App::renderTitle as createElement')
            return (
                <div className={classes.containerHeader}>
                    {
                        title.createElement({ title, ...others, refreshTitle: this._handleRefreshTitle })
                    }
                </div>
            )
        }

        return null
    }

    renderError() {
        const {
            classes,
            error
        } = this.props

        return (

            <ModalDialog
                open={true}
                titleText={error.title}
                confirmText={TEXT.MODAL_OK}
                handleConfirmClick={this._handleCloseDialog(error.code)}
            >
                <Typography>{error.message}</Typography>
            </ModalDialog>
        )
    }


    render() {
        const {
            classes,
            children,
            ...others
        } = this.props;

        let classContainer = clsx(classes.container, {
            [classes.container + '--loggedin']: others.isLoggedIn
        })
        let classContainerContent = clsx(classes.containerContent, classes.verticalScrollContainer, {
            [classes.containerContent + '--loggedin']: others.isLoggedIn
        })

        return (
            <React.Fragment>
                <div className={classes.root}>
                    {
                        others.isLoggedIn && (
                            <React.Fragment>
                                <Header {...others} />
                                <Menu {...others} />
                            </React.Fragment>
                        )
                    }

                    <main className={classes.content}>
                        {
                            others.isLoggedIn && <Toolbar />
                        }
                        <div className={classContainer}>
                            {
                                others.isLoggedIn && this.renderTitle()
                            }
                            <div id={'main-container'} className={classContainerContent} style={{ overflowY: 'auto', position: 'relative' }}>
                                {
                                    children
                                }
                            </div>
                        </div>
                    </main>



                </div>
                {
                    others.isLoading > 0 && <CircularLoading message={others.loadingMessage} />
                }
                {
                    others.error && this.renderError()
                }
                {
                    others.notifyMessage && (
                        <NotifySnackbar
                            message={others.notifyMessage}
                            variant={'success'}
                            open={true}
                            handleClose={this._handleCloseSnackbar}
                        />
                    )
                }
                {
                    others.notifyErrorMessage && (
                        <NotifySnackbar
                            message={others.notifyErrorMessage}
                            variant={'error'}
                            open={true}
                            handleClose={this._handleCloseSnackbar}
                        />
                    )
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
        dispatch(ActionCMS.ClearError())
    },
    ClearNotify: () => {
        dispatch(ActionCMS.ClearNotify())
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withMultipleStyles(styles),
    withRouter
)(App);
