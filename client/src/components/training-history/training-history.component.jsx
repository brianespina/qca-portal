import React, { useEffect } from 'react'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'
import { HistoryIcon } from '../icons/icons.component'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import LoaderTable from '../loader-table/loader-table.component'
import { getTransactions, cleanupTransactions } from '../../redux/reducers/transaction/transaction.actions'
import { selectTransactions, selectTransactionsAreLoading } from '../../redux/reducers/transaction/transaction.selectors'

const TrainingHistory = ({getTransactions, isLoading, cleanupTransactions, uid, transactions, ...otherProps }) => {

    useEffect(()=>{
        getTransactions(uid)
        return () => {
            cleanupTransactions()
        }
    }, [getTransactions])

    const transactionRows = transactions.map( item =>{ 

        const date = moment().format('MMMM D YYYY')
        const validity = item.validity === 1 ? `${item.validity} Day` : `${item.validity} Days`
        const promo = item.promo ? 'True' : 'False'

        return (
            <div className="historyRow flex p-3">
                <div className="historydate">
                    {date}
                </div>
                <div className="historyvalid">
                    {validity}
                </div>
                <div className="historypromo">
                    {promo}
                </div>
                <div className="historyprice">
                    <CurrencyFormat value={item.price} thousandSeparator={true} prefix={'₱'} /> 
                </div>
                <div className="historypaid">
                    <span>{item.status}</span>
                </div>
            </div>
        )
    })

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
                {isLoading ? <LoaderTable /> : 
                    <>
                        {transactions.length ? transactionRows :
                            <div className="text-lg pt-5 pb-5">
                                No transaction data found
                            </div>
                        }
                    </>
                }

            </div>
            
        </>
    )
}

const mapDispatchToProps = {
    getTransactions,
    cleanupTransactions
}

const mapStateToProps = createStructuredSelector({
    transactions: selectTransactions,
    isLoading: selectTransactionsAreLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingHistory)