import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { getSessions } from '../../../redux/reducers/session/session.actions'
import { getAllProfiles } from '../../../redux/reducers/profile/profile.actions'
import { createStructuredSelector } from 'reselect'
import { selectSessionItems, selectSessionIsLoading } from '../../../redux/reducers/session/session.selectors'
import { selectAllStudents } from '../../../redux/reducers/profile/profile.selectors'
import Card from '../../card/card.component'
import TableHeader from '../../table/table-header.component'
import TableRow from '../../table/table-row.component'
import TableContainer from '../../table/table-container.container'
import MainLayout from '../../layout/main-layout.component'
import PageTitle from '../../page-title/page-title.component'
import LoaderTable from '../../loader-table/loader-table.component'


const Sessions = ({ getSessions, sessions, isLoading, profiles, getAllProfiles }) => {

    useEffect(()=>{
        getSessions()  
        if(!profiles.length){
            getAllProfiles()
        }
    }, [])

    const setSessionRows = (loadState) => {

        if(loadState){
            const items = sessions.map( (item) => {
                let attendeeNames = []
                item.attendees.forEach( (attendee) => {
                    if(attendee.user.name === item.coach.name) return
                    let profile = profiles.find( prof => prof.user._id ===  attendee.user._id)
                    attendeeNames.push(<Link className="attendees-list" to={`/profile/${profile._id}`}>{ attendee.user.name }</Link>)
                })
        
                let columns = [
                    moment(item.date).format('LL'),
                    item.coach.name,
                    attendeeNames
                ]
                return columns
            })
        
            return items.map( (item, i) => <TableRow key={i} items={item} />)
        }

    }
    
    const headerItems = [
        'Date',
        'Coach',
        'Attendees'
    ]

    let sessionRows = setSessionRows(profiles.length)

    return(
        <>
            <MainLayout>
                <PageTitle>Training Sessions</PageTitle>
                <Card>
                    <TableContainer>
                        <TableHeader items={headerItems}></TableHeader>
                        {isLoading ?
                            <LoaderTable /> : 
                            sessionRows
                        }
                    </TableContainer>
                </Card>
            </MainLayout>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    sessions: selectSessionItems,
    isLoading: selectSessionIsLoading,
    profiles: selectAllStudents
})

const mapDispatchToProps = {
    getSessions,
    getAllProfiles
}

export default connect(mapStateToProps, mapDispatchToProps)(Sessions)