import React from 'react'
// import top3 from '../components/Img/top3.png'
function Timetable() {
    return (
        <>
            <div className='bgallplace w-full h-screen m-0 p-4'>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='border w-full aspect-video rounded-lg flex'>
                        <div className="card">
                            {/* <div className="card-header flex items-center justify-center">
                                <div className='w-24 h-24 rounded-full overflow-hidden'>
                                    <img src={top3} alt='...'/>
                                </div>
                                <div className="card-header-slanted-edge">
                                </div>
                            </div>

                            <div className="card-body">
                                <h2 className="name">John Smith</h2>
                                <h4 className="job-title">Product Designer</h4>
                                <div className="bio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, aperiam.</div>
                            </div> */}
                        </div>

                    </div>
                    <div className='border w-full aspect-video rounded-lg'></div>
                    <div className='border w-full aspect-video rounded-lg'></div>
                </div>
            </div>
        </>
    )
}

export default Timetable