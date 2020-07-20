import React from 'react'
import { Link } from 'react-router-dom'  
import UserLinks from '../user-links/user-links.component'
import DashboardLinks from '../dashboard-links/dashboard-link.component'
import Logo from '../../img/qca.png'

const MainNavigation = () =>{

    return(
        <>
            <div className="dash-nav">
                <div className="dash-nav__container">
                    <Link to="/">
                        <img src={Logo} alt="QCA" width="100" className="logo--small"/>
                    </Link>
                    
                    <DashboardLinks />
                    <UserLinks />
                </div>
            </div>
        </>
    )
}

export default MainNavigation