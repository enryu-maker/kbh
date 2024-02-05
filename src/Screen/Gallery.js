import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"

export default function Gallery() {
    React.useEffect(()=>{
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[])
    return (
        <div
            className='w-full justify-start bg-background h-full items-center'
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
                <div
                    className=' border-2 p-2 flex w-[300px] flex-col items-center space-y-2'
                >
                    <img
                        className='h-[200px] w-full object-cover'
                        src={IMAGE.header}
                    />
                    <h1
                        className='font-Poppins font-black text-lg tracking-widest'
                    >
                        Sample  Event
                    </h1>
                    <p 
                    className='text-sm text-gray-400 text-justify'
                    >
                        lorem  ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec sem convallis bibendum. Proin fermentum consequat volutpat
                    </p>
                </div>
                <div
                    className=' border-2 p-2 flex w-[300px] flex-col items-center space-y-2'
                >
                    <img
                        className='h-[200px] w-full object-cover'
                        src={IMAGE.header}
                    />
                    <h1
                        className='font-Poppins font-black text-lg tracking-widest'
                    >
                        Sample  Event
                    </h1>
                    <p 
                    className='text-sm text-gray-400 text-justify'
                    >
                        lorem  ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec sem convallis bibendum. Proin fermentum consequat volutpat
                    </p>
                </div>
                <div
                    className=' border-2 p-2 flex w-[300px] flex-col items-center space-y-2'
                >
                    <img
                        className='h-[200px] w-full object-cover'
                        src={IMAGE.header}
                    />
                    <h1
                        className='font-Poppins font-black text-lg tracking-widest'
                    >
                        Sample  Event
                    </h1>
                    <p 
                    className='text-sm text-gray-400 text-justify'
                    >
                        lorem  ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec sem convallis bibendum. Proin fermentum consequat volutpat
                    </p>
                </div>
                <div
                    className=' border-2 p-2 flex w-[300px] flex-col items-center space-y-2'
                >
                    <img
                        className='h-[200px] w-full object-cover'
                        src={IMAGE.header}
                    />
                    <h1
                        className='font-Poppins font-black text-lg tracking-widest'
                    >
                        Sample  Event
                    </h1>
                    <p 
                    className='text-sm text-gray-400 text-justify'
                    >
                        lorem  ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec sem convallis bibendum. Proin fermentum consequat volutpat
                    </p>
                </div>
            </div>
        </div>
    )
}
