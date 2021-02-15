import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ title, ...otherProps }) =>
    <Link class="button" {...otherProps}>
        { title }
    </Link>


export default Button