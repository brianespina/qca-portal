import React, { useState } from 'react'

import Card from '../card/card.component'

const Modal = ({ children, isOpen, title = '' }) => {

    const [toggleOpen, setToggleOpen] = useState(isOpen)

    const handleClick = () =>{
        setToggleOpen(!toggleOpen)
    }

    return(
        <>
            <div className={`modal-overlay ${ toggleOpen && 'active'}`}>
                <div className="modal-container">
                    <div className="modal-container__close-button" onClick={handleClick}>&times;</div>
                    <Card>
                        { title && 
                            <h2>
                                { title }
                            </h2>
                        }
                        { children }
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Modal