import React from 'react'
import { useEffect } from 'react'
function HodMessage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='flex flex-col mb-4 mt-20 mx-2'>
      <h1 className=' top-2 text-center text-2xl font-bold md:font-extrabold md:text-3xl text-orange-600 font-serif m-2'>Head Of Department</h1>
      <div className='flex flex1 bg-green-50 shadow-lg shadow-blue-500/50 p-8 rounded-md'>
        <div className='rounded-lg overflow-clip' style={{ height: "300px", width: "262px" }}>
          <img src='https://www.nitj.ac.in/images/faculty/20071962443.jpg' alt='HOD' className='shadow-md    ' />
        </div>
        <div className=' w-11/12'>
          <h2 className='mx-8 text-base font-medium my-2 mt-4 mx'><b className='text-2xl mr-2'>Dr Geeta Sikka</b> Associate Professor & Head</h2>
          <hr className='bg-green-900 h-1 m-0' />
          <p className='mx-8 my-4 w-11/22  mx'>
            <h1><i className='underline'>Area of Interest</i>: Sustainable Development, Productivity & Efficiency analysis</h1>
            <h2><i className='underline'>Email</i>: sikkag@nitj.ac.in</h2>
            <h3><i className='underline'>Phone</i>: 26591171 (HOD)</h3>

            <p className=' my-4 text-justify '>
              It is a privilege to lead Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar,
              one of the national accolades and an outstanding institution of higher learning. NIT Jalandhar
              is ranked 49th in the National Institutional Ranking Framework (NIRF), Band-Excellent in the
              Atal   Ranking of Institutions on Innovation Achievements (ARIIA), and was recently ranked in
              the 401-500 range  in the Times Higher Education (THE) Emerging Economies University
              Rankings 2022.
            </p>
          </p>
        </div>

      </div>

    </div>


  )
}

export default HodMessage