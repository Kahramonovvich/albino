'use client'
import Image from "next/image";
import { useState } from "react";
import { Rating } from "@mui/material";
import LikeButtonComponent from "./LikeButtonComponent";
import { partners } from "@/constants/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import ArrowIcon from '@icons/arrowLeft.svg'
import ToBasket from "./ToBasket";

export default function TopProducts({ products, languageId }) {

    const [activeProductBrand, setActiveProductBrandBrand] = useState('albino');

    const selectedProducts = products?.filter((item) => item?.shortDescription?.toLocaleLowerCase() === activeProductBrand?.toLocaleLowerCase());

    return (
        <div className="topProducts mt-[50px]">
            <div className="container">
                <div className="relative">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            480: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        spaceBetween={20}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation]}
                    >
                        {partners.map((item) => (
                            <SwiperSlide key={item.name}>
                                <button
                                    className={`w-full md:h-[142px] md:p-5 rounded-[20px] h-20
                                        ${activeProductBrand.toLocaleLowerCase() === item?.name.toLocaleLowerCase() ? ' border border-customRed border-opacity-20 bg-customRed bg-opacity-20' : 'border'}`}
                                    onClick={() => setActiveProductBrandBrand(item.name)}
                                >
                                    <div className="box relative w-full h-full">
                                        <Image
                                            fill
                                            src={item.img}
                                            style={{ objectFit: 'contain' }}
                                            alt={item.name}
                                        />
                                    </div>
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Навигационные кнопки */}
                    <div className="swiper-button-prev flex items-center justify-center w-10 h-10 bg-customRed rounded-full cursor-pointer absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 text-white" >
                        <ArrowIcon
                            className="rotate-180"
                        />
                    </div>
                    <div className="swiper-button-next flex items-center justify-center w-10 h-10 bg-customRed rounded-full cursor-pointer absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 text-white" >
                        <ArrowIcon />
                    </div>
                </div>

                <div className="bottom mt-[50px]">
                    {Number(languageId) === 1 ?
                        <h2 className="font-semibold text-4xl mb-[50px]">
                            <span className="capitalize">{activeProductBrand}</span> mahsulotlari
                        </h2> :
                        <h2 className="font-semibold text-4xl mb-[50px]">
                            Продукты <span className="capitalize">{activeProductBrand}</span>
                        </h2>
                    }
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-[50px]">
                        {selectedProducts?.slice(0, 8).map((item) => (
                            <div
                                key={item.id}
                                className="box p-px rounded-[20px] bg-gradient-to-b from-customRed to-white"
                            >
                                <div className="box bg-white rounded-[19px]">
                                    <div className="top p-4">
                                        <div className="flex justify-end">
                                            <div className="box flex items-center justify-center w-10 h-10 border rounded-full mb-2">
                                                <LikeButtonComponent id={item.id} />
                                            </div>
                                        </div>
                                        <div className="img relative w-full h-48">
                                            <Image
                                                fill
                                                src={item.images[0].filePath}
                                                style={{ objectFit: 'contain' }}
                                                alt={item.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="bottom p-5">
                                        <div className="text">
                                            <p className="text-[#4D4D4D] mb-2">
                                                {item.name}
                                            </p>
                                            <Rating
                                                name="read-only"
                                                value={item.rating.rate}
                                                readOnly sx={{
                                                    fontSize: '14px'
                                                }}
                                            />
                                        </div>
                                        <ToBasket
                                            id={item.id}
                                            products={products}
                                            languageId={languageId}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};