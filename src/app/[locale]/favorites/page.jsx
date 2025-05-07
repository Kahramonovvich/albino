'use client'
import { useEffect, useState } from 'react'
import Link from "next/link"
import HomeIcon from '@icons/home.svg'
import TopArrowICon from '@icons/topArrow.svg'
import FavoriteProductItem from '@/components/FavoriteProductItem'
import { usePathname } from 'next/navigation'

export default function Favorites() {

    const locale = usePathname().split('/')[1];
    const langMap = { uz: 1, ru: 2 };
    const languageId = langMap[locale] || 1;

    const [favoriteProducts, setFavoriteProducts] = useState([]);

    const t = {
        title: languageId === 2 ? 'Избранные' : 'Saralangan',
        product: languageId === 2 ? 'Товар' : 'Maxsulot',
        price: languageId === 2 ? 'Цена' : 'Narx',
        status: languageId === 2 ? 'Состояние' : 'Holati',
        empty: languageId === 2 ? 'Нет избранных товаров' : 'Saralangan maxsulotlar yo‘q',
    };

    let products;

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/Products/GetAllProducts?languageId=${languageId}`);
            products = await res.json();
            const liked = localStorage.getItem('likedProducts');
            const likedIds = liked ? JSON.parse(liked) : [];

            const filtered = products.filter(product => likedIds.includes(product.id));
            setFavoriteProducts(filtered);
        };

        fetchData();
    }, []);

    return (
        <div className="favorites">
            <div className="container">
                <div className="top md:my-12 my-5 flex items-center gap-x-3">
                    <Link href={'/'}>
                        <HomeIcon />
                    </Link>
                    <TopArrowICon />
                    <p className='text-customRed leading-normal'>
                        {t.title}
                    </p>
                </div>
                <h2 className="mb-5 font-semibold text-[32px] leading-tight">
                    {t.title}
                </h2>
                <div className="box py-4 border rounded-lg">
                    <div className="top grid grid-cols-12 pb-4 px-6 border-b uppercase font-medium text-sm leading-none text-[#808080]">
                        <div className="box col-span-5">{t.product}</div>
                        <div className="box col-span-3">{t.price}</div>
                        <div className="box col-span-4">{t.status}</div>
                    </div>
                    <div className="bottom mt-3 flex flex-col">
                        {favoriteProducts.map(product => (
                            <FavoriteProductItem
                                key={product.id}
                                product={product}
                                onRemove={() => {
                                    setFavoriteProducts(prev => prev.filter(p => p.id !== product.id))
                                }}
                                products={products}
                            />
                        ))}
                        {favoriteProducts.length === 0 && (
                            <p className="text-center text-gray-500 py-6">
                                {t.empty}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};