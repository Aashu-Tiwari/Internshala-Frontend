"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const StudentAuth = ({children}) => {
    const router = useRouter()
    const {isAuthenticated} = useSelector((state)=>state.studentReducer)
    console.log(isAuthenticated)
    useEffect(()=>{
        if(isAuthenticated){
          router.push("/Student/auth")
        }else{
          router.push("/student/")
        }
        
    },[isAuthenticated])
  return (
    <div>
      {children}
    </div>
  )
}

export default StudentAuth