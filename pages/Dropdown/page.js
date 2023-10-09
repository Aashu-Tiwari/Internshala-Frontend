"use client"
import React, { useEffect, useState } from "react";
import "@/pages/Dropdown/page.css"
import { useDispatch } from "react-redux";
import axios from '@/utils/axios'
// import { asynccurrentstudent } from "@/store/Actions/studentActions";
import { addstudent,removestudent,iserror,removeerror } from "@/store/Reducers/studentreducer"
import Link from "next/link";


const DropdownMenu = () => {
  const [user,setuser] = useState("")
  const dispatch = useDispatch()

  const User = async()=>{
    const {data} = await axios.post("/student");
      setuser(data)
      console.log(data)
  }

  const SignoutHandler = ()=>{
    dispatch(asyncsignoutstudent())
  }
  console.log(user.student)

  useEffect(()=>{
    User()
  },[])

  console.log(user.student)

  return (
    <div>
      <ul className="mainul">
        <h6>email</h6>
        <hr  style={{marginLeft:'-30px'}}/>
        <a href="/Student/auth"><li>Home</li></a>
        <li>Edit resume</li>
        <li>Change password</li>
        <li>Change Email address</li>
        <a href="/Student/profile"><li>Update profile</li></a>
        <li>Delete my account</li>
        <a href="/"><li onClick={SignoutHandler}>Logout</li></a>
      </ul>
    </div>
  );
};

export default DropdownMenu;