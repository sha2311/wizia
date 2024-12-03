import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from '../assets/asset';

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='md:h-[537px] h-[400px] max-w-[375px] md:max-w-[1440px] flex items-center'>
      <div className='h-[365px] mt-32  w-3/4 mx-auto '>
      <Slider {...settings}>
        {sliderData.map((value, index) => (
            <div className='' key={index}>
              <div className='flex justify-center items-center pb-5'> <img src={value.image} alt="" /></div>
               <div className='text-white flex flex-col justify-center items-center'>
               <p className=' text-center md:text-[28px] px-8 font-light font-work leading-tight mb-4 '>{value.text} </p>
               <h6 className='md:text-[24px] font-semibold font-work text-[#0FF1F6]'>{value.title} </h6>
               <p className='md:text-xl font-work text-[#96ACAF] font-normal mb-5'>{value.des} </p>
               </div>
            </div>
        ))}
          </Slider>
      </div>
    </div>
  )
}


export default Sliders
