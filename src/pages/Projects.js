import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'

function Projects() {
    const tablehead = ['Sr. No', "Project Title", "Year of sanction", "Funding Agency", "Sanction Amount(Rs. In lac)"]
    const data = [{
        1:'1',
        2:'Information Security Education and Awareness Project-II',
        3:'2015-16',
        4:'PMU C-DAC Hyderabad',
        5:'36.00'
    }]
    
    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Projects" />
            <Table tablehead={tablehead} data={data}/>
        </div>
    )
}

export default Projects
