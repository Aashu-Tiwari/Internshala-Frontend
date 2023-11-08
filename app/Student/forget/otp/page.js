"use client"

import { asyncotppasswordStudent } from '@/store/Actions/studentActions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const {errors} = useSelector(state=>state.studentReducer)
    const [password,setpassword] = useState();
    const [email,setemail] = useState();
    const [otp,setotp] = useState();
    const sendotpHandler = async (e)=>{
        e.preventDefault()
        const newpwd = {
            email:email,
            otp:otp,
            password :password,
        }
        await dispatch(asyncotppasswordStudent(newpwd))
        if (errors.length === 2){
            router.push("/Student/Login")
        }else{
            toast.error(JSON.stringify(errors));
            return
        }
    }



  return (


    <div className='p-4' style={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:"center",marginTop:'170px'}}>
        <h4 className='mb-4'>Change password</h4>
        <form style={{display:"flex",flexDirection:"column", width:'400px',gap:'20px'}}>
            <input required type="email" placeholder='Enter email again' onChange={(e)=>{setemail(e.target.value)}} />
            <input type="text" placeholder='Enter otp' onChange={(e)=>{setotp(e.target.value)}} />
            <input required type="text" placeholder='Create password' onChange={(e)=>{setpassword(e.target.value)}}/>
            <input onClick={sendotpHandler} className='btn btn-success' type="Submit" value="Change password " />
        </form>
    </div>
  )
}

export default page