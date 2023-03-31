import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="bg-gray-800">
            <nav className=" px-6 py-3 flex items-center justify-between">
                <NavLink className="text-white font-bold text-2xl lg:text-4xl" to="/">
                    Quiz Cracker
                </NavLink>
                <div className="flex items-center">
                    <button
                        className="text-white focus:outline-none mr-3 lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <path fill="#FFF" d="M0 0h20v2H0zM0 9h20v2H0zM0 18h20v2H0z" />
                        </svg>
                    </button>
                    <div
                        className={`${menuOpen ? 'block' : 'hidden'
                            } lg:flex lg:items-center lg:w-auto w-full lg:block mt-2 lg:mt-0 z-20`}
                    >
                        <nav>
                            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                                <li>
                                    <NavLink
                                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                        to="/statistics"
                                    >
                                        Statistics
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                                        to="blog"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;