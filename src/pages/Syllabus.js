import React from 'react'
import syllabuspdf from '../components/Pdf/syllabus.pdf'
import OpenPdf from './OpenPdf'
import Heading from '../components/Heading'
function Syllabus() {
    const Data = ['Syllabus 2023', syllabuspdf]
    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 md:p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Syllabus" />
            <div className='shadow shadow-blue-400 md:m-4 pb-2'>
                <div className='flex items-center justify-between w-full py-3 font-medium text-lg px-4 shadow-md shadow-blue-200'>
                    <span>{Data[0]}</span>
                    <div className='flex w-fit items-center border border-gray-300 text-gray-900 text-sm p-2 rounded'>
                        <label htmlFor="states" className="mr-2">Courses :</label>
                        <select id="states" className="border-none outline-none">
                            <option value="BTech">BTech</option>
                            <option value="MTech">MTech</option>
                        </select>
                    </div>
                </div>
                <OpenPdf link={Data[1]} />
            </div>
        </div>
    )
}

export default Syllabus