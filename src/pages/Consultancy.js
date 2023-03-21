import React from 'react'
import Table from './Table'

function Consultancy() {
    const tablehead = ['Sr. No', "Name of Faculty (Chief Consultant)", "Client Organization", "Title of Consultancy of Project", "Amount Received (in Rupees)","Amount Received (in words)"]
    const data = [{
        1:'1',
        2:'Dr. J.K. Ratan',
        3:'AB Sugar Limited',
        4:'Studies on treatment technology of ground water of AB sugar limited',
        5:'100000',
        6:'One Lac Rupees'
    }]
    
    return (
        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] tracking-wider shadow-lg rounded-3xl text-2xl'>Consultancy</div>
            <Table tablehead={tablehead} data={data}/>
        </div>
    )
}

export default Consultancy
