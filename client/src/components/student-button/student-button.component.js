import React from 'react'
import { Link } from 'react-router-dom'

const StudentButton = ({ to, children }) => {
    return(
        <Link to={to} className="student__button">
            { children }
        </Link>
    )
}

export default StudentButton