import React from 'react'
import Departmentupper from './Departmentupper';
import Departmentmiddle from './Departmentmiddle';
import Departmentlower from './Departmentlower';
import { useLocation } from 'react-router-dom';


export const Department = () => {
  const dept=useLocation().pathname.split('/')[1];
  return (
    <div>
    <Departmentupper name={dept.toUpperCase()} introduction="Located in Jalandhar district of Punjab, NIT Jalandhar enjoys a really scenic environment 
and pleasant weather. Established in the year 1987, as REC Jalandhar, NIT Jalandhar has been 
declared as the Institute of National Importance under the Act of Parliament, 2007. Established
in 1990 as the Department of Computer Science & Engineering, we have an excellent & rich history
and an outstanding record of contributions to the profession and community."
 departmentimage='https://www.nitj.ac.in/cse/images/carousel/001_1.jpeg'/>
    <Departmentmiddle/>
    <Departmentlower nameofhod="~Dr Geeta Sikka" hod='https://www.nitj.ac.in/images/faculty/20071962443.jpg' name="CSE"/>
    </div>
  )
}


