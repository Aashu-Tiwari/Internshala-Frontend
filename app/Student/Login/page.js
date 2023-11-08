"use client"
import React, { useEffect, useState } from 'react'
import '@/app/Student/Login/page.css'
import Link from 'next/link'
import Header from "@/pages/Header/page"
import { useDispatch, useSelector } from 'react-redux'
import { asynccurrentstudent, asyncsigninstudent } from '@/store/Actions/studentActions'
import { useRouter } from 'next/navigation'
import { iserror } from '@/store/Reducers/studentreducer'
import { isMuiElement } from '@mui/material'
import { toast } from 'react-toastify'

const page = (e) => {
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter()
  const {isAuthenticated} = useSelector((state)=>state.studentReducer)
  const {errors} = useSelector((state)=>state.studentReducer)
  const [error1, setError1] = useState(errors);

  // console.log(isAuthenticated)



  useEffect(()=>{
      if(isAuthenticated) router.push("/Student/auth")
  },[isAuthenticated])




  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
  
    setemail(event.target.value);
  };

  function isValidpassword(password) {
    return /^.{6,}$/.test(password);
  }

  const passwordHandler = event=>{
    if (!isValidpassword){
      setError1('password is invalid');
    } else {
      setError1(null);
    }
    setpassword(event.target.value);
  }




  const SigninHandler = (e)=>{
    e.preventDefault()
    const student = {
        // email:"ashutripat573@gmail.com",
        email:email,
        password:password,
    };
    dispatch(asyncsigninstudent(student));


    if (email.length==0){
      // errors[0]
      alert("Email is required")
    }
    if(password.length==0){
      alert("password is required")
      setError1(null)
    }
    if(!password==password){
      console.log("Not hit")
    }
    if(password==student.password){
      console.log("hit")
    }

    if(errors.length>2) {
      alert(errors)
    }
    console.log(student)
    console.log(email)
    console.log(password)
    console.log(errors)
}










  return (
    <div>
      <Header/>
      <div className='mainpage'>
        <div className='student'>
            <div className='text'>
              <h1>Student</h1>
            <form action="">
              <input type="email" value={email} placeholder='email' onChange={handleChange} />
              {error && <p style={{color: 'red'}}>{error}</p>}
              <input type="password" value={password} placeholder='password' onChange={passwordHandler} />
              {/* {errors && <p style={{color: 'red'}}>{errors[2]}</p>} */}
              {/* {errors?
              <p>{errors}</p>
              :""} */}
              <a href="/Student/forget"><h4>Forgot password</h4></a>
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