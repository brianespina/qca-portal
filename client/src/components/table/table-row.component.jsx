import React from 'react'

const TableRow = ({ items }) => {

    const rowItems = items.map( (item, i) => 
        <div key={i}>{ item }</div> 
    )

    return(
        <>
            <div className="historyRow flex p-3">
                { rowItems }
            </div>
        </>
    )
}

export default TableRow