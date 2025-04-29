import React from 'react'
import teamimg1 from '../../../assets/image/t-1.jpg'
import teamimg2 from '../../../assets/image/t-2.jpg'
import teamimg3 from '../../../assets/image/t-3.jpg'
import teamimg4 from '../../../assets/image/t-4.jpg'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center">
            <span className='py-2 px-6 bg-[#F6EEE6] jost text-[18px] rounded-md mb-4 inline-block'>Team</span>
            <h2 className='jost text-[30px] md:text-[55px] font-bold'>The Volunteers</h2>
            <p className='jost text-[15px] font-normal w-[100%] lg:w-[400px] m-auto mt-3'>Lorem ipsum odor amet consectetuer adipiscing elit placerat vulputate proin pellentesque dapibus.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-8">  
            <div className="bg-[#fff] h-[480px] group">
                <div className="w-full h-[400px] md:h-[400px] relative overflow-hidden">
                    <img className='w-full h-full object-cover' src={teamimg1} alt="" />
                    <div className="w-[55%] py-[10px] px-[10px] bg-[rgba(204,204,204,0.5)] rounded-2xl absolute bottom-[-70px] left-[50%] translate-x-[-50%] group-hover:bottom-[10px] transition-all duration-500">
                        <ul className='flex justify-between items-center'>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><FaFacebookF /></Link>
                            </li>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><IoLogoTwitter /></Link>
                            </li>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><FaInstagram /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className='jost text-[22px] font-semibold block' >MARTEEN DOE</Link>
                    <span className='jost text-[16px] font-normal'>Volunteer</span>
                </div>
            </div>  
            <div className="bg-[#fff] h-[480px] group">
                <div className="w-full h-[400px] relative overflow-hidden">
                    <img className='w-full h-full object-cover' src={teamimg2} alt="" />
                    <div className="w-[55%] py-[10px] px-[10px] bg-[rgba(204,204,204,0.5)] rounded-2xl absolute bottom-[-70px] left-[50%] translate-x-[-50%] group-hover:bottom-[10px] transition-all duration-500">
                        <ul className='flex justify-between items-center'>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><FaFacebookF /></Link>
                            </li>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><IoLogoTwitter /></Link>
                            </li>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><FaInstagram /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className='jost text-[22px] font-semibold block' >CHRISTINE DOE</Link>
                    <span className='jost text-[16px] font-normal'>Volunteer</span>
                </div>
            </div>  
            <div className="bg-[#fff] h-[480px] group">
                <div className="w-full h-[400px] relative overflow-hidden">
                    <img className='w-full h-full object-cover' src={teamimg3} alt="" />
                    <div className="w-[55%] py-[10px] px-[10px] bg-[rgba(204,204,204,0.5)] rounded-2xl absolute bottom-[-70px] left-[50%] translate-x-[-50%] group-hover:bottom-[10px] transition-all duration-500">
                        <ul className='flex justify-between items-center'>
                            <li className='w-[40px] h-[40px] bg-white text-[#000] rounded-full flex justify-center items-center'>
                                <Link to="" className=''><FaFacebookF /></Link>
                            </li>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><IoLogoTwitter /></Link>
                            </li>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><FaInstagram /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className='jost text-[22px] font-semibold block' >BRANDON DOE</Link>
                    <span className='jost text-[16px] font-normal'>Volunteer</span>
                </div>
            </div>  
            <div className="bg-[#fff] h-[480px] group">
                <div className="w-full h-[400px] relative overflow-hidden">
                    <img className='w-full h-full object-cover' src={teamimg4} alt="" />
                    <div className="w-[55%] py-[10px] px-[10px] bg-[rgba(204,204,204,0.5)] rounded-2xl absolute bottom-[-70px] left-[50%] translate-x-[-50%] group-hover:bottom-[10px] transition-all duration-500">
                        <ul className='flex justify-between items-center'>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><FaFacebookF /></Link>
                            </li>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><IoLogoTwitter /></Link>
                            </li>
                            <li className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                                <Link to="" ><FaInstagram /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className='jost text-[22px] font-semibold block' >JENNIE DOE</Link>
                    <span className='jost text-[16px] font-normal'>Volunteer</span>
                </div>
            </div>            
        </div>
      </div>
    </div>
  )
}

export default Team
