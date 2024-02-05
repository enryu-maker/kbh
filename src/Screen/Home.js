import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IMAGE } from '../Assets/Images';
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga"
import { useSelector } from 'react-redux';
import { URLS } from '../Helper/Helper';

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
    const about = useSelector(state => state.Reducers.about)
    const home = useSelector(state => state.Reducers.home)
    return (
        <div
            className='w-full justify-start items-center'
        >
            <Carousel
                infiniteLoop
                autoPlay
                swipeable={true}
                showThumbs={false}
                showIndicators={false}
                showArrows={false}
                showStatus={false}
                interval={3500}
                transitionTime={2000}
            >
                <>
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
                </>
            </Carousel>
            <div
                className='w-full flex lg:h-[600px] lg:flex-row flex-col justify-center lg:justify-between items-start'>
                <div
                    className='h-[100%] w-full lg:w-[45%] bg-background justify-around items-center flex flex-wrap'
                >
                    {
                        community?.map((item, index) => (
                            <div
                                key={index}
                                className='flex flex-col justify-center items-center'
                            >
                                <img
                                    alt='people'
                                    className='h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] rounded-full border-primary border-2 mt-5 object-fill'
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
                        ))
                    }
                    <button
                        onClick={() => {
                            navigate('/who')
                        }}
                        className='bg-primary tracking-widest px-5 py-2 mt-[100px] rounded-sm text-white'>
                        View Managment
                    </button>
                </div>
                <div
                    className=' bg-background h-[100%] w-full lg:w-[70%] px-5 lg:px-20 space-y-5 pt-10'
                >
                    <h1
                        className='text-3xl font-Poppins font-black text-primary  tracking-wider'
                    >
                        About Organization
                    </h1>
                    <p
                        className=' text-base font-Poppins text-justify'
                    >
                        {about[0]?.description.slice(0, 400)}
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
                            className='lg:h-[350px] w-full'
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
                                    src={URLS.imageurl + item?.icon}
                                    alt={item?.product_name}
                                    className='h-[120px] w-[120px] rounded-full object-cover border-2 border-primary'
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
                <div className='flex flex-wrap justify-evenly w-full mt-10'>
                    {
                        company?.map((item, index) => (
                            <button
                                key={index}
                                className='flex flex-col w-[50%] lg:w-auto justify-center items-center my-1'
                            >
                                <img
                                    src={URLS.imageurl + item?.image}
                                    alt={item?.product_name}
                                    className='h-[120px] w-[120px] rounded-full border-2 object-cover border-primary'
                                />
                                <h1
                                    className=' capitalize font-Poppins self-center text-center text-primary font-black text-base tracking-wider'
                                >
                                    {item?.name}
                                </h1>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
