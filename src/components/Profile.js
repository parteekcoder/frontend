import React, { useState } from 'react'
import BaseTable from '../pages/BaseTable';
import useFetch from '../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import Otherprofilelink from '../forms/facultyprofile/Otherprofilelink';
import ResearchProfile from '../forms/facultyprofile/ResearchProfile';
import JournalPub from '../forms/facultyprofile/JournalPub';
function Profile() {
    let navigate = useNavigate()
    const dept = useLocation().pathname.split('/')[2];
    var id = window.location.pathname;
    let i = id.length - 1;
    let str = "";
    while (id[i] !== '/') {
        str += id[i];
        i--;
    }
    id = parseInt(str);
    // const [url, setUrl] = useState(useLocation());
    // const { data, loading, error, reFetch } = useFetch(url.pathname);
    const data = [
        {

            photo:'https://www.nitj.ac.in/images/faculty/20071962443.jpg',
            name:'Geeta Sikha',
            photo:'',
            name:'',
            position:'Assistant Professor'

        }
    ]
    const Link = [
        { Title: 'Personal details', show: false, search: false, thead: false, data: [{}, {}, {}, {}, {}] },
        { Title: 'Other profile links', show: false, search: false, thead: false, data: [{}, {}, {}, {}, {}] },
        { Title: 'Research Profile', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Journal Publications', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Conference Publications', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Book/Chapter Publications', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Research Projects', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Events Organized', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Professional Affiliations', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'PhD Supervised', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'PG Dissertation Guided', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Patents', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Admin. Responsiblities', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Award and Honours', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
        { Title: 'Download Profile as PDF', show: true, search: true, thead: true, data: [{}, {}, {}, {}, {}] },
    ]
    const [active, setActive] = useState(0);
    const [edit, setEdit] = useState(false)
    const setedit = () => setEdit(true)
    const setview = () => setEdit(false)
    const scrollNextPage = () => {
        const gallery = document.querySelector('#scrollcontrol');
        const gallery_scroller = gallery.querySelector('.cards');
        gallery_scroller.scrollBy(200, 0);
    }
    const scrollPrevPage = () => {
        const gallery = document.querySelector('#scrollcontrol');
        const gallery_scroller = gallery.querySelector('.cards');
        // const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
        gallery_scroller.scrollBy(-200, 0);
    }
    return (
        <div className='w-full'>
            {
                data.map((item, i) => {
                    return (
                        i === id && <div className="mt-16 py-4 w-[98%] mx-auto">
                            <div className="relative flex flex-col flex-auto w-full min-w-0 p-4 overflow-hidden break-words border shadow-md rounded-2xl bg-white/80 bg-clip-border mb-4 draggable mx-auto"
                                draggable="true">
                                <div className="flex flex-wrap items-center justify-between -mx-3">
                                    <div className='flex'>
                                        <div className="flex-none w-auto max-w-full px-3">
                                            <div className="w-20 h-20 xl:w-24 xl:h-24 flex-grow-0 flex-shrink-0">
                                                <img src={item.photo} className="w-full h-full object-cover object-left-top rounded-xl shadow-xl flex-grow-0 flex-shrink-0" alt='...' />
                                            </div>
                                        </div>
                                        <div className="flex-none w-auto max-w-full px-3 my-auto">
                                            <div className="h-full">
                                                <h5 className="mb-1 text-gray-700 text-xl font-semibold">{item.name}</h5>
                                                <p className="ml-2 text-zinc-500 mb-0 font-medium leading-normal">{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" mx-2">
                                        <button onClick={() => navigate(`/dept/${dept}/login`)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                                            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                                Login
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full md:px-4">
                                        <div id='scrollcontrol' className='m-2 relative shadowp'>
                                            <div className='cards scrollhide flex items-center snap-x h-14 border-t border-b m-2 overflow-x-auto overflow-y-hidden'>
                                                {
                                                    Link.map((item, i) => {
                                                        return (
                                                            <div key={i} className={"border snap-center shrink-0 w-max rounded-xl px-3 py-1.5 m-1 cursor-pointer hover:text-purple-600 active:scale-95 duration-150 " + (active === i ? 'border-slate-800 text-purple-700 font-semibold' : '')} onClick={() => setActive(i)}>{item.Title}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <button className='absolute top-[25%] -left-3 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px] rotate-180' onClick={scrollPrevPage}>
                                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-blue-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                            </button>
                                            <button className='absolute top-[25%] -right-4 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px]' onClick={scrollNextPage}>
                                                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-blue-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='w-[98%] my-2 duration-200 shadow-md'>
                                        <div className="flex justify-between items-center my-2 shadow-lg py-2 rounded-t">
                                            <div className="text-lg font-medium px-3 py-1">{Link[active].Title}</div>
                                            <div className='mx-2'>
                                                <span className={"cursor-pointer px-3 " + (edit ? 'hidden' : '')}><i className="fa-solid fa-eye"></i></span>
                                                <span className={"cursor-pointer px-3 " + (edit ? '' : 'hidden')} onClick={() => setview()}><i className="fa-solid fa-eye-slash"></i></span>
                                                <span className='cursor-pointer px-3' onClick={() => setedit()}><i className="fa-solid fa-pen-to-square"></i></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className='p-2 mt-4'>
                                            {active==0&&<></>}
                                            {active==1 && <Otherprofilelink edit={edit}/>}
                                            {active==2 && <ResearchProfile edit={edit}/>}
                                            {active==3 && <JournalPub edit={edit}/>}
                                            {/* <BaseTable edit={edit} /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Profile