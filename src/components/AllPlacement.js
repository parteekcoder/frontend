import React, { useEffect, useState } from 'react'
import Placement from './Placement'
function AllPlacement() {

    const [search, setSearch] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Placements</div>
                <div className='flex items-center justify-center w-full my-3 mx-auto mb-16'>
                    <input placeholder='Search by (Company Name, Name, Packages)' defaultValue={search} onChange={(e) => { setSearch(e.target.value) }} className='w-11/12 md:w-3/4 p-2 text-lg rounded border-2 shadow-lg border-gray-300 focus:border-gray-400 focus:outline-none' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 m-2 lg:mx-4 w-full items-center justify-center place-items-center mx-auto text-gray-700'>
                    <Placement search={search} />
                </div>
            </div>
        </>
    )
}

export default AllPlacement