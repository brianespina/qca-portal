import React from 'react'
import { HistoryIcon } from '../icons/icons.component'
import payment from '../../payment'

const TrainingHistory = ({ ...otherProps }) => {
    console.log(Object.keys(payment))
    return(
        <>
            <div { ...otherProps }>
                <span className="sub-title mb-6"><HistoryIcon className="icon-left-sm"/> Training / Transaction History</span>

                <div className="historyRow flex historyRowHeader p-3">
                    <div>
                        Date
                    </div>
                    <div>
                        Validity
                    </div>
                    <div>
                        Promo
                    </div>
                    <div>
                        Price
                    </div>
                    <div>
                        Status
                    </div>
                </div>

                <div className="historyRow flex p-3">
                    <div className="historydate">
                        Feb 15 2021
                    </div>
                    <div className="historyvalid">
                        Valid for 1 day
                    </div>
                    <div className="historypromo">
                        no promo
                    </div>
                    <div className="historyprice">
                        200
                    </div>
                    <div className="historypaid">
                        <span>Paid</span>
                    </div>
                </div>

                <div className="historyRow flex p-3">
                    <div className="historydate">
                        Feb 15 2021
                    </div>
                    <div className="historyvalid">
                        Valid for 1 day
                    </div>
                    <div className="historypromo">
                        no promo
                    </div>
                    <div className="historyprice">
                        200
                    </div>
                    <div className="historypaid">
                        <span>Paid</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TrainingHistory