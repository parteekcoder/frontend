import { React, useState } from "react";
import { useLocation } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import Heading from "../components/Heading";

function Infrastructure() {
  const [url,setUrl]=useState(useLocation());
  const {data,error,loading,reFetch}=useFetch(url.pathname+'?q=Infrastructure');
  return (
    <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Infrastructure" />

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-4 p-2 place-items-center gap-4 antialiased text-gray-900">
        {
          data ? data.map((item, i) => {
            return (
              item.type==="Infrastructure"&&<div key={i} className='my-4 sm:mx-4 p-2'>
                <div className="w-full h-72 border-2 object-cover object-center rounded-lg shadow-md overflow-hidden">
                  <img src={item?.img} alt=" random image" className="w-full h-full object-cover object-center rounded-lg shadow-md hover:scale-110 duration-500" />
                </div>
                <div className="relative px-4 -mt-8 md:-mt-12">
                  <div className="max-w-fit mx-auto bg-white flex items-center justify-center py-3 px-4 md:px-6 md:py-6 rounded-lg shadow-lg">
                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{item?.title}</h4>
                  </div>
                </div>

              </div>
            )
          }) : <h1>Data not Available</h1>
        }
      </div>
    </div>
  )



}





export default Infrastructure

