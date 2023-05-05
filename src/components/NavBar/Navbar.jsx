import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    
    Bars3BottomRightIcon,
    
    XMarkIcon,
} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='px-4 py-5 mx-auto w-10/12 lg:px-8 '>
            <div className='relative flex items-center justify-between'>
                
                <Link to='/' className='inline-flex items-center text-4xl font-bold'>
                    Carrer<span className='text-orange-600'>Express</span>
                </Link>

            
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/applied'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Applied Jobs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <button className='hidden md:block btn-default'>Start Applying</button>
                </div>
               
                <div className='lg:hidden'>
                    
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>

                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                pursuitPoint
                                            </span>
                                        </Link>
                                    </div>
                                    
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/statistics' className='default'>
                                                Statistics
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/applied'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Applied Jobs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/blogs'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <button className=' btn-narrow'>Start Applying</button>

                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >


    );
};

export default Navbar;