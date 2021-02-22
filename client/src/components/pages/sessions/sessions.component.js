import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { getSessions } from '../../../redux/reducers/session/session.actions'
import { createStructuredSelector } from 'reselect'
import { selectSessionItems, selectSessionIsLoading } from '../../../redux/reducers/session/session.selectors'
import Card from '../../card/card.component'
import TableHeader from '../../table/table-header.component'
import TableRow from '../../table/table-row.component'
import TableContainer from '../../table/table-container.container'
import MainLayout from '../../layout/main-layout.component'
import PageTitle from '../../page-title/page-title.component'

const Sessions = ({ getSessions, sessions, isLoading }) => {

    useEffect(()=>{
        getSessions()
    }, [])

    const headerItems = [
        'Date',
        'Coach',
        'Attendees'
    ]
    
    const items = sessions.map( (item) => {
        let attendeeNames = []
        item.attendees.forEach( (attendee) => attendeeNames.push(attendee.user.name) )
        let columns = [
            moment(item.date).format('LL'),
            item.coach.name,
            attendeeNames.join(',')
        ]
        return columns
    })

    const sessionRows = items.map( (item, i) => <TableRow key={i} items={item} />)

    return(
        <>
            <MainLayout>
                <PageTitle>Training Sessions</PageTitle>
                <Card>
                    <TableContainer>
                        <TableHeader items={headerItems}></TableHeader>
                        {sessionRows}
                    </TableContainer>
                </Card>
            </MainLayout>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    sessions: selectSessionItems,
    isLoading: selectSessionIsLoading
})

export default connect(mapStateToProps, { getSessions })(Sessions)