import React from 'react';
import img from './person.png'

const Header = () => {
    return (
        <div className='md:flex mt-16  mx-auto'>
            <div className=''>
                <h1 className='text-8xl mb-6 font-bold'>One Step <br /> Closer To Your <span className='text-purple-600'>Dream Job</span></h1>
                <p className='mb-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='px-4 py-2 btn-narrow' >Get Started</button>
            </div>
            <div className=''>
                <img className='w-full' src={img} alt="developer image" />
            </div>
        </div>
    );
};

export default Header;