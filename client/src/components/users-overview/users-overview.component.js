import React, { useState } from 'react'

const UsersOverview = ({ users }) => {

    const usersComponents = users.map(user => <div key={user._id}>{user.name}</div>)
    
    return(
        <div className="usersOverview">
            { usersComponents }
        </div>
    )
}

export default UsersOverview