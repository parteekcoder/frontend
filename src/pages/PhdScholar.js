import {React,useState} from 'react'
import People from './People'
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
function PhdScholar() {
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);
    
    return (
        <People Title="Phd Scholars" Data={data}/>
    )
}

export default PhdScholar
