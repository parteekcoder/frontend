
import React from 'react'
const Card = ({ title, body }) => {
    return (
        <div className="max-w-md py-4 px-7 mx-1 border bg-white shadow-lg rounded-lg mt-16 mb-6">
            <div class="w-32 h-32 flex-grow-0 flex-shrink-0 justify-center md:justify-end -mt-20 mb-1 ml-auto mr-0">
                <img src="https://qph.cf2.quoracdn.net/main-qimg-d0139b5cabcff7d5adad435605016120-lq" class="w-full h-full object-cover object-center rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='...' />
            </div>
            <div>
                <h2 className="text-gray-800 text-2xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-600">{body}</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href="/" className="text-xl font-medium text-indigo-500">Read More &rarr;</a>
            </div>
        </div>
    )
}

export default Card