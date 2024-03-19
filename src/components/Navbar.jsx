import React, {useState} from 'react'
import logo from '../images/logo.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [nav, setNav] = useState(true); // Weird behaviour here

    const handleNav = () => {
        setNav(state => !state);
    }

    return (
        <div className='flex text-xl justify-between items-center h-24 mx-auto px-4 bg-[--secondary] border-b-2 border-gray-700'>
            <img src={logo} alt="" className='h-[100%] w-auto select-none' />
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Services</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div  className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gradient-to-r from-zinc-900 to-emerald-700 text-[--text-light] ease-in-out duration-500 select-none z-50' : 'fixed left-[-100%]'}>
                <h2 className='w-full text-2xl font-bold text-[--accent] p-8'>Donegal Glass</h2>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-[--secondary]'>Home</li>
                    <li className='p-4 border-b border-[--secondary]'>About</li>
                    <li className='p-4 border-b border-[--secondary]'>Services</li>
                    <li className='p-4 border-b border-[--secondary]'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar