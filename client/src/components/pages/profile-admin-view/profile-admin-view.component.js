import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Redux
import { selectOneStudent } from '../../../redux/reducers/profile/profile.selectors'
import { getAllProfiles } from '../../../redux/reducers/profile/profile.actions'

// Components
import PageTitle from '../../page-title/page-title.component'
import MainLayout from '../../layout/main-layout.component'
import { BookmarkIcon, InfoIcon, NoteIcon } from '../../icons/icons.component'
import Button from '../../button/button.component'
import TrainingHistory from '../../training-history/training-history.component'

const ProfileAdminView = ({ profile, getAllProfiles}) =>{

    useEffect(()=>{
        if(!profile){
            getAllProfiles()
        }
    }, [])

    return(
        <MainLayout>
            
            <PageTitle backbutton>
                Profile Page
            </PageTitle>

            {profile && <>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 auto-rows-max">
                    <div>
                        <div className="flex bg-white p-5 rounded-lg shadow overflow-hidden mt-3">
                            {profile.user.avatar && <img className="rounded-full profile-photo-admin" src={profile.user.avatar} /> }
                            {profile.user.name && <div className="profile-name flex-1"><span>{profile.user.name}</span></div> }
                            <div className="flex flex-col justify-center">
                                <Button title="Edit" to={`/profile/edit/${profile._id}`} />
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow overflow-hidden mt-3">
                            <span className="sub-title"><BookmarkIcon className="icon-left-sm"/> Contact Info</span>

                            <div className="sm:flex">
                                <div className="flex-1">
                                    {profile.phone && 
                                    <div className="contact-info-item">
                                        <span>Phone Number</span>
                                        {profile.phone}
                                    </div>}
                                
                                    {profile.emergency && 
                                    <div className="contact-info-item">
                                        <span>Emergency Number</span>
                                        {profile.emergency}
                                    </div>}
                                </div>

                                <div className="flex-1">
                                    {profile.address && 
                                    <div className="contact-info-item">
                                        <span>Address</span>
                                        {profile.address}
                                    </div>}

                                    {profile.belt && 
                                    <div className="contact-info-item">
                                        <span>Belt</span>
                                        {profile.belt}
                                    </div>}
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="bg-white p-5 rounded-lg shadow overflow-hidden md:mt-3">
                            <span className="sub-title"><InfoIcon className="icon-left-sm"/> Short Bio</span>
                            {profile.bio && <div>{profile.bio}</div> }
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow overflow-hidden mt-3 flex-1">
                            <span className="sub-title"><NoteIcon className="icon-left-sm"/> Coach Notes</span>
                            <div>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                            </div>
                        </div>
                    </div>
                </div>

                <TrainingHistory uid={profile.user._id} className="bg-white p-5 rounded-lg shadow overflow-hidden mt-3 md:mt-8"/>
                
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