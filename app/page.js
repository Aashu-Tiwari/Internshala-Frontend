"use client"
import React, { useEffect } from 'react'
import Header from "@/pages/Header/page"
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
// import { asynccurrentstudent } from '@/store/Actions/studentActions'
// import { useDispatch } from 'react-redux'


// export const metadata = {
//   title: 'Homepage',
// }
const page = () => {
  const router = useRouter();
  const {isAuthenticated} = useSelector((state)=>state.studentReducer)
  console.log(isAuthenticated)
  useEffect(()=>{
      if(isAuthenticated) {router.push("/Student/auth")}
  },[isAuthenticated])
  console.log(isAuthenticated)
  return (
    <div>
      <Header/>
    </div>
  )
}

export default page;