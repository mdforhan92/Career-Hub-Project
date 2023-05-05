import React, { useState, useEffect } from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [appliedJobsData, setAppliedJobs] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const getAppliedJobs = async () => {
            const storedJobs = JSON.parse(localStorage.getItem('shopping-cart'));
            if (storedJobs) {
                const response = await fetch('features.json');
                const jobsData = await response.json();
                const appliedJobsData = [];

                for (let i = 0; i < jobsData.length; i++) {
                    const job = jobsData[i];
                    if (storedJobs[job.id]) {
                        appliedJobsData.push(job);
                    }
                }

                setAppliedJobs(appliedJobsData);
                console.log(appliedJobsData);
            }
        };
        getAppliedJobs();
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredJobs = filter === 'all'
        ? appliedJobsData
        : appliedJobsData.filter(job => job.remoteOrOnsite === filter);

    return (
        <div>
            <div className='flex justify-between items-center '>
                <div>
                    <img src="https://i.ibb.co/fQbYK30/Vector.png" alt="" />
                </div>
                <h3 className='text-5xl font-bold text-center mb-20'>Applied Jobs </h3>
                <div className='-mt-72 '>
                    <img src="https://i.ibb.co/C7cGNzg/Vector-1.png" alt="" />
                </div>
            </div>
            <div className='w-10/12 mx-auto mt-36 bg-img'>

                {/* Filter dropdown */}
                <div className='flex justify-end w-5/6 mx-auto '>
                    <select name='Filter by..' className='bg-gray-100 rounded-sm p-1 border mb-6' onChange={handleFilterChange}>
                        <option value="all">Filter by</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                {
                    filteredJobs.map(data =>
                        (
                            <div className='md:flex justify-between md:w-10/12 mx-auto mb-6 border p-4 rounded-lg '>
                            <div className='flex gap-8'>
                                <div>
                                    <img className='bg-gray-200 p-6 rounded-lg mb-5 md:w-40 md:h-40 ' src={data.companyLogo} alt="" />

                                </div>
                                <div className='bg-purple-50 rounded-lg'>
                                    <h5 className='text-xl font-bold mb-4'>{data.jobTitle}</h5>
                                    <p className='mb-3 text-xl'>{data.companyName}</p>
                                    <button className='border rounded p-1 text-purple-600 mr-3'>{data.remoteOrOnsite}</button> <button className='border rounded p-1 text-purple-600 mr-3'>{data.fulltimeOrParttime}</button>
                                    <div className='flex gap-2 text-gray-600 mt-4'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-1 inline">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                            {data.location}
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-1 inline">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Salary: {data.salary}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <Link to={`/${data.id}`} className='btn-default'>
                                    <button >View Details</button>
                                </Link>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
