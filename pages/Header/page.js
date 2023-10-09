"use client"
import React from 'react'
import '@/pages/Header/page.css'
import Image from 'next/image'
// import SearchIcon from '@mui/icons-material'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import Link from 'next/link'

export default function page() {
  return (
    <div className='nav'>
        <div className='nav1 container'>
            <Link href="/" className="cursor-pointer"><Image 
            src="/finallogo.png"
            width={140}
            height={90}
            alt='picture of logo'
            />
            </Link>
            <div className='search d-flex'>
                <SearchLineIcon/>
                <p className="cursor-pointer">Search</p>
              <div className='but'>
                <Link href="/Student/Login"><button>Login</button></Link>
            </div>
                  <div className='line'></div>
                  <h4>Hire Talent</h4>
            </div>

        </div>
        
    </div>
  )
}

// module.exports = page;