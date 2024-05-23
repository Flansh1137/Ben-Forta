import React from 'react'
import '../Homepage/Home.css'
import { Link } from 'react-router-dom';
import homeBook from '../../assets/images/homeBook.jpg'
import homeMAN from '../../assets/images/homeMAN.jpg'
import book1 from '../../assets/images/book1.jpg'
import book2 from '../../assets/images/book2.jpg'
import book3 from '../../assets/images/book3.jpg'
import book4 from '../../assets/images/book4.jpg'
import email from '../../assets/images/email.png'
import podcast from '../../assets/images/podcast.png'
import adobe from '../../assets/images/adobe.png'



const Home = () => {
    return (
        < >
            <div className='homeBG h-full grid grid-cols-3 px-28 text-white '>
                <div className='col-span-2'>
                    <h1 className='  text-6xl font-bold pt-48  pb-10'>
                        Captain Code: Unleash Your Coding Superpower with Python
                    </h1>
                    <h1 className='pt-8 font-bold text-2xl'>
                        Becoming a coder is all fun and games
                    </h1>
                    <div className="pt-20 pb-10">
                        <Link to="/books" className=" px-16 inline-block underline underline-offset-4 transition duration-500 ease-in-out  py-2 text-white bg-orange-600 hover:bg-white hover:text-orange-600 rounded-3xl">
                            Read More
                        </Link>
                    </div>

                </div>
                <div className='pt-20'>
                    <img src={homeBook} alt="" />
                </div>
            </div>

            <div className='px-28 grid grid-cols-3 py-20 bg-blue-50 ' >
                <div>
                    <h1 className='text-4xl  font-bold pt-20 '>  About Ben Forta  </h1>
                    <p className='pt-6 '>I am <span className=' text-orange-600'>Adobe‘s</span> Senior Director of Education Initiatives. My primary focus is on students with an eye towards creativity in the classroom, digital and visual literacy, and the role that Adobe services and tools play in the future of creation, communication, and collaboration. I get to spend a considerable amount of time teaching, talking, and writing about Adobe products, and providing feedback to help shape the future direction of the products.
                        <p className='pt-10'>              I am also an author with over a million books in print in 16 languages, and have taught coding to over a million developers worldwide.
                        </p>

                    </p>

                    <div className="pt-20 pb-10">
                        <Link to="/books" className=" font-semibold text-lg px-12 inline-block underline underline-offset-4 transition duration-500 ease-in-out  py-2 text-white bg-orange-600 hover:bg-white hover:text-orange-600 rounded-3xl border border-orange-600">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className='px-10 col-span-2'>
                    <img src={homeMAN} alt="" />
                </div>
            </div>

            <div className='bg-blue-700 text-white py-5 px-28'>
                <h1 className='font-bold text-4xl text-center pb-20'>
                    Featured Books
                </h1>
                {/* <div className='grid grid-cols-2  text-black'>
                    <div className='grid grid-cols-3 mx-11 ' >
                        <div className=''>
                            <img src={book1} alt="" className='h-full' />
                        </div>
                        <div className=' col-span-2 bg-white'>
                            <h1 className='font-bold text-2xl px-10 pt-16 '>
                                Captain Code: <br />
                                Unleash Your Coding <br />
                                Superpower with Python <br />
                            </h1>
                            <div className="p-10 pb-14">
                                <Link to="/books" className=" font-semibold text-lg px-12 inline-block underline underline-offset-4 hover:no-underline transition duration-500 ease-in-out  py-2 text-white bg-orange-700 hover:bg-white hover:text-orange-700 rounded-3xl border border-orange-700">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='grid grid-cols-2 text-black gap-8'>
                    {Books.map((book) => (
                        <div key={book.id} className='grid grid-cols-3  mb-8'>
                            <div>
                                <img src={book.image} alt={book.title} className='h-full' />
                            </div>
                            <div className='col-span-2 bg-white'>
                                <h1 className='font-bold text-2xl px-10 pt-16'>
                                    {book.title.split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </h1>
                                <div className="p-10 pb-14">
                                    <Link
                                        to={book.link}
                                        className="font-semibold text-lg px-12 inline-block underline underline-offset-4 hover:no-underline transition duration-500 ease-in-out py-2 text-white bg-orange-700 hover:bg-white hover:text-orange-700 rounded-3xl border border-orange-700"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-blue-50 pb-10 '>
                <h1 className=' text-4xl font-bold py-10 text-center'>
                    Recent Posts
                </h1>
                <div className='grid grid-cols-3 px-28 gap-8 '>
                <div className='relative overflow-hidden w-full scale-100 hover:scale-110 '>
            <img src={email} alt="Configuring Scan To Email" className='w-full scale-110 hover:scale-100' />
            <div className='w-full absolute top-0 left-0 text-center pt-24'>
                <h1 className='text-2xl font-bold'>
                    Configuring Scan To Email
                </h1>
                <p className='text-center font-thin py-6'>
                    Feb 11, 2024
                </p>
                <Link to="/books" className="transition duration-500 ease-in-out px-5 py-1 text-white bg-black hover:bg-black hover:text-orange-600 rounded-xl border border-black hover:border-orange-600">
                    Read More
                </Link>
            </div>
        </div>
                    <div className=' relative'>
                        <img src={podcast} alt="" />
                        <div className=' w-full absolute top-0 left-0 text-center pt-24'>
                            <h1 className='text-2xl font-bold'>
                                K12ArtChat Podcast
                            </h1>
                            <p className=' text-center font-thin py-6 '>
                                Feb 14, 2024
                            </p>
                            <Link to="/books" className=" transition duration-500 ease-in-out px-5 py-1 text-white bg-black hover:bg-black hover:text-orange-600 rounded-xl border border-black hover:border-orange-600">
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className=' relative'>
                        <img src={adobe} alt="" />
                        <div className=' w-full absolute top-0 left-0 text-center pt-10'>
                            <h1 className='text-2xl font-bold px-20'>
                                Adobe Acrobat and Liquid Mode help Fight HIV in Malawi
                            </h1>
                            <p className=' text-center font-thin py-6 '>
                                Dec 15, 2023                            </p>
                            <Link to="/books" className=" transition duration-500 ease-in-out px-5 py-1 text-white bg-black hover:bg-black hover:text-orange-600 rounded-xl border border-black hover:border-orange-600">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home

const Books = [
    {
        id: 1,
        image: book1,
        title: 'Captain Code: Unleash Your Coding Superpower with Python',
        link: '/books',
    },
    {
        id: 2,
        image: book2,
        title: '40 Ways to Inject Creativity into Your Classroom with Adobe Spark',
        link: '/books',
    },
    {
        id: 1,
        image: book3,
        title: 'Sams Teach Yourself SQL in 10 Minutes',
        link: '/books',
    },
    {
        id: 2,
        image: book4,
        title: 'Learning Regular Expression',
        link: '/books',
    },
]