"use client"
import { asynccurrentstudent, asyncsignoutstudent } from '@/store/Actions/studentActions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/navigation'




const studentLayout = ({children}) => {
  const SignoutHandler = ()=>{
    dispatch(asyncsignoutstudent())
  }
      const dispatch = useDispatch();
    const router = useRouter()
    const {isAuthenticated} = useSelector((state)=>state.studentReducer)
    console.log(isAuthenticated)
    useEffect(()=>{
        dispatch(asynccurrentstudent());
        if(isAuthenticated) {router.push("/Student/auth")
      }
    },[isAuthenticated])
  return <>
  {/* <nav className='container mt-5'>
    {isAuthenticated?(
      <>
      <Link href={isAuthenticated ? "Student/auth":"/"}>Home</Link> */}
      
      {/* <Link href="/"><button onClick={SignoutHandler}>Signout</button></Link> */}
      {/* </>
    ):(
      <>
      <Link href="/Student/signin">Signin</Link>
      <Link href="/Student/signup">Signup</Link>
      </>
    )}
  </nav> */}
  {children}
  </>;
}

export default studentLayout