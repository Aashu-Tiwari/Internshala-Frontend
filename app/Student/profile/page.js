"use client"
import React from 'react'

const page = () => {
    const StudentUpdatehandler = ()=>{
        const newStudent = {
            firstname:firstname,
            lastname:lastname,
            contact:contact,
            city:city,
            gender:gender,
            email:Email,
        };
        dispatch(asyncsignupstudent(newStudent));
    }
  return (
    <div>
        <button>Update profile</button>
    </div>
  )
}

export default page