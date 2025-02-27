'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className='hidden lg:block'>
        <div className="flex justify-between items-center bg-white px-40 py-3 shadow-md">
          {/* First div: Image */}
          <div className=" py-5">
            <img src="/images/hsbc.png" className="lg:h-8 w-auto" />
          </div>

          {/* Second div: Four Names */}
          <div className="flex text-center gap-5">
            <button className="text-lg font-thin ">Who we are</button>
            <button className="text-lg font-thin ">Investors</button>
            <button className="text-lg font-thin ">News and views</button>
            <button className="text-lg font-thin ">Careers</button>
          </div>

          {/* Third div: Three Names with a Line */}
          <div className="flex  items-center gap-3">
            <button className="text-lg font-semibold"><Link href="/Login">Online banking</Link ></button>
            <div className="h-10 border-r-2 mx-2 border-gray-100"></div>
            <button className="text-lgflex items-center font-semibold">Contact</button>
            <div className="h-10 border-r-2 mx-2 border-gray-100"></div>
            <button className="text-lg font-semibold"><IoIosSearch size={25} /></button>
          </div>
        </div>
      </div>

      <div className='lg:hidden bg-white py-1'>
        <div className='flex justify-between itens-center px-5'>
          <div className='flex items-center'>
            <button
              className=""
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
            </button>
            {menuOpen && (
              <ul className="fixed inset-0 top-16 bg-[#2c2a2b] -mt-3 text-white text-xl px-5 space-y-4 py-10 md:hidden z-50">
                <li className="p-4 flex justify-between border-b border-gray-100">
                  <p>Who We Are</p>
                  <p><FaChevronRight /></p>
                </li>
                <li className="p-4 flex justify-between border-b border-gray-100">
                  <p>Investors</p>
                  <p><FaChevronRight /></p>
                </li>
                <li className="p-4 flex justify-between border-b border-gray-100">
                  <p>News and Views</p>
                  <p><FaChevronRight /></p>
                </li>
                <li className="p-4 flex justify-between border-b border-gray-100">
                  <p>Careers</p>
                  <p><FaChevronRight /></p>
                </li>
                <li className="p-4 border-b border-gray-100"><Link href="/Login">Online Banking</Link></li>
                <li className="p-4 border-b border-gray-100">Contact</li>
              </ul>
            )}
          </div>
          <div>
            <img src="/images/hsbc.png" className="lg:h-8 w-auto" />
          </div>
          <div className='flex items-center'>
            <button className=""><IoIosSearch size={25} /></button>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Header