import React from 'react'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'

export default function Product() {
    return (
        <div
            className='w-full justify-start items-center'
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
                    Product
                </h1>
            </div>
        </div>
    )
}
