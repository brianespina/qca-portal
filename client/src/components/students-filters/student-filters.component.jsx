import React from 'react'
import { GridIcon, ListIcon } from '../icons/icons.component'

const StudentFilters = ()=> {
    return(
        <>
            <div className="view-filter">
                <span><GridIcon className="w-4 inline"/></span>
                <span className="active"><ListIcon className="w-4 inline"/></span>
            </div>
        </>
    )
}

export default StudentFilters