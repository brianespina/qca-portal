import React from 'react'
import { useHistory } from 'react-router-dom'
import { BackIcon } from '../icons/icons.component'

const BackButton = () => {
    let history = useHistory()
    return(
        <span onClick={()=> history.goBack()} className="back-button"><BackIcon className='icon-left-md text-gray-600 mr-2'/></span>
    )
}

export default BackButton