import React from 'react'

const FloatingButton = ({type, children, ...otherProps}) => {
    return(
    <>
        <button className={`floating-button ${type}`} {...otherProps}>{children}</button>
    </>
    )
}

export default FloatingButton