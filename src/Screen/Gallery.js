import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"
import { useSelector } from 'react-redux'
import { URLS } from '../Helper/Helper'
import { Helmet } from 'react-helmet'

export default function Gallery() {
    const gallery = useSelector(state => state.Reducers.gallery)
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
                    Visualizing Agricultural Excellence: Explore KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK's Gallery
                </title>
                <description>
                    Immerse yourself in the world of agricultural success through KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK's gallery. Witness the impact of our quality fertilizers, robust steel, and essential tools. Join us in celebrating the achievements of farmers who trust our products.
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
                    Gallery
                </h1>
            </div>
            <div
                className='flex self-center mt-5  justify-center items-center'>
                <h1
                    className='font-Poppins text-primary font-black text-3xl tracking-widest'
                >
                    Gallery
                </h1>
            </div>
            <div
                className=' flex flex-wrap justify-evenly items-center py-10'
            >
                {
                    gallery.map((item, index) => (
                        <div
                            key={index}
                            className=' border-2 p-2 flex w-[300px] flex-col items-center space-y-2'
                        >
                            <img
                                alt='banner'
                                className='h-[200px] w-full object-cover'
                                src={URLS.imageurl + item?.image}
                            />
                            <h1
                                className='font-Poppins font-black text-lg tracking-widest'
                            >
                                {item?.title}
                            </h1>
                            <p
                                className='text-sm text-gray-400 text-justify'
                            >
                                {item?.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
