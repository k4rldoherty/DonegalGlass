import React from 'react'

const Testimonials = () => {

    const testimonials = [
        {
            author: "John Doe",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nesciunt cumque, deleniti veniam quae asperiores. Incidunt numquam repellendus quod dignissimos assumenda repudiandae error aspernatur eaque vero nesciunt, maiores quas?",
            role: "Business Owner",
            header: "A really positive header"
        },
        {
            author: "John Doe",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nesciunt cumque, deleniti veniam quae asperiores. Incidunt numquam repellendus quod dignissimos assumenda repudiandae error aspernatur eaque vero nesciunt, maiores quas?",
            role: "Business Owner",
            header: "A really positive header"
        },
        {
            author: "John Doe",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nesciunt cumque, deleniti veniam quae asperiores. Incidunt numquam repellendus quod dignissimos assumenda repudiandae error aspernatur eaque vero nesciunt, maiores quas?",
            role: "Business Owner",
            header: "A really positive header"
        },
        {
            author: "John Doe",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nesciunt cumque, deleniti veniam quae asperiores. Incidunt numquam repellendus quod dignissimos assumenda repudiandae error aspernatur eaque vero nesciunt, maiores quas?",
            role: "Business Owner",
            header: "A really positive header"
        },
    ]

    return (
        <div className='flex '>
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold">Testimonials</h2>
                    <p class="mb-8 font-light lg:mb-16 sm:text-xl">Check out what our valued customers have to say about us:</p>
                </div>
                <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-2">
                    {
                        testimonials.map((t) => {
                            return <figure class="flex flex-col justify-center items-center p-8 text-center bg-gradient-to-r from-amber-400 to-orange-500 border-b border-gray-200 md:p-12 lg:border-r rounded-md">
                                <blockquote class="mx-auto mb-8 max-w-2xl">
                                    <h3 class="text-lg font-semibold ">{t.header}</h3>
                                    <p className='my-4'>"{t.review}"</p>
                                </blockquote>
                                <figcaption class="flex justify-center items-center space-x-3">
                                    <div class="space-y-0.5 font-medium">
                                        <div className='font-bold'>{t.author}</div>
                                        <div class="text-sm font-light">{t.role}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Testimonials