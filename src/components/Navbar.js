import React from 'react'

function Navbar() {

    return (
        <div>
            <nav className="z-50 px-2 sm:px-4 py-1 bg-[#c9b8eb] shadow-lg fixed w-full top-0">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto">
                        <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                            <li>
                                <a href="#" className="text-3xl block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page">Computer Science and Engineering</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
