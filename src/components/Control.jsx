import React from 'react'
import { controlData } from '../assets/asset'
const Control = () => {
  return (
    <section className='w-full max-w-[1440px] h-[494px] '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-10 md:py-24 px-10 md:px-20 items-center '>
            {controlData.map((value, index) => (
                   <div className='text-white ' key={index}>
                        <div className='flex mb-4'>
                        <img  src={value.image} alt="" />
                        </div>
                        <h3 className='text-[28px] mb-2 font-semibold font-montserrat'>{value.heading} </h3>
                        <p className='text-[20px] font-work font-light '>{value.des} </p>
                   </div>
            ))}
        </div>
    </section>
  )
}

export default Control
