import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getAllUsers } from '../../../redux/reducers/users/users.actions'
import { selectUsers } from '../../../redux/reducers/users/users.selectors'

import MainLayout from '../../layout/main-layout.component'
import PageTitle from '../../page-title/page-title.component'
import UsersOverview from '../../users-overview/users-overview.component'


const Users = ({ getAllUsers, users }) => {  

    const [ usersState, setUsersState ] = useState([])

    useEffect(()=>{
        getAllUsers()
        setUsersState(Object.values(users.users))
    }, [users.loading])

    const handleFilter = by => () =>{
        if(by){
            setUsersState(Object.values(users.users).filter(user => user.type === by))
        }else{
            setUsersState(Object.values(users.users))
        } 
    }

    return (
        <MainLayout>
            <PageTitle>
                Users
            </PageTitle>
            <div className="filter-container">
                <div onClick={handleFilter()}>All</div>
                <div onClick={handleFilter('admin')}>Admin</div>
                <div onClick={handleFilter('student')}>Student</div>
            </div>
            <UsersOverview users={usersState}/>
        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    users: selectUsers
})

export default connect(mapStateToProps, {getAllUsers} )(Users)