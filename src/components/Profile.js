import React, { useState } from 'react'
import BaseTable from '../pages/BaseTable';
import useFetch from '../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
function Profile() {
    let navigate = useNavigate()
    const dept= useLocation().pathname.split('/')[2];
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
            photo: 'https://www.nitj.ac.in/images/faculty/20071962443.jpg',
            name: 'Geeta Sikha',
            position: 'Assistant Professor'
        }
    ]
    const Link = [
        { Title: 'About', show: false, search: false, thead: false, data: [{}, {}, {}, {}, {}] },
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
                            <div class="relative flex flex-col flex-auto w-full min-w-0 p-4 overflow-hidden break-words border shadow-md rounded-2xl bg-white/80 bg-clip-border mb-4 draggable mx-auto"
                                draggable="true">
                                <div class="flex flex-wrap items-center justify-between -mx-3">
                                    <div className='flex'>
                                        <div class="flex-none w-auto max-w-full px-3">
                                            <div className="w-20 h-20 xl:w-24 xl:h-24 flex-grow-0 flex-shrink-0">
                                                <img src={item.photo} className="w-full h-full object-cover object-left-top rounded-xl shadow-xl flex-grow-0 flex-shrink-0" alt='...' />
                                            </div>
                                        </div>
                                        <div class="flex-none w-auto max-w-full px-3 my-auto">
                                            <div class="h-full">
                                                <h5 class="mb-1 text-gray-700 text-xl font-semibold">{item.name}</h5>
                                                <p class="ml-2 text-zinc-500 mb-0 font-medium leading-normal">{item.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" mx-2">
                                        <button onClick={()=>navigate(`/dept/${dept}/login`)} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                                            <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
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
                                    <div className='w-[98%] my-2 duration-200'>
                                        <BaseTable show={Link[active].show} search={Link[active].search} thead={Link[active].thead} Data={Link[active].data} />
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