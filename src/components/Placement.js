import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

import searchgif from './Vedio/search.gif'
function Placement({ search,cnt = Infinity }) {
    
    const [url,setUrl]=useState(useLocation());
    const dept=url.pathname.split('/')[2];
    const {data,error,loading,reFetch}=useFetch(`/dept/${dept}/Placement?limit=${cnt || 100}`);
    
    var count = 0;
    const handlecount = (val) => {
        count = val;
        return 1;
    }
    
    const isEqual = (itemE, searchV) => {
        itemE = itemE.toUpperCase();
        searchV = searchV.toUpperCase();
        if (!isNaN(searchV) && itemE.indexOf('-') === -1) {
            return parseInt(itemE) >= parseInt(searchV);
        }
        let value = itemE.indexOf(searchV);
        if (value !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            {
              data? data.map((item, i) => {
                    return search ? ((isEqual(item.packages, search) || isEqual(item.duration, search) || isEqual(item.Companyname, search)) ? (handlecount(1)) && (
                        <div key={i} className="flex flex-col flex-grow items-center content-center mt-0 text-inherit max-w-md">

                            <div className="flex md:flex-row border-t-0 text-[rgba(0,105,140,1)] max-w-min py-8 text-left text-base items-center content-center px-[18px]">
                                <div className="w-32 h-32 md:w-36 md:h-36 flex-grow-0 flex-shrink-0">
                                    <img src={item?.img} className="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='...'/>
                                </div>
                                <div className="flex flex-col flex-grow leading-8 mr-5 md:justify-start md:mt-0 ml-7 md:ml-9 md:mb-0 w-52">
                                    <div className="text-[22.5px]">{item?.name}</div>
                                    <div className="font-semibold text-[rgba(0,0,0,0.7)] tracking-wide text-lg">{item?.company}</div>
                                    <div className="font-normal text-[rgba(0,0,0,0.7)] tracking-wide">{item?.package}  ({item?.duration})</div>
                                </div>
                            </div>
                        </div>
                    ) : <></>) : (handlecount(0)) && (i<cnt)&&
                    (
                        <div key={i} className="flex flex-col snap-start shrink-0 flex-grow items-center content-center mt-0 text-inherit max-w-md">

                            <div className="flex md:flex-row border-t-0 text-[rgba(0,105,140,1)] max-w-min py-8 text-left text-base items-center content-center px-[18px]">
                                <div className="w-32 h-32 md:w-36 md:h-36 flex-grow-0 flex-shrink-0">
                                    <img src={item.img} className="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0 border-2" />
                                </div>
                                <div className="flex flex-col flex-grow leading-8 mr-5 md:justify-start md:mt-0 ml-7 md:ml-9 md:mb-0 w-52">
                                    <div className="text-[22.5px]">{item?.name}</div>
                                    <div className="font-semibold text-[rgba(0,0,0,0.7)] text-lg tracking-wide">{item?.company}</div>
                                    <div className="font-normal text-[rgba(0,0,0,0.7)] tracking-wide">{item?.package} LPA</div>
                                </div>
                            </div>
                        </div>
                    )
                }):<h1>data not available</h1>
            }
            {
                count === 0 && search ?
                    <div className='mb-4 block mx-auto'>
                        <div className='w-[75%] sm:w-full m-2  h-[21rem] flex items-center justify-center'>
                            <div className='card border h-full border-white text-gray-700 rounded-lg flex flex-col items-center text-2xl font-semibold italic justify-center'>
                                <img src={searchgif} alt='...' />
                                <span className='my-10 italic'>No Pages Found!</span>
                            </div>
                        </div>
                    </div> : <></>
            }
        </>
    )
}

export default Placement