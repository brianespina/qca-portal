import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = ({ children, backLink='#' }) => {
    return(
        <>
            <Link to={backLink}>
                Back
            </Link>
            <h2 className="page-title">
                { children }
            </h2>
        </>
        
    )
}

export default PageTitle