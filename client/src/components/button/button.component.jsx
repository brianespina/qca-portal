import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ title, icon, children, ...otherProps }) =>
    <Link className="button" {...otherProps} >
        { title } {children}
    </Link>


export default Button