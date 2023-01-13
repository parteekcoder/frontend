import React from 'react'
import { Department } from '../components/department'
import Imagesroll from '../components/Imagesroll'
import TopPlacement from '../components/TopPlacement'

function Homepage() {
  return (
    <div className='flex items-center flex-col w-full h-full px-auto mt-8 sm:mt-0'>
        <Imagesroll/>
        <Department/>
        <TopPlacement/>
    </div>
  )
}

export default Homepage