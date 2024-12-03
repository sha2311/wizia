import React from 'react'
import { assets } from './assets/asset'
const Footer = () => {
  return (
    <div className='md:h-[109px] h-[149px] max-w-[1440px] bg-[#07292F] md:py-14 py-5'>
      <div className='text-white md:flex text-center  md:justify-between mx-auto md:px-20'>
        <img className='w-[72px] ms-36 md:ms-0 h-[16px]' src={assets.footerLogo} alt="" />
        <p className='text-[16px] text-[#96ACAF] text-nowrap mt-5 md:mt-0 font-light font-work'>Copyright © 2023 Wizia. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
