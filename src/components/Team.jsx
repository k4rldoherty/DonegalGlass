import React from 'react'
import avatar from '../images/avatar.png'

const Team = () => {

    const team = [
        {
            id: 1,
            name: "Person 1",
            role: "CEO"
        },
        {
            id: 2,
            name: "Person 2",
            role: "Director"
        },
        {
            id: 3,
            name: "Person 3",
            role: "Marketing"
        },
        {
            id: 4,
            name: "Person 4",
            role: "Job Title"
        },
        {
            id: 5,
            name: "Person 5",
            role: "Job Title"
        },
        {
            id: 6,
            name: "Person 6",
            role: "Job Title"
        },

    ]

    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid gap-4'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Our team</h2>
                    <p className="font-light text-gray-500 sm:text-xl ">Meet our team of dedicated professionals who strive to provide you with the best quality service</p>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {team.map((item) => {
                        return <div key={item.id} className="text-center text-gray-500">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={avatar} alt="Jese Avatar" />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                                {item.name}
                            </h3>
                            <p>{item.role}</p>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Team