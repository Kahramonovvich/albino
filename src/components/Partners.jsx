'use client'
import Hamkor from '@icons/Hamkorbank_logo_2024 1.svg'
import Kukmara from '@/assets/images/2kY1s9Ga2opCeADADSqnx8jWKDT 5.png'
import Ava from '@/assets/images/ava_606x606-removebg-preview 1.png'
import Texnomart from '@/assets/images/texnomart_logo-01 4.png'
import Uzum from '@/assets/images/Uzum-01 5.png'
import Idea from '@/assets/images/idea_logo 5.png'

const partners = [
    { icon: <Hamkor /> },
    { img: Kukmara },
    { img: Ava },
    { img: Texnomart },
    { img: Uzum },
    { img: Idea },
];

export default function Partners() {
    return (
        <div className="partners mt-12">
            <div className="container">
                <div className="box flex items-center p-[60px] border rounded-[20px] justify-between">
                    {partners.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex items-center justify-center h-[60px] ${index !== partners.length - 1 ? 'after:content-[""] after:absolute after:right-[-30px] after:top-1/2 after:-translate-y-1/2 after:h-10 after:w-px after:bg-[#EDEDED]' : ''
                                }`}
                        >
                            {item.icon ? item.icon : <img src={item.img.src} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};