import React from 'react'
import Table from './Table'

function Publications() {
    const tablehead = ['Document title', "Authors", "Year", "Source", "Cited  by"]
    const data = [{
        1:'Pretreatments of natural fibers and their application as reinforcing material in polymer composites-a review',
        2:'Kalia, S., Kaith, B.S., Kaur, I.',
        3:'2009',
        4:'Polymer Engineering and Science 49(7), pp. 1253-1272',
        5:'999'
    }
]
    return (
        <div className='w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[60px] pt-[54px] place-items-center'>
            <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] tracking-wider shadow-lg rounded-3xl text-2xl'>Publications</div>
            <Table tablehead={tablehead} data={data}/>
        </div>
    )
}

export default Publications
