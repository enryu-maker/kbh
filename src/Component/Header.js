import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import { RiTwitterXLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
import { URLS } from '../Helper/Helper';
import { useSelector } from 'react-redux';
export default function Header() {
    const [isFixed, setIsFixed] = React.useState(false);
    const logo = useSelector(state => state.Reducers.logo)
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) { // Adjust the scroll threshold as needed
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [show, setShow] = React.useState(false)
    return (
        <div>
            {/* Small Header */}
            {/* <div
                className=' bg-black h-[40px] w-full hidden lg:flex justify-center items-center'>
                <div
                    className='flex space-x-2 justify-center items-center'
                >
                    <AiOutlineFacebook
                        size={25}
                        color='#fff'
                    />
                    <AiOutlineInstagram
                        size={25}
                        color='#fff'
                    />
                    <AiOutlineYoutube
                        size={25}
                        color='#fff'
                    />
                    <RiTwitterXLine
                        size={20}
                        color='#fff'
                    />
                </div>
            </div> */}
            {/* Big Header */}
            <div
                className=' bg-white h-[150px] w-full hidden lg:flex justify-evenly items-center'
            >
                <div
                    className='flex justify-start items-center '
                >
                    <img
                        alt='icon'
                        className=' h-[130px] w-[130px]'
                        src={IMAGE.icon}
                    />
                    <div>
                        <h1
                            className='uppercase text-sm font-Poppins font-black pl-3 tracking-wider'
                        >
                            कर्मवीर भाऊसाहेब हिरे नाशिक जिल्हा
                            कृषी औद्योगिक सहकारी संघ लिमिटेड नाशिक
                        </h1>
                        <h1
                            className='uppercase text-xl font-Poppins font-black pl-3 tracking-wider'
                        >
                            KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA <br />
                            KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK
                        </h1>
                    </div>

                </div>
                <div
                    className='flex justify-evenly items-center w-[35%]'
                >
                    {
                        logo?.map((item, index) => (
                            <img
                                key={index}
                                alt='logo'
                                className=' h-[100px] w-[100px]'
                                src={URLS.imageurl + item?.image}
                            />
                        ))
                    }
                </div>


            </div>
            {/* Nav Bar */}
            <div
                className={`${isFixed ? 'fixed top-0 z-50 ' : ''} hidden   bg-primary h-[42px] w-full lg:flex justify-center items-center`}>
                <div
                    className='w-[50%] flex justify-evenly items-center h-full'>
                    <Link
                        to={"/"}
                        className=' text-white font-Poppins text-sm tracking-widest'
                    >
                        HOME
                    </Link>
                    <Link
                        to={'/product'}
                        className=' text-white font-Poppins text-sm tracking-widest'
                    >
                        PRODUCTS
                    </Link>
                    <Link
                        to={'/about'}
                        className=' text-white font-Poppins text-sm tracking-widest'
                    >
                        ABOUT US
                    </Link>
                    <Link
                        to={"/gallery"}
                        className=' text-white font-Poppins text-sm tracking-widest'
                    >
                        GALLERY
                    </Link>
                    <Link
                        to={'/who'}
                        className=' text-white font-Poppins text-sm tracking-widest'
                    >
                        DIRECTOR BOARD
                    </Link>
                    <Link
                        to={"/contact"}
                        className=' text-white font-Poppins text-sm tracking-widest'
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>
            {/* resposive header */}
            <div
                className='lg:hidden transition duration-2000 ease-linear h-auto bg-white w-full fixed z-50 top-0 flex flex-col justify-center  items-center'
            >
                <div
                    className='w-full flex justify-between items-center p-2'
                >
                    <img
                        className='h-[55px] w-[55px]'
                        src={IMAGE.icon}
                        alt='banner'

                    />
                    <div
                        className='flex flex-col justify-center item-center w-[55%]'>
                        <h1
                            className='text-[8px] font-Poppins'
                        >
                            कर्मवीर भाऊसाहेब हिरे नाशिक जिल्ला
                            कृषी औद्योगिक सहकारी संघ लिमिटेड नाशिक
                        </h1>
                        <h1
                            className=' capitalize text-[8px] font-Poppins'
                        >
                            KARMAVEER BHAUSAHEB HIRAY NASHIK JILLHA <br />
                            KRISHI AUDYOGIK SAHAKARI SANGH LTD NASHIK
                        </h1>
                    </div>
                    <IoIosMenu
                        className=' text-primary'
                        onClick={() => {
                            setShow(!show)
                        }}
                        size={40}
                    />
                </div>
                {
                    show ?
                        <div className="w-full flex  flex-col bg-background px-5 py-2 space-y-2">
                            <Link
                                to={"/"}
                                onClick={() => setShow(false)}
                                className=' text-black font-Poppins text-sm tracking-widest'
                            >
                                HOME
                            </Link>
                            <Link
                                to={'/product'}
                                onClick={() => setShow(false)}
                                className=' text-black font-Poppins text-sm tracking-widest'
                            >
                                PRODUCTS
                            </Link>
                            <Link
                                to={'/about'}
                                onClick={() => setShow(false)}
                                className=' text-black font-Poppins text-sm tracking-widest'
                            >
                                ABOUT US
                            </Link>
                            <Link
                                to={"/gallery"}
                                onClick={() => setShow(false)}
                                className=' text-black font-Poppins text-sm tracking-widest'
                            >
                                GALLERY
                            </Link>
                            <Link
                                to={'/who'}
                                onClick={() => setShow(false)}
                                className=' text-black font-Poppins text-sm tracking-widest'
                            >
                                DIRECTOR BOARD
                            </Link>
                            <Link
                                to={"/contact"}
                                onClick={() => setShow(false)}
                                className=' text-black font-Poppins text-sm tracking-widest'
                            >
                                CONTACT US
                            </Link>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}
