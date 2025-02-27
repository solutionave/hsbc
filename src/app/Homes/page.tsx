
import Cards from '@/components/Cards';
import Career from '@/components/Career';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hightlights from '@/components/Hightlights';
import NewsViews from '@/components/NewsViews';
import React from 'react';

const App = () => {
    return (
        <div className='flex-1 bg-black'>
            <div>
                <Header />
            </div>
            <div className="bg-[url('/images/background.png')] h-full bg-cover bg-no-repeat lg:h-screen w-full">
                <div className=" gap-4 items-center p-4 text-[#2c2a2b]">
                    <div className="flex flex-col justify-center items-center mt-40">
                        <h1 className='font-thin text-center text-white text-4xl lg:text-6xl'>Our Performance in 2024</h1>
                        <button className='bg-transparent border border-white font-semibold text-white mt-10 px-20 lg:px-5 py-2 text-lg '>Results Overview</button>
                    </div>
                </div>
                <div className='-mt-40'>
                    <Cards />
                </div>
                <div className='mt-10'>
                    <Hightlights />
                </div>
                <div>
                    <NewsViews />
                </div>
                <div>
                    <Career />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
