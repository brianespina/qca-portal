import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllProfiles } from "../../redux/reducers/profile/profile.actions";

const Profiles = ({ getAllProfiles, profiles }) => {

    const profileName = profiles.map( profile => <div key={profile._id}>{ profile.user.name }</div> ) || null

    console.log(profiles)

    useEffect(()=>{
        getAllProfiles()
    }, [])


    return(
        <div>
            { profileName &&  profileName}
        </div>
    )
}

const mapStateToProps = state => ({
    profiles: state.profile.profiles
})

export default connect(mapStateToProps, { getAllProfiles })(Profiles)