import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import MainLayout from '../../layout/main-layout.component'
import { connect } from 'react-redux'
import { getAllProfiles, clearSingleProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectAllStudents, selectProfileIsLoading, selectView } from '../../../redux/reducers/profile/profile.selectors'
import Student from '../../student/student.component'
import PageTitle from '../../page-title/page-title.component'
import Loader from '../../loader/loader.component'
import StudentFilters from '../../students-filters/student-filters.component'


const Students = ({ getAllProfiles, students, isLoading, view}) => {

    const studentsComponent = students.map((student, index) => <Student profile={student} index={index} key={index}/>)

    useEffect(()=>{
        getAllProfiles()
    }, [getAllProfiles])

    return(
        <MainLayout>
            <PageTitle>
                Members 
                <StudentFilters />
            </PageTitle>
            
            <div className={view == 'list' ? 'list-view' : 'grid-view'}>
                {isLoading ? <Loader/> : studentsComponent}
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
    isLoading: selectProfileIsLoading,
    view: selectView
})

export default connect(mapStateToProps, mapDispatchToProps )(Students)