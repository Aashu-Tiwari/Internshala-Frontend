"use client"
import React, { useEffect, useState } from "react";
import "@/pages/Dropdown/page.css"
import { useDispatch, useSelector } from "react-redux";
import axios from '@/utils/axios'
import { asynccurrentstudent,asyncsignoutstudent } from "@/store/Actions/studentActions";
import { addstudent,removestudent,iserror,removeerror } from "@/store/Reducers/studentreducer"
import Link from "next/link";
import { useRouter } from "next/router";



const DropdownMenu = () => {
  const [user,setuser] = useState("")
  const {student} = useSelector((state)=>state.studentReducer)
  const {isAuthenticated} = useSelector((state)=>state.studentReducer)
  const dispatch = useDispatch()
  
  const User = async()=>{
    const {data} = await axios.post("/student");
      setuser(data)
  }

  const SignoutHandler = ()=>{
    dispatch(asyncsignoutstudent())
  }

  console.log(student.email)


  // useEffect(()=>{
  //   // User()
  //   SignoutHandler()
  // },[student])

  return (
    <div>
      <ul className="mainul">
        <h2 className="mt-3" >{student.firstname}</h2>
        <h2>{student.email}</h2>
        <hr  style={{marginLeft:'-30px'}}/>
        <a href="/Student/auth"><li>Home</li></a>
        <a href="/profile"><li>profile</li></a>
        <li>Edit resume</li>
        <a href={isAuthenticated?"/password":"Student/auth"}><li>Change password</li></a>
        <li>Change Email address</li>
        <li>Delete my account</li>
        <a href="/"><li onClick={SignoutHandler}>Logout</li></a>
      </ul>
    </div>
  );
};

export default DropdownMenu;