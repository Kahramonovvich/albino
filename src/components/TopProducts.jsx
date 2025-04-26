'use client'

import { products } from "@/constants/constants";
import Image from "next/image";
import { useState } from "react";
import LikeIcon from '@icons/Add To wishlist.svg'
import { Rating } from "@mui/material";

const brands = [
    {
        brand: 'uzum',
        img: '/images/Uzum-01 5.png'
    },
    {
        brand: 'bosch',
        img: '/images/image 2.png'
    },
    {
        brand: 'kukmara',
        img: '/images/2kY1s9Ga2opCeADADSqnx8jWKDT 5.png'
    },
    {
        brand: 'texnomart',
        img: '/images/texnomart_logo-01 4.png'
    },
];

export default function TopProducts() {

    const [activeProductBrand, setActiveProductBrandBrand] = useState('uzum');

    const selectedProducts = products.filter((item) => item.brand.toLocaleLowerCase() === activeProductBrand.toLocaleLowerCase());

    return (
        <div className="topProducts mt-[50px]">
            <div className="container">
                <div className="grid grid-cols-4 gap-x-10">
                    {brands.map((item) => (
                        <button
                            className={`w-full h-[142px] px-8 py-10 rounded-[20px]
                                ${activeProductBrand.toLocaleLowerCase() === item.brand.toLocaleLowerCase() ? 'bg-customRed' : ''}`}
                            key={item.brand}
                            onClick={() => setActiveProductBrandBrand(item.brand)}
                        >
                            <div className="box relative w-full h-full">
                                <Image
                                    fill
                                    src={item.img}
                                    style={{ objectFit: 'contain' }}
                                    alt={item.brand}
                                />
                            </div>
                        </button>
                    ))}
                </div>
                <div className="bottom mt-[50px]">
                    <h2 className="font-semibold text-4xl mb-[50px]">
                        <span className="capitalize">{activeProductBrand}</span> mahsulotlari
                    </h2>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-[50px]">
                        {selectedProducts?.slice(0, 8).map((item) => (
                            <div
                                key={item.id}
                                className="box p-px rounded-[20px] bg-gradient-to-b from-customRed to-white"
                            >
                                <div className="box bg-white rounded-[19px]">
                                    <div className="top p-4">
                                        <div className="flex justify-end">
                                            <LikeIcon />
                                        </div>
                                        <div className="img relative w-full h-48">
                                            <Image
                                                fill
                                                src={item.img}
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
                                            <Rating name="read-only" value={item.rating.rate} readOnly sx={{
                                                fontSize: '14px'
                                            }} />
                                        </div>
                                        <button className="bg-customRed py-3 mt-3 rounded-full w-full text-white font-semibold leading-tight">
                                            Buyurtma qilish
                                        </button>
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