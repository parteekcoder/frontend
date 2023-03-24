import React from 'react'
import OpenPdf from './OpenPdf'
import Time from '../components/Pdf/TimeIT.pdf'
function Timetable() {
    const Data = ['Time Table 2023', Time]
    return (
        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-medium text-[#fff] tracking-wider shadow-lg rounded-3xl text-xl'>Time Table</div>
            <div className='shadow shadow-blue-400 m-4 pb-2'>
                <div className='w-full py-3 font-medium text-lg px-4 shadow-md shadow-blue-200'>{Data[0]}</div>
                <OpenPdf link={Data[1]} />
            </div>
        </div>
    )
}

export default Timetable