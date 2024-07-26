import React from 'react'
import comingSoon from '../images/comingSoon.jpeg'
import logo from '../images/logo.png'

const AboutHeader = () => {
    return (
        <div className='w-full py-16 px-4'>
            <div className='mx-auto'>
                <img className='mx-auto' src={logo} alt="" />
            </div>
            <h1 className='max-w-screen-sm mx-auto text-center pt-16 md:text-6xl sm:text-5xl text-4xl font-extrabold'>Learn More About Us</h1>
            <div className='max-w-[1240px] grid lg:grid-cols-2 mx-auto gap-4 p-8 md:p-16'>
                <img className='w-[500px] md:h-[500px] mx-auto rounded-md my-auto' src={comingSoon} alt="" />
                <div className=' flex flex-col justify-center gap-2'>
                    <h2 className='text-[--primary] font-bold py-2 md:text-4xl sm:text-3xl text-2xl'>About Us</h2>
                    <p className='sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae quam, nihil odio vero dolor debitis, error cupiditate ab et atque earum voluptatem animi enim eveniet beatae tempora natus veritatis?
                        Et, rem dignissimos officia quia, nam assumenda quasi nulla voluptates dolorum consequuntur consectetur a optio sunt deleniti quis, voluptatum eum explicabo deserunt nemo culpa? Inventore dignissimos beatae quis asperiores nihil.
                        Quibusdam cum deleniti dignissimos veniam! Asperiores nesciunt molestiae eius, dolor, accusantium, qui veritatis non eum modi quae et consectetur fugiat explicabo error voluptas excepturi quasi tenetur iusto maxime quam est.</p>
                </div>
            </div>
            <div className='max-w-[1240px] grid lg:grid-cols-2 mx-auto gap-4 p-8 md:p-16'>
                <div className=' flex flex-col justify-center gap-4'>
                    <h2 className='text-[--primary] font-bold py-2 md:text-5xl sm:text-4xl text-3xl'>Our Specialty Team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae quam, nihil odio vero dolor debitis, error cupiditate ab et atque earum voluptatem animi enim eveniet beatae tempora natus veritatis?
                        Et, rem dignissimos officia quia, nam assumenda quasi nulla voluptates dolorum consequuntur consectetur a optio sunt deleniti quis, voluptatum eum explicabo deserunt nemo culpa? Inventore dignissimos beatae quis asperiores nihil.
                        Quibusdam cum deleniti dignissimos veniam! Asperiores nesciunt molestiae eius, dolor, accusantium, qui veritatis non eum modi quae et consectetur fugiat explicabo error voluptas excepturi quasi tenetur iusto maxime quam est.</p>
                </div>
                <img className='w-[500px] md:h-[500px] mx-auto my-auto rounded-md' src={comingSoon} alt="" />
            </div>
            <div className='max-w-[1240px] grid lg:grid-cols-2 mx-auto gap-4 p-8 md:p-16'>
                <img className='w-[500px] md:h-[500px] mx-auto rounded-md my-auto' src={comingSoon} alt="" />
                <div className=' flex flex-col justify-center gap-2'>
                    <h2 className='text-[--primary] font-bold py-2 md:text-5xl sm:text-4xl text-3xl'>Our Promise To You</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae quam, nihil odio vero dolor debitis, error cupiditate ab et atque earum voluptatem animi enim eveniet beatae tempora natus veritatis?
                        Et, rem dignissimos officia quia, nam assumenda quasi nulla voluptates dolorum consequuntur consectetur a optio sunt deleniti quis, voluptatum eum explicabo deserunt nemo culpa? Inventore dignissimos beatae quis asperiores nihil.
                        Quibusdam cum deleniti dignissimos veniam! Asperiores nesciunt molestiae eius, dolor, accusantium, qui veritatis non eum modi quae et consectetur fugiat explicabo error voluptas excepturi quasi tenetur iusto maxime quam est.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutHeader

