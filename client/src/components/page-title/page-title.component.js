import React from 'react'
import { Link, useHistory  } from 'react-router-dom'
import { BackIcon } from '../icons/icons.component'

const PageTitle = ({ children, backLink='#' }) => {
    let history = useHistory()
    return(
        <div class="title-bar">
            <span onClick={()=> history.goBack()} ><BackIcon className='icon-left-md text-gray-600 mr-2'/></span>
            <h2 className="page-title">
                { children }
            </h2>
        </div>
        
    )
}

export default PageTitle