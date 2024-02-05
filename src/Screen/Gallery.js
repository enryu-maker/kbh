import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"
import { useSelector } from 'react-redux'
import { URLS } from '../Helper/Helper'

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
