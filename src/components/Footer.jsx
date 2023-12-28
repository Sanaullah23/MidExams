import React from 'react'
import { CiShop } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import { FiYoutube } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
<>
<div className='bg-[#3B3B3B] px-4 pt-[30px] pb-[40px] text-[#CCCCCC] flex flex-col gap-[30px] md:flex-col md:pl-[49px] md:justify-start md:items-start lg:flex-row lg:px-[195px]'>
                <div className='md:flex-1 md:gap-8'>
                           <div className='flex gap-2 items-center'>
                                <CiShop className='w-[24px] h-[24px] text-[#A259FF] font-bold' />
                                <h1 className='text-white font-bold font-mono text-xl'>NFT Marketplace</h1>
                            </div>
                                    <div className='flex  flex-col gap-[30px]'>
                                        <p  className='md:pt-[30px]'>NFT marketplace UI created with Anima for Figma.</p>
                                        <p  className='md:pb-[30px]'>Join our community</p>
                                    </div>
                            <div className='flex gap-[10px] items-center'>
                                <RxDiscordLogo className='w-8 h-8'/>
                                <FiYoutube className='w-8 h-8'/>
                                <LuTwitter className='w-8 h-8'/>
                                <IoLogoInstagram className='w-8 h-8'/>
                            </div>
                </div>
        <div className='flex flex-col gap-[20px] md:flex-1'>
            <h1 className='text-white text-[22px] font-bold'>Explore</h1>
            
                <p>Marketplace</p>
                <p>Rankings</p>
                <p>Coonect a wallet</p>
            
        </div>

        <div className='flex flex-col gap-[20px] md:flex-1'>
            <h1 className='text-white text-[22px] font-bold leading-8 font-mono'>Join our weekly digest</h1>
            <p className='text-[16px]'>Get exclusive promotions & updates straight to your inbox.</p>
            <div className='flex flex-col gap-4 md:relative'>
                <input  type="text"   placeholder='Enter Your Email Address' className='px-[50px] rounded-[20px] border-[1px] border-gray-400 h-[46px] md:h-[60px]  md:py-4 md:px-[20px]'/>
                <button className='flex  gap-2 justify-center items-center text-white font-bold px-[90px] rounded-[20px] bg-[#A259FF] h-[46px] md:h-[60px] md:absolute  md:left-56'><AiOutlineMail className='md:hidden'/> <span>Subscribe</span></button>
            </div>
           
        </div>
        <hr   className='text-gray-400'/>

        
    </div>

</>
  )
}

export default Footer