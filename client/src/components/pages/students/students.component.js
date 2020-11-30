import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import MainLayout from '../../layout/main-layout.component'
import { connect } from 'react-redux'
import { getAllProfiles, clearSingleProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectAllStudents, selectProfileIsLoading } from '../../../redux/reducers/profile/profile.selectors'
import Student from '../../student/student.component'
import PageTitle from '../../page-title/page-title.component'


const Students = ({ getAllProfiles, students, isLoading}) => {

    const studentsComponent = students.map((student, index) => <Student profile={student} index={index} key={index}/>)

    useEffect(()=>{
        getAllProfiles()
    }, [getAllProfiles])

    return(
        <MainLayout>
            <PageTitle>
                Members
            </PageTitle>
            <div className="students__list">
                {isLoading ? <div>Loading...</div> : studentsComponent}
            </div>
        </MainLayout>
    )
}

const mapDispatchToProps = {
    getAllProfiles,
    clearSingleProfile
}
const mapStateToProps = createStructuredSelector({
    students: selectAllStudents,
    isLoading: selectProfileIsLoading
})

export default connect(mapStateToProps, mapDispatchToProps )(Students)