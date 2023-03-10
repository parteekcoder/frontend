import React from 'react'
import { useState } from 'react'
import sy from '../components/Img/sy.png'
import sy6 from '../components/Img/syl-5.jpg'
import pdf from '../components/Vedio/pgf.gif'
import syllabuspdf from '../components/Pdf/syllabus.pdf'
function Syllabus({heading,syllabus}) {
  const List = [
    {
      Program: 'Btech',
      sem: [
        '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'
      ]
    },
    {
      Program: 'Mtech',
      sem: [
        '1st', '2nd', '3rd', '4th'
      ]
    }
  ]
  const Mtech = [
    sy6, sy, sy6, sy
  ]
  const Btech = [
    sy, sy6, sy, sy6, sy, sy6, sy, sy6
  ]
  const [program, setProgram] = useState('Btech');
  const [bsem, setBsem] = useState('1st');
  // const [msem, setMsem] = useState('1st');
  const [overview, setOverview] = useState(true);


  return (
    <>
      <div className='flex flex-col items-center justify-center w-full py-4 mt-12'>
        <div className='mb-4 p-2 shadow-lg'><span className='text-opacity-70 font-bold text-4xl italic'>{heading}</span></div>
        <div className='w-full p-1 flex items-center justify-center'>
          <select defaultValue={program} onChange={(e) => { setProgram(e.target.value); setBsem('1st') }} className='border text-lg font-medium rounded-md focus:border-gray-200 shadow-md w-1/2 p-2'>
            <option value='Btech' className='p-2'>Btech</option>
            <option value="Mtech" className='p-2'>Mtech</option>
          </select>
        </div>
        <div className='w-full p-1 flex items-center justify-center'>
          {
            List.map((item, i) => {
              return item.Program === program ? (
                <select key={i} className='border rounded-md text-lg font-medium focus:border-gray-200 shadow-md w-1/3 p-2' defaultValue={bsem} onChange={(e) => { setBsem(e.target.value) }}>
                  {item.sem.map((item1, j) => {
                    return <option value={item1} key={j} >{item1} Sem</option>
                  })}
                </select>
              ) : <></>
            })
          }
          {/* </select> */}
        </div>

        <div className='m-4 rounded-lg shadow-md'>
          <div className='block rounded-t-lg shadow h-12 md:h-16 w-[11.7rem] bg-gray-400 text-white'>
            <button className={"h-full mr-1 p-2 float-left text-lg md:text-xl rounded-tl-lg font-medium " + (overview ? 'bg-gray-700' : '')} onClick={() => { setOverview(true) }} >Overview</button>
            <button className={"h-full ml-1 p-2 float-right max-w-max text-lg md:text-xl rounded-tr-lg font-medium " + (overview ? '' : 'bg-gray-700')} onClick={() => { setOverview(false) }}>Details</button>
          </div>
          <div className='flex w-full h-full shadow-lg bg-gray-400 rounded-b-md p-8 items-center justify-start'>
            {
              List.map((item, i) => {
                return item.Program === program && program === 'Btech' ? (
                  <div key={i}>
                    {item.sem.map((item1, j) => {
                      return item1 === bsem ?
                        overview ? <img src={Btech[j]} alt='...' className='aspect-auto' /> :
                          <div key={j} className='flex items-center justify-center'>
                            <div className='w-28 h-28 overflow-hidden rounded-lg flex items-center justify-center'>
                              <img src={pdf} alt='...' className='w-40' />
                            </div>

                            <div className='flex flex-col justify-center items-center m-2 w-52 h-52'>
                              <div className='block m-2'>
                                <button className="flex hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50 mx-2 my-2 font-bold text-lg py-3 duration-500 bg-[#2d2546] text-white px-4 rounded items-center justify-center active:translate-y-[2px] italic">Download <svg className="fill-current w-4 h-4 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg></button>
                              </div>
                              <div className='block'>
                                <a href={syllabuspdf} target='_blank' rel='noreferrer'>
                                  <button className="flex hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50 mx-2 my-2 font-bold text-lg py-3 duration-500 bg-[#2d2546] text-white px-4 rounded items-center justify-center active:translate-y-[2px] italic">View Pdf</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        : <></>
                    })}
                  </div>
                ) : item.Program === program && program === 'Mtech' ? (
                  <div key={i}>
                    {item.sem.map((item1, j) => {
                      return item1 === bsem ?
                        overview ? <img src={Mtech[j]} alt='...' className='aspect-auto' /> :
                          <div key={j} className='flex items-center justify-center'>
                            <div className='w-28 h-28 overflow-hidden rounded-lg flex items-center justify-center'>
                              <img src={pdf} alt='...' />
                            </div>
                            <div className='flex flex-col justify-center items-center m-2 w-52 h-52'>
                              <div className='block m-2'>
                                <button className="flex hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50 mx-2 my-2 font-bold text-lg py-3 duration-500 bg-[#2d2546] text-white px-4 rounded items-center justify-center active:translate-y-[2px] italic">Download <svg className="fill-current w-4 h-4 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg></button>
                              </div>
                              <div className='block'>
                                <a href={syllabuspdf} target='_blank' rel='noreferrer'>
                                  <button className="flex hover:shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/50 mx-2 my-2 font-bold text-lg py-3 duration-500 bg-[#2d2546] text-white px-4 rounded items-center justify-center active:translate-y-[2px] italic">View Pdf</button>
                                </a>
                              </div>
                            </div>
                          </div>
                        : <></>
                    })}
                  </div>
                ) : <></>
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Syllabus