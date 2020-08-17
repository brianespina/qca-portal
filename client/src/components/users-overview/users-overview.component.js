import React from 'react'
import UserRolesItem from '../user-roles-item/user-roles-item.component'

const UsersOverview = ({ users }) => {

    const usersComponents = users.map(user => <UserRolesItem key={user._id} user={user} />)
    
    return(
        <div className="usersOverview">
            { usersComponents }
        </div>
    )
}

export default UsersOverview