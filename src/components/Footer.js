import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from './Img/logo.png'
import { useRef } from 'react'
function Footer({ scroll, handlescroll }) {
    const footref = useRef(null);
    const HscrollIntoView = () => {
        if (scroll && footref.current) {
            footref.current.scrollIntoView({ behavior: 'smooth' });
            handlescroll();
        }
    }
    useEffect(() => {
        HscrollIntoView();
    }, [HscrollIntoView])

    return (

        <>
            <footer className="bg-gray-200">
                <div className="p-10 bg-gray-800 text-gray-200">
                    <div className="max-w-7xl mx-auto ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                            <div className="mb-5">
                                <img src={logo} className="h-24 w-24" alt='...' /><br />
                                <p>Grand Trunk Road, Barnala<br />
                                    Amritsar Bypass Rd<br />
                                    Jalandhar, Punjab-144011, India<br /><br />
                                </p>
                            </div>
                            <div className="mb-5">
                                <h4 className="text-yellow-500 text-xl pb-4">Useful Links</h4>
                                <ul>
                                    <li className="pb-4"><Link to='/' className="text-decoration: none hover:text-yellow-700">Home</Link></li>
                                    <li className="pb-4"><a href='/' className="text-decoration: none hover:text-yellow-700">About Us</a></li>
                                    <li className="pb-4"><a href='/' className="text-decoration: none hover:text-yellow-700">Program's Regulations</a></li>
                                    <li className="pb-4"><a href='/' className="text-decoration: none hover:text-yellow-700">Academic Calendar</a></li>
                                </ul>
                            </div>
                            <div className="mb-5">
                                <h4 className="text-yellow-500 text-xl pb-4">Student Corner</h4>
                                <ul>
                                    <li className="pb-4"><a href='/' className="text-decoration: none hover:text-yellow-700">Courses</a></li>
                                    <li className="pb-4"><Link to='/TimeTable' className="text-decoration: none hover:text-yellow-700">Time Tables</Link></li>
                                    <li className="pb-4"><a href='/' className="text-decoration: none hover:text-yellow-700">Placement Centre</a></li>
                                    <li className="pb-4"><a href='/' className="text-decoration: none hover:text-yellow-700">Clubs</a></li>
                                </ul>
                            </div>
                            <div className="mb-5">
                                <h4 ref={footref} className="text-yellow-500 text-xl pb-4">Contact Us</h4>
                                <strong className='pr-1'>Phone:</strong>+1 234 567 890 <br/>
                                <strong className='pr-1'>Email:</strong>abc@nitj.ac.in
                                <br/><h4 className="pb-2 pt-3 text-xl text-yellow-500">Subscribe Our Newsletter</h4>
                                <form className="flex flex-row flex-wrap">
                                    <input type="text" className="text-gray-500 w-2/3 p-2 focus:border-yellow-500" placeholder="email@gmail.com" />
                                    <button className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">Join</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-900 text-neutral-200 p-4 flex items-center justify-center">
                    <div className="">
                        <div className="text-center">
                            <div className="pt-2 text-xl text-white">
                                <a href='/' className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fa-brands fa-facebook-f"></i></a>
                                <a href='/' className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fa fa-instagram"></i></a>
                                <a href='/' className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fa fa-twitter"></i></a>
                                <a href='/' className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-600 mx-1 inline-block pt-1" ><i className="fa fa-linkedin"></i></a>
                            </div>
                            <div className="pt-2">
                                <p>© Copyright 2016-2022, All Rights Reserved <strong>NIT Jalandhar</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
