import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"
import { MdOutlineWatchLater } from "react-icons/md";
import { Helmet } from 'react-helmet';
export default function Contact() {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return (
        <div
            className='w-full justify-start bg-background h-full items-center'
        >
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Connect with KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK: Reach Out for Agricultural Solutions
                </title>
                <description>
                    Have questions or need assistance? Contact KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK for all your agricultural needs. Our team is ready to provide information on fertilizers, steel, and tools, ensuring you have the support necessary for a thriving farming experience.
                </description>
            </Helmet>
            <img
                src={IMAGE.header}
                alt='head'
                className='h-[200px] lg:h-auto w-auto object-cover lg:object-contain'
            />
            <div
                className='pl-5 lg:pl-10 flex self-center py-5 font-Poppins items-center text-sm space-x-2'>
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
                    className='border-2  w-[88%] self-center flex items-center justify-between lg:justify-evenly space-x-1 lg:w-[45%] py-2 lg:h-[50px] lg:self-start lg:ml-[6%] my-5'
                >
                    <MdOutlineWatchLater
                        className=' text-primary'
                        size={40}
                    />
                    <h1
                        className='font-Poppins text-primary text-justify font-black text-sm lg:text-base'
                    >
                        Working Hours: 09:00 hours to 17:30 hours (Saturday and Sunday Holidays)
                    </h1>

                </div>
                <div
                    className=' w-[88%] border-2 flex flex-col lg:flex-row justify-evenly py-5 items-start lg:h-[200px] space-y-2 lg:space-y-0 px-2 lg:px-0 my-5 '
                >
                    <div className='lg:w-[30%]'>
                        <h1 className=' text-base font-Poppins font-semibold text-justify' >
                            Official website to get info of products , board members etc.
                        </h1>
                        <Link
                            to={'/'}
                            className=' text-primary'
                        >
                            https://www.kbhjillhakrushisangh.org
                        </Link>
                    </div>

                    <div
                        className='lg:h-[150px] lg:w-[1px] h-[1px] w-full bg-primary'
                    />
                    <div className='lg:w-[30%]'>
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
                        className='lg:h-[150px] lg:w-[1px] h-[1px] w-full bg-primary'
                    />
                    <div className='lg:w-[30%]'>
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
