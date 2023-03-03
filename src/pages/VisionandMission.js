import React from 'react'
// import vision from './../components/Img/vision.gif'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
function VisionandMission() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dept=useLocation().pathname.split('/')[2];
  const {data,loading,error,reFetch}=useFetch(`/dept/${dept}/messageofHOD`);
  return (
    <div className='flex flex-col justify-center items-center mt-12'>
      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[40px] pt-[34px] place-items-center m-1'>
        <div className='absolute -mt-[58px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Mission</div>
        <p className='my-5 px-4 text-justify justify-center'>
          {data?.mission}
        </p>
      </div>

      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[40px] pt-[34px] place-items-center m-1'>
        <div className='absolute -mt-[58px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Vision</div>
        <p className='my-5 px-4 text-justify justify-center'>
         {data?.vision}
        </p>
      </div>
    </div>

  )
}

export default VisionandMission