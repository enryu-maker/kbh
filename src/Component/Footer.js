import React from 'react'
import { IMAGE } from '../Assets/Images'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='bg-white flex flex-col justify-center w-full items-center'  >
            <div
                className=' flex lg:flex-row flex-col justify-center lg:justify-evenly items-center lg:items-start pt-5 w-full'
            >
                <img
                    className='h-[150px] w-[150px]'
                    src={IMAGE.icon}
                />
                <div className='flex flex-col ' >
                    <p className=' font-semibold text-xl tracking-widest'>
                        Site Maps
                    </p>
                    <Link
                        to={"/"}
                        className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        HOME
                    </Link>
                    <Link
                        to={'/product'}
                        className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        PRODUCTS
                    </Link>
                    <Link
                        to={'/about'}
                        className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        ABOUT US
                    </Link>
                    <Link
                        to={"/gallery"}
                        className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        GALLERY
                    </Link>
                    <Link
                        to={"/contact"}
                        className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        CONTACT US
                    </Link>
                </div>
                <div className='flex flex-col' >
                    <p className=' font-semibold text-xl tracking-widest'
                    >
                        Contact Info
                    </p>
                    <p className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        Phone : (0253) 2592843
                    </p>
                    <p className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        Phone : (0253) 2592606
                    </p>
                    <p className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        Phone : (0253) 2591136
                    </p>
                    <p className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        Email : jillhakrishink@gmail.com
                    </p>
                </div>
                <div className='flex flex-col' >
                    <p className=' font-semibold text-xl tracking-widest'>
                        Office Address/Fax No.
                    </p>
                    <p className=' text-black font-Poppins text-sm tracking-widest'
                    >
                        Dwarka Point Navi Mumbai - Agraroad, Nashik 422011
                    </p>
                    <p className=' text-black font-Poppins text-sm tracking-widest'>
                        Fax: (0253) 2591136
                    </p>
                </div>
            </div >
            <p className='text-sm tracking-widest'>
                &copy; {new Date().getFullYear()} KBH Jillha Krushi Sangh Nashik
            </p>
            <img
                className='w-[35%] h-auto'
                src={IMAGE.footer}
            />
        </div>
    )
}
