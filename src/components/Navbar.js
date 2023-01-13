import React, { useEffect, useRef, useState } from 'react'
import logo from './Img/logo.png'
import comp from './Vedio/comp.mp4'
import Hambur from './Img/menu.png'
import Clock from './Clock'
import {useNavigate} from 'react-router-dom'


function Navbar({handlescroll,offtop,setOfftop}) {
    let navigate=useNavigate();
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(getWindowSize());
    const myref = useRef();
    const getListsize = () => {
        setWidth(getWindowSize);
    }
    const Handlescroll = () => {
        let offtop1 = myref.current.getBoundingClientRect().top;
        if(offtop1 <= -100){
            if(!offtop)
            setOfftop(true);
        }else{
            setOfftop(false)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', Handlescroll);
        window.addEventListener('resize', getListsize);
        return () => {
            window.removeEventListener('resize', getListsize);
        };
    }, []);
    return (
        <>
            <div className='flex flex-col relative h-auto w-full' ref={myref}>
                <div className='h-28 p-2 py-4 flex bg-gray-800 text-white w-full items-center justify-between navsize'>
                    <div className='flex items-center my-2  logocon'>
                        <div className='block xsw-full'>
                            <img src={logo} className='h-20 float-left' alt='' />
                        </div>
                        <div className='mx-2'>
                            <div className='font-semibold'>
                                Department of Computer Science and Engineering
                            </div>
                            <div>Dr. B.R. Ambedkar</div>
                            <div>National Institute of Technology Jalandhar</div>
                        </div>
                    </div>
                    <div className='hidden md:block'><Clock /></div>
                </div>
                <div className='flex justify-between items-center bg-gray-900'>
                    <button className='p-3  flex items-center md:hidden' onClick={() => { setOpen(!open) }} >
                        <img src={Hambur} alt="..." className='h-8 w-8 m-1 mx-2 p-1 rounded-lg' />
                    </button>
                    <div className='block md:hidden m-2'><Clock /></div>
                </div>
                <div className={'flex-col bg-gray-900 text-white md:flex w-full justify-center md:items-center md:flex-row md:h-16'} style={open ? {display: 'flex',transition: 'height 400ms cubic-bezier(0.23, 1, 0.32, 1) 4s'} : (width < 768 ? { display: "none" } : ( offtop ? { dispay: "flex", position: "fixed", height:"4rem", opacity: "1" } : { display: "flex" }))}>
                    <div className='flex p-2 m-0'><button className="hover:shadow-lg hover:-translate-y-0 hover:shadow-gray-600 bg-transparent mx-4 md:mx-2 md:my-2 font-medium md:border md:hover:border-gray-900 border-gray-400 duration-500  md:py-2 md:px-3 rounded active:translate-y-2" onClick={()=>{navigate("/");setOpen(!open)}}>Home</button></div>
                    <div className='group shadow-sm p-2 m-0 md:border-none'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>About us</span>
                        <div className='absolute right-1/4 md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900   float-right group-hover:block'>
                            <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg'onClick={()=>{navigate("/MissionandVision"); setOpen(!open)}}>Vision and Mission</button></div>
                            <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg'onClick={()=>{navigate("/Infrastructure");setOpen(!open)}}>Infrastructure: At a glance</button></div>
                            <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg'onClick={()=>{navigate("/MessageofHOD");setOpen(!open)}}>HOD's Message</button></div>
                            <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg'onClick={()=>{navigate("/Achievements");setOpen(!open)}}>Achievements</button></div>
                            <div ><button className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg rounded-b-md' onClick={()=>{navigate("/contactus");setOpen(!open)}} >Contact us</button></div>                      
                        </div>                  
                    </div>
                    <div className='group shadow-sm p-2 m-0 md:border-none'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>Academics</span>
                        <div className='absolute right-[15%] md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900 group-hover:block'>
                            <div > <button  className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={()=>{setOpen(!open)}}>Programmes</button></div>
                            <div > <button  className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={()=>{navigate("/Acadcord");setOpen(!open)}}>Academic Coordinates</button></div>
                            <div ><button className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={()=>{navigate("/Syllabus");setOpen(!open)}}>Syllabus</button></div>
                            <div > <button  className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={()=>{navigate("/Timetable");setOpen(!open)}}>Time-Tables</button></div>
                            <div > <button  className='flex w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg rounded-b-md' onClick={()=>{ setOpen(!open)}}>Department Activities Calendar</button></div>
                        </div>
                    </div>
                    <div className='group shadow-sm p-2 m-0 md:border-none'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>People</span>
                        <div className='absolute right-1/2 md:right-auto z-10 mx-2 hidden border rounded-b-md bg-neutral-900 group-hover:block'>
                            <div> <button  className='flex justify-center w-full p-2 font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={()=>{setOpen(!open)}}>Faculty</button></div>
                            <div> <button  className='flex justify-center p-2 w-full font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={()=>{setOpen(!open)}}>PhD Scholars</button></div>
                            <div> <button  className='flex justify-center p-2 w-full font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={()=>{setOpen(!open)}}>Students</button></div>
                            <div> <button  className='flex justify-center p-2 w-full font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg' onClick={()=>{setOpen(!open)}}>Alumni*</button></div>
                            <div> <button  className='flex justify-center p-2 w-full font-medium hover:bg-blue-600 active:translate-y-1 shadow-lg rounded-b-md' onClick={()=>{setOpen(!open)}}>Staff</button></div>
                        </div>
                    </div>
                    <div className='group shadow-sm p-2 m-0 md:border-none'>
                        <span className='my-2 mx-4 font-medium hover:text-blue-600 cursor-pointer'>Research and Labs</span>
                        <div className='absolute z-10 mx-2 hidden border rounded-b-md bg-neutral-500 group-hover:grid grid-cols-3 md:group-hover:grid-cols-2 lg:group-hover:grid-cols-3'>
                            <div className='block w-auto flex-initial m-2 rounded hover:text-blue-700'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                    <div className='flex-auto text-center '>
                                         <button className='w-full h-full' onClick={()=>{setOpen(!open)}}>
                                            <span className='card-title rounded-md'>Research Areas</span>
                                            <video src={comp} autoPlay loop muted className='vedio rounded-md' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                    <div className='flex-auto text-center items-center'>
                                         <button className='w-full h-full' onClick={()=>{setOpen(!open)}}>
                                            <span className='card-title rounded-md'>Department Labs</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                    <div className='flex-auto text-center'>
                                         <button className='w-full h-full'onClick={()=>{setOpen(!open)}}>
                                            <span className='card-title flex-col rounded-md'><div>Publications</div><div>(Year-wise)</div></span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                    <div className='flex-auto text-center'>
                                         <button className='w-full h-full'onClick={()=>{setOpen(!open)}}>
                                            <span className='card-title rounded-md'>Projects</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                    <div className='flex-auto text-center'>
                                         <button className='w-full h-full'onClick={()=>{setOpen(!open)}}>
                                            <span className='card-title rounded-md'>Consultancy</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div  className='block w-auto flex-initial m-2 rounded'>
                                <div className='w-28 h-28 relative flex flex-col min-w-0 hover:border rounded active:translate-y-1 shadow-lg'>
                                    <div className='flex-auto text-center'>
                                         <button className='w-full h-full' onClick={()=>{setOpen(!open)}}>
                                            <span className='card-title rounded-md'>Research Labs</span>
                                            <video src={comp} autoPlay loop muted className='vedio' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        </>
    )
}

export default Navbar

function getWindowSize() {
    const innerwidth = window.innerWidth;
    return innerwidth;
}