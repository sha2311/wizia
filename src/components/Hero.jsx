import React from 'react'
import { assets } from '../assets/asset'
const Hero = () => {
  return (
    <section className='h-[573px] max-w-[1440px] bg-center bg-cover bg-no-repeat font-montserrat' style={{backgroundImage:`url(${assets.home})`}}>
      <div className='w-full md:w-1/2 px-24 text-white h-screen flex-1 flex-col pt-28'>
      <p className="text-xl text-[#0FF1F6] font-normal text-center md:text-start mb-">AI SDRs (aiDRs)</p>
        <h2 className="md:text-[64px] text-[40px] font-bold  md:text-start leading-tight text-center mb-4">More <span className='font-normal italic'>leads,</span> <br/> less <span className='font-normal italic'> people.</span></h2>
        <p className="text-base mb-5 text-[#ffffff]">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>   
        <button className="bg-primary rounded-full text-base text-secondary font-medium py-2 px-4 flex items-center gap-1 hover:scale-105 transition-all duration-300">Sign Up for the Beta <img className='w-[15px] h-[15px] ' src={assets.arrow} alt="" /> </button>
      </div>
    </section>
  )
}

export default Hero
