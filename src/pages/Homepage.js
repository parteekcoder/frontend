import React, {useEffect} from 'react'
import {useCookies} from "react-cookie";
import {useParams} from 'react-router-dom';
import { Department } from '../components/department'
import Imagesroll from '../components/Imagesroll'
import TopPlacement from '../components/TopPlacement'

function Homepage() {
  const params = useParams();
  const [cookies, setCookie, removeCookie] = useCookies(['session']);

  useEffect(() => {
    const sessionID = params?.id;
  
    if(sessionID != null){
      setCookie('session', sessionID, {maxAge: 90*24*60*60*100, path: '/'});
    }
  }, [])
  
  return (
    <div className='flex items-center flex-col w-full h-full px-auto mt-0'>
        <Imagesroll/>
        <Department/>
        <TopPlacement/>
    </div>
  )
}

export default Homepage