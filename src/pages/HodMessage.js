import React from 'react'
import { useEffect } from 'react'
function HodMessage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div class="main-body flex flex-col gap-8 lg:gap-12 mt-28 mb-24" style={{fontFamily:"Poppins"}}>
      <div class="flex flex-col sm:flex-row px-4 md:px-[11%] gap-[32px] md:gap-[64px]">
        <div class="sm:basis-1/3 flex items-center">
          <img src="https://www.nitj.ac.in/images/faculty/20071962443.jpg" alt="" className='rounded-tl-3xl rounded-br-3xl border-2 border-gray-300 shadow-lg shadow-slate-400 max-h-56 sm:max-h-full'/>
        </div>
        <div class="sm:basis-2/3">
          <div class="flex flex-col items-start">
            <p class="font2 font-semibold text-[26px] lg:text-[40px] leading-[1.3] uppercase mb-2">Dr. Geeta Sikha</p>
            <p class="text-gray-400 text-[12px] lg:text-[16px]">HOD, Dr. B R Ambedkar National Institute of
              Technology, Jalandhar</p>
            <div class="bg-accent bg-teal-600 w-[100%] h-[3px] mb-4 mt-2"></div>
            <div class="w-[100%] flex flex-col gap-[4px]">
              <div class="flex flex-row">
                <p class="basis-3/12 md:basis-[15%] text-justify font-semibold">Email</p>
                <p class="">: &nbsp; &nbsp;</p>
                <p>director@nitj.ac.in</p>
              </div>
              <div class="flex flex-row">
                <p class="basis-3/12 md:basis-[15%] font-semibold">Tel No.</p>
                <p class="">: &nbsp; &nbsp;</p>
                <p>+91-181-2690802 (O)</p>
              </div>
              <div class="flex flex-row">
                <p class="basis-3/12 md:basis-[15%] font-semibold text-justify">EPABX</p>
                <p class="">: &nbsp; &nbsp;</p>
                <p> +91-181-2690301,2690453</p>
              </div>
              <div class="flex flex-row">
                <p class="basis-3/12 md:basis-[15%] font-semibold">Extn.</p>
                <p class="">: &nbsp; &nbsp;</p>
                <p>1000 (O), 1002 (PA)</p>
              </div>
              <div class="flex flex-row">
                <p class="basis-3/12 md:basis-[15%] font-semibold">Fax</p>
                <p class="">: &nbsp; &nbsp;</p>
                <p>+91-181-2690932</p>
              </div>
            </div>
            <div class="mt-4 lg:mt-8">
              <a class="hover:bg-black hover:shadow-lg px-4 py-2 border-2 text-accent hover:text-white transition ease-in-out duration-300" href="profile/0">View profile →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start px-4 lg:px-[4%] gap-[20px] lg:gap-[48px]">
        <div class="w-full flex flex-col items-start">
          <p class="font2 font-medium text-[28px] lg:text-[44px]">Message </p>
          <div class="bg-accent bg-teal-600 w-full lg:w-[111px] h-[1px] lg:h-[5px]"></div>
        </div>
        <p class="text-gray-800 lg:text-lg lg:leading-[30px] text-justify">
              It is a privilege to lead Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar,
              one of the national accolades and an outstanding institution of higher learning. NIT Jalandhar
              is ranked 49th in the National Institutional Ranking Framework (NIRF), Band-Excellent in the
              Atal   Ranking of Institutions on Innovation Achievements (ARIIA), and was recently ranked in
              the 401-500 range  in the Times Higher Education (THE) Emerging Economies University
              Rankings 2022.
          <br /> <br />
          Wish you all the best.
          <br /> <br />
          <span class="font-semibold">Prof. Geeta Sikha</span>
        </p>
      </div>

    </div>
  )
}

export default HodMessage