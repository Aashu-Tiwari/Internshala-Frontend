"use client"
import { asyncsignupstudent } from '@/store/Actions/studentActions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';

const page = () => {
    const [firstname,setfirstname] = useState("");
    const [lastname,setlastname] = useState("");
    const [contact,setcontact] = useState("");
    const [city,setcity] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const[gender,setgender] = useState("")

    const dispatch = useDispatch();
    const router = useRouter()
    const {isAuthenticated} = useSelector((state)=>state.studentReducer)
    console.log(isAuthenticated)
    useEffect(()=>{
        if(isAuthenticated) router.push("/Student/auth")
    },[isAuthenticated])
    const Signuphandler = ()=>{
        const newStudent = {
            firstname:firstname,
            lastname:lastname,
            contact:contact,
            city:city,
            gender:gender,
            email:Email,
            password:Password
        };
        dispatch(asyncsignupstudent(newStudent));
    }
  return (
    // <div className='container mt-5 '>
    //     <button onClick={Signuphandler} className='btn-btn primary'>Signup</button>
    // </div>
    <div className='container' style={{display:"flex",alignItems:"center",justifyContent:"center", flexDirection:'column'}}>
        <h1 className='mt-3' style={{fontSize:"3rem",fontWeight:"800",fontFamily:"gilroy"}}>Sign-up and apply for free</h1>
        <div className='registerbox mt-3' style={{height:"580px",width:"400px",border:"2px solid skyblue", borderRadius:"20px",display:"flex",flexDirection:"column",}}>
            <form action="/Student/Login">
            <div className='one p-4' style={{display:'flex',flexDirection:"column"}}>
                <p style={{fontSize:'17px', fontFamily:"gilroy" ,fontWeight:"800",letterSpacing:'1px'}}>First name</p>
                <input style={{width:"100%",marginTop:"-15px" ,border:'1px solid black', borderRadius:"10px"}} type="text" placeholder='Firstname should have atleast 4 characters' onChange={(e)=>{setfirstname(e.target.value)}} />
            </div>

            <div className='one p-4' style={{display:'flex',flexDirection:"column", marginTop:"-35px"}}>
                <p style={{fontSize:'17px', fontFamily:"gilroy" ,fontWeight:"800",letterSpacing:'1px'}}>Last name</p>
                <input style={{width:"100%",marginTop:"-15px" ,border:'1px solid black', borderRadius:"10px"}} type="text" placeholder='Lastname should have atleast 4 characters' onChange={(e)=>{setlastname(e.target.value)}} />
            </div>

            <div className='one p-4' style={{display:'flex',flexDirection:"column", marginTop:"-35px"}}>
                <p style={{fontSize:'17px', fontFamily:"gilroy" ,fontWeight:"800",letterSpacing:'1px'}}>Contact</p>
                <input style={{width:"100%",marginTop:"-15px" ,border:'1px solid black', borderRadius:"10px"}} type="number" placeholder='Contact should have atleast 10 characters' onChange={(e)=>{setcontact(e.target.value)}} />
            </div>

            <div className='one p-4' style={{display:'flex',flexDirection:"column", marginTop:"-35px"}}>
                <p style={{fontSize:'17px', fontFamily:"gilroy" ,fontWeight:"800",letterSpacing:'1px'}}>City</p>
                <input style={{width:"100%",marginTop:"-15px" ,border:'1px solid black', borderRadius:"10px"}} type="text" placeholder='City should have atleast 3 characters' onChange={(e)=>{setcity(e.target.value)}} />
            </div>

            <div className='one p-4' style={{display:'flex',flexDirection:"column", marginTop:"-35px"}}>
                <p style={{fontSize:'17px', fontFamily:"gilroy" ,fontWeight:"800",letterSpacing:'1px'}}>Email</p>
                <input style={{width:"100%",marginTop:"-15px" ,border:'1px solid black', borderRadius:"10px"}} type="email" placeholder='Email is required!'onChange={(e)=>{setEmail(e.target.value)}} />
            </div>

            <div className='one p-4' style={{display:'flex',flexDirection:"column", marginTop:"-35px"}}>
                <p style={{fontSize:'17px', fontFamily:"gilroy" ,fontWeight:"800",letterSpacing:'1px'}}>Password</p>
                <input style={{width:"100%",marginTop:"-15px" ,border:'1px solid black', borderRadius:"10px"}} type="password" placeholder='Password should not exceed more than 15 characters'onChange={(e)=>{setPassword(e.target.value)}} />
            </div>

            <div className='one p-4' style={{display:'flex', alignItems:'center', marginTop:"-35px"}}>
                <p style={{fontSize:'17px', fontFamily:"gilroy" ,fontWeight:"800",letterSpacing:'1px'}}>Gender</p>
                <input style={{marginTop:"-12px",marginLeft:"20px"}} name='a' type="radio" value="Male" onChange={(e)=>{setgender(e.target.value)}}/>
                <label style={{marginTop:"-15px",marginLeft:'5px'}} for="Male">Male</label>
                <input style={{marginTop:"-12px",marginLeft:"20px"}} name='a' type="radio" value="Female" onChange={(e)=>{setgender(e.target.value)}}/>
                <label style={{marginTop:"-15px",marginLeft:'5px'}} for="Female">Female</label>
                <input style={{marginTop:"-12px",marginLeft:"20px"}} name='a' type="radio" value="Others" onChange={(e)=>{setgender(e.target.value)}}/>
                <label style={{marginTop:"-15px",marginLeft:'5px'}} for="Others">Others</label>
            </div>
                <input onClick={Signuphandler} style={{ marginTop:"-10px",width:"90%",height:"40px", marginLeft:'5%', backgroundColor:'#00A5EC',color:'white',fontFamily:"gilroy",fontWeight:"600",letterSpacing:"1px", borderRadius:'10px'}} type="submit" value="signup" />
            </form>
            <p style={{marginTop:"15px",marginLeft:"100px"}}>Already registered ? <Link href="/Student/Login">Login</Link></p>
        </div>
    </div>
  )
}

export default page