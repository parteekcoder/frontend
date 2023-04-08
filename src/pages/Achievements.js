import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Heading from '../components/Heading';
import Patents from '../components/Img/Patents.png'
import Citations from '../components/Img/Citations.png'
import People from '../components/Img/People.png'
import Publication from '../components/Img/Publication.png'
import placement from '../components/Img/placement.png'
function Achievements() {
  // const [url, setUrl] = useState(useLocation());
  // const { data, loading, error, reFetch } = useFetch(url.pathname);
  const data = [
    {
      icon: Publication,
      Name: 'Publications',
      Count: '150'
    }, {
      icon: Patents,
      Name: 'Patents',
      Count: '10'
    }, {
      icon: Citations,
      Name: 'Citations',
      Count: '6907'
    }, {
      icon: People,
      Name: 'Faculty',
      Count: '8'
    },{
      icon: placement,
      Name: 'Placements',
      Count: '98.3%'
    },{
      icon: 'https://cdn-icons-png.flaticon.com/512/2058/2058969.png',
      Name: 'Highest Package',
      Count: '51 LPA'
    }
  ]
  return (
    <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
      <Heading name="Achievements" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center" >
        {
          data.map((item, i) => {
            return (
              <div key={i} className="flex flex-col flex-grow content-center mt-0 text-inherit shadow rounded-lg my-4">
                <div className="flex flex-row py-3 text-left text-base items-center content-center px-[14px] xl:px-[18px]">
                  <div className="w-32 h-32 flex-grow-0 flex-shrink-0">
                    {
                      <img src={item.icon} className="w-full h-full object-fill object-center flex-grow-0 flex-shrink-0" alt='...' />
                    }
                  </div>
                  <div className="flex flex-col flex-grow leading-8 mr-5 text-start justify-start ml-9 w-56">
                    <div className="text-2xl font-semibold">{item.Name}</div>
                    <div className="text-blue-600 text-xl font-medium tracking-wide">{item.Count}</div>
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

export default Achievements

