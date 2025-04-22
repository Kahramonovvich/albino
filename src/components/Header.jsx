'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import ArrowLeft from '@/assets/icons/arrowLeft.svg'
import { Autoplay } from "swiper/modules";
import 'swiper/css/autoplay';
import CarIcon from '@/assets/icons/delivery-truck 1.svg'
import HeadphoneIcon from '@icons/headphones 1.svg'
import ShoppingBag from '@icons/shopping-bag.svg'
import PackageIcon from '@icons/package.svg'

const carusel = [
    {
        id: 1,
        title: 'Eng sifatli mahsulotlar',
        subTitle: 'Xarid qilishga shoshiling',
        img: '/images/carusel.png'
    },
    {
        id: 2,
        title: 'Eng sifatli mahsulotlar',
        subTitle: 'Xarid qilishga shoshiling',
        img: '/images/carusel.png'
    },
    {
        id: 3,
        title: 'Eng sifatli mahsulotlar',
        subTitle: 'Xarid qilishga shoshiling',
        img: '/images/carusel.png'
    },
];

const ad = [
    {
        icon: <CarIcon />,
        title: 'Free Shipping',
        subTitle: 'Free shipping on all your order'
    },
    {
        icon: <HeadphoneIcon />,
        title: 'Customer Support 24/7',
        subTitle: 'Instant access to Support'
    },
    {
        icon: <ShoppingBag />,
        title: '100% Secure Payment',
        subTitle: 'We ensure your money is save'
    },
    {
        icon: <PackageIcon />,
        title: 'Money-Back Guarantee',
        subTitle: '30 Days Money-Back Guarantee'
    },
];

export default function Header() {
    return (
        <div className="header mt-5">
            <div className="container">
                <div className="carusel relative">
                    <Swiper
                        spaceBetween={50}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true
                        }}
                        modules={[Autoplay]}
                        className='w-full h-[800px]'
                    >
                        {carusel.map((item) => (
                            <SwiperSlide
                                key={item.id}
                            >
                                <Image
                                    fill
                                    alt={item.title}
                                    src={item.img}
                                />
                                <div className="box flex items-center justify-center w-full">
                                    <div className="absolute top-48 z-30 w-[450px] text-center">
                                        <h1
                                            className='font-semibold text-7xl leading-tight mb-[30px]'
                                        >
                                            {item.title}
                                        </h1>
                                        <h2 className='text-[32px] leading-tight mb-3'>
                                            {item.subTitle}
                                        </h2>
                                        <p>Tekin yetkazib berish xizmatidan foydalaning</p>
                                        <Link
                                            href={'/catalog/barcha-mahsulotlar'}
                                            className='bg-customRed px-2 py-4 text-white rounded-full inline-flex items-center gap-x-2 mt-[30px]'
                                        >
                                            Buyurtma qilish
                                            <ArrowLeft />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="bottom -mt-[64px] h-32 mx-[52px] relative">
                    <div className="box absolute z-40 w-full rounded-lg h-full px-10 shadow-md bg-white flex items-center justify-between">
                        {ad.map((item) => (
                            <div className="box flex items-center gap-x-4" key={item.title}>
                                <div className="img">
                                    {item.icon}
                                </div>
                                <div className="text">
                                    <p className='font-semibold leading-tight mb-2'>{item.title}</p>
                                    <p className='text-sm leading-normal text-[#999999]'>{item.subTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};