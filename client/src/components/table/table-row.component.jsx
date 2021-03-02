import React from 'react'

const TableRow = ({ items = [], children }) => {

    const rowItems = items.map( (item, i) => 
        <div key={i}>{ item }</div> 
    )

    return(
        <>
            <div className="historyRow flex p-3">
                { rowItems }
                { children }
            </div>
        </>
    )
}

export default TableRow