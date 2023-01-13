import {React,useState} from 'react'
import { useLocation } from 'react-router-dom'
import People from './People'
import useFetch from '../hooks/useFetch';
function Staff() {
    
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);
    return (
        <People Title="Staff" Data={data}/>
    )
}

export default Staff
