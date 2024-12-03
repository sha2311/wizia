import React from 'react'
import { assets } from './assets/asset'
const Footer = () => {
  return (
    <div className='h-[109px] max-w-[1440px] bg-[#07292F] py-14'>
      <div className='text-white flex justify-between mx-auto px-20'>
        <img className='w-[72px] h-[16px]' src={assets.footerLogo} alt="" />
        <p className='text-[16px] text-[#96ACAF] font-light font-work'>Copyright © 2023 Wizia. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
