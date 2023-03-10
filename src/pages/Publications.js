import React, { useState } from 'react'

function Publications() {
    const tablehead = [1, 2, 3, 4,5,6,7]
    const data = [1, 2, 3, 4]
    const [row, setrow] = useState(4); //row per page
    const totalrow = 10;
    const totalPage = Math.ceil(totalrow/row);
    const [page, setPage] = useState(1)
    return (
        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-200 bg-white mx-4 shadow-md sm:rounded-lg w-full overflow-auto">
            <div className='flex w-full items-center justify-around'>
                <div className='flex items-center my-1 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 p-2 rounded'>
                    <label htmlFor="states" className="mr-2">Rows per Page :</label>
                    <select id="states" value={row} onChange={(e)=>setrow(e.target.value)} className="border-none outline-none">
                        <option defaultValue={row}>{row}</option>
                        <option value={8}>8</option>
                        <option value={20}>20</option>
                        <option value={60}>60</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                <div className='my-1'><input className='mx-w-full border outline-none p-2 rounded' placeholder='Search'/></div>
            </div>
            <div className="relative overflow-x-auto w-full">
                <table className="min-w-[800px] w-full text-sm text-left text-gray-800 scroll-auto border rounded-md">
                    <thead className="text-gray-700 uppercase bg-gray-100 shadow-md">
                        <tr>
                            {
                                tablehead.map((item, i) => {
                                    return (
                                        <th key={i} scope="col" className="px-6 py-3 border">
                                            {item}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((Item, i) => {
                                return (
                                    <tr className="border-b">
                                        {
                                            tablehead.map((item, j) => {
                                                return (
                                                    <td key={{ i, j }} className="align-top px-6 py-4 text-gray-900 border-r">
                                                        <span>{Item[j + 1]}</span>
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            
            <div className="w-full my-2 px-2 flex flex-1 items-center justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing
                        <span className="font-medium mx-1">1</span>
                        to
                        <span className="font-medium mx-1">{row>totalrow?totalrow:row}</span>
                        of
                        <span className="font-medium mx-1">{totalrow}</span>
                        results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button onClick={()=>setPage(page>1?page-1:1)} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 active:scale-95">
                        <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        
                        <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">{page}</span>
                        <button onClick={()=>setPage(page<totalPage?page+1:totalPage)} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 active:scale-95">
                        <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Publications
