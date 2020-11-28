import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import MainLayout from '../../layout/main-layout.component'
import { connect } from 'react-redux'
import { getAllProfiles, clearSingleProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectAllStudents } from '../../../redux/reducers/profile/profile.selectors'
import Student from '../../student/student.component'
import PageTitle from '../../page-title/page-title.component'


const Students = ({ getAllProfiles, students}) => {

    const studentsComponent = students.map((student, index) => <Student profile={student} index={index} key={index}/>)

    useEffect(()=>{
        getAllProfiles()
    }, [students])

    return(
        <MainLayout>
            <PageTitle>
                Members
            </PageTitle>
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