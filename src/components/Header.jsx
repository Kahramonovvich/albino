'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import 'swiper/css/autoplay';
import CarIcon from '@/assets/icons/delivery-truck 1.svg';
import HeadphoneIcon from '@icons/headphones 1.svg';
import ShoppingBag from '@icons/shopping-bag.svg';
import PackageIcon from '@icons/package.svg';
import { useState } from 'react';
import { Modal } from '@mui/material';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

const caruselData = {
    uz: [
        {
            id: 1,
            title: 'Uy va oshxonangiz uchun kerakli barcha mahsulotlar',
            subTitle: 'Yuqori sifat, hamyonbop narx',
            img: '/images/carusel.png'
        }
    ],
    ru: [
        {
            id: 1,
            title: 'Все необходимые товары для вашего дома и кухни',
            subTitle: 'Высокое качество, доступная цена',
            img: '/images/carusel.png'
        }
    ]
};

const adData = {
    uz: [
        {
            icon: <CarIcon />,
            title: 'Tezkor yetkazib berish',
            subTitle: 'Barcha buyurtmalaringiz uchun Tezkor yetkazib berish'
        },
        {
            icon: <HeadphoneIcon />,
            title: 'Mijozlarni qo‘llab-quvvatlash',
            subTitle: 'Yordam xizmatiga tezkor kirish',
            but: true,
        },
        {
            icon: <ShoppingBag />,
            title: '100% xavfsiz to‘lov',
            subTitle: 'Pul xavfsizligini ta’minlaymiz'
        },
        {
            icon: <PackageIcon />,
            title: 'Pulni qaytarish kafolati',
            subTitle: '30 kun ichida pulni qaytarish imkoniyati'
        },
    ],
    ru: [
        {
            icon: <CarIcon />,
            title: 'Быстрая доставка',
            subTitle: 'Быстрая доставка всех ваших заказов'
        },
        {
            icon: <HeadphoneIcon />,
            title: 'Поддержка клиентов',
            subTitle: 'Мгновенный доступ к поддержке',
            but: true,
        },
        {
            icon: <ShoppingBag />,
            title: '100% безопасная оплата',
            subTitle: 'Мы гарантируем безопасность ваших средств'
        },
        {
            icon: <PackageIcon />,
            title: 'Гарантия возврата денег',
            subTitle: '30-дневная гарантия возврата денег'
        },
    ]
};

export default function Header({ languageId }) {
    const carusel = languageId === 2 ? caruselData.ru : caruselData.uz;
    const ad = languageId === 2 ? adData.ru : adData.uz;

    const [openNum, setOpenNum] = useState(false);

    const handleCloseNum = () => setOpenNum(false);

    return (
        <div className="header mt-5">
            <Modal
                open={openNum}
                onClose={handleCloseNum}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="box flex items-center w-3/4 md:w-auto gap-x-5 bg-white p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
                    <PhoneInTalkRoundedIcon />
                    <a
                        href="tel:+998555000098"
                        className='text-lg font-semibold'
                    >
                        +998 55 500 00 98
                    </a>
                </div>
            </Modal>
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
                    {/* DESKTOP */}
                    <div className="hidden md:flex absolute gap-x-5 z-40 w-full rounded-lg px-10 shadow-md bg-white h-full items-center justify-between">
                        {ad.map((item) => (
                            <div
                                className="flex items-center gap-x-4 cursor-pointer"
                                key={item.title}
                                onClick={() => item.but && setOpenNum(true)}
                            >
                                <div className="img">{item.icon}</div>
                                <div className="text">
                                    <p className='font-semibold leading-tight mb-2'>{item.title}</p>
                                    <p className='text-sm leading-normal text-[#999999]'>{item.subTitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* MOBILE */}
                    <div className="flex md:hidden z-40 w-full rounded-lg px-4 py-6 shadow-md bg-white flex-col gap-6">
                        {ad.map((item) => (
                            <div
                                className="flex items-center gap-x-3"
                                key={item.title}
                                onClick={() => item.but && setOpenNum(true)}
                            >
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
};