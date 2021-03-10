import React from 'react'
import { PencilIcon } from '../icons/icons.component'

const ProfileEditInput = ({ active, type = 'input', ...otherProps }) => {

    const element = 
        type === 'textarea' 
        ? <><textarea {...otherProps} className="hidden-input"/><PencilIcon className="icon-left-sm"/></>
        : <><input {...otherProps} className="hidden-input"/><PencilIcon className="icon-left-sm"/> </>

    return(
        <>  
            <div class="hidden-input-wrapper">
                {active 
                    ? element
                    : otherProps.value }
            </div>
        </>
    )
}

export default ProfileEditInput