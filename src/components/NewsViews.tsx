import React from "react";
import { FaChevronRight } from "react-icons/fa";
const NewsViews = () => {
  return (
    <div className="md:max-w-[75%] mx-auto pt-7">
      <h2 className="text-5xl font-extralight text-center mb-12">
        News and Views
      </h2>
      <div className="grid md:grid-cols-2 gap-6 py-8 md:px-8">
        <div className="bg-gray-100 shadow-lg overflow-hidden ">
          <img
            src="../images/Gis.PNG"
            alt="Trade Finance Bank"
            className="w-full h-96 object-cover"
          />
          <div className="p-7">
            <h3 className="text-4xl font-extralight">
              Our summit connects people, ideas and opportunity
            </h3>
            <p className="text-black font-normal text-lg py-10">
              More than 4,000 delegates brought the energy – and our Global
              Investment Summit provided the platform to explore the new
              networks shaping the global economy.
            </p>
            <a
              href="#"
              className="text-red-500 font-medium mt-3 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-3"
            >
              <FaChevronRight /> Find out more
            </a>
          </div>
        </div>
        <div className="bg-gray-100 shadow-lg overflow-hidden ">
          <img
            src="../images/Gis2.PNG"
            alt="Trade Finance Bank"
            className="w-full h-96 object-cover"
          />
          <div className="p-7">
            <h3 className="text-4xl font-extralight">
              We can be a constant in a world of change
            </h3>
            <p className="text-black font-normal text-lg py-10">
              The world of trade is facing unprecedented disruption, but we can
              be a strategic partner and innovative problem solver for our
              clients, says Vivek Ramachandran.
            </p>
            <a
              href="#"
              className="text-red-500 font-medium mt-3 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-3"
            >
              <FaChevronRight /> Hear more from Vivek
            </a>
          </div>
        </div>
        {/* <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden ">
          <img
            src="../images/HSBC1.jpg"
            alt="Trade Finance Bank"
            className="w-full h-48 object-cover"
          />
          <div className="p-7">
            <h3 className="text-4xl font-extralight">
              We’re the World’s Best Trade Finance Bank
            </h3>
            <p className="text-black font-normal text-lg py-10">
              Businesses have had their say – and we’re #1 in the Euromoney
              Trade Finance Survey once again.
            </p>
            <a
              href="#"
              className="text-red-500 font-medium mt-3 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-3"
            >
              <FaChevronRight /> Read more
            </a>
          </div>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src="../images/img1.png"
            alt="Cinema to Multiplex"
            className="w-full h-48 object-cover"
          />
          <div className="p-7">
            <h3 className="text-4xl font-extralight ">
              From city cinema to multinational multiplex{" "}
            </h3>
            <p className="text-black font-normal text-lg py-10">
              Grab some popcorn and find out how we’ve supported Cinépolis’s
              global growth during 50 years as its trusted financial partner.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src="../images/HSBC2.jpg"
            alt="Asia and Middle East Outlook"
            className="w-full h-48 object-cover"
          />
          <div className="p-7">
            <h3 className="text-4xl font-extralight ">
              The outlook in Asia and the Middle East
            </h3>
            <p className="text-black font-normal text-lg py-10">
              Our leaders share their perspectives on the key trends and themes
              shaping 2025 and beyond.
            </p>
            <a
              href="#"
              className="text-red-500 font-medium mt-3 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-3"
            >
              <FaChevronRight />
              Find out more
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default NewsViews;
