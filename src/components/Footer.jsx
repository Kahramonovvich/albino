'use client'
import { useState } from "react";
import { FaTiktok, FaYoutube, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ languageId }) {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const t = {
        company: languageId === 2 ? 'Компания' : 'Kompaniya',
        companyItems: languageId === 2
            ? ['О компании', 'Сертификаты', 'Отзывы']
            : ['Kompaniya haqida', 'Sertifikatlar', 'Sharxlar'],
        help: languageId === 2 ? 'Помощь' : 'Yordam',
        helpItems: languageId === 2
            ? ['Вопросы и ответы', 'Условия использования', 'Политика конфиденциальности']
            : ['Faqs', 'Terms & Condition', 'Privacy Policy'],
        inputPlaceholder: languageId === 2 ? 'Ваш номер...' : 'Raqamingiz...',
        buttonText: languageId === 2 ? 'Связаться' : 'Bog’lanish',
        description: languageId === 2
            ? 'Наша цель — сделать процесс готовки удобным и приятным для каждой хозяйки и повара.'
            : 'Bizning maqsadimiz – har bir uy bekasiga va oshpazga pishirish jarayonini yanada qulay va yoqimli qilish.',
    };

    const footerMenu = [
        {
            id: 1,
            top: t.company,
            items: t.companyItems.map(item => ({ item }))
        },
        {
            id: 2,
            top: t.help,
            items: t.helpItems.map(item => ({ item }))
        },
    ];

    const socialMedia = [
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/albino_uz/',
            icon: <FaInstagram />
        },
        {
            name: 'Telegram',
            href: 'https://t.me/bestalbinouz',
            icon: <FaTelegramPlane />
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/@albino_uz',
            icon: <FaYoutube />
        },
        {
            name: 'TikTok',
            href: 'https://www.tiktok.com/@albino_uz4',
            icon: <FaTiktok />
        },
    ];

    return (
        <footer className="md:mt-[45px] mt-8">
            <div className="top bg-[#F7F7F7] py-10">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-y-6 md:gap-y-0 gap-x-[58px]">
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-[460px] md:flex-1 relative"
                        >
                            <input
                                type="text"
                                className="px-6 py-3.5 pr-44 w-full rounded-full outline-none border"
                                placeholder={t.inputPlaceholder}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9+]/g, ""))}
                                maxLength={13}
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-customRed font-semibold text-white leading-5 absolute top-0 right-0 h-full rounded-full px-10"
                            >
                                {t.buttonText}
                            </button>
                        </form>
                        <div className="socialBox flex items-center gap-2 md:gap-x-2 mt-4 md:mt-0">
                            {socialMedia.map((icon) => (
                                <a
                                    key={icon.name}
                                    href={icon.href}
                                    target='_blank'
                                    className="box w-10 h-10 flex items-center justify-center
                                        hover:bg-customRed hover:text-white rounded-full text-lg transition-all duration-200 ease-in-out"
                                >
                                    {icon.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom bg-[#2E2E2E] py-[60px]">
                <div className="container">
                    <div className="flex flex-col md:items-center md:flex-row justify-between gap-y-10">
                        <div className="left w-full md:w-[340px] flex flex-col gap-y-4">
                            <div className="logo">
                                <Link href={'/'}>
                                    <Image
                                        src={'/images/logo.png'}
                                        width={182}
                                        height={50}
                                        alt="footer-logo.png"
                                    />
                                </Link>
                            </div>
                            <p className="leading-normal text-[#808080] text-sm md:text-base">
                                {t.description}
                            </p>
                            <div className="text-white flex flex-wrap items-center gap-x-4 gap-y-2">
                                <a
                                    href="tel:+998555000098"
                                    className='text-lg font-semibold'
                                >
                                    +998 55 500 00 98
                                </a>
                            </div>
                        </div>
                        <div className="right flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-[102px]">
                            {footerMenu.map((menu) => (
                                <ul key={menu.id}>
                                    <p className="font-medium leading-normal text-white mb-5">
                                        {menu.top}
                                    </p>
                                    {menu.items.map(el => (
                                        <li key={el.item} className="mb-3 last-of-type:mb-0">
                                            <p className="text-sm leading-normal text-[#999999] hover:text-white cursor-pointer">
                                                {el.item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};