import {React,useState} from 'react'
import useFetch from '../hooks/useFetch'
import People from './People'
import { useLocation } from 'react-router-dom';
function Students() {
  
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);

    return (
        <People Title="Students" Data={data}/>
    )
}

export default Students
