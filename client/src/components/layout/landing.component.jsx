import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selecAuthIsAuthenticated } from '../../redux/reducers/auth/auth.selector'

const Landing = ({ isAuthenticated }) => {

    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Developer Connector</h1>
                    <p className="lead">
                    Create a developer profile/portfolio, share posts and get help from
                    other developers
                    </p>
                    <div className="buttons">
                    <Link to="/register" className="btn btn-primary">Sign Up</Link>
                    <Link to="/login" className="btn btn-light">Login</Link>
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