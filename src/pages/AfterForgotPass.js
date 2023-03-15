import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function AfterForgotPass() {
    const navigate = useNavigate();
    const url=useLocation();
    const dept=url.pathname.split('/')[2];
    return (
        <div className="container mx-auto">
            <div className="flex justify-center mt-24">
                <div className="w-full max-w-xl flex">
                    <div className="w-full shadow-lg border bg-white p-5 rounded-lg lg:rounded-l-none">
                        <div className="px-8 mb-4 text-center">
                            <h3 className="pt-4 mb-2 font-semibold text-2xl">Forgot Your Password?</h3>
                            <p className="mb-4 text-sm text-gray-700">
                                We get it, stuff happens. Just enter your email address below and we'll send you a
                                link to reset your password!
                            </p>
                        </div>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                    Email
                                </label>
                                <input
                                    className="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email Address..."
                                />
                            </div>
                            <div className="mb-6 text-center">
                                <button onClick={()=>navigate(`/dept/${dept}/ChangePass`)}
                                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Reset Password
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                            <Link to={{pathname: `/dept/${dept}/Login`}}>
                                    <span
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    >
                                        Already have an account? Login!
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AfterForgotPass
