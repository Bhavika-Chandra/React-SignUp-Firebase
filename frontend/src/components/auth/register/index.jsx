import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/auth_context'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'

const Register = () => {

    const navigate = useNavigate()

    const [userName, setuserName] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
            <div class="h-screen w-screen flex justify-right items-right">
                <div class="relative">
                    <img src="https://images.pexels.com/photos/3815111/pexels-photo-3815111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Your Image" class="h-screen w-screen self-center"/>
                </div>
            </div>
                <div className="w-96 h-screen text-darkgray-600 space-y-5 p-4 shadow-2xl border rounded-xl ml-5 mr-10">
                    <div className="text-center mb-6">
                        <div className="mt-5">
                            <h3 className="text-darkgray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-darkgray-600 font-bold">
                                Name
                            </label>
                            <input
                                disabled={isRegistering}
                                type="userName"
                                autoComplete='new-username'
                                required
                                value={userName} onChange={(e) => { setuserName(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-darkgray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-darkgray-600 font-bold">
                                Phone Number
                            </label>
                            <input
                                disabled={isRegistering}
                                type="phoneNumber"
                                autoComplete='new-number'
                                required
                                value={phoneNumber} onChange={(e) => { setphoneNumber(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-darkgray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-darkgray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-darkgray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-darkgray-600 font-bold">
                                Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-darkgray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-darkgray-600 font-bold">
                                Confirm Password
                            </label>
                            <input
                                disabled={isRegistering}
                                type="password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-darkgray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-sm text-center">
                            Already have an account? {'   '}
                            <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register