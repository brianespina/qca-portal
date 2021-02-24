import React from 'react'
import Card from '../card/card.component'
import Button from '../button/button.component'
import { PlusIcon } from '../icons/icons.component'

const SessionForm = () => {
    return(
        <>
            <Card>
                <Button title='Add Session' icon='PlusIcon' type='success'>
                    <PlusIcon className="icon-left-sm"/>
                </Button>
            </Card>
        </>
    )
}

export default SessionForm