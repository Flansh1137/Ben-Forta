import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../Books/Books';
import Blog from '../Blog/Blog';
import About from '../About/About';

const Navbar = () => {
  return (
    <nav className="bg-slate-900	 py-7 px-28">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white font-bold text-3xl">Ben Forts</h1>
          </div>
          <div className="hidden md:flex flex-row space-x-14">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/books" className="text-white hover:text-gray-300">Books</Link>
            <Link to="/blog" className="text-white hover:text-gray-300">Blog</Link>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </div>
          <div className="md:hidden">
            {/* Hamburger menu icon */}
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
     
      </div>
    </nav>
  );
};

export default Navbar;
