import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Category = () => {
    const [jobs , setJobs] = useState([]);
    useEffect(()=>{
        fetch('category.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    })
    return (
        <div className='text-center mt-32'>
            <div>
                <h3 className='text-5xl font-bold mb-6'>Job Category List</h3>
                <p className='text-sm mb-8'>Explore thousands of job opportunities with all the information you need. Its your future

                </p>
            </div>
            <div className=' md:flex justify-center md:gap-12 mt-10'>
                {
                    jobs.map(job => 
                    <div className='bg-purple-50 p-6 rounded-lg mb-6 border-2'>
                        <img className='bg-purple-100 p-3 rounded-md mb-4 mx-auto ' src={job.logo} alt="" />
                        <h5 className='text-xl font-semibold mb-4'>{job.title}</h5>
                        <p className='text-[#A3A3A3] text-base'>{job.availability}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;