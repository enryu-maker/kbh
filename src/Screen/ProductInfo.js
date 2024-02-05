import ReactGA from "react-ga"
import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGE } from "../Assets/Images";

export default function ProductInfo() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  const { state } = useLocation()
  const navigate = useNavigate()
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
        <h1
          className=" cursor-pointer"
          onClick={() => {
            navigate(-1)
          }}
        >
          Products
        </h1>
        <h1>
          |
        </h1>
        <h1>
          {state?.productInfo?.product_name}
        </h1>
      </div>
      <div
        className='flex self-center py-5  justify-center items-center'>
        <h1
          className='font-Poppins text-primary font-black text-3xl tracking-widest'
        >
          {state?.productInfo?.product_name}
        </h1>
      </div>
    </div>
  )
}
