import React, { useState } from 'react'
import Table from './Table'
// import useFetch from '../hooks/useFetch'
// import { useLocation } from 'react-router-dom'
// import axios from 'axios';
function AcadCordinator() {
    // const [url,setUrl]=useState(useLocation());
    // const {data,loading,error,reFetch}=useFetch(url.pathname);
    const tablehead = ['Programme', "Coordinator"]
    const data = [
        {
            1:'Under Graduate',
            2:'Dr. Nisha Chaurasia',
        },{
            1:'Post Graduate',
            2:'Dr. Mohit Kumar',
        },{
            1:'Doctor of Philosophy',
            2:'Dr. Vijay Kumar',
        }
    ]
    return (
        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[50px] md:my-[60px] pt-[54px] place-items-center'>
            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] text-[#fff] tracking-wider shadow-lg rounded-3xl text-lg md:text-2xl'>Academic Cordinator</div>
            <Table tablehead={tablehead} data={data}/>
        </div>
    )
}

export default AcadCordinator
