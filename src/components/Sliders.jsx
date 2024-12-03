import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderData } from '../assets/asset';

const Sliders = () => {
  return (
    <div className='h-[537px] flex items-center'>
      <div className='h-[365px] mt-32  w-3/4 mx-auto '>
      <Slider>
        {sliderData.map((value, index) => (
            <div className='' key={index}>
              <div className='flex justify-center items-center pb-5'> <img src={value.image} alt="" /></div>
               <div className='text-white flex flex-col justify-center items-center'>
               <p className=' text-center text-[28px] px-8 font-light font-work leading-tight mb-4 '>{value.text} </p>
               <h6 className='text-[24px] font-semibold font-work text-[#0FF1F6]'>{value.title} </h6>
               <p className='text-xl font-work text-[#96ACAF] font-normal'>{value.des} </p>
               </div>
            </div>
        ))}
          </Slider>
      </div>
    </div>
  )
}


export default Sliders
