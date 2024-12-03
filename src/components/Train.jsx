import React from 'react'
import { assets, trainMap } from '../assets/asset'

const Train = () => {
  return (
    <section className='max-w-[1344px] h-[564px] bg-cover bg-no-repeat md:mx-10 mx-5 rounded-large' style={{backgroundImage:`url(${assets.bgTrain})`}}>
      <div className='flex items-center  justify-end '>
      <div className='md:my-24 text-white p-8  font-montserrat justify-end flex flex-col items-center '>
          <h2  className="text-[28px] text-center md:text-left  md:text-[40px] font-semibold ">Train your aiDR on your...</h2>
          <p className='md:text-[40px] text-[28px]  font-medium italic text-[#0FF1F6] md:pr-32'>prefered email st|</p>
          <p className='md:w-3/5 font-light md:text-[24px] text-[18px] mt-4  mb:mt-0 font-work'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>

          <div className=' md:w-3/5 grid md:grid-cols-2 gap-5 mt-8'>
              {trainMap.map((value, index) => (
                <div key={index}>
                    
                      <p className=' flex items-center gap-2 md:text-[18px] text-base font-montserrat font-medium text-nowrap'><img src={value.image}/> <span>{value.text} </span></p>
                    
                </div>
              ))}
          </div>
      </div>
      </div>
    </section>
  )
}

export default Train
