import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

const Navbar = ({darkTheme,setDarkTheme}) => {
    return (
        <div className='sticky top-0 left-0 right-0 p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center bg-gray-200 border-b dark:bg-gray-700 dark:border-gray-700 border-gray-200'>
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to='/'> {/*  if anyone touch this then render it to main page */}
                    <p className='text-2xl bg-blue-400 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
                        Goomgle 🔍🔎
                    </p>
                </Link>
                <button type='button' onClick={()=>setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
                    {darkTheme?'Light ✨':'Dark 🌚'}
                </button>
            </div>
            <Search/>
        </div>
    )
}

export default Navbar
 