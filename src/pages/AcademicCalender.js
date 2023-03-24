import React, { useState } from 'react'
import OpenPdf from './OpenPdf'

function AcademicCalender() {
    const Calendar = ['Academic Calendar for Even Sem(Jan-July) 2023 Except B.Tech 1st Year','https://www.nitj.ac.in/physics/Downloads/Academic_Calendar_except_B_55671205.pdf']
    return (
        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-medium text-[#fff] tracking-wider shadow-lg rounded-3xl text-xl'>Department Activities Calendar</div>
            <div className='shadow shadow-blue-400 m-4 pb-2'>
                    <div className='w-full py-3 font-medium text-lg px-4 shadow-md shadow-blue-200'>{Calendar[0]}</div>
                    <OpenPdf link={Calendar[1]} />
                </div>
        </div>
    )
}

export default AcademicCalender
