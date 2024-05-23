import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="grid grid-cols-3 px-28 bg-blue-950 text-white">
            <div className='pt-20 pb-36'>
                <h1 className='text-7xl font-bold'>
                    BEN FORTA
                </h1>
                <p className='pt-8'>
                    © 2024 Ben Forta | All Rights Reserved.
                    Powered by WordPress.com
                </p>
            </div>

            {/* <div>
                <h1 className='text-4xl font-bold pt-24'>
                    Navigation
                </h1>
                <div className="hidden md:flex flex-row space-x-14">
                    <Link to="/" className="text-white hover:text-gray-300"><ol>Home</ol> </Link>
                    <Link to="/books" className="text-white hover:text-gray-300">Books</Link>
                    <Link to="/blog" className="text-white hover:text-gray-300">Blog</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                </div>
            </div> */}
            <div>
            <h1 className='text-4xl font-bold pt-24'>
                Navigation
            </h1>
            <div className="grid grid-rows-3 grid-cols-2">
                <ul className="list-disc ml-5">
                    <li className="mb-2">
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/books" className="text-white hover:text-gray-300">Books</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/blog" className="text-white hover:text-gray-300">Blog</Link>
                    </li>
                </ul>
                <ul className="list-disc ml-5 mt-8">
                    <li className="mb-2">
                        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    </li>
                </ul>
            </div>
        </div>

            <div className=''>
                <h1 className='text-4xl font-bold pt-24'>
                    Social Media Links
                </h1>
                <div className='flex space-x-4 pt-4'>
                    <FaTwitter style={{ color: 'black', backgroundColor: 'white', fontSize: '35px', borderRadius: '10%', padding: '4px' }} />
                    <FaFacebookF style={{ color: 'black', backgroundColor: 'white', fontSize: '35px', borderRadius: '10%', padding: '4px' }} />
                    <FaLinkedin style={{ color: 'black', backgroundColor: 'white', fontSize: '35px', borderRadius: '10%', padding: '4px' }} />
                    <FaInstagramSquare style={{ color: 'black', backgroundColor: 'white', fontSize: '35px', borderRadius: '10%', padding: '4px' }} />
                </div>
            </div>
        </div>
    )
}

export default Footer;
