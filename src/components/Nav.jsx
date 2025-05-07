'use client'
import Image from "next/image";
import SearchIcon from '@/assets/icons/Search.svg';
import Link from "next/link";
import HeartIcon from '@/assets/icons/Heart.svg';
import BagIcon from '@/assets/icons/Bag.svg';
import ArrowIcon from '@/assets/icons/Chevron Down.svg';
import PhoneIcon from '@/assets/icons/PhoneCall.svg';
import { navMenu } from "@/constants/constants";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { usePathname } from "next/navigation";

export default function Nav({ languageId }) {

    const pathName = usePathname();

    const [open, setOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(Number(languageId) === 1 ? 'uz' : 'ru');
    const [openLang, setOpenLang] = useState(false);

    return (
        <nav>
            {/* Top nav */}
            <div className="navTop py-4 border-b">
                <div className="container">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href={'/'} className="flex flex-col items-center">
                            <div className="relative w-[120px] h-8">
                                <Image
                                    fill
                                    src={'/images/logo.png'}
                                    alt="Logo"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <p className="font-medium text-[8px]">Siz kutgandan ko'proq</p>
                        </Link>

                        {/* Desktop search */}
                        <div className="hidden md:flex form w-[400px] relative">
                            <div className="absolute top-1/2 left-4 -translate-y-1/2">
                                <SearchIcon />
                            </div>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search"
                                className="border outline-none rounded-l-md flex-1 px-10 pr-5"
                            />
                            <button className="bg-customRed px-5 py-3 text-white rounded-r-md">Search</button>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-4">
                            <Link href={'/favorites'}><HeartIcon /></Link>
                            <Link href={'/basket'}><BagIcon /></Link>
                            <div className="box flex items-center relative">
                                <button className="font-bold flex items-center" onClick={() => setOpenLang(!openLang)}>
                                    <span className={`fi fi-${selectedLanguage}`}></span>
                                </button>
                                {openLang && (
                                    <div className="box flex gap-x-2 mt-2 z-50 absolute top-full right-1/2 translate-x-1/2">
                                        <Link
                                            href={pathName.replace(/^\/(uz|ru)/, '/uz')}
                                            onClick={() => { setOpenLang(false); setSelectedLanguage('uz'); }}
                                        >
                                            <span className="fi fi-uz"></span>
                                        </Link>
                                        <Link
                                            href={pathName.replace(/^\/(uz|ru)/, '/ru')}
                                            onClick={() => { setOpenLang(false); setSelectedLanguage('ru'); }}
                                        >
                                            <span className="fi fi-ru"></span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Mobile burger */}
                            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                                <MenuRoundedIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom nav */}
            <div className="navBottom bg-[#F2F2F2] hidden md:block">
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="flex items-center gap-x-8">
                            <button
                                onClick={() => setOpen(!open)}
                                className="flex items-center gap-x-2 text-white bg-customRed py-4 px-6"
                            >
                                <MenuRoundedIcon />
                                All Categories
                                <ArrowIcon />
                            </button>
                            <Link href={'/'} className="flex items-center gap-x-1 text-customRed">Home <ArrowIcon /></Link>
                            <Link href={'/catalog/all-products'} className="flex items-center gap-x-1 text-gray-500">Shop <ArrowIcon /></Link>
                            <Link href={'/#'} className="flex items-center gap-x-1 text-gray-500">Pages <ArrowIcon /></Link>
                            <Link href={'/#'} className="flex items-center gap-x-1 text-gray-500">Blog <ArrowIcon /></Link>
                            <Link href={'/#'} className="flex items-center gap-x-1 text-gray-500">About Us</Link>
                            <Link href={'/#'} className="flex items-center gap-x-1 text-gray-500">Contact Us</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneIcon />
                            <a href="tel:+998555000098" className="font-medium">(55) 500-00-98</a>
                        </div>

                        {open && (
                            <div className="absolute top-full mt-3 left-0 w-full bg-white rounded-md shadow-md p-4 flex flex-wrap gap-4 z-50">
                                {navMenu.map((menu) => (
                                    <Link
                                        key={menu.id}
                                        href={`/${selectedLanguage}${menu.slug}`}
                                        className="flex items-center gap-x-2 border p-2 rounded hover:bg-gray-100 w-[calc(33%-1rem)]"
                                    >
                                        <div className="relative w-10 h-10">
                                            <Image fill src={menu.img} alt={menu.name} style={{ objectFit: 'contain' }} />
                                        </div>
                                        <span>{Number(languageId) === 1 ? menu.name : menu.nameRu}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white absolute w-full left-0 top-[70px] shadow-md z-40">
                    <div className="flex flex-col gap-4 p-4">
                        <Link href={'/'} onClick={() => setMobileOpen(false)} className="text-customRed">Home</Link>
                        <Link href={'/catalog/barcha-mahsulotlar'} onClick={() => setMobileOpen(false)}>Shop</Link>
                        <Link href={'/#'} onClick={() => setMobileOpen(false)}>Pages</Link>
                        <Link href={'/#'} onClick={() => setMobileOpen(false)}>Blog</Link>
                        <Link href={'/#'} onClick={() => setMobileOpen(false)}>About Us</Link>
                        <Link href={'/#'} onClick={() => setMobileOpen(false)}>Contact Us</Link>
                        <div className="flex items-center gap-2 mt-4">
                            <PhoneIcon />
                            <a href="tel:+998555000098" className="font-medium">(55) 500-00-98</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
