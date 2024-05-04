import React from 'react'
import { useAuth } from '../../context/auth_context'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div className='text-3xl pt-14 place-text-center'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}! You have successfully logged in.</div>
    )
}

export default Home