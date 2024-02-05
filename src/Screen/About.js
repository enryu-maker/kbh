import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"
import { useSelector } from 'react-redux'
import { URLS } from '../Helper/Helper'
import { Helmet } from 'react-helmet'

export default function About() {
    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const about = useSelector(state => state.Reducers.about)
    return (
        <div
            className='w-full justify-start bg-background items-center'
        >
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Our Agricultural Commitment: KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK Advocates for Farmer Prosperity
                </title>
                <description>
                    Learn about KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK's unwavering commitment to supporting farmers. From our mission to our team, delve into the values that drive us to provide top-quality fertilizers, robust steel, and essential tools. Join us in nurturing a thriving farming community.
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
                    About
                </h1>
            </div>
            <div
                className='flex self-center mt-5  justify-center items-center'>
                <h1
                    className='font-Poppins text-primary font-black text-3xl tracking-widest'
                >
                    About Us
                </h1>
            </div>
            <div
                className='flex self-center py-5 flex-col lg:flex-row justify-evenly items-center  lg:justify-around lg:items-start'>
                {
                    about?.map((item, index) => (
                        <>
                            <div
                                key={index}
                                className='lg:h-[500px] h-[400px] lg:w-[30%] w-[88%] border-2 p-2'>
                                <img
                                    className='h-full w-full'
                                    src={URLS.imageurl + item?.image}
                                    alt='aboutimage'
                                />
                            </div>
                            <p
                                className='lg:w-[55%] w-[88%] text-justify mt-2'
                            >
                                {item?.description}
                            </p>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
