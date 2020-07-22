import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import MainLayout from '../../layout/main-layout.component'
import { connect } from 'react-redux'
import { getAllProfiles, clearSingleProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectAllStudents } from '../../../redux/reducers/profile/profile.selectors'
import Student from '../../student/student.component'

const Students = ({ getAllProfiles, students, clearSingleProfile}) => {

    useEffect(()=>{
        clearSingleProfile()
        getAllProfiles()
    }, [])

const studentsComponent = students.map( student => <Student key={student._id} profile={student} /> )

    return(
        <MainLayout>
            <h2>Students</h2> 
            <div className="students__list">
                { studentsComponent }
            </div>
        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    students: selectAllStudents
})

export default connect(mapStateToProps, { getAllProfiles, clearSingleProfile })(Students)