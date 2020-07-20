import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selecAuthIsAuthenticated } from '../../redux/reducers/auth/auth.selector'
import Logo from '../../img/qca.png'

const Landing = ({ isAuthenticated }) => {

    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return(
        <section className="landing">
            <div className="light-overlay">
                <div className="landing-inner">
                    <img src={Logo} alt="QCA" width="100" className="logo"/>
                    <h1>Quezon Combat Academy Portal</h1>
                    <div className="buttons buttons--landing-page">
                    <Link to="/register" className="btn btn-primary">Register</Link>
                    <Link to="/login" className="btn btn-primary">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    isAuthenticated: selecAuthIsAuthenticated
})

export default connect(mapStateToProps)(Landing)