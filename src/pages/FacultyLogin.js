import React from 'react'
import { useLocation } from 'react-router-dom'

function FacultyLogin() {
    const dept = useLocation().pathname.split('/')[2];
    return (
        <section className="bg-blue-50 w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <i className='fa-solid fa-user mr-4'></i>
                    Faculty Login
                </span>
                <div className="w-full rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0 bg-blue-300 border-blue-300">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" method='POST' action={`http://localhost:8000/dept/${dept}/login`}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input type="text" name="email" id="username" className="border border-blue-300 text-gray-900 rounded block w-full p-2.5 focus:border-blue-300 bg-blue-500 shadow-inner focus:ring-blue-500" placeholder="" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className="border border-blue-300 text-gray-900 rounded block w-full p-2.5 focus:border-blue-300 bg-blue-500 shadow-inner focus:ring-blue-500" required="" />
                            </div>
                            
                            <button type="submit" className="w-[80%] block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none shadow font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FacultyLogin

