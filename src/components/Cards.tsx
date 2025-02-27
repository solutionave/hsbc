import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Cards = () => {
    return (
        <div className='mb-10 px-5 lg:px-96'>
            {/* Card */}
            <div className="flex flex-col lg:flex-row justify-center gap-6">
                {/* First Card */}
                <div className="bg-white shadow-md">
                    <img
                        src="/images/annual.png"
                        alt="Annual Report 2024"
                        className="w-full object-cover "
                    />
                    <div className='pt-5 px-10 lg:px-24'>
                        <h1 className="font-thin text-xl lg:text-4xl py-2 lg:py-5">Annual Report 2024</h1>
                        <div className="mt-2 py-5 text-md lg:text-lg">
                            See our Annual Report and Accounts to get full details of our performance in 2024.
                        </div>
                        <div className="flex items-center gap-5 py-2 lg:py-5">
                            <p className='text-red-700'><FaChevronRight size={25} /></p>
                            <p className=' font-semibold text-md lg:text-lg'>Read the full report</p>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="bg-white shadow-md">
                    <img
                        src="/images/interim.png"
                        alt="Fourth Interim Dividend"
                        className="w-full object-cover"
                    />
                    <div className='pt-5 px-10 lg:px-24'>
                        <h1 className="font-thin text-xl lg:text-4xl py-2 lg:py-5">Fourth Interim Dividend</h1>
                        <div className="mt-2 py-5 text-md lg:text-lg">
                            We have announced a fourth interim dividend of 36 cents per share, making a total for 2024 of 87 US cents per share.
                        </div>
                        <div className="flex items-center gap-5 py-2 lg:py-5">
                            <p className='text-red-700'><FaChevronRight size={25} /></p>
                            <p className=' font-semibold text-md lg:text-lg'>Dividend information and timetable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards