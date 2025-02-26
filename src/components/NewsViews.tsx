import React from "react";
import { FaChevronRight } from "react-icons/fa";
const NewsViews = () => {
    return (
        <div className="max-w-6xl mx-auto py-10">
            <h2 className="text-5xl font-light font-sans text-center mb-12">News and Views</h2>
            <div className="grid md:grid-cols-3 gap-6 p-8">
                <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden ">
                    <img
                        src="../images/HSBC1.jpg"
                        alt="Trade Finance Bank"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-7">
                        <h3 className="text-4xl font-extralight">
                            We’re the World’s Best Trade Finance Bank                        </h3>
                        <p className="text-black font-normal text-lg py-10">
                            Businesses have had their say – and we’re #1 in the Euromoney Trade Finance Survey once again.
                        </p>
                        <a href="#" className="text-red-500 font-medium mt-3 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-3">
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
                            From city cinema to multinational multiplex                        </h3>
                        <p className="text-black font-normal text-lg py-10">
                            Grab some popcorn and find out how we’ve supported Cinépolis’s global growth during 50 years as its trusted financial partner.
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
                            Our leaders share their perspectives on the key trends and themes shaping 2025 and beyond.
                        </p>
                        <a
                            href="#"
                            className="text-red-500 font-medium mt-3 flex items-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-3"
                        >
                            <FaChevronRight />
                            Find out more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewsViews;
