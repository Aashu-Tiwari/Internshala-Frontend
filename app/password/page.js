"use client"
import { asynccurrentstudent, asyncresetpasswordStudent } from '@/store/Actions/studentActions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const dispatch = useDispatch();
    const {student} = useSelector((state)=>state.studentReducer)
    const [newpsswrd,setnewpsswrd] = useState();
    const [newpsswrd1,setnewpsswrd1] = useState();

    const ResetpasswordHandler =()=>{
        const pwd = {
            password:newpsswrd,
            confirmpassword:newpsswrd1
        }


        {newpsswrd===newpsswrd1?
            dispatch(asyncresetpasswordStudent(pwd))
        :alert("Wrong Credentials")}

        
    }


    useEffect(()=>{
        dispatch(asynccurrentstudent(student));
    },[])


  return (


    <div>
        <h2 className='p-4' style={{color:'red'}}>Reset Password</h2>
        <form className='p-3' style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            <input required style={{width:"350px"}} type="password" placeholder='Enter password' onChange={(e)=>{setnewpsswrd(e.target.value)}} />
            <input required style={{width:"350px"}} type="password" placeholder='Confirm password' onChange={(e)=>{setnewpsswrd1(e.target.value)}} />
            <input onClick={ResetpasswordHandler} style={{width:"350px",color:"red"}}  type="Submit" value="Reset password" />

        </form>
    </div>
  )
}

export default page