import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"
import { MdOutlineWatchLater } from "react-icons/md";
export default function Contact() {
    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return (
        <div
            className='w-full justify-start bg-background h-full items-center'
        >
            <img
                src={IMAGE.header}
            />
            <div
                className=' pl-10 flex self-center pt-5 font-Poppins items-center text-sm space-x-2'>
                <Link
                    className=' hover:text-primary'
                    to={'/'}
                >
                    Home
                </Link>
                <h1>
                    |
                </h1>
                <h1>
                    Contact Us
                </h1>
            </div>
            <div
                className='flex self-center mt-5  justify-center items-center'>
                <h1
                    className='font-Poppins text-primary font-black text-3xl tracking-widest'
                >
                    Contact Us
                </h1>
            </div>
            <div
                className='flex flex-col justify-center items-center'
            >
                <div
                    className='border-2 flex items-center justify-evenly w-[45%] py-2 h-[50px] self-start ml-[6%] my-5'
                >
                    <MdOutlineWatchLater
                        className=' text-primary'
                        size={40}
                    />
                    <h1
                        className='font-Poppins text-primary font-black text-base'
                    >
                        Working Hours: 09:00 hours to 17:30 hours (Saturday and Sunday Holidays)
                    </h1>

                </div>
                <div
                    className=' w-[88%] border-2 flex justify-evenly py-5 items-start h-[200px] my-5 '
                >
                    <div className='w-[30%]'>
                        <h1 className=' text-base font-Poppins font-semibold text-justify' >
                            Official website to get info of products , board members etc.
                        </h1>
                        <Link
                            to={'/'}
                        >
                            https://www.kbhjillhakrushisangh.org
                        </Link>
                    </div>

                    <div
                        className='h-[150px] w-[1px] bg-primary'
                    />
                    <div className='w-[30%]'>
                        <h1 className=' text-base font-Poppins font-semibold text-justify' >
                            Queries Related to Products/ Brands or for Engagement with KBH Jillha Krushi Sangh
                        </h1>
                        <p className=' font-medium text-primary'>
                            Phone : (0253) 2592843
                        </p>
                        <p className=' font-medium text-primary'>
                            Phone : (0253) 2592606
                        </p>
                        <p className=' font-medium text-primary'>
                            Phone : (0253) 2591136
                        </p>
                        <p className=' font-medium text-primary'>
                            Email : jillhakrishink@gmail.com
                        </p>
                    </div>
                    <div
                        className='h-[150px] w-[1px] bg-primary'
                    />
                    <div className='w-[30%]'>
                        <h1 className=' text-base font-Poppins font-semibold text-justify' >
                            Office Address/Fax No.
                        </h1>
                        <p className=' font-medium text-primary'>
                            Dwarka Point Navi Mumbai - Agraroad, Nashik 422011
                        </p>
                        <p className=' font-medium text-primary'>
                            Fax : (0253) 2591136
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}