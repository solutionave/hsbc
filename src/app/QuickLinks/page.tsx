"use client";
import React, { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { MdQuestionMark } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const Quicklinks = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex lg:justify-between lg:items-center bg-white w-full py-5 shadow-sm gap-5">
        <div>
          <img src="/images/hsbc.png" className="pl-2 h-10 w-auto" />
        </div>
        <div className="flex justify-between lg:gap-5 lg:px-5">
          <div className="font-bold text-xs lg:text-xl px-1">
            Online <p>Banking</p>
          </div>
          <div className="w-[1px] h-10 bg-gray-300"></div>
          <div className="px-1">
            <p className="font-bold lg:text-xl text-xs">Investment Dashboard</p>
            <p className="text-gray-500 text-xs lg:text-base">
              Assets and Efficiency
            </p>
          </div>
          <div className="w-[2px] h-10 bg-gray-300"></div>
          <div className="px-1">
            <p className="font-bold text-xs lg:text-xl">HSBC Global Trader</p>
            <p className="text-gray-500 text-xs lg:text-base">
              Secure authentication required for trading
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <div className="mt-6 bg-white p-2 w-full overflow-x-auto sm:overflow-x-auto md:overflow-x-auto scroll-smooth px-5 rounded-sm scroll-hidden">
            <div className="grid grid-cols-12 gap-4 text-gray-500 p-2 min-w-[1200px]">
              <div className="col-span-2">
                <div className="lg:text-2xl font-bold text-black">
                  My holdings
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 text-gray-500 px-2 min-w-[1200px] rounded-sm">
              <div className="col-span-2 bg-gray-300 py-2 text-black text-center border-t border-red-700 cursor-pointer">
                My Portfolio
              </div>
              <div className="col-span-2 bg-gray-300 py-2 text-black text-center cursor-pointer">
                My Holdings
              </div>
              <div className="col-span-2 bg-gray-300 py-2 text-black text-center cursor-pointer">
                My Account
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 text-gray-500 px-2 min-w-[1200px] rounded-sm"></div>
            <div className="grid grid-cols-12 gap-4 justify between text-gray-500 p-2 min-w-[1200px] rounded-sm">
              <div className="col-span-3 flex py-2 text-black text-center bg-pink-4000">
                <p>Net Worth</p>
                <p className="font-semibold px-2">EUR 441.18</p>
              </div>
              <div className="col-span-6"></div>
              <div className="col-span-3 py-2 text-black flex justify-end">
                <p className="text-xs text-end px-2 italic">
                  Updated On: 28 Feb 2025, 16:32{" "}
                  <p>
                    {"("}Delayed Data{")"}*
                  </p>
                </p>
                <button className="py-2 px-4 border border-gray-300 bg-white font-medium">
                  Refresh
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 justify between text-gray-500 p-2 min-w-[1200px] rounded-sm gap-10">
              <div className="col-span-6 flex items-center py-2 text-black text-center gap-4">
                <p className="font-semibold lg:text-lg">Customize View: </p>
                <div className="p-2 border-gray-300 border-2 bg-white font-medium text-start">
                  <div>
                    <div className="flex items-center font-semibold lg:text-lg gap-5">
                      ACCOUNTS{" "}
                      <p className="text-red-500">
                        <FaAngleDown />
                      </p>
                    </div>
                    <p className="font-serif">All Client</p>
                  </div>
                </div>
                <div className="p-2 border-gray-300 border-2 bg-white font-medium text-start">
                  <div>
                    <div className="flex items-center font-semibold lg:text-lg gap-5">
                      View Assets In:{" "}
                      <p className="text-red-500">
                        <FaAngleDown />
                      </p>
                    </div>
                    <p className="font-serif">Stated Currency</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6"></div>
            </div>
            <div className="grid grid-cols-8 text-white bg-[#171e23] px-2 py-3 min-w-[1200px] rounded-sm gap-10">
              <div className="col-span-2 flex justify-center items-center gap-4">
                <div>
                  <div className="font-bold text-xl">Trust Funds</div>
                  <div className="flex text-gray-300">
                    <p>View Full Details</p>
                    <div className="w-[1px] h-5 bg-gray-300 mx-1"></div>
                    <p>Hide Details</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex justify-end gap-4">
                <div className="font-semibold flex text-xs gap-1">
                  <p>*INITIAL COST</p>
                  <div className="flex justify-center bg-gray-300 rounded-full text-xl w-6 h-6 mt-1">
                    <MdQuestionMark />
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex justify-end">
                <div className="flex font-semibold text-xs gap-1">
                  <p>ESTIMATED WORTH</p>
                  <div className="flex justify-center bg-gray-300 rounded-full text-xl w-6 h-6 mt-1">
                    <MdQuestionMark />
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex justify-end gap-1">
                <div className="font-semibold text-xs text-end">
                  <p>PENDING CAPITAL GAIN/</p>
                  <p>LOSS (SINCE</p>
                  <p>INVESTMENT)</p>
                </div>
                <div className="flex justify-center bg-gray-300 rounded-full text-xl w-6 h-6 mt-1">
                  <MdQuestionMark />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 min-w-[1200px] rounded-sm border border-gray-300">
              <div className="col-span-3 py-3 text-black text-lg font-semibold flex justify-center ">
                No Investment Data Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quicklinks;
