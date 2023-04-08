import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Heading from '../components/Heading';

function ContactUs() {

  const [url, setUrl] = useState(useLocation());
  const dept = url.pathname.split('/')[2];
  return (
    <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
      <Heading name="Contact Us" />

      <div className='flex-1 shadow p-8 rounded-md'>
        <div className=' w-11/12 mx-auto'>
          <div className="w-full bg-white relative flex flex-wrap py-6 rounded">
            <div className="lg:w-1/2 px-6 ">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest">Address</h2>
              <p className="mt-1">Grand Trunk Road, Barnala Amritsar Bypass Rd Jalandhar, Punjab-144027, India</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2>
              <span className="text-indigo-500 leading-relaxed">o{dept}@nitj.ac.in</span>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Phone</h2>
              <p className="leading-relaxed">111-444-7890</p>
            </div>
          </div>

          <div className="mt-2">
            <div className="pt-2 flex items-center justify-center text-lg text-white">
              <a href="/" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa-brands fa-facebook-f"></i></a>
              <a href="/" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa fa-instagram"></i></a>
              <a href="/" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa fa-twitter"></i></a>
              <a href="/" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-orange-600 mx-1 grid place-items-center" ><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs
