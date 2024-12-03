import React from 'react'
import { assets } from './assets/asset'

const Improvments = () => {
  return (
    <section className=' max-w-[1390px] h-[560px] rounded-xl bg-cover bg-center bg-no-repeat mx-10' style={{backgroundImage:`url(${assets.improv})`}}>
      <div className='text-white w-1/2 flex flex-col gap-2 px-20'>  
        <h2 className='text-[32px] font-semibold font-montserrat mt-24'>Allocate effort where your reps make an inpact.</h2>
        <h3 className='text-[32px] font-medium italic text-[#0FF1F6]'>Let us handle the rest.</h3>
        <p className='text-[20px] font-work font-light  '>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
      </div>
    </section>
  )
}

export default Improvments
