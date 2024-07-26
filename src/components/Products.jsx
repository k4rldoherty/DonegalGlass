import React from 'react'
// import comingSoon from '../images/comingSoon.jpeg'
import service1 from '../images/service1.jpg'
import service2 from '../images/service2.jpg'
import service3 from '../images/service3.jpg'
import service4 from '../images/service4.jpg'
import service5 from '../images/service5.jpg'
import service6 from '../images/service6.jpg'

const Products = () => {


    const products = [
        {
            id: 1,
            header : "Service 1",
            image : service1
        },
        {
            id: 2,
            header : "Service 2",
            image : service2
        },
        {
            id: 3,
            header : "Service 3",
            image : service3
        },
        {
            id: 4,
            header : "Service 4",
            image : service4
        },
        {
            id: 5,
            header : "Service 5",
            image : service5
        },
        {
            id: 6,
            header : "Service 6",
            image : service6
        },
    ]

  return (
    <div className='flex'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
            <div className='mx-auto max-w-screen-sm'>
                <h2 className='mb-4 text-4xl font-extrabold'>Our Services</h2>
                <p className='mb-8 font-light lg:mb-16 sm:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eveniet tempora ad officiis, harum aliquid. Dolorum, necessitatibus id. Laboriosam expedita necessitatibus exercitationem ratione animi veritatis iure sapiente iusto est maiores.</p>
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
            <p className='mb-8 font-bold lg:mb-16 sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla aliquam magnam, quas sint non quisquam et sequi natus alias provident qui architecto aut rem debitis adipisci beatae voluptates? Tempore!</p>
        </div>
    </div>
  )
}

export default Products