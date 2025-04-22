'use client'
import Image from "next/image";
import SearchIcon from '@/assets/icons/Search.svg'
import Link from "next/link";
import HeartIcon from '@/assets/icons/Heart.svg'
import BagIcon from '@/assets/icons/Bag.svg'
import BurgerIcon from '@/assets/icons/burger.svg'
import ArrowIcon from '@/assets/icons/Chevron Down.svg'
import PhoneIcon from '@/assets/icons/PhoneCall.svg'
import { navMenu } from "@/constants/constants";
import { useState } from "react";

export default function Nav() {

    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="navTop py-6">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Link
                            href={'/'}
                            className="logo">
                            <div className="img relative w-[140px] h-9">
                                <Image
                                    fill
                                    src={'/images/logo.png'}
                                    alt="Logo"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <p className="font-medium text-[9px]">
                                Eng sifatli, eng hamyonbob
                            </p>
                        </Link>
                        <div className="form w-[500px] flex relative">
                            <div className="box absolute top-1/2 -translate-y-1/2 left-4">
                                <SearchIcon />
                            </div>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search"
                                className="border outline-none rounded-l-md flex-1 px-10 pr-5"
                            />
                            <button className="bg-customRed px-6 py-3.5 text-white rounded-r-md">Search</button>
                        </div>
                        <div className="left flex items-center">
                            <Link
                                href={'/#'}
                            >
                                <HeartIcon />
                            </Link>
                            <div className="box w-px h-6 bg-gray-300 mx-4"></div>
                            <Link
                                href={'/#'}
                            >
                                <BagIcon />
                            </Link>
                            <div className="box ml-3">
                                <p className="text-[11px]">Shopping cart:</p>
                                <p className="font-medium">$57.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navBottom bg-[#F2F2F2]">
                <div className="container">
                    <div className="box flex items-center justify-between relative">
                        <div className="left flex items-center gap-x-8">
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-x-2 text-white bg-customRed py-4 px-6"
                            >
                                <BurgerIcon />
                                All Categories
                                <ArrowIcon />
                            </button>
                            <Link
                                href={'/'}
                                className="flex items-center gap-x-1 text-customRed"
                            >
                                Home
                                <ArrowIcon />
                            </Link>
                            <Link
                                href={'/catalog/barcha-mahsulotlar'}
                                className="flex items-center gap-x-1 text-[#808080]"
                            >
                                Shop
                                <ArrowIcon />
                            </Link>
                            <Link
                                href={'/#'}
                                className="flex items-center gap-x-1 text-[#808080]"
                            >
                                Pages
                                <ArrowIcon />
                            </Link>
                            <Link
                                href={'/#'}
                                className="flex items-center gap-x-1 text-[#808080]"
                            >
                                Blog
                                <ArrowIcon />
                            </Link>
                            <Link
                                href={'/#'}
                                className="flex items-center gap-x-1 text-[#808080]"
                            >
                                About Us
                            </Link>
                            <Link
                                href={'/#'}
                                className="flex items-center gap-x-1 text-[#808080]"
                            >
                                Contact Us
                            </Link>
                        </div>
                        <div className="right flex items-center gap-x-2">
                            <PhoneIcon />
                            <a href="tel:+998995550114" className="font-medium">(99) 555-01-14</a>
                        </div>
                        {open && (
                            <div className="box bg-white absolute z-40 top-full border p-3 mt-5 rounded-md flex items-center gap-5 justify-between flex-wrap">
                                {navMenu.map((menu) => (
                                    <Link
                                        href={menu.slug}
                                        key={menu.id}
                                        className="box flex items-center gap-x-3 border px-2 py-1 rounded-md hover:bg-slate-300"
                                    >
                                        <div className="img relative w-10 h-10">
                                            <Image
                                                fill
                                                src={menu.img}
                                                style={{ objectFit: 'contain' }}
                                                alt={menu.name}
                                            />
                                        </div>
                                        {menu.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};