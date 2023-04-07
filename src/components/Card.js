
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const Card = ({ title, body }) => {
    let navigate = useNavigate();
    const dept = useLocation().pathname.split('/')[2];
    const departments = {
        "it": "Information Technology",
        "cse": "Computer Science and Engineering",
        "bt": "Bio Technology",
        "ce": "Civil Engineering",
        "ch": "Chemical Engineering",
        "ece": "Electronics and Communication Engineering",
        "ee": "Electrical and Electronics Engineering",
        "ice": "Instrumentation and Control Engineering",
        "me": "Mechanical Engineering",
        "ipe": "Industrial and Production Enginnering",
        "math": "Mathematics",
        "phy": "Physics",
        "tt": "Textile Technology",
        "hum": "Humaniyies",
        "cy": "Chemistry"
    }
    return (
        <div className="relative w-full md:w-/2 py-4 px-7 mx-2 border bg-white shadow-lg rounded-lg mt-16 mb-6">
            <div className="absolute right-4 w-32 h-32 flex-grow-0 flex-shrink-0 flex justify-center md:justify-end -mt-20 mb-1 ml-auto mr-0">
                <img src="https://qph.cf2.quoracdn.net/main-qimg-d0139b5cabcff7d5adad435605016120-lq" className="w-full h-full object-cover object-center rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='' />
            </div>
            <span className='w-full inline-block h-[180px] overflow-hidden text-justify text-ellipsis mt-2'>
                <h2 className="text-blue-800 text-2xl font-semibold">{title}</h2>
                <p className="mt-8 text-gray-600 flex-wrap">{body}</p>
            </span>
            <div className="flex justify-end mt-4" onClick={() => navigate(`/dept/${dept}/SocietyClubs`)}>
                <span className="text-sm font-medium text-indigo-500 cursor-pointer">Read More &rarr;</span>
            </div>
        </div>
    )
}

export default Card