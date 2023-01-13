import{ React,useState} from 'react'
import gif from "./Vedio/New.gif";
import {useLocation} from 'react-router-dom';
import useFetch from '../hooks/useFetch.js'
// import { useNavigate } from 'react-router-dom'


// const News = ['Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
//     'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
//     ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
//     'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
//     'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
//     'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

// const Activity = ['Website Launch by Mr. Ravneet Kotwal, (Director of Sales and Marketing, Texas Instruments, India.) ',
//     'Short Term Courseon Low Power VLSI Design for Communication systems and Networks', 'Congratulations to Yogita, B. Tech Final year, ECE Department for getting placed at Atlassian at a whopping CTC of 52LPA through an off-campus drive.',
//     'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
//     ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
//     'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
//     "Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022) ",
//     'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

// const highlights = ['Applications are Invited for the ', 'Selected Candidates for PhD', 'Online GIAN Course on "Nonwoven Technology and Recent Developments" ',
//     '(June 20 - 24, 2022)Note: The Last Date for Registration has been extended upto 18th June, 2022', 'Self Sponsored Three Days Workshop on "Molecular Dynamics Simulation & Analysis" (August 05 - 07, 2022) ',
//     'Online Short Term Course on “Research Trends in Communication and Signal Processing” (December 20-24, 2021)',
//     ' Dr Sukwinder Singh registered a start-up “RFvis Technologies”under TBI at NITJ (March, 2022)',
//     'Research Article Tulika Chawla, Mamta Khosla and Balwinder Raj, “Extended Gate to source overlap Heterojunction Vertical TFET: Design, analysis and optimization with process parameter variations” got published in “Materials Science in Semiconductor Processing”, vol.145, 2022. ( SCI, Impact Factor 3.927)',
//     'Congratulations to Prof. Binod Kumar Kanaujia for getting research funding for R&amp;D project “Design and Development of Biologically Inspired Retinal Prosthesis Based Biomedical Implant to Restore Vision to the Blind” worth Rs. 23.28 Lacs under the Empowerment and Equity Opportunities for Excellence in Science Grant Scheme of SERB, Government of India (March, 2022)',
//     'Kirandeep Kaur Sahota (Batch 2017 passed out) brought glory and pride to the institute and department of ECE by securing AIR-331 in UPSC Civil Service Examination, 2020'];

const Departmentmiddle = () => {

    const [url,setUrl]=useState(useLocation());
    const Activity=useFetch(`Activity`).data;
    const News=useFetch(`News`).data;
    return (
        <>
            <div className='flex flex-col overflow-hidden md:flex-row'>

                {/* Activity  */}
                <div className='max-w-full h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] py-3 px-0 mx-3 my-[36px] pt-[54px]'>
                    <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[410] tracking-wide leading-8 text-[#fff] shadow-lg rounded-3xl text-2xl mx-3'>Activities</div>
                    <div className='scrollbar max-w-full block h-80 overflow-y-auto px-3'>
                        {
                          Activity?Activity.map((n, i) =>
                                <div key={i} className='flex p-2 m-2'>
                                    <li className='list-[circle] list-inside w-4 h-4'></li>
                                    <a href={`${n.link}`} className={"flex items-end mx-1 border-b pb-2 text-justify sm:text-[16px] leading-tight tracking-wide text-gray-900 font-sans hover:font-serif hover:text-[rgba(0,105,140,1)] text-opacity-100 "}>{n.title} <img src={gif} alt='...' className='border-0 align-middle' /></a>
                                </div>
                            ):<h1>Data not Available</h1>
                        }
                    </div>
                </div>
                <div className='max-w-full h-96 rounded-[9px] border border-[rgba(0,105,140,0.2)] py-3 mx-3 my-[36px] pt-[54px]'>
                    <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[410] tracking-wide leading-8 text-[#fff] shadow-lg rounded-3xl text-2xl mx-3'>News & Highlights</div>
                    <div className='scrollbar max-w-full block h-80 overflow-y-auto px-3'>
                        {
                           News?News.map((n, i) =>
                                <div key={i} className='flex p-2 m-2'>
                                    <li className='list-[circle] list-inside w-4 h-4'></li>
                                    <a href={`${n.link}`} className={"flex items-end mx-1 border-b pb-2 text-justify sm:text-[16px] leading-tight tracking-wide text-gray-900 font-sans hover:font-serif hover:text-[rgba(0,105,140,1)] text-opacity-100 "}>{n.title} <img src={gif} alt='...' className='border-0 align-middle' /></a>
                                </div>
                            ):<h1>Data not available</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Departmentmiddle