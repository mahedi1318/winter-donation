import React from 'react'
import abouteImg from '../../../assets/image/about_1.webp'

const AboutUs = () => {
  return (
    <div className='my-[100px]'>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px]">
            <div className="h-[300px] md:h-[550px] border-12 border-[#1A685B] rounded-3xl">
                <img className='w-full h-full object-cover' src={abouteImg} alt="" />
            </div>
            <div className="">
                <span className='py-2 px-6 bg-[#F6EEE6] jost text-[18px] rounded-md mb-4 inline-block'>About Us</span>
                <h2 className='jost text-[30px] md:text-[45px] font-bold leading-[40px] md:leading-[60px]'>We are in a mission to help the helpless</h2>
                <p className='jost text-[18px] font-normal mt-5'>Lorem ipsum odor amet, consectetuer adipiscing elit placerat vulputate proin pellentesque dapibus.</p>
                <div className="mt-6">
                    <ul>
                        <li>
                            <div className="jost text-[18px] font-medium mb-4 flex items-center space-x-2">
                                <div className="w-[15px] h-[15px] bg-[#3ACD98] rounded-full"></div>
                                <span>Distributing blankets and warm clothes to those in need</span>
                            </div>
                        </li>
                        <li>
                            <div className="jost text-[18px] font-medium mb-4 flex items-center space-x-2">
                                <div className="w-[15px] h-[15px] bg-[#3ACD98] rounded-full"></div>
                                <span>Providing food and essential supplies</span>
                            </div>
                        </li>
                        <li>
                            <div className="jost text-[18px] font-medium mb-4 flex items-center space-x-2">
                                <div className="w-[15px] h-[15px] bg-[#3ACD98] rounded-full"></div>
                                <span>Assisting underprivileged children and the elderly</span>
                            </div>
                        </li>
                        <li>
                            <div className="jost text-[18px] font-medium flex items-center space-x-2">
                                <div className="w-[15px] h-[15px] bg-[#3ACD98] rounded-full"></div>
                                <span>Organizing support efforts through volunteers</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h4 className='jost text-[18px] font-normal mt-8'>Total Donation Distribution</h4>
                    <span className='jost text-[38px] font-bold'>USD $768.649.235</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
