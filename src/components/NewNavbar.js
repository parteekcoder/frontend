import React, { useEffect } from 'react'
import logo from './Img/logo.png'
import Rect from './Img/rect.png'
import './Newnavbar.css'
function NewNavbar({SetScrollupmenu}) {
    const handlescroll = () => {
        // const insti_name_cont = document.getElementById('instituteNameContainer')
        const institute_name = document.getElementsByClassName('institute_name')
        // const full_navbar = document.getElementsByTagName('header')
        const logo = document.getElementById('logo_250')
        const topbar = document.getElementById('top_bar')
        const diff_lang = document.getElementsByClassName('mySlides')
        // animateValueIntiator()
        // animateValueIntiatorInstitute()
        // resAutoScroll()
        if (window.scrollY > 100) {
            SetScrollupmenu(true);
            // insti_name_cont.classList.remove('sm:h-20', 'sm:max-h-20')
            // insti_name_cont.classList.add('sm:h-10', 'sm:max-h-10')
            // insti_name_cont.classList.add(' sm:max-h-20')

            topbar.style.transform = 'translateY(-50px)'
            for (let i = 0; i < diff_lang.length; i++) {
                diff_lang[i].classList.remove('mt-7')
            }
            for (let i = 0; i < institute_name.length; i++) {
                if (window.innerWidth > 620) {
                    logo.style.width = '90px'
                    logo.style.height = '90px'
                }
                logo.classList.remove('top-9')
                logo.classList.add('top-0', 'py-4')
                logo.classList.remove('sm:translate-y-0')
                if (institute_name[i].classList.contains('sm:text-xl')) {
                    institute_name[i].classList.remove('sm:text-xl')
                    institute_name[i].classList.add('sm:text-lg')
                    institute_name[i].classList.add('tracking-widest')
                } else if (institute_name[i].classList.contains('sm:text-lg')) {
                    institute_name[i].classList.remove('sm:text-lg')
                    institute_name[i].classList.add('sm:text-sm')
                    institute_name[i].classList.remove('tracking-widest')
                }
            }
        } else {
            // insti_name_cont.classList.remove('sm:h-10', 'sm:max-h-10')
            // insti_name_cont.classList.add('sm:h-20', 'sm:max-h-20')
            SetScrollupmenu(false);
            logo.style.width = '120px'
            logo.style.height = '120px'
            topbar.style.transform = 'translateY(0)'
            for (let i = 0; i < diff_lang.length; i++) {
                diff_lang[i].classList.add('mt-7')
            }
            logo.classList.add('sm:translate-y-0')
            logo.classList.add('top-9')
            logo.classList.remove('top-0', 'py-4')
            for (var i = 0; i < institute_name.length; i++) {
                if (institute_name[i].classList.contains('sm:text-lg')) {
                    institute_name[i].classList.remove('sm:text-lg')
                    institute_name[i].classList.add('sm:text-xl')
                    institute_name[i].classList.remove('tracking-widest')
                } else if (institute_name[i].classList.contains('sm:text-sm')) {
                    institute_name[i].classList.remove('sm:text-sm')
                    institute_name[i].classList.add('sm:text-lg')
                    institute_name[i].classList.remove('tracking-widest')
                } else if (institute_name[i].classList.contains('sm:text-lg')) {
                }
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handlescroll);
    }, [handlescroll])
    return (
        <div>
            <div className=" p-0 top-0 flex items-start justify-start h-full w-full z-10 fixed bg-transparent backdrop-blur-2xl" id="nav-menu" style={{ display: 'none' }}>
                <div id="menu" className="h-screen w-3/4 z-10 relative">
                    <div className="menu-content w-3/4 z-40 bg-accent h-full relative">
                        <div className="top-bar h-1/6">
                            <div className="menu-btn z-50 flex justify-end py-4 px-4">
                                <div className="line bg-white w-[20px] h-[2px] rotate-45 absolute" />
                                <div className="line bg-white w-[20px] h-[2px] -rotate-45" />
                            </div>
                        </div>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="z-10 w-full inline-flex flex-shrink-0 items-center border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                            Administration
                            <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div id="dropdown" className="absolute z-10 w-full hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700" data-popper-reference-hidden data-popper-escaped data-popper-placement="top">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="z-10 w-full inline-flex flex-shrink-0 items-center border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                                        About Us
                                        <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div id="dropdown2" className="absolute z-10 w-full hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700" data-popper-reference-hidden data-popper-escaped data-popper-placement="top">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Vision, Mission &amp; Quality Values
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Virtual Tour
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Institute History
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Explore NITJ
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    NITJ Rankings &amp; Awards
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Institute Prospectus
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Location
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li></ul>
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="z-10 w-full inline-flex flex-shrink-0 items-center border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                                        Leadership
                                        <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div id="dropdown3" className="absolute z-10 w-full hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700" data-popper-reference-hidden data-popper-escaped data-popper-placement="top">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Organizational Chart
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Chairperson
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Director
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Registrar
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Academic administration
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Student Welfare
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Faculty Welfare
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Planning and Development
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Research and Consultancy
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    International Affairs
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Hostel Administration
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li></ul>
                        </div>
                        <div className="extra-links absolute bottom-1.5 left-0 w-full select-none flex flex-col align-middle justify-center">
                            <a className="text-center text-white" href="/">Privacy Policy</a>
                            <a className="text-center text-white" href="/">Terms &amp; conditions</a>
                        </div>
                    </div>
                </div>
            </div>
            <header className="fixed top-0 right-0 left-0 z-40 bg-white">
                {/* TOP NAV BAR stats */}
                <div id="top_bar" className="absolute top-0 right-0 left-0 transition-transform delay-200 h-7 bg-accent py-0.5 px-2 sm:px-12 text-xs uppercase text-white shadow-md">
                    <div className="container mx-auto flex flex-row justify-between">
                        <div className="basis-1/2">
                            <div className="flex flex-row justify-center gap-4 sm:gap-6">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined" >
                                        engineering
                                    </span>
                                    <a href="/research/jobs.html" className="hidden sm:block pl-1.5 text-xs">Jobs</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        add_business
                                    </span>
                                    <a href className="hidden sm:block pl-1.5 text-xs">Tenders</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        badge
                                    </span>
                                    <a href="https://placement-q1bq.onrender.com/" target="_blank" rel="noreferrer" className="hidden sm:block pl-1.5 text-xs">Placements</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        event_note
                                    </span>
                                    <a href className="hidden sm:block pl-1.5 text-xs">Resources</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        psychology_alt
                                    </span>
                                    <a href className="hidden sm:block pl-1.5 text-xs">Help</a>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 sm:pl-8 pl-1">
                            <div className="flex flex-row gap-4 justify-between">
                                <div className="hidden sm:flex basis-1/6 gap-4 flex-row items-center">
                                    <a href="https://www.facebook.com/NITJofficial"><i className="fa-brands fa-facebook text-lg" /></a>
                                    <a href="https://www.instagram.com/nitjofficial/"><i className="fa-brands fa-instagram text-lg" /></a>
                                    <a href="https://twitter.com/NITJofficial"><i className="fa-brands fa-twitter text-lg" /></a>
                                </div>
                                <div className="flex sm:basis-1/3 basis-1/2 justify-center items-center">
                                    <span className="material-symbols-outlined">
                                        g_translate
                                    </span>
                                    <a href className="hidden sm:block pl-1">हिन्दी / <span className="text-lg">A</span>+A-</a>
                                </div>
                                <div className="flex sm:basis-1/3 basis-1/2 justify-center items-center">
                                    <span className="material-symbols-outlined">
                                        contacts
                                    </span>
                                    <a href className="hidden sm:block pl-1.5 text-xs">ERP</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* top nav bar ends */}
                {/* INSTITUTE LOGO & NAME starts */}
                <div className="relative sm:px-0 px-20 sm:w-full container p-0 left-[10px] sm:left-0 h-14 max-h-14 sm:h-max sm:max-h-max mx-auto">
                    <div className="mySlides mt-7" style={{display:"block"}}>
                        <div className="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
                            <div className="institute_name sm:max-w-lg sm:basis-1/2 justify-start text-center sm:text-lg font-semibold uppercase hidden sm:block">
                                <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
                            </div>
                            <div className="institute_name flex sm:max-w-lg sm:basis-1/2 justify-end sm:px-16 text-center text-sm sm:text-xl font-bold uppercase">
                                <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides mt-7">
                        <div className="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
                            <div className="institute_name sm:max-w-lg sm:basis-1/2 justify-center px-16 text-center sm:text-xl font-bold uppercase hidden sm:block">
                                <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
                            </div>
                            <div className="institute_name flex sm:max-w-lg sm:basis-1/2 justify-center sm:px-8 text-center text-sm sm:text-xl font-bold uppercase">
                                <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides mt-7 hidden">
                        <div className="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
                            <div className="institute_name sm:max-w-lg sm:basis-1/2 justify-center px-8 text-center sm:text-xl font-bold uppercase hidden sm:block">
                                <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
                            </div>
                            <div className="institute_name flex sm:max-w-lg sm:basis-1/2 justify-center text-center text-xs sm:text-lg font-semibold uppercase">
                                <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* INSTITUTE LOGO & NAME ends */}
                {/* Logo CONTAINER starts */}
                <div className="absolute hidden sm:block left-[50px] z-40 mx-auto -translate-x-1/2 -translate-y-1/3 sm:translate-y-0 scale-75 sm:scale-100 sm:left-1/2" style={{ width: '230px' }}>
                    <img src={Rect} alt="..." />
                </div>
                <div id="logo_250" className="absolute h-[120px] aspect-square left-[50px] sm:left-1/2 scale-[0.40] sm:scale-100 -translate-y-1/3 top-9 sm:top-7 sm:translate-y-0 z-40 -translate-x-1/2 sm:py-0">
                    <img src={logo} alt="..." />
                </div>
                {/* Logo CONTAINER ends */}
                {/* NAV BAR starts*/}
                <div className="sm:block bg-accent drop-shadow-lg z-40">
                    <div className="container">
                        <div className="z-40 flex h-7 sm:h-10 max-w-screen px-4 flex-row justify-between bg-accent text-lg text-white">
                            <div className="flex items-center sm:hidden">
                                <span className="material-symbols-outlined"> menu </span>
                            </div>
                            <div className="sm:hidden block">
                                <button type="button" className="block material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border sm:hover:h-10 sm:hover:w-10 hover:rounded-full hover:border-2 hover:border-accent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search">
                                    search
                                </button>
                            </div>
                            <div className="basis-2/5 hidden sm:block">
                                <div className="flex w-full flex-row justify-between px-10">
                                    <div className="group cursor-default hover:bg-blue-800">
                                        <div className="p-1.5 font-medium uppercase">Administration</div>
                                        <div id="drop-down" className="absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div className="flex flex-col gap-5 items-center">
                                                <div id="col" className="flex flex-col w-52 gap-5 border-2 rounded-b-xl border-accent hover:bg-orange-500 hover:border-orange-500 ">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                                                            <div className="p-2 text-center"><a href="/admin/index.html">ABOUT US</a>
                                                            </div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admin/index.html#vision-mission">Vision, Mission &amp;
                                                                            Quality Policy</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admin/virtualtour.html">Virtual Tour</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admin/index.html#history">Institute History</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admin/explore.html">Explore NITJ</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admin/ranking.html">NITJ Rankings &amp; Awards</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="https://drive.google.com/file/d/1iQraSeXVHabN4_Y_4rUK3cUET7TiR7ts/view?usp=sharing">Institute
                                                                            Prospectus</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admin/location.html">Location</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={logo} alt="" style={{ width: '100px' }} />
                                            </div>
                                            <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:border-orange-500 hover:bg-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                                                        <div className="p-2 text-center">LEADERSHIP</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/oc.html">Organisational Chart</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/chairperson.html">Chairperson</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/director.html">Director</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/registrar.html">Registrar</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/administration.html#academic-administration">Academic
                                                                        administration</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/administration.html#student-welfare">Student
                                                                        Welfare</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/administration.html#faculty-welfare">Faculty
                                                                        Welfare</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/administration.html#planning-development">Planning
                                                                        &amp; Development</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/administration.html#research-consultancy">Research
                                                                        &amp; Consultancy</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/administration.html#international-affairs">International
                                                                        Affairs</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/hostels.html">Hostel Administration</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:border-orange-500 hover:bg-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                                                        <div className="p-2 text-center">GOVERNING BODIES</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/council.html">NIT Council</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/governors.html">Board of Governors</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/senate.html">Senate</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/senate.html">Standing committee of the
                                                                        senate</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/senate.html">Finance committee</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/senate.html">Building &amp; works committee</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                        <div className="p-2 text-center">CELLS</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/e-cell.html">E-Cell</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/staff-g-cell.html">Equal Opportunities and
                                                                        SC/ST/OBC/PwD Cell</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/staff-g-cell.html">Rajbhasha Cell</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/staff-g-cell.html">RTI Cell</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/student-g-cell.html">Student Grievances Cell</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/faculty-g-cell.html">Faculty Grievances Cell</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/staff-g-cell.html">Staff Grievances Cell</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/public-g-cell.html">Public Grievances Cell</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/women-cell.html">Women Cell</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                        <div className="p-2 text-center">COMMITTEES</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/committees.html#institute-development">Institute
                                                                        Development Committee</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/committees.html#internal-complaint">Internal
                                                                        Complaint Committee</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/committees.html#print-digital">Print, Digital
                                                                        Media and Newsletter</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/committees.html#social-media">Social Media</a>
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    <a href="/admin/committees.html#website-management">Website
                                                                        Development and Management</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group cursor-default hover:bg-blue-800">
                                        <div className="p-1.5 font-medium uppercase">Academics</div>
                                        <div id="drop-down" className="absolute mt-0.5 hidden -translate-x-28 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div id="col" className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                        <div className="p-2 text-center">DEPARTMENTS</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    Biotechnology
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Chemistry
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Chemical Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Civil Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Computer Science and Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Electronics and Communication Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Electrical Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Humanities and Management
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Industrial and Production Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Information Technology
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Instrumentation and Control Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Mathematics
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Mechanical Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Physics
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Textile Technology
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div id="col" className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">CENTERS</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/energy.html">Center for Energy and Environment</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/AI.html">
                                                                            Center for Artificial Intelligence</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Center for Continuing Education
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col" className="h-full flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">ACADEMIC SYSTEM</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/notices.html">
                                                                            Academic Circulars &amp; Notices </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/calendar.html">
                                                                            Academic Calender</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/rules.html">
                                                                            Academic Regulations</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/curriculum.html">
                                                                            Curriculum</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/fees.html">
                                                                            Fee Structure</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        System of Evaluation and Grant of Division
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Standard Operationg Procedures (SOP)
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        UMC Rules
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/faq.html">
                                                                            General FAQs</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div id="col" className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">ACADEMIC SERVICES</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Student Portal LOGIN
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Grade Sheets
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Timetable
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Upcoming Examination Schedules
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Results
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/OATC.html">
                                                                            Online Application for Transcripts and Certificates</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/Oavd.html">
                                                                            Online Application for Verification of Degree</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/Cgpa.html">
                                                                            CGPA Criteria and Medium of Education</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Other Proformas
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Contact Details
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col" className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">ACADEMIC FACILITIES</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Central Library
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/Cc.html">
                                                                            Computer Center</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/Cw.html">
                                                                            Central Workshop</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/IIC.html">
                                                                            Institute Instrumentation Center</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div id="col" className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">PROGRAMMERS OF STUDY</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/BTech.html">
                                                                            Bachelor of Technology</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/Mtech.html">
                                                                            Master of Technology</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/MBA.html">
                                                                            Master of Business Administration</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/MSC.html">
                                                                            Master of Science</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/PgDiploma.html">
                                                                            Post Graduate Diploma</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/academic/Phd.html">
                                                                            Doctor of Philosophy</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col" className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">CONVOCATION</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Convocation 2022
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Past Convocations
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col" className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">OTHER LINKS</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        UGC Act- Rules and Regulations
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        NIT Act and Statutes
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Ministry of Education Notifications
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        National Education Policy 2020
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group cursor-default hover:bg-blue-800">
                                        <div className="p-1.5 font-medium uppercase">Admissions</div>
                                        <div id="drop-down" className="absolute mt-0.5 hidden -translate-x-1/3 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div className="flex flex-col gap-5">
                                                <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">PROSPECTIVE STUDENTS</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Why NITJ?
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Explore NITJ
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/student_life.html"> Discover Student Life </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/courses_offered.html"> Courses Offered
                                                                        </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        How to Apply
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/admission_procedure.html"> Admissions
                                                                            Process </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admin/virtualtour.html"> Virtual Tour </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/index.html#foreign_admissions">
                                                                            International Students </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600] md:font-bold py-2">
                                                                        <a href="/admissions/contactDetails.html"> Contact Details
                                                                            for Admission </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">ANTI RAGGING</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/antiRagging.html"> Anti Ragging Act</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="https://www.nitj.ac.in/nitj_files/links/Anti_Ragging_Affidavit_by_Student_78947.pdf"> Anti Ragging Affadvit</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href> Institute Anti-ragging Rules </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">JOIN NITJ</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black" id="admissionpages">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/index.html#btech">B.Tech Admission</a>
                                                                    </li>
                                                                    <li className=" over:text-[#FF6600]">
                                                                        <a href="/admissions/index.html#mtech">M.Tech Admission</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/index.html#msc">Msc Admission</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/index.html#mba">MBA Admission</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/index.html#phd">Ph.D Admission</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col" className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">  INSTITUTE PROSPECTUS
                                                            </div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/admission_procedure.html">B.Tech</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/src/prospectus.pdf" target="_blank">
                                                                            M.Tech </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/src/prospectus.pdf" target="_blank">
                                                                            M.Sc. </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/src/prospectus.pdf" target="_blank">MBA
                                                                        </a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/src/prospectus.pdf" target="_blank">
                                                                            Ph.D </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-2/5 hidden sm:block w-full">
                                <div className="flex w-full flex-row justify-between">
                                    <div className="basis-4/5">
                                        <div className="flex flex-row justify-between">
                                            <div className="group cursor-default hover:bg-blue-800">
                                                <div className="p-1.5 font-medium uppercase">Research</div>
                                                <div id="drop-down" className="absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                                                    <div className="flex flex-col gap-5">
                                                        <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">RESEARCH @ NITJ</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="https://vidwan.inflibnet.ac.in/searchc/search" target="_blank" rel="noreferrer"> VIDWAN (IRINS Instance) </a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/research_publications.html">
                                                                                    Research Publications</a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/jobs.html">
                                                                                    Research Jobs </a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/jobs.html">
                                                                                    Internships </a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/researchProjects.html"> Sponsored
                                                                                    Research Projects</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">INCUBATION @ NITJ</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/sti_hub.html"> STI Hub </a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/admin/e-cell.html">E-Cell</a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/InnovationClub.html">
                                                                                    Innovation Club
                                                                                </a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/InstituteInnovationCouncil.html">
                                                                                    Institute Innovation Council
                                                                                </a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/TechnologyBusinessIncubator.html">
                                                                                    Technology Business Incubator
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-5">
                                                        <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">CONSULTANCY @ NITJ</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/consultancy.html"> Consultancy
                                                                                    works</a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/mous.html">MoUs</a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/iprs.html">IPRs</a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Find an Expert
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Central Research facilities
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col" className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">UPCOMING EVENTS</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/upcoming_conferences.html">
                                                                                    Conferences</a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/upcoming_seminars.html"> Seminars
                                                                                </a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/upcoming_stcfdp.html"> STC/ FDP
                                                                                </a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/upcoming_workshops.html">
                                                                                    Workshops </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group cursor-default hover:bg-blue-800">
                                                <div className="p-1.5 font-medium uppercase">Alumni</div>
                                                <div id="drop-down" className="absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                                                    <div id="col" className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                        <div id="block" className="h-full">
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 py-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/alumni/alumni.html">Alumni Portal</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Alumni Registration
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Chapters
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Donation statistics and Reports
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Give Back
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Impact
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600] py-2 md:font-bold">
                                                                        Alumni Affairs Contact Details
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group relative cursor-default hover:bg-blue-800">
                                                <div className="p-1.5 font-medium uppercase">Life at NITJ</div>
                                                <div id="drop-down" className="absolute mt-0.5 hidden gap-5 self-center  bg-white p-5 text-sm shadow-sm group-hover:flex right-0">
                                                    <div className="flex flex-col gap-5">
                                                        <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">CLUBS &amp; SOCITIES</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <a href="/clubs/yoga.html" className="hover:text-[#FF6600]">
                                                                                Heartfulness Mediation Club
                                                                            </a>
                                                                            <a href="/clubs/prayas.html" className="hover:text-[#FF6600]">
                                                                                Prayaas - A Campaign for Smile
                                                                            </a>
                                                                            <a href="/clubs/rtist.html" className="hover:text-[#FF6600]">
                                                                                R-Tist Robotics Club
                                                                            </a>
                                                                            <a href="/clubs/spic.html" className="hover:text-[#FF6600]">
                                                                                SPIC MACAY
                                                                            </a>
                                                                            <a href="/clubs/we-can.html" className="hover:text-[#FF6600]">
                                                                                “We Can” Club
                                                                            </a>
                                                                            <a href="/clubs/yoga.html" className="hover:text-[#FF6600]">
                                                                                Yoga Club
                                                                            </a>
                                                                        </ul>
                                                                        <ul className="flex flex-row px-2 font-normal text-black justify-between">
                                                                            <a href="/clubs/zeal.html" className="hover:text-[#FF6600]">
                                                                                Zeal Society
                                                                            </a>
                                                                            <li className="hover:text-[#FF6600] font-bold">
                                                                                View All
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">SCHOLARSHIPS</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Dr. Pratap Singh Memorial Scholarhsip
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                MCM Scholarship
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Post Matric Scholarship
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="flex flex-row px-2 font-normal text-black justify-between">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Siemens India Scholarship
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600] font-bold whitespace-nowrap self-end">
                                                                                View All
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-5">
                                                        <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">CAMPUS AMENITIES</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Banks &amp; ATMs
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Canteens &amp; Shops
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Central Seminar Hall
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Daily Commute
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Open Air Theater
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Post Office
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Students Actvity Center
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Wi-Fi Campus
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col" className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">HEALTH AND WELNESS</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Counselling Services
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Fit India Movement Campaign
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Gymnasium Center and Open Gyms
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Health Care Center
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Empanaelled Hospitals
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Sports and Recreation
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600] font-bold">
                                                                                Student Grievence Cell
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-5 items-center">
                                                        <div id="col" className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">NITJ FESTIVALS</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <a href="/clubs/bharat_dhwani.html" className="hover:text-[#FF6600]">
                                                                                Foundation Day
                                                                            </a>
                                                                            <a href="/clubs/cultural.html" className="hover:text-[#FF6600]">
                                                                                Annual Cultural Fest
                                                                            </a>
                                                                            <a href="/clubs/tech_fest.html" className="hover:text-[#FF6600]">
                                                                                Annual Technical Fest
                                                                            </a>
                                                                            <a href="/clubs/athletic_fest.html" className="hover:text-[#FF6600]">
                                                                                Athletic Fest
                                                                            </a>
                                                                            <a href="/clubs/sports.html" className="hover:text-[#FF6600]">
                                                                                Sports Tournaments
                                                                            </a>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col" className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">ACCOMODATION</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Boys Hostel
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Girls Hostel
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Hostel Guest House
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Institute Guest House
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src={logo} alt="" style={{ width: '100px' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex basis-1/5 flex-row justify-center">
                                        <button type="button" className="material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border hover:h-10 hover:w-10 hover:rounded-full hover:border-2 hover:border-accent" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search">
                                            search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NAV BAR ends*/}
            </header>
        </div>
    )
}

export default NewNavbar
