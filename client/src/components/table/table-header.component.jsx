import React from 'react'

const TableHeader = ({ items }) => {

    const headerItems = items.forEach( ( item, i ) => {
        <div key={i}>item</div>
    })
    
    return(
        <>
            <div class="historyRow flex historyRowHeader p-3">
                { headerItems }
            </div>
        </>
    )
}

export default TableHeader