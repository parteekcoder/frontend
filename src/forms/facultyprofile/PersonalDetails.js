import React from 'react'

function PersonalDetails({ edit, data }) {
    const tablehead = ['Name', 'Designation', 'Department', 'Qualification', 'Address', 'Phone', 'Email ID', 'Fax'];
    const feild = ['name', 'designation', 'department', 'education_qualification'];
    const address = ['address1','address2','city','pin','state']
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
                                address.map((item,i)=>{
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
    )
}

export default PersonalDetails
