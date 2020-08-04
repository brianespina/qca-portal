import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getAllUsers } from '../../../redux/reducers/users/user.actions'

import MainLayout from '../../layout/main-layout.component'
import PageTitle from '../../page-title/page-title.component'

const Users = ({ getAllUsers }) => {

    useEffect(()=>{
        getAllUsers()
    }, [])

    return (
        <MainLayout>
            <PageTitle>
                Users
            </PageTitle>
        </MainLayout>
    )
}

export default connect(null, {getAllUsers} )(Users)