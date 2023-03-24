import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

function Programme() {
    const Programs = [
        {
            Name: 'BTech',
            Seats: 120
        }, {
            Name: 'MTech',
            Seats: 30
        }, {
            Name: 'PhD',
            Seats: ''
        }, {
            Name: 'PG Diploma',
            Seats: ''
        }
    ]
    const [program, setProgram] = useState('BTech');
    const handlescroll = (id) => {
        let str = "#" + id;
        setProgram(id);
        var element = document.getElementById(str);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    const dept = useLocation().pathname.split('/')[2];
    const departments = {
        "it": "Information Technology",
        "cse": "Computer Science and Engineering",
        "bt": "Bio Technology",
        "ce": "Civil Engineering",
        "ch": "Chemical Engineering",
        "ec": "Electronics And Communication Engineering",
        "ee": "Electrical And Electronics Engineering",
        "ice": "Instrumentation And Control Engineering",
        "me": "Mechanical Engineering",
        "ipe": "Industrial And Production Enginnering",
        "math": "Mathematics",
        "phy": "Physics",
        "tt": "Textile Technology",
        "hum": "Humaniyies",
        "cy": "Chemistry"
    }
    return (
        <>
            <div className="text-gray-600 body-font w-full h-full">
                <div className="container flex flex-col px-5 py-24 mx-auto" style={{ height: "100%" }}>
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Programmes of Study</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Department offers following Undergraduate, Postgraduate and Research Programmes in <b>{departments[dept]}</b></p>
                    </div>
                    <div className="flex flex-auto overflow-x-auto -m-4 place-items-center text-center scrollbar">
                        {
                            Programs.map((item, i) => {
                                return (
                                    <div key={i} className="py-4 min-w-[250px] max-w-[350px] w-full mx-2">
                                        <div className={"border-2 border-gray-200 py-6 rounded-lg active:translate-y-[2px] cursor-pointer " + (item.Name === program ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll(item.Name)}>
                                            <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                            <h2 className="title-font font-medium text-2xl text-gray-900">{item.Name}</h2>
                                            <p className="text-sm py-1 leading-relaxed">({departments[dept]})</p>
                                            <p className="p-1 font-bold leading-relaxed">{item.Seats} Seats</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div id='#BTech'>
                    <div className='mx-2 lg:mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-xl sm:text-2xl'>Curriculum</div>
                            <p className='mx-2 my-4'>Curriculum of B.Tech Programme in Computer Science and Engineering to be applicable from 2018 batch onwards(Annexure I - Curriculum of B.Tech program REVISED(10.01.2020))</p>
                            <div className='flex flex-col sm:flex-row'>
                                <div className='mb-2 text-sm sm:text-base mx-2 py-2 px-6 bg-[#28ABE3] text-[#fff] shadow rounded-3xl cursor-pointer hover:scale-[1.02] active:scale-100 delay-100 uppercase tracking-wide'>Curriculum(2018 admission onwards)</div>
                                <div className='mb-2 text-sm sm:text-base mx-2 py-2 px-6 bg-[#28ABE3] text-[#fff] shadow rounded-3xl cursor-pointer hover:scale-[1.02] active:scale-100 delay-100 uppercase tracking-wide'>B.Tech Regulations</div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-2 lg:mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-xl sm:text-2xl'>Program Outcomes</div>
                            <ol className='list-decimal'>
                                <li className='ml-8 mb-3'>Apply knowledge of mathematics, science, and engineering fundamentals in the domain of Electronics and Communication</li>
                            </ol>
                        </div>
                    </div>
                    <div className='mx-2 lg:mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-xl sm:text-2xl'>Program Educational Objectives</div>
                            <div className=''>
                                <div className='mx-2 mb-3'>
                                    <h2 className='text-black font-medium'>
                                        <i className="fas fa-lightbulb"></i>  PEO-1</h2>
                                    <p>To provide strong background in basic sciences, mathematics, computing and engineering principles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='#MTech'></div>
                <div id='#PhD'></div>
                <div id='#PDip'></div>
            </div>
        </>
    )
}

export default Programme
