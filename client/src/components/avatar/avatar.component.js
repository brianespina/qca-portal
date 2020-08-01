import React from 'react'

const Avatar = ({ url, color }) => {

    const normalizedColor = color.toLowerCase()

    let borderColor
    if(normalizedColor === 'blue') borderColor = '#3498db'
    if(normalizedColor === 'white') borderColor = '#fff'

    let style = {
        border: 'solid',
        borderColor: borderColor
    }

    

    return(
        <div className="avatar-container">
            <img src={url} alt="" className="avatar-image" style={style}/>
        </div>
    )
}

export default Avatar