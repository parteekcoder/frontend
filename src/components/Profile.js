import React, { useState } from 'react'
import BaseTable from '../pages/BaseTable';
import useFetch from '../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import Otherprofilelink from '../forms/facultyprofile/Otherprofilelink';
import ResearchProfile from '../forms/facultyprofile/ResearchProfile';
import downloadpdf from './Img/download.png'
import Exceldownloadpdf from './Img/Exceldownload.png'
function Profile() {
    let navigate = useNavigate()
    const dept = useLocation().pathname.split('/')[2];
    var id = useLocation().pathname.split('/').at(-1);
    const data = [
        {
            photo: 'https://www.nitj.ac.in/images/faculty/20071962443.jpg',
            name: 'Geeta Sikha',
            position: 'Assistant Professor'
        }
    ]

    const Link = [
        { Title: 'Personal Details', show: false, search: false, thead: [], data: [{}, {}, {}, {}, {}] },
        { Title: 'Profile Links', show: false, search: false, thead: [], data: [{}, {}, {}, {}, {}] },
        { Title: 'Research Profile', thead: [], data: [{}, {}, {}, {}, {}] },
        { Title: 'Journal Publications', thead: ['Year', 'Journal', 'Publications'], data: [{ 1: '2022', 2: 'ACM Computing Surveys (SCI IF=14.324)', 3: 'Raj Mohan Singh, Lalit Kumar Awasthi, Geeta Sikka, "Towards Metaheuristic Scheduling Techniques in Cloud and Fog: An Extensive Taxonomic Review". (Online)' }] },
        { Title: 'Conference Publications', thead: ['Year', 'Conference', 'Publications'], data: [{ 1: '2021', 2: '2nd International Conference on Secure Cyber Computing and Communications (ICSCCC). IEEE', 3: 'harma, P., & Sangal, A. L., Extensive Software Fault Prediction: An Ensemble based comparison, pp. 432-436.' }] },
        { Title: 'Book/Chapter Publications', thead: ['Type', 'Title', 'Publisher', 'Authors', 'ISBN/ISSN/ No.', 'Year'], data: [{ 1: '', 2: '“Artificial intelligence technologies for computational biology”', 3: 'CRC Press (1st Edition Nov 2022)', 4: 'Rout Ranjeet Kumar,Umer Saiyed,Sheikh Sabhaa, Amrit Lal Sangal', 5: '978-100077868-7, 978-103216000-9', 6: '2022' }] },
        { Title: 'Research Projects', thead: ['Role', 'Project Type', 'Title', 'Funding Agency', 'From', 'To', 'Amount', 'Status', 'Co-Investigator'], data: [] },
        { Title: 'Events Organized', thead: ['Category', 'Type', 'Title', 'Venue', 'From', 'To', 'Designation'], data: [{ 1: 'Conference', 2: 'International', 3: '1st International Conference on Secure Cyber Computing and Communications (ICSCCC). IEEE', 4: 'Dr B R Ambedkar National Institute of Technology, Jalandhar', 5: '', 6: '', 7: '' }] },
        { Title: 'Professional Affiliations', thead: ['Designation', 'Organization'], data: [{ 1: 'Member', 2: 'Indian Society for technical Education (ISTE)' }] },
        { Title: 'PhD Supervised', thead: ['Scholar Name', 'Research Topic', 'Status', 'Year', 'Co-Supervisor'], data: [{ 1: 'Mr Himanshu Pattanayak', 2: 'An algorithm for detection of shared communities in social network', 3: 'Defended', 4: '2022', 5: 'Dr A L Sangal' }] },
        { Title: 'PG Dissertation Guided', thead: ['Student Name', 'Dissertation Title', 'Status', 'Year', 'Co-Supervisor'], data: [{ 1: 'Ananya Sharma', 2: 'IGT:Tools for testing and maintaining GPU Drivers.', 3: 'Completed', 4: '2022', 5: '' }] },
        {
            Title: 'Patents', thead: ['Name', 'Reg./Ref. No.', 'Date of Award/Filling', 'Organization', 'Status']
            , data: [{ 1: 'A system of smartphone security using machine learning', 2: '202111040145', 3: '', 4: 'Patent Office India', 5: 'Filed' }]
        },
        { Title: 'Admin. Responsiblities', thead: ['Position held', 'Organization', 'From', 'to'], data: [{ 1: 'Head, Computer Science & Engineering', 2: 'Dr B R Ambedkar National Institute of Technology, Jalandhar', 3: 'September 1992', 4: 'September 2006' }] },
        { Title: 'Award and Honours', thead: ['Title', 'Activity', 'Given by', 'Year'], data: [] },
    ]

    const [active, setActive] = useState(0);
    const [edit, setEdit] = useState(false);
    const [update, setUpdate] = useState(false)
    const [Editfeild, setEditfeild] = useState(-1);
    const setedit = () => { setEdit(true); SetEditfeild(-1); }
    const setview = () => { setEdit(false); SetEditfeild(-1); }


    // Handle the Edit functions in the table
    const SetEditfeild = (i) => { setEditfeild(i); }
    const HandleEdit = (i) => {
        setUpdate(true)
        console.log(i)
        setedit();
        SetEditfeild(i);
    }
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
                data.map((item, j) => {
                    return (
                         <div key={j} className="mt-16 py-4 w-[98%] mx-auto">
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
                                    <div className="flex mx-2">
                                        <a title="Download Profile as PDF" href='#' className='w-8 sm:w-12 mx-2 active:translate-y-[2px]'>
                                            <img src={downloadpdf} alt="download pdf" className='w-full' />
                                        </a>
                                        <button onClick={() => navigate(`/dept/${dept}/login`)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                                            <span className="relative text-sm sm:text-base px-3 sm:px-4 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
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
                                                    Link.map((Item, i) => {
                                                        return (
                                                            <div key={{ j, i }} className={"border snap-center shrink-0 w-max rounded-xl px-3 py-1.5 m-1 cursor-pointer hover:text-purple-600 active:scale-95 duration-150 " + (active === i ? 'border-slate-800 text-purple-700 font-semibold' : '')} onClick={() => { setActive(i); setview() }}>{Item.Title}</div>
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
                                        <div className="flex justify-between items-center my-2 shadow-lg py-2 rounded-t border">
                                            <div className="text-lg font-medium px-3 py-1">{Link[active].Title}</div>
                                            <div className='flex items-center justify-center mx-2'>
                                                <span title='Download Table in Excel Format' className={"w-12 cursor-pointer px-3 "}>
                                                    <img src={Exceldownloadpdf} alt="Excel download" />
                                                </span>
                                                <span className={"cursor-pointer px-3 " + (edit ? 'hidden' : '')}><i className="fa-solid fa-eye"></i></span>
                                                <span title='View as Table' className={"cursor-pointer px-3 " + (edit ? '' : 'hidden')} onClick={() => setview()}><i className="fa-solid fa-eye-slash"></i></span>
                                                <span title='Add new data' className='cursor-pointer px-3' onClick={() => setedit()}><i className="fa-solid fa-pen-to-square"></i></span>
                                            </div>
                                        </div>
                                        <div className='p-2 mt-4'>
                                            {active === 1 && <Otherprofilelink edit={edit} />}
                                            {active === 2 && <ResearchProfile edit={edit} />}
                                            {active > 2 && <BaseTable edit={edit} tablehead={Link[active].thead} data={Link[active].data} Editfeild={Editfeild} HandleEdit={HandleEdit} />}
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