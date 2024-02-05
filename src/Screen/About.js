import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"

export default function About() {
    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    return (
        <div
            className='w-full justify-start bg-background items-center'
        >
            <img
                src={IMAGE.header}
            />
            <div
                className=' pl-10 flex self-center mt-5 font-Poppins items-center text-sm space-x-2'>
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
                className='flex self-center py-5  justify-around items-start'>
                <div className='h-[500px] w-[30%] border-2 p-2'>
                    <img
                    className='h-full w-full'
                    src={IMAGE.advhay}
                    />
                </div>
                <p
                    className='w-[55%]'
                >
                    lorem  ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
                    iaculis nulla. Nunc eget odio at sem convallis lo

                </p>
            </div>
        </div>
    )
}
