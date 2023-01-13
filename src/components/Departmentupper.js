import React from 'react'
const Departmentupper = (props) => {
    return (

        <div className='m-3 mt-5 flex flex-col md:flex-row justify-center items-center overflow-y-hidden'>
            {/* // department intro */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-md md:w-1/2 m-1">

                <div className='flex justify-center items-center'>
                    <a href="/">
                        <img className="rounded-t-lg" src={props.departmentimage} alt="..." />
                    </a>
                </div>

                <div className="p-5">
                    <h1 className='underline text-center text-2xl m-2'> <b>Department of {props.name}</b></h1>
                    <p className="mb-3 font-normal text-justify text-gray-700 ">{props.introduction}</p>
                    <div className='block m-4 p-2'>
                        <button className=' float-right text-green-700 hover:font-semibold hover:text-blue-700 '>Read More  &rarr;</button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-md md:w-1/2 m-1">

                <div className='flex justify-center items-center'>
                    <iframe className='w-full aspect-[2.11] rounded-lg'
                        src="https://www.youtube.com/embed/fd2hUOmm8kA?controls=0&amp;start=280&mute=1" title="NITJ" >
                    </iframe>
                </div>

                <div className="p-5">
                    <h1 className='underline text-center text-2xl m-2'> <b>Mission and Vision</b></h1>
                    <p className="mb-3 font-normal text-justify text-gray-700 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati tempora distinctio quas nesciunt consectetur possimus, illum, temporibus accusamus qui molestiae accusantium ab nisi dolorum ut perferendis aperiam. Quam, accusamus vel explicabo quaerat quia reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quia nobis ab nihil perferendis voluptate omnis, quas facilis facere</p>
                    <div className='block m-4 p-2'>
                        <button className=' float-right text-green-700 hover:font-semibold hover:text-blue-700 '>Read More  &rarr;</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Departmentupper