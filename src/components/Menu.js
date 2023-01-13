import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Menu({ fixedmenu }) {
    let navigate = useNavigate();
    const dept= useLocation().pathname.split('/')[1];
    console.log(dept);
    const Menu = [
        {
            Title: 'About',
            Logo: 'fa fa-info',
            List: [
                {
                    l: 'Vision and Mission',
                    link: `/${dept}/MissionandVision`
                }, {
                    l: 'Infrastructure: At a glance',
                    link: `/${dept}/Infrastructure`
                }, {
                    l: "HOD's Message",
                    link: `/${dept}/messageofHOD`
                }, {
                    l: 'Achievements',
                    link: `/${dept}/Achievements`
                }, {
                    l: 'Contact Us',
                    link: `/${dept}/contactus`
                }
            ],
        }, {
            Title: 'Academic',
            Logo: 'fa fa-university',
            List: [
                {
                    l: 'Programmes',
                    link: `/${dept}/Programme`
                }, {
                    l: 'Academic Coordinates',
                    link: `/${dept}/Acadcord`
                }, {
                    l: 'Syllabus',
                    link: `/${dept}/Syllabus`
                }, {
                    l: 'Time-Tables',
                    link: `/${dept}/Timetable`
                }, {
                    l: 'Department Activities Calendar',
                    link: `/${dept}/Home`
                }
            ]
        }, {
            Title: 'People',
            Logo: 'fa fa-person',
            List: [
                {
                    l: 'Faculty',
                    link: `/${dept}/Faculty`
                }, {
                    l: 'PhD Scholars',
                    link: `${dept}/PhdScholar`
                }, {
                    l: 'Students',
                    link: `/${dept}/Students`
                }, {
                    l: 'Alumni*',
                    link: `/${dept}/Alumni`
                }, {
                    l: 'Staff',
                    link: `/${dept}/Staff`
                }
            ]
        }, {
            Title: 'Research and Labs',
            Logo: 'fa fa-flask',
            List: [
                {
                    l: 'Research Areas',
                    link: `/${dept}/Home`
                }, {
                    l: 'Department Labs',
                    link: `/${dept}/Home`
                }, {
                    l: 'Publications(Year-Wise)',
                    link: `/${dept}/Home`
                }, {
                    l: 'Projects',
                    link: `/${dept}/Home`
                }, {
                    l: 'Consultancy',
                    link: `/${dept}/Home`
                }, {
                    l: 'Research Labs',
                    link: `/${dept}/Home`
                }
            ]
        }, {
            Title: 'Join Us',
            Logo: 'fa fa-flask',
            List: [

            ],
            link: `/${dept}/Home`
        },
    ]
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className={"flex flex-col bg-white z-50 lg:z-10 items-center ml-2 max-h-[78vh] lg:h-[78vh] max-w-full overflow-hidden text-gray-700 rounded lg:" + (fixedmenu ? 'absolute bottom-1' : 'fixed')}>
                <span className="flex items-center border-b border-gray-300 w-full px-3 mt-2 active:translate-y-[2px]" onClick={() => { setMenu(!menu) }}>
                    <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    <span className="ml-2 text-xl font-bold p-2">Menu</span>
                </span>

                <div className={"lg:flex flex-col items-center w-full h-full overflow-y-auto scrollbar mt-1 py-1 " + (menu ? 'flex' : 'hidden')}>
                    <div className='w-full'>
                        <span className="flex items-center w-full h-10 px-3 mt-2 rounded hover:bg-gray-200 cursor-pointer active:translate-y-[2px]" onClick={() => { navigate(`/${dept}/Home`); setMenu(!menu); }}>
                            <i className="pl-1 w-6 h-6 stroke-current fa fa-home"></i>
                            <span className="ml-1 font-medium">Home</span>
                        </span>
                    </div>
                    {
                        Menu.map((item, i) => {

                            return (
                                <div key={i} className='w-full group'>
                                    <span className="flex items-center w-full h-10 px-3 mt-2 rounded hover:bg-gray-200 cursor-pointer">
                                        <i className={"pl-1 w-6 h-6 stroke-current " + item.Logo}></i>
                                        <span className="ml-1 font-medium">{item.Title}</span>
                                    </span>
                                    <ul id="dropdown-example" className={"group-hover:py-2 space-y-2 h-0 overflow-hidden group-hover:h-auto transition-all"}>
                                        {
                                            item.List.map((iteml, j) => {
                                                return (
                                                    <li key={j} className="target:bg-red-200">
                                                        <span className="block p-1 text-sm font-normal text-gray-900 transition duration-75 group hover:font-medium hover:text-blue-900 hover:scale-[1.02] ml-10 cursor-pointer active:translate-y-[2px]" onClick={() => { navigate(iteml.link); setMenu(!menu) }}>{iteml.l}</span>
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
