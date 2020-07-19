import React from 'react'

const Card = ({ children, classes }) => (
    <div className={`${classes} card`} >
        { children }
    </div>
)

export default Card