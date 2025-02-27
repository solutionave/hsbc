import React from 'react';

const Career = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mb-40">
      <img
        src="../images/Career1.png"
        alt="Career"
        className="w-full h-auto object-cover"
      />
      <div className="lg:absolute lg:-bottom-20 lg:left-10 bg-slate-500 text-white p-12 py-20 w-full lg:max-w-lg  shadow-lg flex flex-col items-center ">
        <h2 className="text-4xl  font-extralight text-center">
        A career where you can make an impact
        </h2>
        <p className="py-8 text-md font-normal  text-center tracking-wide ">
          Discover our student and graduate opportunities, from internships and
          graduate programmes to work experience, apprenticeships and entry-level positions.
        </p>
        <button className="mt-4 px-6 py-4 border text-white font-medium hover:bg-slate-600 ">
          Students and graduates
        </button>
      </div>
    </div>
  );
};

export default Career;
