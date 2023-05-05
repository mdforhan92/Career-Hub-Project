import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-20'>
                <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                    <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                            <span className='relative inline-block'>
                                <svg
                                    viewBox='0 0 52 24'
                                    fill='currentColor'
                                    className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                                >
                                    <defs>
                                        <pattern
                                            id='70326c9b-4a0f-429b-9c76-792941e326d5'
                                            x='0'
                                            y='0'
                                            width='.135'
                                            height='.30'
                                        >
                                            <circle cx='1' cy='1' r='.7' />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                                        width='52'
                                        height='24'
                                    />
                                </svg>
                                <span className='relative'>Qus/Ans</span>
                            </span>{' '}
                            Related to Development
                        </h2>

                    </div>
                </div>
                <div className='w-10/12 ml-6 md:max-w-screen-xl sm:mx-auto'>
                    <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                        <div className='space-y-8'>
                            <div>
                                <p className='mb-4 text-xl font-medium'>
                                    a. When should you use context API?
                                </p>
                                <p className='text-gray-700'>
                                    Context is primarily used when some data needs to be accessible by many components at different nesting levels.
                                    <br />
                                    <br />
                                    When ywe need to pass data or functions down multiple levels of a component tree.
                                    To avoid prop drilling.
                                </p>
                            </div>
                            <div>
                                <p className='mb-4 text-xl font-medium'>
                                    b. What is a custom hook?
                                </p>
                                <p className='text-gray-700'>
                                    A custom hook is a function in React that allows us to reuse logic across multiple components.
                                    <br />
                                    <br />
                                    Custom hooks can be created by combining one or more built-in React hooks, or by using other JavaScript functions and libraries. Custom hooks should always start with the "use" prefix, as this convention tells React that the function is a hook and should be used only in React functional components, and not in regular JavaScript functions or class components.
                                </p>
                            </div>
                            <div>
                                <p className='mb-4 text-xl font-medium'>
                                    c. What is useRef?
                                </p>
                                <p className='text-gray-700'>
                                    useRef is one of the many built-in hooks provided by React. It is useful for persisting mutable data between component renders.
                                    useRef is powerful because it's persisted between renders. Unlike state, updating a ref object does not trigger a re-render of the component. This makes useRef useful for storing values that don't affect the visual output of a component, but that need to be accessed or modified by other parts of the code. For example, you might use useRef to store a reference to a DOM element that you need to access directly, or to cache a value that is expensive to compute.
                                </p>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div>
                                <p className='mb-4 text-xl font-medium'>
                                    d. What is useMemo?
                                </p>
                                <p className='text-gray-700'>
                                    useMemo is a hook in React that provides a way to memoize the result of a function or a computation, and to avoid re-computing that result unnecessarily. It takes two arguments: a function that computes a value, and a list of dependencies that the function depends on..
                                    <br />
                                    <br />
                                    It memoizes the result of a function so that it's only recomputed when the input dependencies change.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;