import React from 'react'
import { CiUser, CiLock } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import heroImage from '../assets/images/hero.png'

const Form = () => {
  return (
   <>
      <div className='bg-[#2B2B2B] md:flex md:justify-between md:items-start md:gap-[10px]'>
       <img src={heroImage} alt="" className='w-screen h-[232px] md:h-[615px] md:w-[397px] md:flex-1' /> 
       <div className='bg-[#2B2B2B] px-4 pt-[30px] pb-[40px] md:py-[80px] md:flex-1'>
      
     

        <div className='flex flex-col  gap-[40px]'>
             <h1 className='text-[38px]  text-white font-semibold leading-[45.6px]'>Create account</h1>
             <p className='text-[16px] font-normal text-white leading-[22.4px]'>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
        </div>
        <div className='flex flex-col justify-between items-center  gap-[12px] pt-4 md:justify-start md:items-start'>
            <div className='relative'>
           
                <CiUser  className='absolute  w-[20px] h-[20px] top-3 left-6'/>
                <input  type="text"  placeholder='Username' className='px-[50px] rounded-[20px] border-[1px] border-gray-400 h-[46px]'/>
                
            </div>
            <div className='relative'>
                <AiOutlineMail className='absolute  w-[20px] h-[20px] top-3 left-6'/>
                <input type="email" placeholder='Email Address' className='px-[50px] rounded-[20px] border-[1px] border-gray-400 h-[46px]'/>
            </div>
            <div className='relative'>
                <CiLock className='absolute  w-[20px] h-[20px] top-3 left-6'/>
                <input type="password" placeholder='Password' className='px-[50px] rounded-[20px] border-[1px] border-gray-400 h-[46px]'/>
            </div>
            <div className='relative'>
                <CiLock className='absolute  w-[20px] h-[20px] top-3 left-6'/>
                 <input type="password" placeholder='Confirm Password' className='px-[50px] rounded-[20px] border-[1px] border-gray-400 h-[46px]'/>
            </div>
            <div className=''>
              <button className='px-[90px] rounded-[20px] md:mt-4 bg-[#A259FF] text-white h-[46px]'>Create account</button>

            </div>
           
           
            
        </div>

    </div>
       </div>
   </>
  )
}

export default Form