import React from 'react'
import MainNavigation from '../main-navigation/main-navigation.component'
import Alert from '../layout/alert.component'

const MainLayout = ({ cleanupProfiles, children,  }) => {

    return(
        <section className="dash-page-container">
            <MainNavigation />
            <div className="layout-right">
                <Alert />
                { children }
            </div>
        </section>
    )
}

export default MainLayout