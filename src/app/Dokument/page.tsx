"use client";
import React, { useEffect, useState } from "react";
import Header2 from "../../components/Header2";
import Navbar from "../../components/Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { Dokumentdata } from "@/shared/data";
import { useSelector } from "react-redux";
// import DokumentRow from './DokumentRow'

const handleOpenPdf = () => {
  console.log("Opening PDF...");
};

const Dokument = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const userData = useSelector((state: any) => state.user);

  useEffect(() => {
    setActiveItem("Dokument");
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleOpenPdf = () => {
    window.open("/docs//612 09.09.2024 Bankbestätigung_Flatex_DM_1.pdf");
  };
  const handleOpenPdf1 = () => {
    window.open("/docs/Bank2.pdf");
  };
  const handleOpenPdf4 = () => {
    window.open("docs/767 09.09.2024 Bankbestaetigung_Flatex_DM_2.pdf");
  };
  const handleOpenPdf2 = () => {
    window.open("docs/Kauf1.pdf");
  };
  const handleOpenPdf3 = () => {
    window.open("docs/kauf2.pdf");
  };
  const handleOpenPdf5 = () => {
    window.open("docs/767 23.02.2021 Kauf_Gazprom_Daniel_Mehner_I.pdf");
  };

  return (
    <>
      <Header2 />
      <div className="lg:px-40 z-10 -mt-3">
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
      <div className="px-4 pb-6 md:px-16 lg:px-40">
        <div className="text-2xl md:text-3xl lg:mt-8 mt-10">
          Documentenarchiv
        </div>
        <div className="flex flex-wrap items-start gap-4 pt-5 mb-4">
          <div className="w-full md:w-auto">
            <h3 className="text-sm md:text-base">Dokumente</h3>
            <div className="relative w-full mt-1 md:w-72">
              <select className="w-full px-2 py-1 text-gray-700 border appearance-none pr-10">
                <option value="cashkonto">Alle Dokumente</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-400">
                <FaChevronDown className="text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-10 mb-5 border-t border-gray-200" />

        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="flex flex-col justify-between items-center gap-1 lg:gap-10 md:flex-row w-full">
            <div className="relative w-full">
              <select className="w-full px-2 py-1 text-gray-700 border appearance-none pr-10">
                <option value="cashkonto">Alle Dokumenttypen</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-400">
                <FaChevronDown className="text-white cursor-pointer" />
              </div>
            </div>

            <div className="relative w-full my-4 lg:my-0">
              <select className="w-full px-2 py-1 text-gray-700 border appearance-none pr-10">
                <option value="cashkonto">Alle</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-400">
                <FaChevronDown className="text-white cursor-pointer" />
              </div>
            </div>

            <div className="relative w-full">
              <select className="w-full px-2 py-1 text-gray-700 border appearance-none pr-10">
                <option value="cashkonto">Alle</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-400">
                <FaChevronDown className="text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 bg-white">
          <div className="flex flex-wrap items-center justify-end gap-4">
            <button className="px-4 py-2 text-white bg-orange-500">
              Übernehmen
            </button>
            <button className="p-2 bg-orange-500">
              <FiSearch className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 bg-orange-500">
              <IoReload className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="flex justify-start py-5 items-center text-gray-700">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 mx-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          Filter merken
        </div>

        <hr className="border-t border-gray-200 mt-4 mb-1" />

        <div className="bg-white">
          <div className="mt-6 bg-white p-4 w-full overflow-x-auto sm:overflow-x-hidden md:overflow-x-auto scroll-smooth">
            <div className="grid grid-cols-12 gap-4 p-2 text-xs font-bold text-black min-w-[1200px]">
              <div className="col-span-1"></div>
              <div className="col-span-1"></div>
              <div className="col-span-3">Konto</div>
              <div className="col-span-1">Datum</div>
              <div className="col-span-2">Dokumententype</div>
              <div className="col-span-3">Beschreibung</div>
              <div className="col-span-1 text-end">Gelesen am</div>
            </div>

            {/*Rows */}

            <div className=" mx-auto mt-5   rounded">
              {Dokumentdata.map((transaction, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 p-2 mt-4 text-xs bg-gray-100 min-w-[1200px]"
                >
                  <div className="col-span-1">
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="col-span-1">{transaction.id}</div>
                  {/* <div className="col-span-3">{transaction.name}</div> */}
                  <div className="col-span-3">Cashkonto - {userData.name}</div>
                  <div className="col-span-1">{transaction.date}</div>
                  <div className="col-span-2">
                    <button onClick={transaction.onButtonClick}>
                      {transaction.buttonText}
                    </button>
                  </div>
                  <div className="col-span-3">{transaction.description}</div>
                  <div className="col-span-1 text-end">
                    {transaction.endDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dokument;
