import Cards from "@/components/Cards";
import Career from "@/components/Career";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hightlights from "@/components/Hightlights";
import NewsViews from "@/components/NewsViews";
import React from "react";

const App = () => {
  return (
    <div className="lg:flex-1 bg-white max-w-full overflow-x-hidden">
      <div>
        <Header />
      </div>
      <div className="bg-[url('/images/background.png')] h-full bg-cover bg-no-repeat md:h-screen w-full">
        <div className="flex justify-center gap-4 items-center p-4">
          <div className="flex flex-col justify-center items-center mt-40 inset-0 bg-black bg-opacity-60 md:w-[60%] py-16">
            <h1 className="font-thin text-center text-white text-3xl lg:text-6xl">
              Our Performance in 1Q 2025
            </h1>
            <button className="bg-transparent border border-white font-semibold text-white mt-10 px-10 lg:px-5 py-2 text-lg">
              View quick read
            </button>
          </div>
        </div>
        <div className="mt-64">
          <Hightlights />
        </div>
        <div className="mt-16">
          <NewsViews />
        </div>
        <div className="flex justify-center md:mt-16">
          <Cards />
        </div>
        <div>
          <Career />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
