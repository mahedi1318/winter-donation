import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroOne from "../../../assets/image/h-1.jpg"
import hero2 from "../../../assets/image/h-2.jpg"
import hero3 from "../../../assets/image/h-3.jpg"
import { Link } from 'react-router';

const sliderData = [
    {
        id: 1,
        image: heroOne,
        title: "Spread Warmth This Winter – Donate Now!",  
        description: "As the winter chill sets in, thousands of underprivileged individuals struggle to stay warm. While we enjoy the comfort of cozy blankets and hot meals, many are left battling the cold without proper clothing or shelter. This winter, let's come together to make a difference!",
        subtitle: "Welcome to Donat Charity"   
    },
    {
        id: 2,
        image: hero2,
        title: "Be Someone’s Warmth in the Cold – Give Today!", 
        description: "Your donation—whether warm clothes, blankets, or financial support—can help bring warmth and comfort to those in need. Even a small act of kindness can change someone's life. Join us in spreading warmth and hope this season." ,
        subtitle: "Give Hope For Homeless "
    },  
    {
        id: 3,
        image: hero3,
        title: "Winter is Harsh, Kindness is Warmer – Help the Needy!",  
        description: "As the winter chill sets in, thousands of underprivileged individuals struggle to stay warm. While we enjoy the comfort of cozy blankets and hot meals, many are left battling the cold without proper clothing or shelter. ",
        subtitle: "Welcome to Donat Charity"
    },
    {
        id: 4,
        image: hero2,
        title: "Share the Warmth, Change a Life!" ,
        description: "Your donation—whether warm clothes, blankets, or financial support—can help bring warmth and comfort to those in need. Even a small act of kindness can change someone's life. Join us in spreading warmth and hope this season.",
        subtitle: "Give Hope For Homeless"
    }
]

const Hero = () => {
  return (
    <div>
      <Swiper className='h-[450px] md:h-[465px] lg:h-[600px] xl:h-[800px] w-full'      
      modules={[Navigation, Pagination, Scrollbar, A11y]}      
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {sliderData.map((item, index)=>(
        <SwiperSlide key={index} className='w-full h-full'>
            <div className="relative">
                <img className='w-full h-[450px] md:h-full object-cover' src={item.image} alt="" />
                <div className="w-full h-full bg-[rgba(30,36,39,0.8)] absolute top-0 left-0">
                    <div className="container">
                        <div className="mt-[70px] lg:mt-[130px] xl:mt-[200px] text-center">
                            <div className="flex justify-center items-center gap-3 mb-5">
                                <div className="w-[50px] h-[2px] bg-[#FFAC00]"></div>
                                <h5 className='caveat text-[20px] md:text-[30px] font-semibold text-[#FFAC00]'>{item.subtitle}</h5>
                                <div className="w-[50px] h-[2px] bg-[#FFAC00]"></div>
                            </div>
                            <h1 className='text-[#fff] young_serif text-[20px] md:text-[30px] lg:text-[50px] font-bold w-[100%] md:w-[550px] lg:w-[750px] m-auto'>{item.title}</h1>
                            <p className='text-[#fff] jost text-[15px] font-normal w-[100%] md:w-[550px] lg:w-[800px] mt-3 m-auto'>{item.description}</p>
                            <div className="flex items-center space-x-8 mt-8 justify-center">
                                <Link className='py-2 md:py-3 px-5 md:px-8 bg-[#1A685B] jost text-[13px] md:text-[16px] font-medium text-[#fff] inline-block rounded-md hover:bg-white
                                 hover:text-[#444] transition-all duration-500' to="/">Available Donation</Link>
                                <div className="text-[#fff] jost text-[13px] md:text-[16px] font-normal text-left">
                                    <span className='block'>Anytime Call</span>
                                    <Link className='inline-block underline' to="/">(+8800) 123 456 789</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        ))}      
    </Swiper>
    </div>
  )
}

export default Hero
