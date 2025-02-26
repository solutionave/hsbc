'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { CiCircleChevRight } from 'react-icons/ci'
import { FaAngleDown, FaAngleUp, FaMoneyCheckAlt } from 'react-icons/fa'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { IoArrowUpCircleOutline, IoDocumentOutline, IoPersonOutline } from 'react-icons/io5'
import { SiCashapp } from 'react-icons/si'
import { TbCreditCardPay } from 'react-icons/tb'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";
import { TbCashRegister } from "react-icons/tb";
import { FaPersonShelter } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import Footer from '@/components/Footer'
import NewsViews from '@/components/NewsViews'
import Career from '@/components/Career'
const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTransactions, setShowTransactions] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    }
    const handleOpenPdf = () => {
        window.open("/docs//612 09.09.2024 Bankbestätigung_Flatex_DM_1.pdf");
    };

    const notify = () => toast(
        <span>
            Please visit{" "}
            <a href="https://www.hsbc.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline px-1">
                HSBC
            </a>
        </span>, { autoClose: false }
    );
    useEffect(() => {
        notify()
    }, [])

    return (
        <div className='overflow-y-scroll'>
            {/* Navbar */}
            <div className="bg-white w-full py-5">
                <img src="/images/hsbc.png" className="lg:pl-32 pl-2 lg:h-10 w-auto" />
            </div>
            <div className="flex flex-col bg-[#3e515c] text-white w-full ">
                <div className='py-5'>
                    <div className='text-right px-2 lg:px-5 text-xs lg:text-medium'>
                        Last logged on 18/02/2025 at 1:24:26 PM
                    </div>
                    <div className='px-2 lg:px-20'>
                        <h1 className="text-3xl font-semibold pb-3"><Link href='/QuickLinks'> Good Morning </Link></h1>
                        <p>
                            You got <span className="underline">2 new messages.</span>
                        </p>
                    </div>
                </div>
                <div className='flex justify-end text-right px-2 lg:px-5'>
                    <button
                        className=' flex items-center text-white bg-[#374753] px-3 py-1 lg:px-7 lg:py-3 gap-2'
                        onClick={toggleContent}
                    >
                        Quick Links
                        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                </div>
            </div>
            <div>
                {isOpen && (
                    <div className='grid grid-cols-2 lg:grid-cols-7 bg-[#374753] py-8 text-white gap-5 text-center'>
                        <div className='col-span-1 flex flex-col items-center px-14 '>
                            <p className="pb-3">
                                <FaMoneyBillTransfer size={40} />
                            </p>
                            <button onClick={() => setShowTransactions(true)}>
                                Pay and Transfer
                            </button>
                        </div>
                        <div className='col-span-1 flex flex-col  items-center px-14 '>
                            <p className="pb-3">
                                <IoDocumentText size={40} />
                            </p>
                            <button onClick={handleOpenPdf}>eStatements</button>
                        </div>
                        <div className='col-span-1 flex flex-col items-center px-14 '>
                            <p className="pb-3">
                                <FaSackDollar size={40} />
                            </p>
                            <button onClick={() => setShowTransactions(false)}>Your investments</button>
                        </div>
                        <div className='col-span-1 flex flex-col items-center px-14'>
                            <p className="pb-3">
                                <IoMdGlobe size={40} />
                            </p>
                            <button onClick={() => setShowTransactions(false)}>Global Money Account</button>
                        </div>
                        <div className='col-span-1 flex flex-col  items-center px-14 '>
                            <p className="pb-3">
                                <TbCashRegister size={40} />
                            </p>
                            <button onClick={() => setShowTransactions(false)}>Apply for a personal Loan</button>
                        </div>
                        <div className='col-span-1 flex flex-col items-center px-14'>
                            <p className="pb-3">
                                <FaPersonShelter size={40} />
                            </p>
                            <button onClick={() => setShowTransactions(false)}>Apply for YourLife and YourCare</button>
                        </div>
                    </div>
                )}
            </div>
            <div className={`px-2 pb-10 lg:px-14 ${isOpen && '-mt-10'}`}>
                <div className="mt-6 bg-white p-2 w-full overflow-x-auto sm:overflow-x-auto md:overflow-x-auto scroll-smooth px-5 shadow-lg rounded-sm">
                    <div className="grid grid-cols-12 gap-4 text-gray-500 p-2 min-w-[1200px]">
                        <div className='col-span-3'>
                            <div className='lg:text-2xl font-semibold text-black'>CURRENT ACCOUNT</div>
                            <div className='text-gray-500'>143-054059-951</div>
                        </div>
                        <div className='col-span-6'>
                        </div>
                        <div className='flex justify-end col-span-3'>
                            <div className='flex flex-col text-end'>
                                <div className='flex justify-end items-center gap-2'>
                                    <p className='lg:text-xl font-semibold text-black'>445.11</p>
                                    <p className='text-gray-500'>EUR</p>
                                </div>
                                <div className='text-gray-500'>
                                    Available Balance: 491.79 EUR
                                </div>
                            </div>
                            <div className="px-2 -mt-8 h-full border-r border-gray-300"></div>
                            <div className='text-black'>
                                <HiOutlineDotsVertical size={30} />
                            </div>
                        </div>
                    </div>
                    {showTransactions ? (
                        <>
                            <div className="grid grid-cols-12 gap-4 text-gray-500 p-2 min-w-[1200px]">
                                <div className="col-span-2">13/02/2025</div>
                                <div className="col-span-2 text-end">TRANSFER</div>
                                <div className="col-span-6"></div>
                                <div className="flex justify-end col-span-2 px-10">-11,000.00</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 text-gray-500 p-2 min-w-[1200px]">
                                <div className="col-span-2">12/02/2025</div>
                                <div className="col-span-2 text-end">TRANSFER</div>
                                <div className="col-span-6"></div>
                                <div className="flex justify-end col-span-2 px-10">5,383.37</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 text-gray-500 p-2 min-w-[1200px]">
                                <div className="col-span-2">04/02/2025</div>
                                <div className="col-span-2 text-end">TRANSFER</div>
                                <div className="col-span-6"></div>
                                <div className="flex justify-end col-span-2 px-10">3,393.50</div>
                            </div>
                        </>
                    ) : (
                        <div className="col-span-3 py-3 text-black text-lg font-semibold ">No Investment Data Available</div>
                    )}
                </div>
            </div>
            <ToastContainer />
            
        </div>
    )
}

export default page