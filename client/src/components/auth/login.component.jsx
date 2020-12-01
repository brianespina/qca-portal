import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import Alert from '../layout/alert.component'
import { connect } from 'react-redux'
import { login } from '../../redux/reducers/auth/auth.actions'  
import { selecAuthIsAuthenticated, selectIsAdmin, selectIsLoading, selectAuthState } from '../../redux/reducers/auth/auth.selector'  
import { createStructuredSelector } from 'reselect'

import Card from '../card/card.component'

const Login = ({ login, isAuthenticated, isAdmin, loading}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const handleCange = ({ target }) => setFormData({
        ...formData,
        [target.name] : target.value
    })

    const handleSubmit = async e => {
        e.preventDefault()
        login(email, password)
    }
    

    return(
        <div className="floating-form-wrapper">  
            {!loading && isAuthenticated && <Redirect to='/profile'/>}

            <Card classes="card--small card--floating">
                <Alert />
                <h1 className="large text-primary">Sign In</h1>
                <p className="lead"><i className="fas fa-user"></i> Sign in to your account</p>
                <form className="form" onSubmit={e => handleSubmit(e)}>

                    <div className="form-group">
                    <input type="email" placeholder="Email Address" value={email} onChange={e => handleCange(e)} name="email"/>
                    </div>
                    <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password} 
                        onChange={e => handleCange(e)}
                    />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
                <p className="my-1">
                    Don't have an account? <Link to="/register">Sign up</Link>
                </p>
            </Card>
            
        </div>
        
    )
}

const mapDispatchToProps = {
    login
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selecAuthIsAuthenticated,
    loading: selectIsLoading, 
    isAdmin: selectIsAdmin
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))