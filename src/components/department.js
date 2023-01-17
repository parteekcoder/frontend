import React from 'react'
import Departmentupper from './Departmentupper';
import Departmentmiddle from './Departmentmiddle';
import Departmentlower from './Departmentlower';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';


export const Department = () => {
  const [url,setUrl]=useState(useLocation());
  const dept=url.pathname.split('/')[2];
  const {data,loading,error,reFetch}=useFetch(`/dept/${dept}/messageofHOD`);
  
  return (
    <div>
    <Departmentupper name={dept.toUpperCase()} introduction="Located in Jalandhar district of Punjab, NIT Jalandhar enjoys a really scenic environment 
and pleasant weather. Established in the year 1987, as REC Jalandhar, NIT Jalandhar has been 
declared as the Institute of National Importance under the Act of Parliament, 2007. Established
in 1990 as the Department of Computer Science & Engineering, we have an excellent & rich history
and an outstanding record of contributions to the profession and community."
 departmentimage='https://www.nitj.ac.in/cse/images/carousel/001_1.jpeg'/>
    <Departmentmiddle/>
    <Departmentlower name={data?.name} img= {data?.img} message={data?.message}/>
    </div>
  )
}


