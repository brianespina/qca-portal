import React from 'react'
import Avatar from '../avatar/avatar.component'
import StudentButton from '../student-button/student-button.component'

//icons
import { PencilIcon, EyeIcon } from '../icons/icons.component'

const Student = ({ profile, id, view}) =>{
    
    const { user } = profile

    if(view === 'grid'){
        return(
            user &&
            <div className="bg-white rounded-lg shadow-sm flex flex-col overflow-hidden">
                <div className="student__item--top flex-grow">
                    <Avatar url={user.avatar}/>
                    <div className="student__item--details leading-5">
                        <div className="student__name">
                            { user.name }
                        </div>
                        <div className="student__address text-sm">
                            <div className="bg-green-100 inline-block px-2 py-0.5 rounded-2xl text-gray-500">{ user.type }</div>
                        </div>
                    </div>
                </div>
                
                <div className="student__item--bottom">
                    <div className="student__button-group text-sm">
    
                        <StudentButton to={`/profile/${id}`} className="border-r">
                            <EyeIcon className="icon-left-sm text-gray-400 mr-2"/> View Profile
                        </StudentButton>
    
                        <StudentButton to={`/profile/edit/${id}`}>
                            <PencilIcon className="icon-left-sm text-gray-400 mr-2"/> Edit Profile 
                        </StudentButton>
                    </div>
                </div>
            </div>  
        )
    }else if(view === 'list'){
        
    }
    
}

export default Student