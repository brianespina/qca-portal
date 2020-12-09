import React from 'react'

const Avatar = ({ url }) => {
    return(
        <div className="">
            <img src={url} alt="" className="h-10 w-10 rounded-full"/>
        </div>
    )
}

export default Avatar