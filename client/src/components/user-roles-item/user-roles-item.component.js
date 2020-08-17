import React, { useState } from 'react'

const UserRolesItem = ({ user: { name, type } }) => {

    const [ role, setRole ] = useState(type)

    const handeChange = event => {
        setRole(event.target.value)
    } 

    return(
        <div className="user-roles-item">
            <div className="user-roles-item__name">
                { name }
            </div>
            <div className="user-roles-item__role">
                <form>
                    <select name="role" id="role" value={role} onChange={e => handeChange(e)}>
                        <option value="admin">Admin</option>
                        <option value="student">Member</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default UserRolesItem