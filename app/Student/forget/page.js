"use client"
import { asyncforgetpasswordStudent } from '@/store/Actions/studentActions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const page = () => {
    const router = useRouter();
    const {errors} =  useSelector(state=>state.studentReducer)
    const [email1,setemail1] = useState();
    const dispatch = useDispatch()

    const sendmailHandler = async(e)=>{
        e.preventDefault()
        const email = {
            email:email1
        }
        await dispatch(asyncforgetpasswordStudent(email))
        if (errors.length === 2){
            router.push("/Student/forget/otp")
        }else{
            toast.error(JSON.stringify(errors));
            return
        }
        
    }




  return (
    <div style={{display:'flex',flexDirection:"column",alignItems:"center",marginTop:"100px",width:'400px',marginLeft:'37%'}} >
        <h4>Forgot password</h4>
        <p className='mt-3'>Please enter your e-mail address. You will receive an e-mail along with a link which can be used to reset your password.</p>
        <div className='mt-4' style={{display:"flex",flexDirection:"column",}}>
            <p>Email</p>
            <form>
            <input required style={{width:"400px"}} type="email" placeholder='Enter Email' onChange={(e)=>{setemail1(e.target.value)}} />
            <input className='btn btn-success w-100 mt-4' onClick={sendmailHandler} type="Submit" placeholder='Verify email' value="Verify Email" />
            </form>
            {/* <button onClick={sendmailHandler} className="btn btn-success mt-5">Verify Email</button> */}
        </div>
    </div>
  )
}

export default page