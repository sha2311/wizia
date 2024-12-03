import React from 'react'
import { assets } from './assets/asset'

const Embrace = () => {
  return (
  <section className='h-[433px] max-w-[1440px]'>
      <div className='text-white text-center flex flex-col items-center justify-center py-16'>
      <p className='text-[#0FF1F6] text-xl font-montserrat mt-16'>GET STARTED</p>
      <h2 className='text-4xl font-montserrat font-bold py-5'> <span className='font-medium italic'>Embrace</span>  the new era of <span className='font-medium italic'>outbound.</span></h2>
      <p className='text-[20px] font-light font-work w-1/2'>Wizia lets you train, activate, and optimize aiDRs. 
      Take your outbound to new levels of performance and efficiency.</p>
        <button  className="bg-primary rounded-full text-base text-secondary font-medium py-2 px-4 flex items-center gap-1 hover:scale-105 transition-all duration-300 my-4">Sign Up for the Beta <img className='w-[15px] h-[15px] ' src={assets.arrow} alt="" /></button>
    </div>
  </section>
  )
}

export default Embrace
