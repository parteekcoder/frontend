import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from './Img/logo.png'
function Menu({ fixedmenu,scrollupmenu }) {
    let navigate = useNavigate();
    const dept= useLocation().pathname.split('/')[2];
    const Menu = [
        {
            Title: 'About',
            Logo: 'fa fa-info',
            List: [
                {
                    l: 'Vision and Mission',
                    link: `/dept/${dept}/MissionandVision`
                },{
                    l: "HOD's Message",
                    link: `/dept/${dept}/messageofHOD`
                }, {
                    l: 'Achievements',
                    link: `/dept/${dept}/Achievement`
                }, {
                    l: 'Infrastructure: At a glance',
                    link: `/dept/${dept}/Infrastructure`
                }, {
                    l: 'Contact Us',
                    link: `/dept/${dept}/contactus`
                }
            ],
        }, {
            Title: 'Academic',
            Logo: 'fa fa-university',
            List: [
                {
                    l: 'Programmes',
                    link: `/dept/${dept}/Programme`
                }, {
                    l: 'Academic Coordinates',
                    link: `/dept/${dept}/Acadcord`
                }, {
                    l: 'Syllabus',
                    link: `/dept/${dept}/Syllabus`
                }, {
                    l: 'Time-Tables',
                    link: `/dept/${dept}/Timetable`
                }, {
                    l: 'Department Activities Calendar',
                    link: `/dept/${dept}/Home`
                }
            ]
        }, {
            Title: 'People',
            Logo: 'fa fa-person',
            List: [
                {
                    l: 'Faculty',
                    link: `/dept/${dept}/Faculty`
                }, {
                    l: 'PhD Scholars',
                    link: `/dept/${dept}/PhdScholar`
                }, {
                    l: 'Students',
                    link: `/dept/${dept}/Student`
                }, {
                    l: 'Alumni*',
                    link: `/dept/${dept}/Alumni`
                }, {
                    l: 'Staff',
                    link: `/dept/${dept}/Staff`
                }
            ]
        }, {
            Title: 'Research and Labs',
            Logo: 'fa fa-flask',
            List: [
                {
                    l: 'Research Areas',
                    link: `/dept/${dept}/ResearchArea`
                }, {
                    l: 'Department Labs',
                    link: `/dept/${dept}/DepartmentLab`
                }, {
                    l: 'Publications(Year-Wise)',
                    link: `/dept/${dept}/Publications`
                }, {
                    l: 'Projects',
                    link: `/dept/${dept}/Projects`
                }, {
                    l: 'Consultancy',
                    link: `/dept/${dept}/Consultancy`
                }, {
                    l: 'Research Labs',
                    link: `/dept/${dept}/ResearchLab`
                }
            ]
        },{
            Title: 'Societies and Teams',
            Logo: 'fa fa-user-group',
            List: [

            ],
            link: `/dept/${dept}/Home`
        }, {
            Title: 'Join Us',
            Logo: 'fa fa-address-book',
            List: [

            ],
            link: `/dept/${dept}/Home`
        },
    ]
    const departments={
        "it":"Information Technology",
        "cse":"Computer Science and Engineering",
        "bt":"Bio Technology",
        "ce":"Civil Engineering",
        "ch":"Chemical Engineering",
        "ec":"Electronics And Communication Engineering",
        "ee":"Electrical And Electronics Engineering",
        "ice":"Instrumentation And Control Engineering",
        "me":"Mechanical Engineering",
        "ipe":"Industrial And Production Enginnering",
        "math":"Mathematics",
        "phy":"Physics",
        "tt":"Textile Technology",
        "hum":"Humaniyies",
        "cy":"Chemistry"
      }
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className={"z-20 overflow-y-auto bg-white scrolling-touch max-w-xs lg:max-h-[calc(100vh-8rem)] lg:block lg:sticky lg:mr-0 scrollbar lg:" + (scrollupmenu?'top-[80px]':'top-[140px]')}>
                <span className="flex items-center border-b border-gray-300 w-full px-2 mt-2 active:translate-y-[2px]" onClick={() => { setMenu(!menu) }}>
                    <span className='w-8 lg:w-10 pb-1'><img src={logo} alt="logo"/></span>
                    <span className="ml-2 text font-bold py-2">{departments[dept]}</span>
                </span>

                <div className={"mr-1 lg:flex flex-col items-center w-[98%] h-full overflow-y-auto mt-1 mb-3 py-1 " + (menu ? 'flex' : 'hidden')}>
                    <div className='w-full'>
                        <span className="flex items-center w-full h-10 px-3 mt-2 rounded hover:bg-gray-200 cursor-pointer active:translate-y-[2px] shadow-sm border border-gray-200/75" onClick={() => { navigate(`/dept/${dept}/Home`); setMenu(!menu); }}>
                            <i className="pl-1 pt-[2px] w-6 h-6 stroke-current fa fa-home"></i>
                            <span className="ml-1 font-medium">Home</span>
                        </span>
                    </div>
                    {
                        Menu.map((item, i) => {

                            return (
                                <div key={i} className='w-full group'>
                                    <span className="flex items-center w-full h-10 px-3 mt-2 rounded hover:bg-gray-200 shadow-sm border border-gray-200/75 cursor-pointer">
                                        <i className={"pl-1 pt-[2px] w-6 h-6 stroke-current " + item.Logo}></i>
                                        <span className="ml-1 font-medium">{item.Title}</span>
                                    </span>
                                    
                                    <ul className={"group-hover:py-2 space-y-2 h-0 overflow-hidden group-hover:h-auto transition-all ml-2 pl-2"}>
                                        {
                                            item.List.map((iteml, j) => {
                                                return (
                                                    <li key={j} className="flex transition duration-75 group font-medium hover:text-blue-900 hover:scale-[1.02] cursor-pointer active:translate-y-[2px]">
                                                        <i className="fa-sm fa-regular fa-circle-check stroke-current w-4 h-4 mr-1 pt-3"></i>
                                                        <span className="block p-1 text-sm text-gray-700 hover:text-blue-900" onClick={() => { navigate(iteml.link); setMenu(!menu) }}>{iteml.l}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Menu
