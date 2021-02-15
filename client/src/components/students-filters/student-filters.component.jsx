import React from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { GridIcon, ListIcon } from '../icons/icons.component'
import { selectView } from '../../redux/reducers/profile/profile.selectors'
import { updateView } from '../../redux/reducers/profile/profile.actions'

const StudentFilters = ({ view, updateView})=> {
    return(
        <>  
            <div className="view-filter">
                <span onClick={()=>updateView('grid')} className={view === 'grid' ? 'active' : undefined}><GridIcon className="w-4 inline"/></span>
                <span onClick={()=>updateView('list')} className={view === 'list' ? 'active' : undefined}><ListIcon className="w-4 inline"/></span>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    view: selectView
})

const mapDispatchToProps = {
    updateView
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentFilters)