import React from 'react'
import { IMAGE } from '../Assets/Images'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='bg-white flex flex-col justify-center w-full items-center space-y-2'  >
            <div
                className=' flex lg:flex-row flex-col justify-center lg:justify-evenly items-center lg:items-start pt-5 w-full space-y-2'
            >
                <div className='flex flex-col w-[88%]  justify-center lg:w-[21%] ' >
                    <img
                        alt='banner'

                        className='h-[110px] w-[110px] self-center lg:h-[150px] lg:w-[150px]'
                        src={IMAGE.icon}
                    />
                </div>
                <div className='flex flex-col w-[88%] justify-center lg:w-[21%] ' >
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
                <div className='flex flex-col w-[88%] justify-center lg:w-[21%] ' >
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
                <div className='flex flex-col w-[88%] justify-center lg:w-[21%] ' >
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
            <p className='text-sm  font-bold tracking-widest pt-5'>
                &copy; {new Date().getFullYear()} KBH Jillha Krushi Sangh Nashik
            </p>
            <img
                onClick={()=>{
                    window.open("https://nerdtech.in")
                }}
                alt='nerdtech'
                className='lg:w-[35%] w-full h-auto'
                src={IMAGE.footer}
            />
        </div>
    )
}
