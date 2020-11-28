import React from 'react'
import Avatar from '../avatar/avatar.component'
import StudentButton from '../student-button/student-button.component'

//icons
import PhoneIcon from '@material-ui/icons/Phone';

const Student = ({ profile, index}) =>{
    
    const { user, phone, emergency, address, belt, bio, _id } = profile

    return(
        user &&
        <div className="students__item">
            <div className="student__item--top">
                <Avatar url={user.avatar} color={belt}/>
                <div className="student__item--details">
                    <div className="student__name">
                        { user.name }
                    </div>
                    <div className="student__address">
                        { address }
                    </div>
                    <div className="student__phone">
                        <PhoneIcon /> { phone }
                    </div>
                </div>
            </div>
            
            <div className="student__item--bottom">
                <div className="student__button-group">

                    <StudentButton to={`/profile/${index}`}>
                        View Profile
                    </StudentButton>

                    <StudentButton to={`/profile/edit/${index}`}>
                        Edit Profile 
                    </StudentButton>
                </div>
            </div>
        </div>  
    )
}

export default Student