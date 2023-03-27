import React from 'react'

function PersonalDetails({ edit, data }) {
    const tablehead = ['Name', 'Designation', 'Department', 'Qualification', 'Address', 'Phone', 'Email ID', 'Fax'];
    const feild = ['name', 'designation', 'department', 'education_qualification'];
    const address = ['address1', 'address2', 'city', 'pin', 'state']
    const Phone = data['address']['phone']
    const Fax = data['address']['fax']
    console.log(data)
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
        <div>
            {
                edit ? <div className="m-4 flex justify-center items-center">
                    <form className="w-full max-w-lg shadow p-3">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            {
                                tablehead.map((item, i) => {
                                    return (
                                        <div key={i} className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlhtmlFor="grid-password">
                                                {item}
                                            </label>
                                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 shadow-inner leading-tight focus:outline-none focus:border-gray-50" name='Research Interests' type="text" placeholder="Title"></textarea>
                                        </div>
                                    )
                                })
                            }
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
                    <div>
                        <table>
                            <tbody>
                                {
                                    feild.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className="w-48 align-top font-bold pr-4 pl-2 py-2">{tablehead[i]}</td>
                                                <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                                <td className='align-top pr-4 pl-2 py-2'>
                                                    {
                                                        item === "education_qualification" ?
                                                            <div>
                                                                {
                                                                    data[item].map((Item, j) => {
                                                                        return (
                                                                            Item['degree'] != null && <div key={j}>
                                                                                <span className='font-semibold mx-1'>{Item['degree']}</span>
                                                                                <span className='mx-1'>{Item['field']}</span>
                                                                                <span>({Item['clg']})</span>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div> : item === "department" ? departments[data[item]] : data[item]
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <td className="w-48 align-top font-bold pr-4 pl-2 py-2">Address</td>
                                    <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                    <td className='align-top pr-4 pl-2 py-2'>
                                        {
                                            address.map((item, i) => {
                                                return <span className='mx-1' key={i}>{data['address'][item]}</span>
                                            })
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-48 align-top font-bold pr-4 pl-2 py-2">Phone</td>
                                    <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                    <td className='align-top pr-4 pl-2 py-2'>{Phone}</td>
                                </tr>
                                <tr>
                                    <td className="w-48 align-top font-bold pr-4 pl-2 py-2">Fax</td>
                                    <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                    <td className='align-top pr-4 pl-2 py-2'>{Fax}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default PersonalDetails
