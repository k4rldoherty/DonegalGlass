import React from 'react'

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            author: "John Doe",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nesciunt cumque, deleniti veniam quae asperiores. Incidunt numquam repellendus quod dignissimos assumenda repudiandae error aspernatur eaque vero nesciunt, maiores quas?",
            role: "Business Owner",
            header: "A really positive header"
        },
        {
            id: 2,
            author: "John Doe",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nesciunt cumque, deleniti veniam quae asperiores. Incidunt numquam repellendus quod dignissimos assumenda repudiandae error aspernatur eaque vero nesciunt, maiores quas?",
            role: "Business Owner",
            header: "A really positive header"
        },
        {
            id: 3,
            author: "John Doe",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nesciunt cumque, deleniti veniam quae asperiores. Incidunt numquam repellendus quod dignissimos assumenda repudiandae error aspernatur eaque vero nesciunt, maiores quas?",
            role: "Business Owner",
            header: "A really positive header"
        },
        {
            id: 4,
            author: "John Doe",
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nesciunt cumque, deleniti veniam quae asperiores. Incidunt numquam repellendus quod dignissimos assumenda repudiandae error aspernatur eaque vero nesciunt, maiores quas?",
            role: "Business Owner",
            header: "A really positive header"
        },
    ]

    return (
        <div className='flex '>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Testimonials</h2>
                    <p className="mb-8 font-light lg:mb-16 sm:text-xl">Check out what our valued customers have to say about us:</p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2 gap-2">
                    {
                        testimonials.map((t) => {
                            return <figure key={t.id} className="flex flex-col justify-center items-center p-8 text-center border-b border-gray-200 md:p-12 lg:border-r rounded-md text-[--text-dark]">
                                <blockquote className="mx-auto mb-8 max-w-2xl">
                                    <h3 className="text-lg font-semibold text-[--primary] ">{t.header}</h3>
                                    <p className='my-4'>"{t.review}"</p>
                                </blockquote>
                                <figcaption className="flex justify-center items-center space-x-3">
                                    <div className="space-y-0.5 font-medium">
                                        <div className='font-bold'>{t.author}</div>
                                        <div className="text-sm font-light">{t.role}</div>
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