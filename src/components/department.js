import React from 'react'
import Departmentupper from './Departmentupper';
import Departmentmiddle from './Departmentmiddle';
import Departmentlower from './Departmentlower';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';


export const Department = () => {
  const [url,setUrl]=useState(useLocation());

  const dept=useParams()?.dept;
  const {data}=useFetch(`/dept/${dept}/messageofHOD`);
    const department =useFetch(`/dept/${dept}/description`)?.data;
  return (
    <div>
    <Departmentupper name={dept.toUpperCase()} introduction={department?.description}
 departmentimage={department?.img}/>
    <Departmentmiddle/>
    <Departmentlower name={data?.name} img= {data?.img} message={data?.message}/>
    </div>
  )
}


