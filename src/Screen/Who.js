import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import ReactGA from 'react-ga';
import { useSelector } from 'react-redux';
import { URLS } from '../Helper/Helper';

export default function Who() {
    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    const community = useSelector(state => state.Reducers.community)
    return (
        <div
            className='w-full bg-background justify-center items-center'
        >
            <img
                src={IMAGE.header}
                alt='head'
                className='h-[200px] lg:h-auto w-auto object-cover lg:object-contain'
            />
            <div
                className=' pl-10 flex self-center py-5 font-Poppins items-center text-sm space-x-2'>
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
            <div
                className='h-[100%] w-full  py-5 bg-background justify-evenly items-center flex flex-wrap'
            >
                {
                    community?.map((item, index) => (
                        <div
                            className='flex flex-col justify-center items-center'
                        >
                            <img
                                className='h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] rounded-full border-primary border-2 mt-5 object-fill'
                                src={URLS.imageurl + item?.persons[0]?.image}
                                alt='banner'
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
            </div>
        </div>
    )
}
