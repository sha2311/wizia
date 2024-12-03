import React from 'react'
import { assets, improvData } from './assets/asset'

const Improvments = () => {
  return (
    <section className=' max-w-[1390px] h-[560px] rounded-xl bg-cover bg-center bg-no-repeat mx-10' style={{backgroundImage:`url(${assets.improv})`}}>
      <div className='text-white w-1/2 flex flex-col gap-2 px-20'>  
        <h2 className='text-[32px] font-semibold font-montserrat mt-20'>Allocate effort where your reps make an inpact.</h2>
        <h3 className='text-[32px] font-medium italic text-[#0FF1F6]'>Let us handle the rest.</h3>
        <p className='text-[20px] font-work font-light  '>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1  gap-2 px-20 w-2/3 mt-10'>
        {improvData.map((value, index) => (
            <div key={index} >
               <div className='text-white font-montserrat flex flex-col justify-between'>
               <h2 className='text-[#0FF1F6] text-[40px] font-bold'>{value.text} </h2>
               <p className='text-[20px] text-[#E9EEF1] font-montserrat font-medium'>{value.des} </p>
               </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Improvments
