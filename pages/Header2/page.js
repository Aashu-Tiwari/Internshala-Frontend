"use client"
import React, { useState } from 'react'
import '@/pages/Header2/page.css'
import Image from 'next/image'
import Link from 'next/link'
import BookmarkLine from  'remixicon-react/BookMarkLineIcon'
import DiscussFill from  'remixicon-react/DiscussFillIcon'
import userFill from 'remixicon-react/User2FillIcon'
import User2FillIcon from 'remixicon-react/User2FillIcon'
import DropdownMenu from '../Dropdown/page'

const page = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
      setDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };
  return (
    <div>
        <div className='nav '>
            <div className='nav1 container'>
                <Link href="/Student/auth" className="cursor-pointer">
                    <Image src="/finallogo.png"
                    width={140}
                    height={90}
                    alt='picture of logo'
                />
                </Link>

                <div className='icons'>
                    <p className='mainp'>Clubs</p>
                    <p className='cursor-pointer' style={{marginLeft:"40px"}}><BookmarkLine/></p>
                    <p className='cursor-pointer' style={{marginLeft:"40px"}}><DiscussFill/></p>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='userp'>
                    {isDropdownVisible && <DropdownMenu />}
                        <p style={{marginLeft:"30px"}}><User2FillIcon/></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default page