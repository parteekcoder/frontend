import React, { useEffect, useState } from 'react'

function BaseTable({ edit, tablehead, data, Editfeild, HandleEdit }) {
    const [changedata, setChangedata] = useState(data[0]);

    const Setdata = () => {
        var val = Editfeild < 0 ? 0 : Editfeild;
        setChangedata(data[val])
    }
    useEffect(() => {
        Setdata()
    }, [changedata])

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
                                                tablehead.map((item, i) => {
                                                    return (
                                                        Editfeild < 0 ?
                                                            <div key={i} className="col-span-6 sm:col-span-3">
                                                                <label htmlhtmlFor="last-name" className="block text-sm font-medium text-gray-700 px-1">{item}</label>
                                                                <input type="text" name="last-name" className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm" />
                                                            </div> :
                                                            <div key={i} className="col-span-6 sm:col-span-3">
                                                                <label htmlhtmlFor="last-name" className="block text-sm font-medium text-gray-700 px-1">{item}</label>
                                                                <input type="text" name="last-name" onChange={(e) => setChangedata(changedata[i + 1] = e.target.value)} value={changedata[i + 1]} className="appearance-none bg-white py-2 px-3 mt-1 block border w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-2 sm:text-sm" />
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
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="min-w-[800px] w-full text-sm text-left text-gray-800 scroll-auto">
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
                                <th scope="col" className="px-6 py-3 border">
                                    <span className="sr-only">Edit</span>
                                </th>
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
                                            {data.length > 0 &&
                                                <td className="text-blue-700 font-bold px-6 py-4 active:scale-[0.98] cursor-pointer" onClick={() => {HandleEdit(i);Setdata()}}>
                                                    Edit
                                                </td>}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {data.length === 0 && <h1 className='w-full font-medium px-6 py-4 text-lg'>No data available</h1>}

                </div>
            }
        </div>
    )
}

export default BaseTable