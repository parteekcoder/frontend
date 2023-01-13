import React, { useEffect } from 'react'
import { useState } from 'react'

function Programme() {
    const Programs = [
        {
            Name: 'Btech',
            Syallbus: [
                { sem: 'I', link: '' },
                { sem: 'II', link: '' },
                { sem: 'III', link: '' },
                { sem: 'IV', link: '' },
                { sem: 'V', link: '' },
                { sem: 'VI', link: '' },
                { sem: 'VII', link: '' },
                { sem: 'VIII', link: '' },
            ]
        }, {
            Name: 'Mtech',
            Syallbus: [
                { sem: 'I', link: '' },
                { sem: 'II', link: '' },
                { sem: 'III', link: '' },
                { sem: 'IV', link: '' },
            ]
        }, {
            Name: 'PhD',
            Syallbus: [
                { sem: 'I', link: '' },
                { sem: 'II', link: '' },
                { sem: 'III', link: '' },
                { sem: 'IV', link: '' },
            ]
        }, {
            Name: 'PG Diploma',
            Syallbus: [
                { sem: 'I', link: '' },
                { sem: 'II', link: '' },
                { sem: 'III', link: '' },
                { sem: 'IV', link: '' },
            ]
        }
    ]
    const [program, setProgram] = useState('BTech');
    const handlescroll = (id) => {
        let str = "#" + id;
        setProgram(id);
        var element = document.getElementById(str);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        console.log(id, program)
    }
    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (
        <>
            <div className="text-gray-600 body-font w-full h-full">
                <div className="container flex flex-col px-5 py-24 mx-auto" style={{ height: "100%" }}>
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Programmes of Study</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Institute offers following Undergraduate, Postgraduate and Research Programmes in <b>Computer Science and Engineering</b></p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 -m-4 place-items-center text-center">
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className={"border-2 border-gray-200 px-4 py-6 rounded-lg active:translate-y-[2px] cursor-pointer " + (program === 'BTech' ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll('BTech')}>
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">BTech</h2>
                                <p className="text-sm p-1 leading-relaxed">(Bachelor of Technology)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className={"border-2 border-gray-200 px-4 py-6 rounded-lg active:translate-y-[2px] cursor-pointer " + (program === 'MTech' ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll('MTech')}>
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">MTech</h2>
                                <p className="text-sm p-1 leading-relaxed">(Master of Technology)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className={"border-2 border-gray-200 px-4 py-6 rounded-lg active:translate-y-[2px] cursor-pointer " + (program === 'PhD' ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll('PhD')}>
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">PhD</h2>
                                <p className="text-sm p-1 leading-relaxed">(Doctor of Philosophy)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className={"border-2 border-gray-200 px-4 py-6 rounded-lg active:translate-y-[2px] cursor-pointer " + (program === 'PDip' ? 'shadow-lg bg-blue-100 shadow-blue-400' : '')} onClick={() => handlescroll('PDip')}>
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">PG Diploma</h2>
                                <p className="text-sm p-1 leading-relaxed">(Postgraduate Diploma)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='#BTech'>
                    <div className='mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Curriculum</div>
                            <p className='mx-2 my-4'>Curriculum of B.Tech Programme in Computer Science and Engineering to be applicable from 2018 batch onwards(Annexure I - Curriculum of B.Tech program REVISED(10.01.2020))</p>
                            <div className='flex'>
                                <div className='py-2 px-6 bg-[#28ABE3] text-[#fff] shadow rounded-3xl mx-4 cursor-pointer hover:scale-[1.02] active:scale-100 delay-100 uppercase tracking-wide'>Curriculum(2018 admission onwards)</div>
                                <div className='mx-4 py-2 px-6 bg-[#28ABE3] text-[#fff] shadow rounded-3xl cursor-pointer hover:scale-[1.02] active:scale-100 delay-100 uppercase tracking-wide'>B.Tech Regulations</div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Program Outcomes</div>
                            <ol className='list-decimal'>
                                <li className='ml-8 mb-3'>Apply knowledge of mathematics, science, and engineering fundamentals in the domain of Electronics and Communication</li>
                            </ol>
                        </div>
                    </div>
                    <div className='mx-12 mb-8'>
                        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
                            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Program Educational Objectives</div>
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
