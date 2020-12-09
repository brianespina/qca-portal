import React from 'react'
import { Link } from 'react-router-dom'

const StudentButton = ({ to, children, ...other }) => {
    return(
        <Link to={to} {...other} className="border-t border-black-300 flex-grow text-center p-3">
            { children }
        </Link>
    )
}

export default StudentButton