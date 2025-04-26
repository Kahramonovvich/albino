'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import ArrowLeft from '@/assets/icons/arrowLeft.svg';
import { Autoplay } from "swiper/modules";
import 'swiper/css/autoplay';
import CarIcon from '@/assets/icons/delivery-truck 1.svg';
import HeadphoneIcon from '@icons/headphones 1.svg';
import ShoppingBag from '@icons/shopping-bag.svg';
import PackageIcon from '@icons/package.svg';

const carusel = [
    {
        id: 1,
        title: 'Uy va oshxonangiz uchun kerakli barcha mahsulotlar',
        subTitle: 'Yuqori sifat, hamyonbop narx',
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
        title: 'Customer Support',
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
                        className="w-full h-[300px] md:h-[800px]"
                    >
                        {carusel.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Image
                                    fill
                                    alt={item.title}
                                    src={item.img}
                                    className="object-cover"
                                />
                                <div className="box flex items-center justify-center w-full">
                                    <div className="absolute top-20 md:top-48 z-30 w-10/12 text-center">
                                        <h1 className="font-semibold text-2xl md:text-7xl leading-tight mb-4 md:mb-[30px]">
                                            {item.title}
                                        </h1>
                                        <h2 className="text-lg md:text-[32px] leading-tight mb-3">
                                            {item.subTitle}
                                        </h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="bottom mt-5 md:-mt-[64px] mx-5 md:mx-[52px] relative h-auto md:h-32">
                    {/* DESKTOP version */}
                    <div className="hidden md:flex absolute z-40 w-full rounded-lg px-10 shadow-md bg-white h-full items-center justify-between">
                        {ad.map((item) => (
                            <div className="flex items-center gap-x-4" key={item.title}>
                                <div className="img">{item.icon}</div>
                                <div className="text">
                                    <p className='font-semibold leading-tight mb-2'>{item.title}</p>
                                    <p className='text-sm leading-normal text-[#999999]'>{item.subTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MOBILE version */}
                    <div className="flex md:hidden z-40 w-full rounded-lg px-4 py-6 shadow-md bg-white flex-col gap-6">
                        {ad.map((item) => (
                            <div className="flex items-center gap-x-3" key={item.title}>
                                <div className="img">{item.icon}</div>
                                <div className="text">
                                    <p className='font-semibold text-base mb-1'>{item.title}</p>
                                    <p className='text-sm text-gray-500'>{item.subTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
