import React from 'react'
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Heading from '../components/Heading';

function ResearchLab() {
  const url = useLocation();
  const dept = url.pathname.split('/')[2];
  const { data, error, loading, reFetch } = useFetch(`/dept/${dept}/Infrastructure` + '?q=Research Labs');
  return (
    <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
      <Heading name="Research Labs" />

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 m-4 p-2 place-items-center gap-4 antialiased text-gray-900">
        {
          data && data.map((item, i) => {
            return (
              item.type === "Research Labs" && <div key={i} className='my-4 sm:mx-4 p-2'>
                <div className="w-full border-2 object-cover object-center rounded-lg shadow-md overflow-hidden">
                  <img src={item?.img} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md hover:scale-110 duration-500" />
                </div>
                <div className="relative px-4 -mt-8 md:-mt-12">
                  <div className="max-w-fit mx-auto bg-white flex items-center justify-center py-3 px-4 md:px-6 md:py-6 rounded-lg shadow-lg">
                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{item?.title}</h4>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ResearchLab
