import React from 'react'
import Table from './Table'
import Heading from '../components/Heading'

function Publications() {
    const tablehead = ['Document title', "Authors", "Year", "Source", "Cited  by"]
    const data = [{
        1: 'Pretreatments of natural fibers and their application as reinforcing material in polymer composites-a review',
        2: 'Kalia, S., Kaith, B.S., Kaur, I.',
        3: '2009',
        4: 'Polymer Engineering and Science 49(7), pp. 1253-1272',
        5: '999'
    }
    ]
    return (
        <div className='w-[98%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <Heading name="Publications" />
            <Table tablehead={tablehead} data={data} />
        </div>
    )
}

export default Publications
