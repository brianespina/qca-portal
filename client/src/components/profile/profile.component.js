import React from 'react'

const Profile = ({data}) => {
    
    const {user, phone, emergency, address, belt, bio} = data

    return(
        <div>
            {user.name} <br />
            {user.email} <br />
            {user.avatar} <br />
            {phone} <br />
            {emergency} <br />
            {address} <br />
            {belt} <br />
            {bio} <br />
        </div>
    )
}



export default Profile