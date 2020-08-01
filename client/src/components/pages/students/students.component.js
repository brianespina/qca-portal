import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import MainLayout from '../../layout/main-layout.component'
import { connect } from 'react-redux'
import { getAllProfiles, clearSingleProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectAllStudents } from '../../../redux/reducers/profile/profile.selectors'
import Student from '../../student/student.component'


const Students = ({ getAllProfiles, students, clearSingleProfile}) => {

    const studentsComponent = students.map((student, index) => <Student profile={student} index={index}/>)

    useEffect(()=>{
        clearSingleProfile()
        getAllProfiles()
    }, [])

    return(
        <MainLayout>
            <h2>Students</h2> 
            <div className="students__list">
                {studentsComponent}
            </div>
        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    students: selectAllStudents
})

export default connect(mapStateToProps, { getAllProfiles, clearSingleProfile })(Students)