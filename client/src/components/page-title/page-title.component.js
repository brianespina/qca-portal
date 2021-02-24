import React from 'react'
import BackButton from '../back-button/back-button.component'

const PageTitle = ({children, backbutton}) => {

    return(
        <div className="title-bar">
            {backbutton && <BackButton/>}
            <h2 className="page-title">
                { children }
            </h2>
        </div>
    )
}

export default PageTitle