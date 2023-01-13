import React from 'react'


function Director() {
    return (
        <>
            <div className='flex flex-col justify-center my-4 mx-2'>
                <h1 className='text-center text-2xl font-bold md:font-extrabold md:text-3xl text-orange-600 font-serif m-2'>DIRECTOR'S CORNER</h1>
                <div className='flex1 bg-indigo-300 shadow-lg shadow-blue-500/50 p-8 rounded-md'>
                    <div className='bg-blue-900 block shadow-lg shadow-blue-900/90 rounded'style={{height:"176px",width:"162px"}}>
                    <img src='https://www.nitj.ac.in/images/faculty/22030775924.jpg' alt='' className='shadow-md rounded dwh float-right mt-2 h' />
                    </div>
                    <div className='block w-11/12'>
                        <h2 className='mx-8 text-base font-medium my-2 mt-4 mx'><b className='text-2xl mr-2'>Dr Binod Kumar Kanaujia</b>  DIRECTOR, NITJ</h2>
                        <hr className='bg-blue-900 h-1 m-0' />
                        <p className='mx-8 my-4 w-11/22 disbool mx'>
                            It is a privilege to lead Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar,
                            one of the national accolades and an outstanding institution of higher learning. NIT Jalandhar
                            is ranked 49th in the National Institutional Ranking Framework (NIRF), Band-Excellent in the
                            Atal   Ranking of Institutions on Innovation Achievements (ARIIA), and was recently ranked in
                            the 401-500 range  in the Times Higher Education (THE) Emerging Economies University
                            Rankings 2022.
                        </p>
                        <p className='mx-8 my-4 w-11/22 disbool1 mx'>
                            It is a privilege to lead Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar,
                            one of the national accolades and an outstanding institution of higher learning.
                        </p>
                        <a className='w-28 font-medium' href='/' style={{ float: 'right' }}>Read More &rarr;</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Director

// components on homepage of main website
    // <div>
    //    <Director/>
    //    <Count/>
    //   <Checker/> 
    // </div>
