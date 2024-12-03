import React from 'react'
import { brandData } from '../assets/asset'

const Brands = () => {
  return (
    <section className='h-[258px] lg:h-[180px] md:max-w-[1440px] max-w-[375px] font-montserrat bg-[#07292F]'>
       <p className='text-primary text-center uppercase py-5'>our trusted partners</p>
       <div className='grid grid-cols-2 lg:grid-cols-5 lg:pt-3 lg:px-32'>
        {brandData.map((item, index) => (
            <div className='flex justify-center items-center' key={index}>
                <img src={item.image} alt="" />
            </div>
        ))}
       </div>
    </section>
  )
}

export default Brands
