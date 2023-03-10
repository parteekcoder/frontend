import React, { useState } from 'react'

function ResearchProfile({ edit }) {
    const [interset, setInterset] = useState("Software Systems, Numerical Computing, Computer Networks and Information Security");
    const [researchlink, setResearchlink] = useState('')
    return (
        <div className='overflow-x-auto'>
            {
                edit ? <div className="m-4 flex justify-center items-center">
                    <form className="w-full max-w-lg shadow p-3">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="grid-password">
                                    Research Interests
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 shadow-inner leading-tight focus:outline-none focus:border-gray-50" onChange={(e) => setInterset(e.target.value)} id="title" type="text" placeholder="Title" value={interset} />
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="grid-password">
                                    Profile Link
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner" onChange={(e)=>setResearchlink(e.target.value)} value={researchlink}  id="link" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="flex px-3 w-full justify-end">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 active:translate-y-[2px] hover:shadow-xl">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md">
                                    Submit
                                </span>
                            </button>
                        </div>
                    </form>
                </div> :
                    <div className="overflow-x-auto relative my-2 min-w-[570px] scrollbar">
                        <div className="flex max-w-full justify-between items-center p-4 shadow-md">
                            <table>
                                <tr>
                                    <td className="align-top font-bold pr-4 pl-2 py-2">Research Interests</td>
                                    <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                    <td className='align-top pr-4 pl-2 py-2'>Software Systems, Numerical Computing, Computer Networks and Information Security</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-4 pl-2 py-2">Brief Research Profile</td>
                                    <td className="text-sm font-bold pr-4 pl-2 py-2">:</td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ResearchProfile
