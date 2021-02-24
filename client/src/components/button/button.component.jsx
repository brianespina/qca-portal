import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ title, icon, children, ...otherProps }) =>
    <Link className="button" {...otherProps} >
        {children} { title }
    </Link>


export default Button