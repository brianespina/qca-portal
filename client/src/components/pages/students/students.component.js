import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import MainLayout from '../../layout/main-layout.component'
import { connect } from 'react-redux'
import { getAllProfiles } from '../../../redux/reducers/profile/profile.actions'
import { selectAllStudents, selectProfileIsLoading } from '../../../redux/reducers/profile/profile.selectors'
import Student from '../../student/student.component'

const Students = ({ getAllProfiles, students}) => {

    useEffect(()=>{
        getAllProfiles()
    }, [])

const studentsComponent = students.map( student => <Student profile={student} /> )

    return(
        <MainLayout>
            <div>Students</div> 
            <div className="students__list">
                { studentsComponent }
            </div>
        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    students: selectAllStudents
})

export default connect(mapStateToProps, { getAllProfiles })(Students)