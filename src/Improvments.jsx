import React from 'react'
import { assets, improvData } from './assets/asset'

const Improvments = () => {
  return (
    <section className=' max-w-[1390px] md:h-[560px] h-[661px] rounded-xl bg-cover bg-center bg-no-repeat mx-10' style={{backgroundImage:`url(${assets.improv})`}}>
      <div className='text-white md:w-1/2 flex flex-col gap-2 md:px-20 px-5'>  
        <h2 className='md:text-[32px] text-[28px] font-semibold font-montserrat mt-5  md:mt-20'>Allocate effort where your reps make an inpact.</h2>
        <h3 className='md:text-[32px] text-[24px] font-medium italic text-[#0FF1F6]'>Let us handle the rest.</h3>
        <p className='md:text-[20px] text-[18px] font-work font-light  '>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1  md:gap-2 md:px-20 px-5 md:w-2/3 md:mt-10 mt-5 gap-1'>
        {improvData.map((value, index) => (
            <div key={index} >
               <div className='text-white font-montserrat flex flex-col justify-between'>
               <h2 className='text-[#0FF1F6] text-[32px] md:text-[40px] font-bold'>{value.text} </h2>
               <p className='md:text-[20px] text-[18px] text-[#E9EEF1] font-montserrat font-medium'>{value.des} </p>
               </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Improvments
