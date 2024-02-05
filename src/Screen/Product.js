import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from "react-ga"
import { useSelector } from 'react-redux'
export default function Product() {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    const navigate = useNavigate()
    const products = useSelector(state => state.Reducers.products)
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
                className='flex self-center my-5 flex-col  justify-center lg:items-start items-center'>
                {
                    products?.map((item, index) => (
                        <>
                            <h1
                                className='lg:pl-10 font-Poppins text-primary text-center font-black text-2xl tracking-widest'
                            >
                                {item?.dept_name}
                            </h1>
                            <div className='flex flex-wrap justify-evenly items-start w-full my-10'>
                                {
                                    item?.products?.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={()=>{
                                                navigate(`/info/${item?.product_name}`,{
                                                    state:{
                                                        productInfo: item
                                                        }
                                                })
                                            }}
                                            className='flex flex-col w-[50%] lg:w-auto justify-center items-center my-1'
                                        >
                                            <img
                                                src={item?.image}
                                                alt={item?.product_name}
                                                className='h-[120px] w-[120px] rounded-full border-2 border-primary'
                                            />
                                            <h1
                                                className='font-Poppins self-center text-center text-primary font-black text-base tracking-wider'
                                            >
                                                {item?.product_name}
                                            </h1>
                                        </button>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
            </div>

        </div>
    )
}
