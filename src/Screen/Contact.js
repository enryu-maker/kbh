import React from 'react'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"

export default function Contact() {
    React.useEffect(()=>{
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[])
    return (
        <div
            className='w-full justify-start bg-background h-full items-center'
        >
            <Header />
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
        </div>
    )
}
