import React from 'react'
import { Link } from 'react-router-dom'

const Student = ({ profile }) =>{
    
    const { user, phone, emergency, address, belt, bio, _id } = profile

    return(
        <div className="students__item">
            <div className="student__name">
                { user.name }
            </div>
            { phone && 
                <div className="student__phone">
                    { phone }
                </div>
            }
            { emergency && 
                <div className="student__emergency">
                    { emergency }
                </div>
            } 
            { address && 
                <div className="student__address">
                    { address }
                </div>
            } 
            { belt && 
                <div className="student__address">
                    { belt }
                </div>
            } 
            { bio && 
                <div className="student__address">
                    { bio }
                </div>
            } 
            { user._id &&
                <Link to={`profile/${user._id}`}> View Profile </Link>
            }

        </div>
    )
}

export default Student