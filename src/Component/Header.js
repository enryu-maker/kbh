import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE } from '../Assets/Images'
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";
export default function Header() {
    const [isFixed, setIsFixed] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) { // Adjust the scroll threshold as needed
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

    return (
        <div>
            {/* Small Header */}
            <div
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
            </div>
            {/* Big Header */}
            <div
                className=' bg-white h-[150px] w-full hidden lg:flex justify-evenly items-center'
            >
                <div
                    className='flex justify-start items-center '
                >
                    <img
                        className=' h-[130px] w-[130px]'
                        src={IMAGE.icon}
                    />
                    <div>
                        <h1
                            className='uppercase text-sm font-Poppins font-black pl-3 tracking-wider'
                        >
                            कर्मवीर भाऊसाहेब हिरे नाशिक जिल्ला
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
                    <img
                        className=' h-[100px] w-[100px]'
                        src={IMAGE.year}
                    />
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
                        to={"/contact"}
                        className=' text-white font-Poppins text-sm tracking-widest'
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>
        </div>
    )
}
