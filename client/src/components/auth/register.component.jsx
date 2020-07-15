import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../redux/reducers/alert/alert.action'
import { register } from '../../redux/reducers/auth/auth.actions'
import PropTypes from 'prop-types'

const Register = ({ setAlert, register }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const handleCange = ({ target }) => setFormData({
        ...formData,
        [target.name] : target.value
    })

    const handleSubmit = async e => {
        e.preventDefault()
        if(password !== password2){
            setAlert('Passwords do not match', 'danger')
        }else{

            register({name, email, password})
        }
    }

    return(
        <Fragment>
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
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    )
}

const mapDispatchToProps = {
    setAlert,
    register
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps )(Register)