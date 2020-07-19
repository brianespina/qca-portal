import React, { useState } from 'react'

import Card from '../card/card.component'

const Modal = ({ children, initial }) => {

    const [toggleOpen, setToggleOpen] = useState(initial)

    const handleClick = () =>{
        setToggleOpen(!toggleOpen)
    }

    return(
        <>
            { toggleOpen &&
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-container__close-button" onClick={handleClick}>&times;</div>
                        <Card>
                            { children }
                        </Card>
                    </div>
                </div>
            }
            
        </>
    )
}

export default Modal