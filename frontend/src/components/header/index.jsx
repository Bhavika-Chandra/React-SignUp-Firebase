import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth_context'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-3 w-full z-20 fixed top-1 left-0 h-10 border-4 rounded-xl place-content-center items-center bg-gray-300'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-purple-600 underline'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='text-sm text-purple-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-purple-600 underline' to={'/register'}>Register New Account</Link>
                    </>
            }

        </nav>
    )
}

export default Header