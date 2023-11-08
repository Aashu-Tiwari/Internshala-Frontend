"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { asyncavatarStudent, asynccurrentstudent,asyncsignoutstudent,asyncupdateStudent} from "@/store/Actions/studentActions";
import { addstudent } from "@/store/Reducers/studentreducer"
import axios from '@/utils/axios'
import { data } from 'autoprefixer'
import Link from 'next/link'


const page = () => {

  const [user,setuser] = useState("");
  const {student} = useSelector((state)=>state.studentReducer)
  const {avatar} = useSelector((state)=>state.studentReducer)

  const dispatch = useDispatch()
  const [firstname,setfirstname] = useState("");
  const [lastname,setlastname] = useState("");
  const [contact,setcontact] = useState("");
  const [city,setcity] = useState("");
  const [Email,setEmail] = useState("");
  const[gender,setgender] = useState("")


  const Updatehandler = (e)=>{
    // e.preventDefault()
    const UpdatedStudent = {
        firstname:firstname,
        lastname:lastname,
        contact:contact,
        city:city,
        gender:gender,
        email:Email
    };
    dispatch(asyncupdateStudent(UpdatedStudent));
    if(firstname.length<0){
      alert("Cannot set Firstname empty")
    }

    alert("Profile updated successfully")

}


  const User = async()=>{
    const {data} = await axios.post("/student");
      setuser(data)
      console.log(data)
  }


  useEffect(()=>{
    dispatch(asynccurrentstudent(student));
    User()
  },[])

  console.log(avatar && student.avatar.url)

  const AvatarHandler = (e)=>{
    e.preventDefault()
    console.log()
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0])
    // for(const[key,value] of formdata){
    //   console.log(`${key}:${value}`)
    // }
    dispatch(asyncavatarStudent(formdata));

  }

  return (
    <div>
      <div >
        <h1 className='container mb-5 mt-5 ' style={{marginLeft:"650px"}}>Update Profile</h1>
        <div style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
          <img className='mb-3' style={{height:"180px", width:"180px",borderRadius:"50%",border:"2px solid black"}} src={avatar && student.avatar.url} alt=""/>
        </div>
        <div className='container' style={{position:"absolute",display:"flex",flexDirection:'column',gap:"20px",marginLeft:"100px"}}>
          <form onSubmit={AvatarHandler} encType="multipart/form-data">
            <input type="file" name='avatar'/>
            <button>Submit</button>
          </form>
          <input autoComplete='off' defaultValue={student.firstname}  type="text" placeholder='firstname' onChange={(e)=>{setfirstname(e.target.value)}}/>
          <input defaultValue={student.lastname} type="text" placeholder='lastname' onChange={(e)=>{setlastname(e.target.value)}}/>
          <input defaultValue={student.contact} type="number" placeholder='contact' onChange={(e)=>{setcontact(e.target.value)}}/>
          <input defaultValue={student.city} type="text" placeholder='city' onChange={(e)=>{setcity(e.target.value)}}/>
          <div className='one p-4' style={{display:'flex', alignItems:'center',marginTop:"-20px",marginLeft:"-20px" }}>
                <p style={{fontSize:'17px', fontFamily:"gilroy" ,fontWeight:"800",letterSpacing:'1px'}}>Gender</p>
                <input style={{marginTop:"-12px",marginLeft:"20px"}} name='a' type="radio" value="Male" onChange={(e)=>{setgender(e.target.value)}}/>
                <label style={{marginTop:"-15px",marginLeft:'5px'}} for="Male">Male</label>
                <input style={{marginTop:"-12px",marginLeft:"20px"}} name='a' type="radio" value="Female" onChange={(e)=>{setgender(e.target.value)}}/>
                <label style={{marginTop:"-15px",marginLeft:'5px'}} for="Female">Female</label>
                <input style={{marginTop:"-12px",marginLeft:"20px"}} name='a' type="radio" value="Others" onChange={(e)=>{setgender(e.target.value)}}/>
                <label style={{marginTop:"-15px",marginLeft:'5px'}} for="Others">Others</label>
            </div>
            <input defaultValue={student.email} style={{marginTop:"-40px"}} type="email" placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input onClick={Updatehandler} style={{width:"200px",backgroundColor:"green",color:"white",height:"40px"}} type="submit" value="Update Profile" />            
        </div>

        <Link href="/Student/auth"><button style={{position:"absolute",bottom:"40px",left:"400px",backgroundColor:"red",color:"white",height:"40px"}}>Cancel</button></Link>
        <div>
        </div>
      </div>
    </div>
  )
}

export default page