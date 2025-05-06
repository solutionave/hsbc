import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="mb-10 md:max-w-[72%]">
      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md">
          <img
            src="/images/card1.PNG"
            alt="Annual Report 2024"
            className="w-full object-cover "
          />
          <div className="pt-5 px-5 md:px-10">
            <h1 className="font-thin text-xl lg:text-3xl py-2 lg:py-5 ">
              Our strategy’s continuing to deliver for shareholders
            </h1>
            <div className="mt-2 py-5 text-md lg:text-lg">
              Our strong financial performance is enabling us to provide
              increased returns, our Group Chairman has told shareholders.
            </div>
            <div className="flex items-center gap-5 py-2 lg:py-5 pb-5">
              <p className="text-red-700">
                <FaChevronRight size={25} />
              </p>
              <p className=" font-semibold text-md lg:text-lg cursor-pointer">
                Read more about our ISM
              </p>
            </div>
            <div className="flex items-center gap-5 py-2 lg:py-5 pb-5">
              <p className="text-red-700">
                <FaChevronRight size={25} />
              </p>
              <p className=" font-semibold text-md lg:text-lg cursor-pointer">
                Find out about our AGM
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md">
          <img
            src="/images/card2.PNG"
            alt="Annual Report 2024"
            className="w-full object-cover "
          />
          <div className="pt-5 px-5 md:px-10">
            <h1 className="font-thin text-xl lg:text-3xl py-2 lg:py-5 ">
              Annual General Meeting
            </h1>
            <div className="mt-2 py-5 text-md lg:text-lg">
              Find out what happened at our Annual General Meeting, which was
              held in London on Friday, 2 May.
            </div>
            <div className="flex items-center gap-5 py-2 lg:py-5 pb-5">
              <p className="text-red-700">
                <FaChevronRight size={25} />
              </p>
              <p className=" font-semibold text-md lg:text-lg cursor-pointer">
                Learn more
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md">
          <img
            src="/images/card3.PNG"
            alt="Annual Report 2024"
            className="w-full object-cover"
          />
          <div className="pt-5 px-5 md:px-10">
            <h1 className="font-thin text-xl lg:text-3xl py-2 lg:py-5 ">
              HSBC Group Chairman announces retirement plans
            </h1>
            <div className="mt-2 py-5 text-md lg:text-lg">
              Sir Mark Tucker has advised the Board of his intention to retire
              as Group Chairman before the end of 2025.
            </div>
            <div className="flex items-center gap-5 py-2 lg:py-5 pb-5">
              <p className="text-red-700">
                <FaChevronRight size={25} />
              </p>
              <p className=" font-semibold text-md lg:text-lg cursor-pointer">
                Find out more
              </p>
            </div>
          </div>
        </div>

        {/* First Card */}
        {/* <div className="bg-white shadow-md">
          <img
            src="/images/annual.png"
            alt="Annual Report 2024"
            className="w-full object-cover "
          />
          <div className="pt-5 px-10 lg:px-24">
            <h1 className="font-thin text-xl lg:text-3xl py-2 lg:py-5 ">
              Annual Report 2024
            </h1>
            <div className="mt-2 py-5 text-md lg:text-lg">
              See our Annual Report and Accounts to get full details of our
              performance in 2024.
            </div>
            <div className="flex items-center gap-5 py-2 lg:py-5">
              <p className="text-red-700">
                <FaChevronRight size={25} />
              </p>
              <p className=" font-semibold text-md lg:text-lg">
                Read the full report
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md">
          <img
            src="/images/interim.png"
            alt="Fourth Interim Dividend"
            className="w-full object-cover"
          />
          <div className="pt-5 px-10 lg:px-24">
            <h1 className="font-thin text-xl lg:text-3xl py-2 lg:py-5 ">
              Fourth Interim Dividend
            </h1>
            <div className="mt-2 py-5 text-md lg:text-lg">
              We have announced a fourth interim dividend of 36 cents per share,
              making a total for 2024 of 87 US cents per share.
            </div>
            <div className="flex gap-5 py-2 lg:py-5">
              <p className="text-red-700">
                <FaChevronRight size={25} />
              </p>
              <p className=" font-semibold text-md lg:text-lg">
                Dividend information and timetable
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
