import { React, useState } from 'react'
import useFetch from '../hooks/useFetch'
import OpenPdf from './OpenPdf'
import { useLocation } from 'react-router-dom';
import IT7 from '../components/Pdf/IT7.pdf'
function Students() {

    const [url, setUrl] = useState(useLocation());
    const { data, loading, error, reFetch } = useFetch(url.pathname);

    return (
        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-medium text-[#fff] shadow-lg rounded-3xl text-2xl'>Students</div>
            <div>
                <div className='flex w-fit items-center my-1 border border-gray-300 text-gray-900 text-sm p-2 rounded'>
                    <label htmlFor="states" className="mr-2">Branch :</label>
                    <select id="states" className="border-none outline-none">
                        <option defaultValue={2021}>{2021}</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                    </select>
                </div>
                <OpenPdf link={IT7} />
            </div>
        </div>
    )
}

export default Students
