import React, { useEffect, useState } from 'react'

function BaseTable({ edit, tablehead, data, Editfeild, HandleEdit,feild }) {
    const [changedata, setChangedata] = useState(data);
    const Setdata = () => {
        var val = Editfeild < 0 ? 0 : Editfeild;
        setChangedata(data[val])
    }
    // console.log(changedata)
    const [row, setrow] = useState(8); //row per page
    const totalrow = data.length;
    const totalPage = Math.ceil(totalrow / row);
    const [page, setPage] = useState(1)
    useEffect(() => {
        Setdata()
    }, [changedata,row])

    return (
        <div>
            {edit ?
                <div className="mt-10 sm:mt-0 shadow-md border-2 rounded">
                    <div className="">
                        <div className="mt-5 md:mt-0">
                            <form action="#" method="POST">
                                <div className="overflow-hidden sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            {
                                                feild?.map((item, i) => {
                                                    return (
                                                        Editfeild < 0 ?
                                                            <div key={i} className="col-span-6 sm:col-span-3">
                                                                <label htmlhtmlFor="last-name" className="block text-sm font-medium text-gray-700 px-1">{item}</label>
                                                                <textarea type="text" name="last-name" className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm"></textarea>
                                                            </div> :
                                                            <div key={i} className="col-span-6 sm:col-span-3">
                                                                <label htmlhtmlFor="last-name" className="block text-sm font-medium text-gray-700 px-1">{item}</label>
                                                                <textarea type="text" name="last-name" onChange={(e) => setChangedata(changedata[item] = e.target.value)} value={changedata[item]} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm" ></textarea>
                                                            </div>
                                                    )
                                                })
                                            }
                                        </div>
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
                        </div>
                    </div>
                </div> :
                <div className='flex flex-col items-center justify-between border-t border-gray-200 bg-white shadow-md sm:rounded-lg w-full overflow-auto'>
                    <div className='flex w-full items-center justify-around'>
                        <div className='flex items-center my-1 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 rounded'>
                            <label htmlFor="states" className="mr-2">Rows per Page :</label>
                            <select id="states" value={row} onChange={(e) => setrow(e.target.value)} className="border-none outline-none">
                                <option defaultValue={row}>{row}</option>
                                <option value={8}>8</option>
                                <option value={20}>20</option>
                                <option value={60}>60</option>
                                <option value={100}>100</option>
                            </select>
                        </div>
                        <div className='my-1'><input className='mx-w-full border outline-none p-2 rounded' placeholder='Search' /></div>
                    </div>
                    <div className="relative overflow-x-auto rounded w-full border">
                        <table className="min-w-[800px] w-full text-sm text-left text-gray-800 scroll-auto">
                            <thead className="text-gray-700 uppercase bg-gray-100 shadow">
                                <tr>
                                    {
                                        tablehead.map((item, i) => {
                                            return (
                                                <th key={i} scope="col" className="px-6 py-3 border border-gray-300">
                                                    {item}
                                                </th>
                                            )
                                        })
                                    }
                                    <th scope="col" className="px-6 py-3 border border-gray-300">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((Item, i) => {
                                        return (
                                            (i>=row*(page-1) && i<row*(page)) && <tr key={i} className="border-b">
                                                {
                                                    feild.map((item, j) => {
                                                        return (
                                                            <td key={{ i, j }} className="align-top px-6 py-4 text-gray-900 border-r">
                                                                <span>{Item[item]}</span>
                                                            </td>
                                                        )
                                                    })
                                                }
                                                {data.length > 0 &&
                                                    <td className="text-blue-700 font-bold px-6 py-4 active:scale-[0.98] cursor-pointer" onClick={() => { HandleEdit(i); Setdata() }}>
                                                        Edit
                                                    </td>}
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {data?.length === 0 && <h1 className='w-full font-medium px-6 py-4 text-lg border border-t-0'>No data available</h1>}
                        <div className="w-full my-2 px-2 flex flex-1 items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing
                                    <span className="font-medium mx-1">{row*(page-1)+1}</span>
                                    to
                                    <span className="font-medium mx-1">{row*(page) > totalrow ? totalrow : row*(page)}</span>
                                    of
                                    <span className="font-medium mx-1">{totalrow}</span>
                                    results
                                </p>
                            </div>
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <button onClick={() => setPage(page > 1 ? page - 1 : 1)} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 active:scale-95">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </button>

                                    <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">{page}</span>
                                    <span className="relative z-10 inline-flex items-center bg-indigo-300 px-4 py-2 text-sm font-semibold text-white">...</span>
                                    <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">{totalPage}</span>
                                    <button onClick={() => setPage(page < totalPage ? page + 1 : totalPage)} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 active:scale-95">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default BaseTable