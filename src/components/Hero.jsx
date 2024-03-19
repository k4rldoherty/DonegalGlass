// import React from 'react'
// import { ReactTyped } from 'react-typed'

// const Hero = () => {
//     return (
//         <div className=''>
//             <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
//                 <p className='text-[--primary] font-bold py-2'>Lorem ipsum dolor sit amet</p>
//                 <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4'>Donegal Glass</h1>
//                 <div className='flex justify-center items-center p-4'>
//                     <ReactTyped className='text-[--primary] font-bold md:text-5xl sm:text-4xl text-xl' strings={['Doors', 'Windows', 'Bathrooms', 'Stairs']} typeSpeed={200} backSpeed={200} loop />
//                 </div>
//                 <p className='md:text-2xl text-xl font-bold text-gray-600 py-2'>Integer nec urna nec nisl bibendum finibus non quis odio.</p>
//                 <button className='bg-gradient-to-r from-zinc-900 to-emerald-700 text-[--text-light] rounded-md font-medium my-6 mx-auto p-3'>Find Out More</button>
//             </div>
//         </div>
//     )
// }

// export default Hero

import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <div className='relative mt-24'>
            {/* Background image */}
            <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${require('../images/hero.jpg')})` }}></div>
            {/* Overlay with transparent white background */}
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center relative'>
                <div className='bg-[--secondary] rounded-md opacity-85 p-6'>
                    <p className='text-[--primary] sm:text-2xl text-xl font-bold py-2'>Lorem ipsum dolor sit amet</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4'>Donegal Glass</h1>
                    <div className='flex justify-center items-center p-4'>
                        <ReactTyped className='text-[--primary] font-bold md:text-5xl sm:text-4xl text-xl' strings={['Doors', 'Windows', 'Bathrooms', 'Stairs']} typeSpeed={200} backSpeed={200} loop />
                    </div>
                    <p className='md:text-2xl text-xl font-bold text-[--text-dark] py-2'>Integer nec urna nec nisl bibendum finibus non quis odio.</p>
                    <button className='bg-gradient-to-r from-amber-400 to-orange-500 rounded-md font-medium my-6 mx-auto p-3'>Start your Journey</button>

                </div>
            </div>
        </div>
    );
};

export default Hero;
