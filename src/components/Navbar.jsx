import React, {useState} from 'react'
import logo from '../images/logo.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState(true); // Weird behaviour here

    const handleNav = () => {
        setNav(state => state = !state);
    }

    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 bg-[--secondary] border-b-2 border-gray-700'>
            <img src={logo} alt="" className='h-[100%] w-auto select-none' />
            {/* <p className='flex flex-row items-center gap-2 font-bold'><AiFillMail/>info@donegalglass.ie</p>
            <p className='flex flex-row items-center gap-2 font-bold'><AiFillPhone/>(086) 7372838</p> */}
            <ul className='hidden md:flex'>
                <li className='hover:underline p-4 cursor-pointer'><Link to={"/"}>Home</Link></li>
                <li className='hover:underline p-4 cursor-pointer'><Link to={"/about"}>About</Link></li>
                <li className='hover:underline p-4 cursor-pointer'><Link to={"/services"}>Services</Link></li>
                <li className='hover:underline p-4 cursor-pointer'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div  className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[--secondary] text-[--text-dark] ease-in-out duration-700 select-none z-50' : 'fixed left-[-100%]'}>
                <img src={logo} className='p-4 w-[75%] h-auto select-none' />
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-[--secondary]'><Link to={"/"}>Home</Link></li>
                    <li className='p-4 border-b border-[--secondary]'><Link to={"/about"}>About</Link></li>
                    <li className='p-4 border-b border-[--secondary]'><Link to={"/services"}></Link>Services</li>
                    <li className='p-4 border-b border-[--secondary]'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar