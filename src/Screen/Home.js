import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IMAGE } from '../Assets/Images';
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga"
import { useSelector } from 'react-redux';
import { URLS } from '../Helper/Helper';
import { Helmet } from 'react-helmet';
import Marquee from "react-fast-marquee";
export default function Home() {
    const navigate = useNavigate()
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    const company = useSelector(state => state.Reducers.company)
    const banner = useSelector(state => state.Reducers.banner)
    const community = useSelector(state => state.Reducers.community)
    const mini = useSelector(state => state.Reducers.mini)
    const home = useSelector(state => state.Reducers.home)
    return (
        <div
            className='w-full justify-start bg-background items-center'
        >
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Cultivating Success: Your Premier Source for Agricultural Excellence | KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK
                </title>
                <description>
                    Welcome to KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK, your go-to destination for premium agricultural products. Discover a wide range of fertilizers, robust steel, and essential tools that empower farmers. Explore our site and join us in cultivating a brighter future for agriculture
                </description>
            </Helmet>

            <Carousel
                infiniteLoop
                autoPlay
                swipeable={true}
                showThumbs={false}
                showIndicators={true}
                showArrows={false}
                showStatus={false}
                interval={3500}
                transitionTime={2000}
            >
                {
                    banner?.map((item, index) => (
                        <img
                            key={index}
                            alt='banner'
                            className='w-full h-[250px] lg:h-[500px] object-fill'
                            src={URLS.imageurl + item?.image}
                        />
                    ))
                }
            </Carousel>
            <h1
                className='text-3xl font-Poppins font-black bg-background py-2 self-center w-full flex items-center justify-center text-primary  tracking-wider'
            >
                About Organization
            </h1>
            <div
                className='w-full flex  lg:flex-row flex-col justify-center lg:justify-between items-start'>
                    <div
                        className='h-[100%] w-full lg:w-[45%] bg-background justify-around items-center flex flex-wrap'
                    >
                        {
                            community?.map((item, index) => {
                                if (item.designation_name != "Director")
                                    return (
                                        <div
                                            key={index}
                                            className='flex flex-col justify-center items-center'
                                        >
                                            <img
                                                alt='people'
                                                className='h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] rounded-full  border-2 mt-5 object-fill'
                                                src={URLS.imageurl + item?.persons[0]?.image}
                                            />
                                            <h1
                                                className=' capitalize text-sm lg:text-base font-bold'
                                            >
                                                {item?.persons[0]?.name}
                                            </h1>
                                            <h1
                                                className=' capitalize'
                                            >
                                                {item?.designation_name}
                                            </h1>
                                        </div>
                                    )
                            })
                        }
                    </div>
                <div
                    className=' bg-background h-[100%] w-full lg:w-[70%] px-5 lg:px-20 space-y-5 pt-10'
                >

                    <p
                        className=' text-base font-Poppins text-justify'
                    >
                        {mini[0]?.mini_description}
                    </p>
                    <button
                        onClick={() => {
                            navigate('/about')
                        }}
                        className='bg-primary tracking-widest px-5 py-2 mt-[100px] rounded-sm text-white'>
                        Read More
                    </button>
                    <div
                        className='flex  justify-evenly lg:ml-[180px] -mt-[150px] items-start'
                    >
                        <img
                            className='lg:h-[400px] w-full'
                            src={IMAGE.agriculture}
                            alt='banner'
                        />
                    </div>
                </div>
            </div>
            <div
                className='w-full flex flex-col bg-white items-center py-5'>
                <h1
                    className=' font-Poppins text-primary font-black text-3xl tracking-widest'
                >
                    Products
                </h1>
                <div className='flex flex-wrap justify-evenly w-full mt-10'>
                    {
                        home?.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    navigate(`/info/${item?.product_name}`, {
                                        state: {
                                            productInfo: item
                                        }
                                    })
                                }}
                                className='flex flex-col w-[50%] lg:w-auto justify-center items-center my-1'
                            >
                                <img
                                    src={URLS.imageurl + item?.image}
                                    alt={item?.product_name}
                                    className='h-[120px] w-[120px] rounded-full object-cover border-2 '
                                />
                                <h1
                                    className=' capitalize font-Poppins self-center text-center text-primary font-black text-base tracking-wider'
                                >
                                    {item?.product_name}
                                </h1>
                            </button>
                        ))
                    }
                </div>
                <button
                    onClick={() => {
                        navigate('/product')
                    }}
                    className='bg-primary tracking-widest px-5 py-2 mt-[50px] rounded-sm text-white'>
                    View  All Products
                </button>
            </div>
            <div
                className='w-full flex flex-col py-5 bg-background mt-5 items-center'>
                <h1
                    className=' capitalize font-Poppins text-primary font-black text-3xl tracking-widest'
                >
                    Companies
                </h1>
                <Marquee >
                    <div
                        className='flex justify-center items-start mt-5'
                    >
                        {
                            company?.map((item, index) => (
                                <button
                                    key={index}
                                    className='flex flex-col w-[50%]  lg:w-[200px] justify-center items-center my-1'
                                >
                                    <img
                                        src={URLS.imageurl + item?.image}
                                        alt={item?.product_name}
                                        className='h-[120px] w-[120px] rounded-full border-2 object-cover '
                                    />
                                    <h1
                                        className=' capitalize font-Poppins self-center text-center text-primary font-black text-xs tracking-wider'
                                    >
                                        {item?.name}
                                    </h1>
                                </button>
                            ))
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    )
}
