import React from 'react'
// import pdf from '../components/Pdf/syllabus.pdf'
function OpenPdf({link}) {
  return (
    <div className='w-full flex items-center justify-center mx-auto mt-2'>
      <iframe src={link} frameborder="0" height="1000px" width="99%"></iframe>
    </div>
  )
}

export default OpenPdf
