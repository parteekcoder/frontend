import React from 'react'

function BaseTable({ show, search, thead, Data }) {
    return (
        <div className=''>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-2 scrollbar">
                <div className="flex w-full justify-between items-center pb-4">
                    {show ? <div className='group min-w-[170px]'>
                        <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="m-2 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                            <svg className="mr-2 w-4 h-4 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                            Last 30 days
                            <svg className="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div id="dropdownRadio" className="hidden top-10 group-hover:block z-40 w-48 bg-white rounded divide-y divide-gray-100 shadow" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{ position: "absolute", inset: "0px auto auto 0px", marginTop: "40px", transform: "translate(0px, 10px)" }}>
                            <ul className="p-3 space-y-1 text-start text-sm text-gray-700" aria-labelledby="dropdownRadioButton">
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                                        <input type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  " />
                                        <label htmlFor="filter-radio-example-1" className="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last day</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                                        <input id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  " />
                                        <label htmlFor="filter-radio-example-2" className="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last 7 days</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                        <input type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                        <label htmlFor="filter-radio-example-3" className="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last 30 days</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                                        <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                        <label htmlFor="filter-radio-example-4" className="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last month</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
                                        <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                        <label htmlFor="filter-radio-example-5" className="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last year</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> : <></>}
                    {search?<div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative m-2">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" />
                        </div>
                    </div>:<></>}
                </div>
                <table className="w-full text-sm text-left text-gray-500">
                    {thead?<thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Color
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>:<></>}
                    <tbody>
                        {
                            Data?Data.map((item, i) => (
                                <tr key={i} className="bg-white border-b hover:bg-gray-50 ">
                                    <th scope="row" className="w-fit py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="py-4 px-6">
                                        Sliver
                                    </td>
                                    <td className="py-4 px-6">
                                        Laptop
                                    </td>
                                    <td className="py-4 px-6">
                                        $2999
                                    </td>
                                    <td className="py-4 px-6">
                                        <a href="/" className="font-medium text-blue-600 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            )):<h1>Data not Available</h1>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default BaseTable
