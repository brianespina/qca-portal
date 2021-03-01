import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Card from '../card/card.component'
import Button from '../button/button.component'
import { PlusIcon } from '../icons/icons.component'
import TableHeader from '../table/table-header.component'
import { selectAllStudents, selectProfileIsLoading } from '../../redux/reducers/profile/profile.selectors'

const SessionForm = ({ profiles, profilesAreLoading }) => {

    const[formData, setFormData] = useState({
        coach: '5f153cbcca81990574fff83c',
        attendees: []
    })

    const [attendeeObj , setattendeeObj] = useState({
        id: '',
        name: '',
        validity: '',
        promo: '',
        price: '',
        status: ''
    })

    useEffect(() => {
        console.log(attendeeObj)
    }, [formData])

    const addAttendee = async (attendee) => {
        setFormData({
            ...formData,
            attendees: [
                ...formData.attendees,
                attendee
            ]
        })
    }

    const addSession = formData => {
        console.log(formData)
    }

    const attendees = formData.attendees.map( (attendee, i) => {
        return(
            <div className="form-attendees-box--item" key={i}>
                <div className="form-attendees-box--item-row"><span>Name: </span>{ attendee.name }</div>
                <div className="form-attendees-box--item-row"><span>Validity: </span>{ attendee.validity }</div>
                <div className="form-attendees-box--item-row"><span>Promo: </span>{ attendee.promo.toString() }</div>
                <div className="form-attendees-box--item-row"><span>Price: </span>{ attendee.price }</div>
                <div className="form-attendees-box--item-row"><span>Status: </span>{ attendee.status }</div>
            </div>
        )
    })

    const handleChange = (e) => {

        if(e.target.name === 'id'){
            setattendeeObj({
                ...attendeeObj, 
                [e.target.name]: e.target.value,
                name: e.target.selectedOptions[0].dataset.name
            })
        }else{
            setattendeeObj({
                ...attendeeObj, 
                [e.target.name]: e.target.value
            })
        }
        
    }

    const studentList = profiles.map( (item, i) => <option value={item.user._id} key={i} data-name={item.user.name}>{item.user.name}</option>) 


    return(
        <>
            <Card classes="block">
                <TableHeader items={['Coach', 'Attendess', ' ']}/>
                <form className="addSessionForm">

                    <div className="addSessionForm-boxes">
                        <select value={formData.coach}>
                            <option value="5f153cbcca81990574fff83c">Zaldy Villasenor</option>
                            <option value="5f153cbcca81990574fff83c">Arjay Salamillas</option>
                            <option value="5f153cbcca81990574fff83c">Brian Espina</option>
                        </select>
                    </div>

                    <div className="form-attendees-box addSessionForm-boxes">
                        <div className="form-attendees-box--item-form">
                            <select name="id" id="id" value={attendeeObj.id} onChange={e => handleChange(e)}>
                                {studentList}
                            </select>
                            <select name="validity" id="validity" value={attendeeObj.validity} onChange={e => handleChange(e)}>
                                <option value={1}>Session</option>
                                <option value={30}>Monthly</option>
                            </select>
                            <select name="promo" id="promo" value={attendeeObj.promo} onChange={e => handleChange(e)}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                            <select name="price" id="price" value={attendeeObj.price} onChange={e => handleChange(e)}>
                                <option value={200}>200</option>
                                <option value={2000}>2000</option>
                            </select>
                            <select name="status" id="status" value={attendeeObj.status} onChange={e => handleChange(e)}>
                                <option value={'paid'}>paid</option>
                                <option value={'pending'}>pending</option>
                            </select>
                        </div>

                        { attendees }
                        
                        <Button title='Add Attendee' type='success' onClick={() => addAttendee(attendeeObj)}>
                            <PlusIcon className="icon-left-sm"/>
                        </Button>
                    </div>

                    <div className="addSessionForm-boxes">
                        <Button title='Add Session' icon='PlusIcon' type='success' onClick={() => addSession(formData)}>
                            <PlusIcon className="icon-left-sm"/>
                        </Button>
                    </div>
                    
                </form>
                
            </Card>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    profiles: selectAllStudents,
    profilesAreLoading: selectProfileIsLoading
})

export default connect(mapStateToProps)(SessionForm)