import React from 'react'
import MainNavigation from '../main-navigation/main-navigation.component'



const MainLayout = ({ children }) => {
    return(
        <section className="dash-page-container">
            <MainNavigation />
            <div className="layout-right">
                { children }
            </div>
        </section>
    )
}

export default MainLayout