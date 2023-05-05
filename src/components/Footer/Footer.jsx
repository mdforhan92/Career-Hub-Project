import React from 'react';

const Footer = () => {
    return (
        <div className='mt-28'>
            <footer className="bg-[#1A1919]">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="w-1/3 mb-6 md:mb-0">
                            <a href="https://github.com/asmraihan/" className="flex items-center">
                                <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">
                                    CareerExpress
                                </span>
                            </a>
                            <p className='text-gray-400 my-5'>Get hired today!!! <br /> 500+ companies are working with us to <br />
                                pave the way for your carrier </p>
                            <img src="/src/assets/icons/group9969.png" alt="" />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase ">
                                    Company
                                </h2>
                                <ul className="text-gray-400  font-medium">
                                    <li className="mb-2">
                                        <a href="https://flowbite.com/" className="hover:underline">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://tailwindcss.com/" className="hover:underline">
                                            Work
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://tailwindcss.com/" className="hover:underline">
                                            Latest News
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="https://tailwindcss.com/" className="hover:underline">
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase ">
                                    Product
                                </h2>
                                <ul className="text-gray-400  font-medium">
                                    <li className="mb-2">
                                        <a
                                            href="https://github.com/asmraihan/"
                                            className="hover:underline "
                                        >
                                            Prototype
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            href="https://github.com/asmraihan/"
                                            className="hover:underline"
                                        >
                                            Plans & Pricing
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            href="https://github.com/asmraihan/"
                                            className="hover:underline"
                                        >
                                            Customers
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            href="https://github.com/asmraihan/"
                                            className="hover:underline"
                                        >
                                            Integrations
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase ">
                                    Support
                                </h2>
                                <ul className="text-gray-400  font-medium">
                                    <li className="mb-2">
                                        <a
                                            href="https://github.com/asmraihan/"
                                            className="hover:underline "
                                        >
                                            Help Desk
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            href="https://github.com/asmraihan/"
                                            className="hover:underline"
                                        >
                                            Sales
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            href="https://github.com/asmraihan/"
                                            className="hover:underline"
                                        >
                                            Become a Partner
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            href="https://github.com/asmraihan/"
                                            className="hover:underline"
                                        >
                                            Developers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase ">
                                    Contact
                                </h2>
                                <ul className="text-gray-400  font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            524 Broadway , NYC
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            +1 777 - 978 - 5570
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-700 sm:mx-auto  lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-300 sm:text-center ">
                            © 2023{" "}
                            <a href="https://github.com/asmraihan/" className="hover:underline">
                            CareerExpress™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div className='mt-4 space-x-6 text-gray-400 sm:justify-center sm:mt-0'>
                            Powered by CareerExpress
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;