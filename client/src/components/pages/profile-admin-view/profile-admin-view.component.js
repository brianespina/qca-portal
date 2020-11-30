import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Redux
import { selectOneStudent } from '../../../redux/reducers/profile/profile.selectors'
import { getAllProfiles } from '../../../redux/reducers/profile/profile.actions'

// Components
import PageTitle from '../../page-title/page-title.component'
import MainLayout from '../../layout/main-layout.component'

const ProfileAdminView = ({ profile, getAllProfiles}) =>{

    useEffect(()=>{
        if(!profile){
            getAllProfiles()
        }
    }, [])

    return(
        <MainLayout>
            
            <PageTitle backLink='/students'>
                Profile Page
            </PageTitle>
            
            {profile && <>
                {profile.user.name && <div>{profile.user.name}</div> }
                {profile.phone && <div>{profile.phone}</div> }
                {profile.emergency && <div>{profile.emergency}</div> }
                {profile.address && <div>{profile.address}</div> }
                {profile.belt && <div>{profile.belt}</div> }
                {profile.bio && <div>{profile.bio}</div> }
            </>}


        </MainLayout>
    )
}

const mapStateToProps = (state, ownProps) => {
    return{
        profile: selectOneStudent(ownProps.match.params.id)(state)
    }
}


export default connect(mapStateToProps, {getAllProfiles})(ProfileAdminView)