import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectAuthState } from '../../redux/reducers/auth/auth.selector'

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading },  ...otherProps}) => {

    return (
        <Route 
            { ...otherProps } 
            render={props => 
                !isAuthenticated && !loading 
                ? <Redirect to="/login" /> 
                : <Component { ...props }/>}
        />

    )
}


const mapStateToProps = createStructuredSelector({
    auth: selectAuthState
})

export default connect(mapStateToProps)(PrivateRoute)