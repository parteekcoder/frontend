import React from 'react'

function FacultyLogin() {
    return (
        <section class="bg-blue-50 w-full">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <i className='fa-solid fa-user mr-4'></i>
                        Faculty Login
                </a>
                <div class="w-full rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0 bg-blue-300 border-blue-300">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input type="text" name="username" id="username" className="border border-blue-300 text-gray-900 rounded block w-full p-2.5 focus:border-blue-300 bg-blue-500 shadow-inner focus:ring-blue-500" placeholder="" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className="border border-blue-300 text-gray-900 rounded block w-full p-2.5 focus:border-blue-300 bg-blue-500 shadow-inner focus:ring-blue-500" required=""/>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-blue-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required=""/>
                                    </div>
                                    <div class="ml-2 text-sm">
                                        <label for="remember" class="text-gray-800 ">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" class="w-[80%] block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none shadow font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FacultyLogin

