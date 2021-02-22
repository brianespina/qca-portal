import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSessions } from '../../../redux/reducers/session/session.actions'
import { createStructuredSelector } from 'reselect'
import { selectSessionItems } from '../../../redux/reducers/session/session.selectors'

import MainLayout from '../../layout/main-layout.component'
import PageTitle from '../../page-title/page-title.component'

const Sessions = ({ getSessions, sessions }) => {

    useEffect(()=>{
        getSessions()
    }, [])

    return(
        <>
            <MainLayout>
                <PageTitle>Training Sessions</PageTitle>
                
            </MainLayout>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    sessions: selectSessionItems
})

export default connect(mapStateToProps, { getSessions })(Sessions)