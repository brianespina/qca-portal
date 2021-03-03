import React from 'react'
import { PencilIcon } from '../icons/icons.component'

const ProfileEditInput = ({ active, ...otherProps }) => {
    return(
        <>  
            <div class="hidden-input-wrapper">
                {active 
                    ? <><input {...otherProps} className="hidden-input"/><PencilIcon className="icon-left-sm"/></>
                    : otherProps.value }
            </div>
        </>
    )
}

export default ProfileEditInput