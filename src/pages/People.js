import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function People({ Title, Data }) {
    const [url,setUrl]=useState(useLocation());
    const dept=url.pathname.split('/')[2];
    return (
        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>{Title}</div>
            <div className='flex items-center justify-center w-full my-3 mx-auto mb-16'>
                <input placeholder='Search results' defaultValue={""} onChange={(e) => { }} className='w-11/12 md:w-3/4 p-2 text-lg rounded border-2 shadow-lg border-gray-300 focus:border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col w-full'>
                {
                    Data?Data.map((item, i) => {
                        return (
                            <Link to={{pathname:`/dept/${dept}/Profile/${i}`,state:i}}>
                                <div key={i} className="flex flex-col flex-grow content-center mt-0 text-inherit">
                                    <div className="flex flex-col sm:flex-row border-t-0 text-[rgba(0,105,140,1)] py-8 text-left text-base items-center content-center px-[14px] xl:px-[18px]">
                                        <div className="w-32 h-32 xl:w-36 xl:h-36 flex-grow-0 flex-shrink-0">
                                            <img src={item?.img} className="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='...' />
                                        </div>
                                        <div className="flex flex-col flex-grow leading-8 mr-5 md:mr-2 xl:mr-5 text-center sm:text-start md:justify-start mt-8 md:mt-0 ml-7 md:ml-2 xl:ml-9 md:mb-0">
                                            <div className="text-[22.5px]">{item?.name}</div>
                                            <div className="font-semibold text-[rgba(0,0,0,0.7)] tracking-wide">{item?.position}</div>
                                            <div className="font-normal text-[rgba(0,0,0,0.7)] tracking-wide">{item?.email}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }):<h1>Data not Available</h1>
                }
            </div>
        </div>
    )
}

export default People
