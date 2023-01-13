import React, { useEffect, useState } from 'react'
import first from './Img/homepage.jpg'
import sec from './Img/003.jpg'
import third from './Img/02.jpeg'
import four from './Img/002.jpg'
import five from './Img/002.png'
import six from './Img/03.jpeg'
import { useLocation } from 'react-router-dom'
function Test() {
    const image = [
        first,
        sec,
        third,
        four,
        five,
        six
    ]
    const dept=useLocation().pathname.split('/')[1];
    console.log(dept)
    const department={
        "it":"Information Technology",
        "cse":"Computer Science and Engineering",
        "bt":"Bio Technology",
        "ce":"Civil Engineering",
        "ch":"Chemical Engineering",
        "ec":"Electronics And Communication Engineering",
        "ee":"Electrical And Electronics Engineering",
        "ice":"Instrumentation And Control Engineering",
        "me":"Mechanical Engineering",
        "ipe":"Industrial And Production Enginnering"
    }
    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(() => ((value === 5 ? 0 : value + 1)));
        }, 6000);
        return () => clearInterval(interval);
    }, [value])
    return (
        <>
            <div className="mt-0 md:mt-5 relative">
                <div className="relative w-full overflow-hidden">
                    <div className='relative bg-gradient-to-b from-accent to-transparent bg-cover bg-center w-full items-center transition-all justify-center'>
                        <img src={image[value]} className='w-screen aspect-video sm:h-[450px] block align-middle' alt="" />
                        <div className='absolute bg-gradient-to-b from-accent to-transparent bg-cover bg-center flex flex-col w-full h-fit bottom-0 items-center justify-center '>
                            <div className="sm:text-4xl m-2 font-bold text-white">
                                <h6>{department[dept]}</h6>
                            </div>
                            <h2 className="text-2xl sm:text-3xl m-2 font-bold text-white">
                                NITJ<span className="mx-2 p-1 font-medium uppercase">Welcomes you</span> 
                            </h2>
                        </div>
                        <div className='top-0 absolute w-full h-full flex items-center justify-between p-2'>
                            <button className='w-5 h-5 active:translate-y-1' onClick={()=>setValue(() => ((value === 0 ? 5 : value - 1)))}><svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/></svg></button>
                            <button className='w-5 h-5 active:translate-y-1' onClick={()=>setValue(() => ((value === 5 ? 0 : value + 1)))}><svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z' /></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test