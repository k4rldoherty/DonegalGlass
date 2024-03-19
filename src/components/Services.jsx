import React from 'react'
import office from '../images/office.jpg'
import building from '../images/building.jpg'
import balcony from '../images/balcony.jpg'
import stairs from '../images/stairs.jpg'
import splashback from '../images/splashback.jpg'


const Services = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={office} alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={building} alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={balcony} alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={stairs} alt="" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={splashback} alt="" />
        </div>
        {/* Right */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan your next project with us</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae in dignissimos accusantium nulla magni quas quaerat</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae illum maxime eveniet, iste doloribus facilis itaque inventore odio hic quidem alias maiores soluta nihil ratione! Eius, accusamus enim. Ea?</p>
            <button className='bg-gradient-to-r from-zinc-900 to-emerald-700 text-[--text-light] rounded-md font-medium w-[250px] m-0 my-6 p-3'>Learn More</button>
        </div>
    </div>
  )
}

export default Services