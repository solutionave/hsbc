import React from "react";

const Highlights = () => {
  return (
    <div className="bg-[#f4f5f6] text-black py-16 px-5 text-center">
      <h2 className="text-3xl lg:text-5xl font-light pb-16">Highlights</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        <div className="border-l border-gray-600 px-6">
          <p className="text-4xl text-left lg:text-9xl font-extralight">
            $32.3bn
          </p>
          <p className="font-semibold text-start py-5">US DOLLARS</p>
          <p className="mt-2 text-start">Profit before tax</p>
          <p className=" text-start font-semibold">(FY23: $30.3bn)</p>
        </div>
        <div className="border-l border-gray-600 px-6">
          <p className="text-4xl text-left lg:text-9xl font-extralight">
            $65.9bn
          </p>
          <p className="font-semibold text-start py-5">US DOLLARS</p>
          <p className="mt-2 text-start">Revenue</p>
          <p className="text-start font-semibold">(FY23: $66.1bn)</p>
        </div>
        <div className="border-l border-gray-600 px-6">
          <p className="text-4xl text-left lg:text-9xl font-extralight">
            $0.87
          </p>
          <p className="font-semibold text-start py-5">US DOLLARS</p>
          <p className="mt-2 text-start">Total dividends per share for 2024</p>
          <p className="text-start font-semibold">(FY23: $0.61)</p>
        </div>
      </div>
      <button className="mt-8 lg:mt-16 px-12 py-5 border border-black text-sm font-medium hover:bg-white text-black transition">
        Full 1Q coverage
      </button>
    </div>
  );
};

export default Highlights;
