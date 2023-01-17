import { React, useState } from 'react'
import gif from "./Vedio/New.gif";
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js'


const Departmentmiddle = () => {

    const [url, setUrl] = useState(useLocation());
    const dept = useLocation().pathname.split('/')[2];
    const Activity = useFetch(`/dept/${dept}/Activity`).data;
    const News = useFetch(`/news`).data;
    return (
        <>
            <div className='flex flex-col overflow-hidden md:flex-row max-w-[100%-240px]'>

                {/* Activity  */}
                <div className='max-w-full md:w-1/2 h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] py-3 px-0 mx-3 my-[36px] pt-[54px]'>
                    <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[410] tracking-wide leading-8 text-[#fff] shadow-lg rounded-3xl text-2xl mx-3'>Activities</div>
                    <ul class="flex flex-col gap-[12px] lg:gap-[20px] list-disc text-justify px-8 py-2 h-80">
                        {
                            Activity ? Activity.map((n, i) =>
                                <li key={i} class="hover:font-medium"><a href={`${n?.link}`}>{n?.title}</a>&nbsp;<span class="absolute pt-1 text-lg"><img src={gif} alt='...' /></span>
                                </li>
                            ) : <h1>Data not Available</h1>
                        }
                    </ul>
                </div>
                <div className='max-w-full md:w-1/2 h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] py-3 mx-3 my-[36px] pt-[54px]'>
                    <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[410] tracking-wide leading-8 text-[#fff] shadow-lg rounded-3xl text-2xl mx-3'>News & Highlights</div>
                    <div className='scrollbar max-w-full block h-80 overflow-y-auto px-3'>
                        {
                            News ? News.map((n, i) =>
                                <div key={i} className='flex p-2 m-2'>
                                    <li className='list-[circle] list-inside w-4 h-4'></li>
                                    <a href={`${n?.link}`} className={"flex items-end mx-1 border-b pb-2 text-justify sm:text-[16px] leading-tight tracking-wide text-gray-900 font-sans hover:font-serif hover:text-[rgba(0,105,140,1)] text-opacity-100 "}>{n?.title} <img src={gif} alt='...' className='border-0 align-middle' /></a>
                                </div>
                            ) : <h1>Data not available</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Departmentmiddle