import React from 'react'

const TableHeader = ({ items }) => {

    const headerItems = items.map( ( item, i ) => <div key={i}>{item}</div>)
    
    return(
        <>
            <div class="historyRow flex historyRowHeader p-3 w-full">
                { headerItems }
            </div>
        </>
    )
}

export default TableHeader