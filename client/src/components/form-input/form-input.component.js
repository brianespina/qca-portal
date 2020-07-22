import React from 'react'

const FormInput = ({ label, ...otherProps }) =>{
    return(
        <>
            <div className="form-group">
                <input { ...otherProps } id={label} name={label}/>
                <label htmlFor={label} className={otherProps.value && otherProps.value.length && 'populated'}>{ label }</label>
            </div>
        </>
    )
}

export default FormInput
