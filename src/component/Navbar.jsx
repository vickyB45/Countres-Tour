import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = (props) => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)



    return (
        <>
        <div className=' sticky top-0 backdrop-blur-lg z-40 text-center'>
            <header className=" px-20 lg:px-16 flex flex-wrap bg-transparent border-b-neutral-500 items-center shadow-md border border-neutral-800">
                <div className="flex-1 flex justify-between items-center">
                    <Link style={{ fontFamily: "Yuji Mai" }} to="/" className="text-xl py-4">TourComplex</Link>
                </div>

                {
                        !mobileDrawerOpen ? <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                            <nav>
                                <ul className="md:flex items-center justify-between text-base  pt-4 md:pt-0">
                                    <li><Link className="md:p-4 py-3 px-0 block" to="/">Home</Link></li>
                                    <li><Link className="md:p-4 py-3 px-0 block " to="/about">About</Link></li>
                                    <li><Link className="md:p-4 py-3 px-0 block md:mb-0 mb-2" to="/detailsAboutCountry">Details</Link></li>
                                    <li><Link className="md:p-4 py-3 px-0 block" to="/country">Country</Link></li>
                                    <li><Link className="md:p-4 py-3 px-0 block" to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                            </div>
                            :
                            <>
                            <div className="  w-full" id="menu">
                            <nav>
                                <ul className="flex flex-col text-center  pt-4 md:pt-0">
                                    <li><Link className="md:p-4 py-3 px-0 block" to="/">Home</Link></li>
                                    <li><Link className="md:p-4 py-3 px-0 block " to="/about">About</Link></li>
                                    <li><Link className="md:p-4 py-3 px-0 block md:mb-0 mb-2" to="/detailsAboutCountry">Country</Link></li>
                                    <li><Link className="md:p-4 py-3 px-0 block" to="/country"></Link>Fact & Place</li>
                                    <li><Link className="md:p-4 py-3 px-0 block" to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                            </div>
                            </>

                    }
                <span className='flex justify-center items-center'>
                    <input type="checkbox" id='darkMode' onClick={props.click} className='cursor-pointer'/>
                    <label htmlFor="darkMode" className='cursor-pointer text-xs'>Dark Mode</label>
                </span>
                <a className='ml-4 text-sm bg-blue-900 py-1 px-3 text-white rounded cursor-pointer' href="" onClick={props.handleLogOut}>Log out</a>
                <div className='flex bar ' onClick={()=>setMobileDrawerOpen(!mobileDrawerOpen)}  >
                    {
                    !mobileDrawerOpen?<i className="fa-solid fa-bars  " ></i> :<i className=" fa-solid fa-x "></i>
                    }
                </div>

            </header>
        </div>
        </>
    )
}

export default Navbar
