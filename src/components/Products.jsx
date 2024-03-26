import React from 'react'
import comingSoon from '../images/comingSoon.jpeg'
import glassStairs from '../images/glass_stairs_caro.jpg'
import glassBalco from '../images/glass_balcony_caro.jpeg'
import glassOffice from '../images/glass_office_caro.jpeg'
import splash from '../images/splashback_caro.jpg'
import wetroom from '../images/shower_wetroom.jpg'
import upvc from '../images/upvcDoors_caro.jpg'

const Products = () => {


    const products = [
        {
            id: 1,
            header : "Glass Stairs",
            image : glassStairs
        },
        {
            id: 2,
            header : "Glass Balustrade and Balconies",
            image : glassBalco
        },
        {
            id: 3,
            header : "Glass Screens and Offices",
            image : glassOffice
        },
        {
            id: 4,
            header : "Glass Splashbacks",
            image : splash
        },
        {
            id: 5,
            header : "Wet Rooms and Showers",
            image : wetroom
        },
        {
            id: 6,
            header : "UPVC Doors and Windows",
            image : upvc
        },
    ]

  return (
    <div className='flex'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
            <div className='mx-auto max-w-screen-sm'>
                <h2 className='mb-4 text-4xl font-extrabold'>Our Services</h2>
                <p className='mb-8 font-light lg:mb-16 sm:text-xl'>We offer a range of different products such as doors, windows, Baulastrades and Balconies and more..</p>
            </div>
            <div className='grid mb-8 font-light lg:mb-12 lg:grid-cols-3 gap-2'>
                {
                    products.map((prod) => {
                        return <div key={prod.id} className='flex flex-col justify-center items-center p-8 text-center md:p-12 lg:border-r rounded-md text-[--text-dark]'>
                            <div className='mx-auto mb-8 max-w-2xl'>
                                <p className='font-bold'>{prod.header}</p>
                            </div>
                            <img className='hover:scale-110 duration-500 rounded-md' src={prod.image} alt={prod.header} />
                        </div>
                    })
                
                }

            </div>
            <p className='mb-8 font-bold lg:mb-16 sm:text-xl'>We also offer a Supply & Fitting service, Maintenance Contract, Complete Design, Management, and Installation Package as well as 24/7 emergency call out service.</p>
        </div>
    </div>
  )
}

export default Products