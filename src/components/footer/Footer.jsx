import React from 'react'
import footerlogo from "../../assets/image/logo-1.png"
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className='bg-[#000] py-16'>
        <div className="container">
            <div className="grid grid-cols-6 gap-[25px]">
                <div className=" col-span-2">
                    <Link to="" >
                        <img className='w-[40%]' src={footerlogo} alt="" />
                    </Link>
                    <p className='text-[#ccc] w-[350px] mt-5'>Our secure online donation platform allows you to make contributions quickly and safely. Choose from various.</p>
                    <button className='btn bg-[#1A685B] border-0 text-white outline-0 inline-block mt-8'>Donate Now</button>
                </div>
                <div className="">
                    <h3 className='mb-5 young_serif text-[22px] text-white font-bold'>Quick Links</h3>
                    <ul className='text-[#ccc] jost text-[16px]'>
                        <li className='mb-3'>
                            <Link to="/" >Home</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/" >About</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/" >Donation</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/" >Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className='mb-5 young_serif text-[22px] text-white font-bold'>Our Service</h3>
                    <ul className='text-[#ccc] jost text-[16px]'>
                        <li className='mb-3'>
                            <Link to="/" >Give Donation</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/" >Education Support</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/" >Food Support</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="/" >Our Campaign</Link>
                        </li>
                    </ul>
                </div>
                <div className="bg-[#13443c] border border-[#039b7c] col-span-2 rounded-3xl px-[30px] py-[20px] relative">
                    <h3 className='mb-5 young_serif text-[22px] text-white font-bold'>Our Service</h3>
                    <div className="space-y-4">
                        <div className="">
                            <span className='block jost text-[18px] font-semibold text-white'>Call us any time:</span>
                            <Link className='jost text-[15px] font-normal text-[#ccc]' to="">+880 123 456 789</Link>
                        </div>
                        <div className="">
                            <span className='block jost text-[18px] font-semibold text-white'>Email us any time:</span>
                            <Link className='jost text-[16px] font-normal text-[#ccc]' to="">Example@gmail.com</Link>
                        </div>
                    </div>
                    <div className="p-1 border-1 border-[#039b7c] rounded-full absolute top-1.5 right-1">
                        <Link to="/" >
                            <div className="mb-3.5 w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center group hover:bg-[#039b7c] transition-all duration-300">
                                <FaFacebookF className='text-[20px] group-hover:text-white transition-all duration-300' />
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="mb-3.5 w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center group hover:bg-[#039b7c] transition-all duration-300">
                                <IoLogoTwitter className='text-[20px] group-hover:text-white transition-all duration-300' />
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="mb-3.5 w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center group hover:bg-[#039b7c] transition-all duration-300">
                                <FaYoutube className='text-[20px] group-hover:text-white transition-all duration-300' />
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="w-[45px] h-[45px] bg-white rounded-full flex items-center justify-center group hover:bg-[#039b7c] transition-all duration-300">
                                <FaLinkedinIn className='text-[20px] group-hover:text-white transition-all duration-300' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
