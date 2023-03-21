import React from 'react'

function PersonalDetails({edit,data}) {
    const tablehead = ['Name', 'Designation', 'Department', 'Qualification', 'Address', 'Phone', 'Email ID', 'Fax'];
    const feild=['name','designation','department','education_qualification','address','phone','email','fax'];
    const departments={
        "it":"Information Technology",
        "cse":"Computer Science and Engineering",
        "bt":"Bio Technology",
        "ce":"Civil Engineering",
        "ch":"Chemical Engineering",
        "ec":"Electronics And Communication Engineering",
        "ee":"Electrical And Electronics Engineering",
        "ice":"Instrumentation And Control Engineering",
        "me":"Mechanical Engineering",
        "ipe":"Industrial And Production Enginnering",
        "math":"Mathematics",
        "phy":"Physics",
        "tt":"Textile Technology",
        "hum":"Humaniyies",
        "cy":"Chemistry"
      }
    return (
        <div>
            <table>
                <tbody>
                    {
                        tablehead.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td className="w-48 align-top font-bold pr-4 pl-2 py-2">{item}</td>
                                    <td className="align-top font-bold pr-4 pl-2 py-2">:</td>
                                    <td className='align-top pr-4 pl-2 py-2'>
                                        {
                                            feild[i]==="education_qualification"?
                                            <div>
                                                {
                                                    data[feild[i]].map((Item,j)=>{
                                                        return(
                                                            Item['degree'] != null && <div key={j}>
                                                                <span className='font-semibold mx-1'>{Item['degree']}</span>
                                                                <span className='mx-1'>{Item['field']}</span>
                                                                <span>({Item['clg']})</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            :
                                            feild[i]==="department"?departments[data[feild[i]]]:data[feild[i]]
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default PersonalDetails
