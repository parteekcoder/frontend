import React, { useEffect } from 'react'
import logo from './Img/logo.png'
import Rect from './Img/rect.png'
import './Newnavbar.css'
function NewNavbar() {
    const handlescroll = () => {
        var institute_name = document.getElementsByClassName("institute_name");
        // var full_navbar = document.getElementsByTagName("header");
        var logo = document.getElementById("logo_250");
        var mySlide = document.getElementById("mySlides");
        var topbar = document.getElementById("top_bar");
        if (window.scrollY > 100) {
            topbar.style.transform="translateY(-50px)";
            for (let i = 0; i < institute_name.length; i++) {
                logo.style.width = "90px";
                logo.style.height = "90px";
                mySlide.style.marginTop="0px";
                logo.classList.remove("top-8");
                logo.classList.add("top-0");
                if (institute_name[i].classList.contains("text-xl")) {
                    institute_name[i].classList.remove("text-xl");
                    institute_name[i].classList.add("text-lg");
                }
                else if (institute_name[i].classList.contains("text-lg")) {
                    institute_name[i].classList.remove("text-lg");
                    institute_name[i].classList.add("text-sm");
                }
            }
        }
        else {
            logo.style.width = "120px";
            logo.style.height = "120px";
            mySlide.style.marginTop="28px";
            topbar.style.transform="translateY(0px)";
            logo.classList.remove("top-0");
            logo.classList.add("top-8");
            for (let i = 0; i < institute_name.length; i++) {
                if (institute_name[i].classList.contains("text-lg")) {
                    institute_name[i].classList.remove("text-lg");
                    institute_name[i].classList.add("text-xl");
                }
                else if (institute_name[i].classList.contains("text-sm")) {
                    institute_name[i].classList.remove("text-sm");
                    institute_name[i].classList.add("text-lg");
                }
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handlescroll);
    }, [])
    return (
        <>
            <header className="block lg:fixed bg-white top-0 right-0 left-0 z-50">
                {/* <!-- TOP NAV BAR stats --> */}
                <div id="top_bar" className="absolute top-0 right-0 left-0 transition-transform delay-200 z-50 flex h-7 flex-row bg-blue-700 py-0.5 px-12 text-sm font-bold text-white">
                    <div className="basis-1/2">
                        <div className="flex flex-row justify-center">
                            <div className="flex items-center pr-8" >
                                <span className="material-symbols-outlined"> engineering </span>
                                <a href="/" className="pl-1.5 text-sm">Jobs</a>
                            </div>
                            <div className="flex items-center pr-8" >
                                <span className="material-symbols-outlined"> add_business </span>
                                <a href="/" className="pl-1.5 text-sm">Tenders</a>
                            </div>
                            <div className="flex items-center pr-8" >
                                <span className="material-symbols-outlined"> badge </span>
                                <a href="/" className="pl-1.5 text-sm">Placements</a>
                            </div>
                            <div className="flex items-center pr-8" >
                                <span className="material-symbols-outlined"> event_note </span>
                                <a href="/" className="pl-1.5 text-sm">Resources</a>
                            </div>
                            <div className="flex items-center" >
                                <span className="material-symbols-outlined"> psychology_alt </span>
                                <a href="/" className="pl-1.5 text-sm">Help</a>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 pl-8">
                        <div className="flex flex-row justify-between">
                            <div className="flex basis-1/6 flex-row items-center">
                                <img src="img\facebook-icon.svg" className="h-5 px-1" style={{ height: "20px" }} alt='...'/>
                                <img src="img\facebook-icon.svg" className="h-5 px-1" style={{ height: "20px" }} alt='...'/>
                                <img src="img\facebook-icon.svg" className="h-5 px-1" style={{ height: "20px" }} alt='...'/>
                            </div>
                            <div className="flex basis-1/3 items-center">
                                <span className="material-symbols-outlined"> g_translate </span>
                                <a href="/" className="pl-1">हिन्दी / <span className="text-lg">A</span>+A-</a>
                            </div>
                            <div className="flex basis-1/3 items-center">
                                <span className="material-symbols-outlined"> contacts </span>
                                <a href="/" className="pl-1.5 text-sm">ERP</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- top nav bar ends --> */}
                {/* <!-- INSTITUTE LOGO & NAME starts --> */}
                <div id='mySlides' style={{marginTop:"28px"}}>
                    <div className="block">
                        <div className="align-center flex flex-row justify-between bg-white py-2.5 px-16">
                            <div className="institute_name flex max-w-lg basis-1/2 justify-center text-center text-lg font-bold uppercase">
                                <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
                            </div>
                            <div
                                className="institute_name flex max-w-lg basis-1/2 justify-center px-16 text-center text-xl font-bold uppercase">
                                <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides">
                        <div className="align-center flex flex-row justify-between bg-white py-2.5 px-16">
                            <div
                                className="institute_name flex max-w-lg basis-1/2 justify-center px-16 text-center text-xl font-bold uppercase">
                                <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
                            </div>
                            <div className="institute_name flex max-w-lg basis-1/2 justify-center px-8 text-center text-xl font-bold uppercase">
                                <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides">
                        <div className="align-center flex flex-row justify-between bg-white py-2.5 px-16">
                            <div className="institute_name flex max-w-lg basis-1/2 justify-center px-8 text-center text-xl font-bold uppercase">
                                <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
                            </div>
                            <div className="institute_name flex max-w-lg basis-1/2 justify-center text-center text-lg font-bold uppercase">
                                <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- INSTITUTE LOGO & NAME ends --> */}
                {/* <!-- Logo CONTAINER starts --> */}
                <div className="absolute left-1/2 z-50 mx-auto -translate-x-1/2" style={{ width: "230px" }}>
                    <img src={Rect} alt="..." />
                </div>
                <div id="logo_250" className="absolute aspect-square left-1/2 top-8 z-50 -translate-x-1/2" style={{ width: "120px", height: "120px" }}>
                    <img src={logo} alt="..." />
                </div>
                {/* <!-- Logo CONTAINER ends --> */}
                {/* <!-- NAV BAR starts--> */}
                <div
                    className="z-50 flex h-10 max-w-full flex-row justify-between bg-blue-700 text-xl font-bold text-white drop-shadow-lg">
                    <div className="basis-2/5">
                        <div className="flex w-full flex-row justify-between px-10">
                            <div className="group cursor-default hover:bg-blue-800">
                                <div className="p-1.5">Administration</div>
                                <div id="drop-down"
                                    className="absolute mt-0.5 hidden gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
                                    <div id="col"
                                        className="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500 hover:bg-orange-500">
                                        <div id="block" className="h-full">
                                            <div id="head" className="h-full overflow-clip rounded-b-2xl bg-blue-700 capitalize hover:bg-orange-500">
                                                <div className="p-2 text-center">ABOUT US</div>
                                                <div className="h-full bg-white">
                                                    <ul className="flex flex-col gap-1 rounded-b-xl px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Vision, Mission & Quality Policy
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Virtual tour
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Institute History
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Explore NITJ
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            NITJ Rankings & Awards
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Institute Prospectus Location
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="col" className="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="rounded-b-2xl bg-blue-700 capitalize hover:bg-orange-500">
                                                <div className="p-2 text-center">LEADERSHIP</div>
                                                <ul className="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Organisational Chart
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Chariperson
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Director
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Registrar
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Academic administration
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Student Welfare
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Faculty Welfare
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Planning and Development
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Research and Consultancy
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        International Affairs
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Hostel administration
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="col" className="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="rounded-b-2xl bg-blue-700 capitalize hover:bg-orange-500">
                                                <div className="p-2 text-center">GOVERNING BODIES</div>
                                                <ul className="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        NIT council
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Board of Governors
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Senate
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Standing committee of the senate
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Finance committee
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Building and works committee
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="col" className="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="rounded-b-2xl bg-blue-700 capitalize hover:bg-orange-500">
                                                <div className="p-2 text-center">CELLS</div>
                                                <ul className="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        E-Cell
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Equal opportunities and
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        SC/ST/OBC/PWD cell
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Rajbhasha cell
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        RTI Cell
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Student grievences cell
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Faculty grievences cell
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Staff grievences cell
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Public grievences
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Women cell
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="col" className="flex flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="rounded-b-2xl bg-blue-700 capitalize hover:bg-orange-500">
                                                <div className="p-2 text-center">COMMITTEES</div>
                                                <ul className="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Institute Development Committee
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Internal complaint committee
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Print, Digital Media and Newsletter
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Social Media
                                                    </li>
                                                    <li className="hover:font-semibold hover:text-[#FF6600]">
                                                        Website Development and Management
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative cursor-default hover:bg-blue-800">
                                <div className="p-1.5">Academics</div>
                                <div id="drop-down"
                                    className="absolute left-1/4 mt-0.5 hidden -translate-x-60 gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
                                    <div id="col"
                                        className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 capitalize hover:bg-orange-500">
                                                <div className="p-2 text-center">DEPARTMENTS</div>
                                            </div>
                                            <ul className="flex flex-col gap-1 rounded-b-xl bg-white px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Biotechnology
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Chemistry
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Chemical Engineering
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Civil Engineering
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Computer Science and Engineering
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Electronics and Communication Engineering
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Electrical Engineering
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Humanities and Management
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Industrial and Production Engineering
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Information Technology
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Instrumentation and Control Engineering
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Mathematics
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Mechanical Engineering
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Physics
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Textile Technology
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="col"
                                        className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                CENTERS
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Center for Energy and Environment
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Center for Artificial Intelligence
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Center for Continuing Education
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                ACADEMIC SYSTEM
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Academic circulars & Notices
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Academic calender
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Academic regulations
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Curriculum
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Fee structure
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    System of Evaluation and Grant of divsion
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Standard Operationg Procedures (SOP)
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    UMC rules
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    General FAQs
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="col"
                                        className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                ACADEMIC SERVICES
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Student Portal LOGIN
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Grade sheets
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Timetable
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Upcoming examination schedules
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Results
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Online application for Transcripts and certificates
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Online application for Verification of Degree
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    CGPA Criteria and Medium of Education
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Other Proformas
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Contact details
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                ACADEMIC FACILITIES
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Central Library
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Computer Center
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Central Workshop
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Institute Instrumentation center
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="col"
                                        className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                PROGRAMMERS OF STUDY
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Bachelor of Technology
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Master of Technology
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Master of Business Administration
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Master of Science
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Post Graduate Diploma
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Doctor of Philosophy
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                CONVOCATION
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Convocation 2022
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Past convocations
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                OTHER LINKS
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    UGC Act- Rules and Regulations
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    NIT Act and Statutes
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Ministry of Education Notifications
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    National Education Policy 2020
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative cursor-default rounded-b-xl hover:bg-blue-800">
                                <div className="p-2">Admissions</div>
                                <div id="drop-down"
                                    className="absolute left-1/2 mt-0.5 hidden -translate-x-1/3 gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
                                    <div id="col"
                                        className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                PROSPECTIVE STUDENTS
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Why NITJ?
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Explore NITJ
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Discover Student Life
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Courses Offered
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    How to Apply
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Admissions Process
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Virtual tour
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    International Students
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black md:font-bold">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Contact details for admission
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                ANTI RAGGING
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Anti ragging act
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Anti ragging affadvit
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Institute Anti-ragging rules
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="col"
                                        className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                JOIN NITJ
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    B.Tech Admission
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    M.Tech Admission
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Msc Admission
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    MBA Admission
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Ph.D Admission
                                                </li>
                                            </ul>
                                        </div>
                                        <div id="block">
                                            <div id="head" className="mb-3 bg-blue-700 p-2 text-center capitalize hover:bg-orange-500">
                                                INSTITUTE PROSPECTUS
                                            </div>
                                            <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    B.Tech
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    M.Tech
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Msc
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    MBA
                                                </li>
                                                <li className="hover:font-semibold hover:text-[#FF6600]">
                                                    Ph.D
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-2/5">
                        <div className="flex w-full flex-row justify-between">
                            <div className="basis-4/5">
                                <div className="flex flex-row justify-between">
                                    <div className="group relative cursor-default rounded-b-xl hover:bg-blue-800">
                                        <div className="p-2">Research</div>
                                        <div id="drop-down"
                                            className="absolute left-1/2 mt-0.5 hidden -translate-x-1/2 gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div id="col"
                                                className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        RESEARCH @ NITJ
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            VIDWAN (IRINS Instance)
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Research Publications
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Research Jobs
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Internships
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Sponsored Research Projects
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        INCUBATION @ NITJ
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            STI Hub
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            E-Cell
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Innovation club
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Institute Innovation council
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Technology Business Incubator
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="col"
                                                className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        CONSULTANCY @ NITJ
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Consultancy works
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            MoUs
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            IPRs
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Find an expert
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Central Research facilities
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        UPCOMING EVENTS
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Conferences
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Seminars
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            STC/ FDP
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Workshops
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative cursor-default rounded-b-xl hover:bg-blue-800">
                                        <div className="p-2">Alumni</div>
                                        <div id="drop-down"
                                            className="absolute left-1/2 mt-0.5 hidden -translate-x-1/2 gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div id="col"
                                                className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                                <div id="block">
                                                    <ul className="flex flex-col gap-1 px-2 py-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Alumni portal
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Alumni Registration
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Chapters
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Donation statistics and reports
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            GIve back
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Impact
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="block">
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black md:font-bold">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Alumni affairs contact details
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative cursor-default rounded-b-xl hover:bg-blue-800">
                                        <div className="p-2">Life at NITJ</div>
                                        <div id="drop-down"
                                            className="absolute right-0 mt-0.5 hidden gap-5 rounded-b-xl bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div id="col"
                                                className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        CLUB & SOCITITES
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Vision, Mission & Quality Policy
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Heartfulness Mediation club
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Prayaas - A campaign for smile
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            R-Tist Robotics Club
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            SPIC MACAY
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            “We Can” Club
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Yoga club
                                                        </li>
                                                        <li className="flex justify-between hover:font-semibold hover:text-[#FF6600]">
                                                            Zeal Society
                                                            <div>View all</div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        SCHOLARSHIPS
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Dr. Pratap Singh Memorial Scholarhsip
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            MCM Scholarship
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Post Matric Scholarship
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Siemens India Scholarship
                                                        </li>
                                                        <br />
                                                        <li className="font-semibold hover:font-bold hover:text-[#FF6600]">
                                                            View all
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="col"
                                                className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        LEADERSHIP
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Organisational Chart
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Chariperson
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Director
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Registrar
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Academic administration
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Student Welfare
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Faculty Welfare
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Planning and Development
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Research and Consultancy
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            International Affairs
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Hostel administration
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="col"
                                                className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        GOVERNING BODIES
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            NIT council
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Board of Governors
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Senate
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Standing committee of the senate
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Finance committee
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Building and works committee
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="col"
                                                className="flex min-w-max flex-col gap-5 hover:rounded-b-xl hover:border-2 hover:border-orange-500">
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        CELLS
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            E-Cell
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Equal opportunities and
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            SC/ST/OBC/PWD cell
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Rajbhasha cell
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            RTI Cell
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Student grievences cell
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Faculty grievences cell
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Staff grievences cell
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Public grievences
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Women cell
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="block">
                                                    <div id="head" className="mb-3 bg-blue-700 py-2 text-center capitalize hover:bg-orange-500">
                                                        COMMITTEES
                                                    </div>
                                                    <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Institute Development Committee
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Internal complaint committee
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Print, Digital Media and Newsletter
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Social Media
                                                        </li>
                                                        <li className="hover:font-semibold hover:text-[#FF6600]">
                                                            Website Development and Management
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex basis-1/5 flex-row justify-center">
                                <button type="button"
                                    className="material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border hover:h-10 hover:w-10 hover:rounded-full hover:border-2 hover:border-white"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search">
                                    search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- NAV BAR ends--> */}
            </header>

        </>
    )
}

export default NewNavbar
