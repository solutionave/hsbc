import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="hidden lg:flex flex-col items-center bg-stone-900 text-white h-[300px] py-5">
                <div className="flex text-xl font-light font-sans p-10 group hover:opacity-90 transition duration-300 ">
                    <p className="text-lg p-5 cursor-pointer">Who we are</p>
                    <p className="text-lg p-5 cursor-pointer">Investors</p>
                    <p className="text-lg p-5 cursor-pointer">News and views</p>
                    <p className="text-lg p-5 cursor-pointer">Careers</p>
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
                    <p className="text-lg px-5 pb-5 cursor-pointer">Who we are</p>
                    <p className="text-lg px-5 pb-5 cursor-pointer">Investors</p>
                    <p className="text-lg px-5 pb-5 cursor-pointer">News and views</p>
                    <p className="text-lg px-5 pb-5 cursor-pointer">Careers</p>
                </div>
                <hr className="w-full border-t border-gray-600" />
                <div className="flex space-x-6 my-4 p-4">
                    <a href="https://www.linkedin.com/company/hsbc/" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaLinkedin size={50} className="text-2xl cursor-pointer hover:text-white p-1" />
                    </a>
                    <a href="https://www.instagram.com/hsbc/" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaInstagram size={50} className="text-2xl cursor-pointer hover:text-white p-1" />
                    </a>
                    <a href="https://web.facebook.com/HSBC/?_rdc=1&_rdr#" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaFacebook size={50} className="text-2xl cursor-pointer hover:text-white p-1" />
                    </a>
                    <a href="https://www.youtube.com/user/HSBC/custom" target="_blank" className="border rounded-full border-white p-2 opacity-60 hover:opacity-100 transition duration-300">
                        <FaYoutube size={50} className="text-2xl cursor-pointer hover:text-white p-1" />
                    </a>
                </div>
                <hr className="w-full border-t border-gray-600" />
                <div className="flex flex-col items-center text-sm text-gray-200 bg-stone-950 space-y-2 p-8 w-full h-full">
                    <p className="pb-3 text-gray-500">© HSBC Group 2025</p>
                    <p className="pb-3">Terms and conditions</p>
                    <p className="pb-3">Privacy notice</p>
                    <p className="pb-3">Cookie notice</p >
                    <p className="pb-3">Website accessibility</p >
                    <p className="pb-3">Online security</p >
                    <p className="pb-3">Sitemap</p >
                </div >
            </footer >
        </>
    );
};

export default Footer;
