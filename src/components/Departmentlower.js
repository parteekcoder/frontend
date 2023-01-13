import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card';

const Departmentlower = (props) => {
  let navigate = useNavigate();

  return (
    <div className='flex flex-col md:flex-row w-[98%] justify-between items-center p-4 place-items-center mx-auto'>
      {/* Club */}
      <Card title="Coding Club"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!" />
      {/* HOD */}
      <div className="max-w-md py-4 px-7 mx-1 border bg-white shadow-lg rounded-lg mt-16 mb-6" onClick={() => navigate("/MessageofHOD") }>
        <div class="w-32 h-32 flex-grow-0 flex-shrink-0 flex justify-center md:justify-end -mt-20 mb-1 ml-auto mr-0">
          <img src={props.hod} class="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt=''/>
        </div>
        <div>
          <h2 className="text-gray-800 text-2xl font-semibold">Head Of Department</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="/" className="text-xl font-medium text-indigo-500">{props.nameofhod}</a>
        </div>
      </div>
    </div>
  )
}

export default Departmentlower