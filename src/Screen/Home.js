import React from 'react'
import Header from '../Component/Header'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IMAGE } from '../Assets/Images';
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga"

export default function Home() {
    const navigate = useNavigate()
    React.useEffect(()=>{
        ReactGA.pageview(window.location.pathname + window.location.search);
    },[])
    return (
        <div
            className='w-full justify-start items-center'
        >
            <Header />
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
                <div className='w-full h-[500px] bg-slate-300' />
                <div className='w-full h-[500px] bg-red-300' />
                <div className='w-full h-[500px] bg-green-300' />
                <div className='w-full h-[500px] bg-yellow-300' />
            </Carousel>
            <div
                className='w-full flex h-[600px] justify-between items-start'>
                <div
                    className='h-[100%] w-[45%]  justify-around items-center flex flex-wrap'
                >
                    <div
                        className='flex flex-col justify-center items-center'
                    >
                        <img
                            className=' h-[180px] w-[180px] rounded-full border-primary border-2 mt-5 object-fill'
                            src={IMAGE.advhay}
                        />
                        <h1
                            className=' font-bold'
                        >
                            Dr.Shri.Advhay Hirey - Patil
                        </h1>
                        <h1>
                            Chairman
                        </h1>
                    </div>

                    <div
                        className='flex flex-col justify-center items-center'
                    >
                        <img
                            className=' h-[180px] w-[180px] rounded-full border-primary border-2 mt-5 object-fill'
                            src={IMAGE.bhaskar}
                        />
                        <h1
                            className=' font-bold'
                        >
                            Shri.Bhaskarao Bankar
                        </h1>
                        <h1>
                            Vice Chairman
                        </h1>
                    </div>
                    <div
                        className='flex  flex-col justify-center items-center'
                    >
                        <img
                            className=' h-[180px] w-[180px] rounded-full border-primary border-2 mt-5 object-fill'
                            src={IMAGE.dilip}
                        />
                        <h1
                            className='font-bold'
                        >
                            Shri.Dilip Gadekar
                        </h1>
                        <h1>
                            Executive Director
                        </h1>
                    </div>
                </div>
                <div
                    className=' bg-white h-[100%] w-[70%] px-20 space-y-5 pt-10'
                >
                    <h1
                        className='uppercase text-2xl font-Poppins font-black  tracking-wider'
                    >
                        About Organization
                    </h1>
                    <p
                        className=' text-base font-Poppins text-justify'
                    >
                        The DA & FW is organized into 28 Divisions and has five attached offices and twenty-one subordinate offices which are spread across the country for coordination with state level agencies and implementation of Central Sector Schemes in their respective fields.
                    </p>
                    <button
                        onClick={() => {
                            navigate('/about')
                        }}
                        className='bg-primary tracking-widest px-5 py-2 mt-[100px] rounded-sm text-white'>
                        Read More
                    </button>
                    <div
                        className='flex  justify-evenly ml-[180px] -mt-[150px] items-start'
                    >
                        <img
                            className='h-[350px]'
                            src={IMAGE.agriculture}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
