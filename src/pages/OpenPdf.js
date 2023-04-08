import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom';
// import pdf from '../components/Pdf/syllabus.pdf'
function OpenPdf({link}) {

  return (
    <div className='w-[98%] flex items-center justify-center mx-auto mt-2'>
      {/* <a href={link+'?preview=1'} data-previewable="1">Link</a> */}
      <iframe src={link} style={{height:"70vh", width:"100%"}} frameborder="0"></iframe>
    </div>
  )
}

export default OpenPdf
