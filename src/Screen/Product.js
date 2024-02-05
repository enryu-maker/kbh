import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"
export default function Product() {
    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    const data = [1, 2, 3]
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
                    Product
                </h1>
            </div>
            <div
                className='flex self-center mt-5  justify-center items-center'>
                <h1
                    className='font-Poppins text-primary font-black text-3xl tracking-widest'
                >
                    Products
                </h1>
            </div>
            <div
                className='flex self-center my-5 flex-col  justify-start items-start'>
                <h1
                    className='pl-10 font-Poppins text-primary font-black text-2xl tracking-widest'
                >
                    Fertilizer Department
                </h1>
                <div className='flex flex-wrap justify-evenly w-full my-10'>
                    {
                        data.map((item, index) => (
                            <div
                            className='flex flex-col justify-center items-center'
                            >
                                <button
                                    className='bg-black h-[120px] w-[120px] rounded-full'
                                >

                                </button>
                                <h1
                                    className='font-Poppins text-primary font-black text-base tracking-wider'
                                >
                                    Fertilizer Department
                                </h1>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
