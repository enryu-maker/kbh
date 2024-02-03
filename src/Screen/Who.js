import React from 'react'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from 'react-ga';

export default function Who() {
    React.useEffect(()=>{
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[])
    return (
        <div
            className='w-full justify-center items-center'
        >
            <Header />
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
                    Who's Who
                </h1>
            </div>
        </div>
    )
}
