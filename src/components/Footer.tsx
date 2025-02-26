import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="hidden lg:flex flex-col items-center bg-stone-900 text-white h-[300px]">
                <div className="flex gap-20 text-xl font-light font-sans p-10 group hover:opacity-90 transition duration-300">
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Who we are</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Investors</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">News and views</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Careers</a>
                </div>
                <hr className="w-[80%] border-t border-gray-600" />
                <div className="flex space-x-6 my-4">
                    <a href="https://www.linkedin.com/company/hsbc/" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-white" />
                    </a>
                    <a href="https://www.instagram.com/hsbc/" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaInstagram className="text-2xl cursor-pointer hover:text-white" />
                    </a>
                    <a href="https://web.facebook.com/HSBC/?_rdc=1&_rdr#" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaFacebook className="text-2xl cursor-pointer hover:text-white" />
                    </a>
                    <a href="https://www.youtube.com/user/HSBC/custom" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaYoutube className="text-2xl cursor-pointer hover:text-white" />
                    </a>
                </div>
                <div className="flex text-sm text-white space-x-4 mt-auto p-8  bg-stone-950 w-full items-center justify-center group hover:opacity-90 transition duration-300">
                    <span>© HSBC Group 2025</span>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Terms and conditions</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Privacy notice</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Cookie notice</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Website accessibility</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Online security</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Sitemap</a>
                </div>
            </footer>
            <footer className="lg:hidden flex flex-col items-center bg-stone-900 text-white ">
                <div className="flex flex-col items-center p-8 gap-2 text-md font-sans">
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Who we are</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Investors</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">News and views</a>
                    <a href="#" className="group-hover:opacity-50 hover:!opacity-100 transition duration-300">Careers</a>
                </div>
                <hr className="w-full border-t border-gray-600" />
                <div className="flex space-x-6 my-4 p-4">
                    <a href="https://www.linkedin.com/company/hsbc/" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-white" />
                    </a>
                    <a href="https://www.instagram.com/hsbc/" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaInstagram className="text-2xl cursor-pointer hover:text-white" />
                    </a>
                    <a href="https://web.facebook.com/HSBC/?_rdc=1&_rdr#" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaFacebook className="text-2xl cursor-pointer hover:text-white" />
                    </a>
                    <a href="https://www.youtube.com/user/HSBC/custom" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaYoutube className="text-2xl cursor-pointer hover:text-white" />
                    </a>
                </div>
                <hr className="w-full border-t border-gray-600" />
                <div className="flex flex-col items-center text-sm text-gray-200 bg-stone-950 space-y-2 p-8 w-full h-full">
                    <span>© HSBC Group 2025</span>
                    <a href="#" className="">Terms and conditions</a>
                    <a href="#" className="">Privacy notice</a>
                    <a href="#" className="">Cookie notice</a>
                    <a href="#" className="">Website accessibility</a>
                    <a href="#" className="">Online security</a>
                    <a href="#" className="">Sitemap</a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
