import React from 'react'
import teamimg1 from '../../../assets/image/t-1.jpg'
import teamimg2 from '../../../assets/image/t-2.jpg'
import teamimg3 from '../../../assets/image/t-3.jpg'
import teamimg4 from '../../../assets/image/t-4.jpg'
import { Link } from 'react-router'

const Team = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center">
            <span className='py-2 px-6 bg-[#F6EEE6] jost text-[18px] rounded-md mb-4 inline-block'>Team</span>
            <h2 className='jost text-[55px] font-bold'>The Volunteers</h2>
            <p className='jost text-[15px] font-normal w-[400px] m-auto mt-3'>Lorem ipsum odor amet consectetuer adipiscing elit placerat vulputate proin pellentesque dapibus.</p>
        </div>
        <div className="grid grid-cols-4 gap-[20px] mt-8">
            <div className="bg-[#fff] h-[480px]">
                <div className="w-full h-[400px]">
                    <img className='w-full h-full object-cover' src={teamimg1} alt="" />
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className='jost text-[22px] font-semibold block' >MARTEEN DOE</Link>
                    <span className='jost text-[16px] font-normal'>Volunteer</span>
                </div>
            </div>
            <div className="bg-[#fff] h-[480px]">
                <div className="w-full h-[400px]">
                    <img className='w-full h-full object-cover' src={teamimg2} alt="" />
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className='jost text-[22px] font-semibold block' >CHRISTINE DOE</Link>
                    <span className='jost text-[16px] font-normal'>Volunteer</span>
                </div>
            </div>
            <div className="bg-[#fff] h-[480px]">
                <div className="w-full h-[400px]">
                    <img className='w-full h-full object-cover' src={teamimg3} alt="" />
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className='jost text-[22px] font-semibold block' >BRANDON DOE</Link>
                    <span className='jost text-[16px] font-normal'>Volunteer</span>
                </div>
            </div>
            <div className="bg-[#fff] h-[480px]">
                <div className="w-full h-[400px]">
                    <img className='w-full h-full object-cover' src={teamimg4} alt="" />
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
