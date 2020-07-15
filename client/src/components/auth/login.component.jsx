import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

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
    }

    return(
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign in to your account</p>
            <form className="form" onSubmit={e => handleSubmit(e)}>

                <div className="form-group">
                <input type="email" placeholder="Email Address" value={email} onChange={e => handleCange(e)} name="email" required/>
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password} 
                    onChange={e => handleCange(e)}
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>
        </Fragment>
    )
}

export default Login