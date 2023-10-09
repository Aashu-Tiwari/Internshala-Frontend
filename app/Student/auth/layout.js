"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header2 from '@/pages/Header2/page'

const StudentAuth = ({children}) => {
    const router = useRouter()
    const {isAuthenticated} = useSelector((state)=>state.studentReducer)
    console.log(isAuthenticated)
    useEffect(()=>{
        if(isAuthenticated) router.push("/Student/auth")
    },[isAuthenticated])
  return (
    <div>
      <Header2/>
    </div>
  )
}

export default StudentAuth