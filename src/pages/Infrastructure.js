import {React,useState} from "react";
import People from './People'
import { useLocation } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

function Infrastructure() {
  const [url,setUrl]=useState(useLocation());
  const {data,error,loading,reFetch}=useFetch(url.pathname);

  return (
    <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
      <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Infrastructure</div>

      <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-4 p-2 place-items-center gap-4 antialiased text-gray-900">
        {
         data? data.map((item, i) => {
            return (
              <div key={i} className='m-4 p-2'>
                <img src={item.src} alt=" random imgee" class="w-full border-2 object-cover object-center rounded-lg shadow-md" />

                <div class="relative px-4 -mt-12  ">
                  <div class="max-w-fit mx-auto bg-white flex items-center justify-center p-6 rounded-lg shadow-lg">
                    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{item.title}</h4>
                  </div>
                </div>

              </div>
            )
          }):<h1>Data not Available</h1>
        }
      </div>
    </div>
  )



}





export default Infrastructure

