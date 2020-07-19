import React from 'react'

const FormInput = ({ label, ...otherProps }) =>{
    return(
        <>
            <input { ...otherProps } id={label} name={label}/>
            <label htmlFor={label}>{ label }</label>
        </>
    )
}

export default FormInput
