import React, { useState } from 'react'
import OpenPdf from './OpenPdf'

function AcademicCalender() {
    const Calendar = [
        {
            Name: 'Academic Calendar for Even Sem(Jan-July) 2023 Except B.Tech 1st Year',
            Link: 'https://www.nitj.ac.in/physics/Downloads/Academic_Calendar_except_B_55671205.pdf'
        }, {
            Name: 'Academic Calendar for Even Sem(Jan-July) 2023 for B.Tech 1st Year',
            Link: 'https://www.nitj.ac.in/physics/Downloads/Updated_Academic_Calendar_B_415381565.pdf'
        }, {
            Name: 'Academic calendar July-Dec. 2022',
            Link: 'https://www.nitj.ac.in/physics/Downloads/Academic_Calendar_for_July-December,_2022_-_excluding_B_79925%20(1)6869.pdf'
        }, {
            Name: 'Academic calendar Jan.-July 2022',
            Link: 'https://www.nitj.ac.in/physics/Downloads/Academic_Calendar_excluding_B_156345783.pdf'
        }, {
            Name: 'Academic calendar July-Dec. 2021',
            Link: 'https://www.nitj.ac.in/physics/Downloads/AC_Odd_semester-2021_(B_618399262.pdf'
        }
    ]
    const [activeLink, setActiveLink] = useState(0);
    const [plusOpen, setPlusOpen] = useState(false)
    return (
        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] tracking-wider shadow-lg rounded-3xl text-2xl'>Department Activities Calendar</div>
            <div className='shadow pb-1'>
                <div className='flex items-center justify-between text-lg font-medium py-2.5 px-4 shadow-md shadow-blue-600 border'>
                    <span>Department Activities Calendar</span>
                    <span className='cursor-pointer' onClick={() => setPlusOpen(!plusOpen)}>
                        {
                            plusOpen ? <svg className='w-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
                                : <i className="fa-soild fa-plus"></i>
                        }
                    </span>
                </div>
                <div className={"flex flex-col gap-3 my-2 px-4 shadow-md py-3 " + (plusOpen ? '' : 'hidden')}>
                    {
                        Calendar.map((item, i) => {
                            return (
                                <span key={i} onClick={() => setActiveLink(i)} className='cursor-pointer hover:text-blue-400 hover:font-medium'>{item.Name}</span>
                            )
                        })
                    }
                </div>
                <div className='shadow shadow-blue-400 m-4 pb-2'>
                    <div className='w-full py-3 font-medium text-lg px-4 shadow-md shadow-blue-200'>{Calendar[activeLink].Name}</div>
                    <OpenPdf link={Calendar[activeLink].Link} />
                </div>
            </div>
        </div>
    )
}

export default AcademicCalender
