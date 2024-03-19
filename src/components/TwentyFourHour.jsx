import React from 'react'
import vans from '../images/vans.jpg'

const TwentyFourHour = () => {
    return (
        <div className='w-full bg-[--secondary] py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 bg-gradient-to-r from-zinc-900 to-emerald-700 p-12 rounded-md gap-4'>
                <img className='w-[600px] mx-auto my-4 rounded-md' src={vans} alt="" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[--accent] font-bold'>Peace of mind Guaranteed</p>
                    <h1 className='text-[--text-light] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>24 Hour Callout Service</h1>
                    <p className='text-[--text-light]'>Suspendisse sagittis lacus quis risus congue pulvinar. Nunc tristique placerat nisl hendrerit faucibus. Donec at ornare nunc. Duis eleifend massa dictum nisi euismod, et ullamcorper arcu molestie</p>               
                </div>
            </div>

        </div>
    )
}

export default TwentyFourHour