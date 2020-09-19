import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import Utils from '../Utils'
import PageNotFound from './PageError/PageNotFound'

class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userPermission: null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let result = null

        if (nextProps.access_group != null && nextProps.access !== null && prevState.userPermission === null) {
            result = Object.assign((result || {}), {
                userPermission: Utils.getDefaultPermission(nextProps.access_group, nextProps.access, nextProps.privilege)
            })
        }

        return result
    }

    render() {
        const {
            component: Component,
            isLoggedIn,
            access,
            privilege,
            ...rest
        } = this.props

        const {
            userPermission
        } = this.state

        let hasPermission = isLoggedIn ? Utils.checkLinkPermission(rest.path, userPermission, privilege) : false

        return (
            <Route
                {...rest}
                render={
                    (props) => {
                        if (isLoggedIn) {
                            if (hasPermission) {
                                return <Component {...props} />
                            }

                            return <PageNotFound />
                        }

                        return <Redirect to={
                            {
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    }
                }
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.cms.isLoggedIn,
    access: state.cms.access,
    access_group: state.cms.access_group,
    privilege: state.cms.privilege
})

export default connect(mapStateToProps, null)(ProtectedRoute);