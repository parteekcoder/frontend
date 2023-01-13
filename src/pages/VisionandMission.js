import React from 'react'
// import vision from './../components/Img/vision.gif'
import { useEffect } from 'react'
function VisionandMission() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col justify-center items-center mt-12'>
      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[40px] pt-[34px] place-items-center m-1'>
        <div className='absolute -mt-[58px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Mission</div>
        <p className='my-5 px-4 text-justify justify-center'>
          A mission statement is a concise explanation of the organization's reason for existence. It describes the organization's purpose and its overall intention. The mission statement supports the vision and serves to communicate purpose and direction to employees, customers, vendors and other stakeholders
        </p>
      </div>

      <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[40px] pt-[34px] place-items-center m-1'>
        <div className='absolute -mt-[58px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Vision</div>
        <p className='my-5 px-4 text-justify justify-center'>
          A mission statement is a concise explanation of the organization's reason for existence. It describes the organization's purpose and its overall intention. The mission statement supports the vision and serves to
          communicate purp is, identifying the goal of its operations: what kind of product or service it provides, its primary customers or market, and its geographical region of operation
        </p>
      </div>
    </div>

  )
}

export default VisionandMission