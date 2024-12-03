import React from 'react'
import { assets, trainMap } from '../assets/asset'

const Train = () => {
  return (
    <section className='max-w-[1344px] h-[564px] bg-cover bg-no-repeat mx-10 rounded-large' style={{backgroundImage:`url(${assets.bgTrain})`}}>
      <div className='flex items-center  justify-end '>
      <div className='my-24 text-white p-8  font-montserrat justify-end flex flex-col items-center '>
          <h2  className="text-[40px] font-semibold ">Train your aiDR on your...</h2>
          <p className='text-[40px] font-medium italic text-[#0FF1F6] pr-32'>prefered email st|</p>
          <p className='w-3/5 font-light text-[24px] font-work'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

          <div className=' w-3/5 grid grid-cols-2 gap-5 mt-8'>
              {trainMap.map((value, index) => (
                <div key={index}>
                    
                      <p className=' flex items-center gap-2 text-[18px] font-montserrat font-medium text-nowrap'><img src={value.image}/> <span>{value.text} </span></p>
                    
                </div>
              ))}
          </div>
      </div>
      </div>
    </section>
  )
}

export default Train
