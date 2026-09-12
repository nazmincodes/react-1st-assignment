import React from 'react';
import logo from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <div className='flex justify-between max-w-6xl mx-auto '>
            <div className='py-25'>
                <h1 className='text-4xl font-bold'>Build Your Ideal<br></br> <span className='bg-gradient-to-r
                 from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='py-6'>Explore frontend, backend, database, and tooling options,<br></br>
                compare them side by side, and put together the stack that fits your<br></br>
                next project.</p>
                <div className='flex gap-4'>
                 <button
                className="border-2 border-gray-100 rounded-2xl px-4 py-2 text-amber-50
                bg-gradient-to-r from-orange-500 via-pink-500 to-violet-400"
               >
               Explore Technologies
              </button>
                <button className='border-2 border-gray-200 rounded-2xl px-10'>Learn More</button>
                </div>

            </div>
            <div>
                <img src={logo} className='h-100' alt=""/>
            </div>
        </div>
    );
};

export default Banner;