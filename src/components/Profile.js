import React, { useState } from 'react'
import BaseTable from '../pages/BaseTable';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

function Profile() {
    var id = window.location.pathname;
    let i = id.length - 1;
    let str = "";
    while (id[i] !== '/') {
        str += id[i];
        i--;
    }
    id = parseInt(str);
    const [url, setUrl] = useState(useLocation());
    const { data, loading, error, reFetch } = useFetch(url.pathname);

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
        const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;
        console.log(gallery_item_size);
        gallery_scroller.scrollBy(-200, 0);
    }
    return (
        <div className="w-full mt-4">
            <div className="relative block h-[300px]">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://www.nitj.ac.in/cse/images/carousel/001_1.jpeg')" }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black" ></span>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]" style={{ transform: "translateZ(0px)" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            {
               data? data.map((item, i) => {
                    return (
                        i===id&&<div key={i} className="flex flex-col relative py-16 bg-blue-200 h-full">
                            <div className="container mx-auto px-4 h-full">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 -mt-64 shadow-xl rounded-lg">
                                    <div className="px-6">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                                <div className="relative w-36 h-36 xl:w-40 xl:h-40 flex-grow-0 flex-shrink-0 -mt-20">
                                                    <img src={item.photo} className="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='...' />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">

                                            </div>
                                            <div className="w-full lg:w-4/12 px-4 lg:order-1">

                                            </div>
                                        </div>
                                        <div className="text-center mt-6">
                                            <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700">
                                                {item.name}
                                            </h3>
                                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                                Los Angeles, California
                                            </div>
                                        </div>
                                        <div className="mt-5 py-5 text-center bg-white">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full md:px-4">
                                                    <div id='scrollcontrol' className='m-2 relative'>
                                                        <div className='cards scrollhide flex items-center snap-x h-14 border-t border-b border-blue-200 m-2 overflow-x-auto overflow-y-hidden'>
                                                            {
                                                                Link.map((item, i) => {
                                                                    return (
                                                                        <div key={i} className={"border border-blue-400 snap-center shrink-0 w-max rounded-full px-3 py-1.5 m-1 cursor-pointer hover:text-purple-600 active:scale-95 duration-150 " + (active === i ? 'bg-blue-200' : '')} onClick={() => setActive(i)}>{item.Title}</div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <button className='absolute top-[25%] -left-2 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px] rotate-180' onClick={scrollPrevPage}>
                                                            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600 '><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                                        </button>
                                                        <button className='absolute top-[25%] -right-4 w-8 h-8 flex flex-0 items-center justify-center object-cover border-2 font-extrabold rounded-full active:translate-y-[2px]' onClick={scrollNextPage}>
                                                            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='fill-slate-600'><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='my-2 duration-200'>
                                                <h2 className='p-1 m-1 text-3xl font-medium underline underline-offset-4 text-violet-700'>{Link[active].Title}</h2>
                                                <BaseTable show={Link[active].show} search={Link[active].search} thead={Link[active].thead} Data={Link[active].data} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }):<h1>Data not available</h1>
            }
        </div>
    )
}

export default Profile
