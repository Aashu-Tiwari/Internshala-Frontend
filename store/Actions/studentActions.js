import axios from '@/utils/axios'
import { addstudent,removestudent,iserror,removeerror } from "../Reducers/studentreducer"

export const asynccurrentstudent = ()=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student");
        dispatch(addstudent(data.student));
        console.log(data)
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncsignupstudent = (student)=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student/signup",student);
        asynccurrentstudent()
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncsigninstudent = (student)=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student/signin",student);
        asynccurrentstudent()
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncsignoutstudent = (student)=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.get("/student/signout");
        dispatch(removestudent());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}