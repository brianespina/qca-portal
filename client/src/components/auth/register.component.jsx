import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../redux/reducers/alert/alert.action'
import { register } from '../../redux/reducers/auth/auth.actions'
import { selecAuthIsAuthenticated, selectIsLoading } from '../../redux/reducers/auth/auth.selector'  
import { createStructuredSelector } from 'reselect'

import Card from '../card/card.component'
import Loader from 'react-loader-spinner'
import Alert from '../layout/alert.component'


const Register = ({ setAlert, register, isAuthenticated, loading }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'student',
        password: '',
        password2: ''
    })

    const { name, email, type, password, password2 } = formData

    const handleCange = ({ target }) => setFormData({
        ...formData,
        [target.name] : target.value
    })

    const handleSubmit = async e => {
        e.preventDefault()
        if(password !== password2){
            setAlert('Passwords do not match', 'danger')
        }else{
            register({name, email, type, password})
        }
    }

    if(isAuthenticated){
        return <Redirect to='/profile'/>
    }

    return(
        <Card classes="card--small card--floating">
            <Alert />
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                <input type="text" placeholder="Name" name="name" value={name} onChange={e => handleCange(e)} />
                </div>
                <div className="form-group">
                <input type="email" placeholder="Email Address" value={email} onChange={e => handleCange(e)} name="email" />
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small
                >
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
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                   
                    value={password2} 
                    onChange={e => handleCange(e)}
                />
                </div>
                {loading 
                ? <Loader type="ThreeDots" color="#DA3642" height={80} width={80} />
                : <input type="submit" className="btn btn-primary" value="Register" />}	
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Card>
    )
}

const mapDispatchToProps = {
    setAlert,
    register
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selecAuthIsAuthenticated,
    loading: selectIsLoading
})

export default connect(mapStateToProps, mapDispatchToProps )(Register)