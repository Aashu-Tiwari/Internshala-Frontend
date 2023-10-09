"use client"
import React, { useEffect, useState } from 'react'
import '@/app/Student/Login/page.css'
import Link from 'next/link'
import Header from "@/pages/Header/page"
import { useDispatch, useSelector } from 'react-redux'
import { asyncsigninstudent } from '@/store/Actions/studentActions'
import { useRouter } from 'next/navigation'
import { iserror } from '@/store/Reducers/studentreducer'

const page = (e) => {
  e.preventDefault;
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const dispatch = useDispatch();
  const router = useRouter()
  const {isAuthenticated} = useSelector((state)=>state.studentReducer)
  // console.log(isAuthenticated)



  useEffect(()=>{
      if(isAuthenticated) router.push("/Student/auth")
  },[isAuthenticated])




  const SigninHandler = ()=>{
    const student = {
        // email:"ashutripat573@gmail.com",
        email:email,
        password:password,
    };
    dispatch(asyncsigninstudent(student));
    console.log(email)
    console.log(password)
}





  return (
    <div>
      <Header/>
      <div className='mainpage'>
        <div className='student'>
            <div className='text'>
              <h1>Student</h1>
            <form action="">
              <input type="email" value={email} placeholder='email' onChange={(e)=>{setemail(e.target.value)}} />
              <input type="password" value={password} placeholder='password' onChange={(e) =>{setpassword(e.target.value)}} />
              <h4>Forgot password</h4>
                <Link href={isAuthenticated?"/Student/auth":""}><input onClick={SigninHandler} type="submit" value="Login"/></Link>
            </form>
            <div className='finaltext'>
            <p>New to internshala?</p>
            <Link href="/Student/signup"><button>Register</button></Link>
            </div>
            </div>
            
        </div>

        <div className='student'>
            <div className='text'>
              <h1>Employer</h1>
            <form action="">
              <input type="email" placeholder='email' />
              <input type="password" placeholder='password' />
              <h4>Forgot password</h4>
              <input type="submit" value="Login"/>
            </form>
            <div className='finaltext'>
            <p>New to internshala?</p>
            <Link href="#"><button>Register</button></Link>
            </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default page