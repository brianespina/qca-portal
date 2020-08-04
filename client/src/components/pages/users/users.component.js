import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getAllUsers } from '../../../redux/reducers/users/users.actions'
import { selectUsers } from '../../../redux/reducers/users/users.selectors'

import MainLayout from '../../layout/main-layout.component'
import PageTitle from '../../page-title/page-title.component'


const Users = ({ getAllUsers, users }) => {

    const userValues = Object.values(users.users)
    const usersComponents = userValues.map(user => <div key={user._id}>{user.name}</div>)

    useEffect(()=>{
        getAllUsers()
    }, [])

    return (
        <MainLayout>
            <PageTitle>
                Users
            </PageTitle>
            {usersComponents}
        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    users: selectUsers
})

export default connect(mapStateToProps, {getAllUsers} )(Users)