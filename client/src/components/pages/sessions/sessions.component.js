import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSessions } from '../../../redux/reducers/session/session.actions'

import MainLayout from '../../layout/main-layout.component'
import PageTitle from '../../page-title/page-title.component'

const Sessions = ({ getSessions }) => {

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

export default connect(null, { getSessions })(Sessions)