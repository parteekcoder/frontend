import React from 'react'
import error from '../components/Vedio/404error.mp4'
function Error() {
  return (
    <div className='flex items-center justify-center w-screen h-[29rem] bg-[#393742]'>
       <video src={error} preload="metadata" className='w-full h-full'
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop/>
    </div>
  )
}

export default Error