import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import logo from './Img/logo.png'
function Navbar() {
    let navigate = useNavigate();
    const dept = useLocation().pathname.split('/')[2];
    var id = useLocation().pathname.split('/').at(-1);
    const { data, loading, error, reFetch } = useFetch(`/dept/${dept}/Faculty`);
    console.log(data)
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(data)
        setIsLogin(data?.validation?.status?.login);
    }, [data])
    return (
        <div>
            <nav className="scroll-smooth z-50 w-full bg-white lg:flex lg:items-center lg:justify-between h-[5rem] lg:py-5 font-['Poppins'] shadow-2xl">
                <div className="flex justify-around p-1 items-center ">
                    <img className="h-[3.62rem] w-[3.5rem] inline mx-2 lg:ml-24 cursor-pointer" src={logo} alt="logo" />
                    <div className="text-xs sm:text-base my-4 sm:my-5 ml-3  leading-5 text-[#0054A6]  cursor-pointer font-bold">
                        <a href="#"> Dr. B.R Ambedkar National Institute of Technology Jalandhar</a>
                    </div>

                    <span className="text-3xl cursor-pointer text-black mx-2 mr-3 lg:hidden block">
                        <ion-icon name="menu" onclick="Menu(this)" role="img" className="md hydrated" aria-label="menu"></ion-icon>
                    </span>
                </div>

                <ul className="lg:flex lg:items-center z-50 lg:z-auto lg:relative absolute bg-white w-full lg:h-[5rem] lg:top-0 lg:w-auto lg:py-0 py-4 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">

                    <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a href="" className="text-xs xl:text-base w-auto h-[1rem] text-[#0054A6] hover:text-[#D3D3D3] duration-500 ">
                            <i className="fa-solid fa-house"></i>
                        </a>
                    </li>


                    <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a href="givingback.html" className="text-xs xl:text-base w-auto h-[1rem] text-black hover:text-[#D3D3D3] duration-500 ">GIVING BACK</a>
                    </li>
                    <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a href="#" className="text-xs xl:text-base w-auto h-[1rem] text-black hover:text-[#D3D3D3] duration-500 ">
                            CHAPTERS</a>
                    </li>

                    {/* <li className="m-4 lg:mr-4 xl:m-4 my-6 lg:my-0">
                        <a href="" className="text-xs xl:text-base w-auto h-[1rem] text-black font-bold hover:text-[#D3D3D3] duration-500 ">LOGIN</a>
                    </li> */}

                    <button onClick={() => { !data?.validation?.status?.login && navigate(`/dept/${dept}/login`) }} className={"bg-[#0054A6] ml-4 mr-16 mb-8 lg:mb-0 text-white text-xs xl:text-base duration-500 w-20 xl:w-24 py-2 px-2 text-center h-[1.875rem] xl:h-10 shadow-md border border-[#FFD66E]  rounded hover:-translate-y-1 hover:scale-110"}>
                            {!data?.validation?.status?.login ? "Login":"Logout"}
                    </button>


                </ul>
            </nav>
        </div>
    )
}

export default Navbar
