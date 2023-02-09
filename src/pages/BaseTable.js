import React from 'react'

function BaseTable({ show, search, thead, Data }) {
    return (
        <div className=''>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-2 scrollbar">
                <div className="flex w-full justify-between items-center p-4">
                    No data available
                </div>
            </div>

        </div>
    )
}

export default BaseTable
