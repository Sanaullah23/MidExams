import React from 'react'
import { FaBars } from "react-icons/fa6";
import { CiShop } from "react-icons/ci";
import navImage from '../assets/images/nft.png'


const NavBar = () => {
  return (
    <div>

        <nav className='flex justify-between items-center bg-[#2B2B2B] px-[32px] py-[15px] md:px-[50px] text-white font-medium'>
            <div className='flex items-center gap-[10px] lg:hidden'>
                <CiShop className='w-[24px] h-[24px]  text-[#A259FF] font-bold' />
                <img src={navImage} alt=""  className='w-[149.50px] h-[14.85px]'/>
            </div>
            <FaBars className='w-[24px] h-[24px] lg:hidden'/>

        </nav>
    </div>
  )
}

export default NavBar