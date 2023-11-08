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

export const asyncupdateStudent = (student)=> async(dispatch,getState)=>{
    try{
        const {_id} = getState().studentReducer.student;
        const {data} = await axios.post("/student/update/"+_id,student);
        dispatch(asynccurrentstudent());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncavatarStudent = (avatar)=> async(dispatch,getState)=>{
    try{
        const {_id} = getState().studentReducer.student;
        const {data} = await axios.post("/student/avatar/"+_id,avatar);
        dispatch(asynccurrentstudent());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncresetpasswordStudent = (password)=> async(dispatch,getState)=>{
    try{
        const {_id} = getState().studentReducer.student;
        const {data} = await axios.post("/student/reset-password/"+_id,password);
        dispatch(asynccurrentstudent());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncforgetpasswordStudent = (email)=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student/send-mail/",email);
        dispatch(asynccurrentstudent());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}


export const asyncotppasswordStudent = (pwd)=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.get("/student/forget-link/",pwd);
        dispatch(asynccurrentstudent());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}