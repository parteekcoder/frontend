import React from 'react'

function JournalPub({ edit }) {
    return (
        <div>
            {edit ?
                <div className="m-4 flex justify-center items-center">
                    <form action='#' className="w-full max-w-lg shadow p-3">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-password">
                                    Year
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 shadow-inner leading-tight focus:outline-none focus:border-gray-50" id="title" name='title' type="text" placeholder="Title" value={2022} required/>
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-password">
                                    Journal
                                </label>
                                <textarea rows="2" className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner scrollhide" placeholder="Write a product description here...">ACM Computing Surveys (SCI IF=14.324)</textarea>
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-password">
                                    Publications
                                </label>
                                <textarea rows="5" className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-50 shadow-inner scrollhide" placeholder="Write a product description here...">Raj Mohan Singh, Lalit Kumar Awasthi, Geeta Sikka, "Towards Metaheuristic Scheduling Techniques in Cloud and Fog: An Extensive Taxonomic Review". (Online)</textarea>
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
                </div> : <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-800">
                        <thead class="text-gray-700 uppercase bg-gray-100 shadow-md">
                            <tr>
                                <th scope="col" class="px-6 py-3 border">
                                    Year
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Journal
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    Publications
                                </th>
                                <th scope="col" class="px-6 py-3 border">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="align-top px-6 py-4 font-medium text-gray-900 border-r">
                                    <span>2022</span>
                                </td>
                                <td class="align-top text-sm text-gray-900 px-6 py-4 border-r">
                                    <span>ACM Computing Surveys (SCI IF=14.324)</span>
                                </td>
                                <td class="align-top text-sm text-gray-900 px-6 py-4 border-r">
                                    <span>Raj Mohan Singh, Lalit Kumar Awasthi, Geeta Sikka, "Towards Metaheuristic Scheduling Techniques in Cloud and Fog: An Extensive Taxonomic Review". (Online)</span>
                                </td>
                                <td class="text-blue-700 font-bold px-6 py-4">
                                    Edit
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default JournalPub
