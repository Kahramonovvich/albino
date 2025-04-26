'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import Part1 from '@/assets/images/image_2025-04-24_08-53-06.png';
import Part2 from '@/assets/images/image_2025-04-24_08-53-28.png';
import Part3 from '@/assets/images/image_2025-04-24_08-54-37.png';
import Part4 from '@/assets/images/image_2025-04-24_08-54-59.png';
import Part5 from '@/assets/images/image_2025-04-24_08-55-26.png';
import Part6 from '@/assets/images/image_2025-04-24_08-55-51.png';
import Part7 from '@/assets/images/image_2025-04-24_08-56-15.png';
import Part8 from '@/assets/images/image_2025-04-24_08-56-35.png';
import Part9 from '@/assets/images/image_2025-04-24_08-57-10.png';
import Part10 from '@/assets/images/image_2025-04-24_08-57-45.png';
import Part11 from '@/assets/images/image_2025-04-24_08-58-23.png';
import Part12 from '@/assets/images/vicalina.png';

const partners = [
    { img: Part1 },
    { img: Part2 },
    { img: Part3 },
    { img: Part4 },
    { img: Part5 },
    { img: Part6 },
    { img: Part7 },
    { img: Part12 },
    { img: Part8 },
    { img: Part9 },
    { img: Part10 },
    { img: Part11 },
];

export default function Partners() {
    return (
        <div className="partners mt-12">
            <div className="container">
                <div className="box p-6 border rounded-2xl">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={5}
                        spaceBetween={30}
                        loop={true}
                        speed={3000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        className="partners-swiper"
                    >
                        {partners.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center h-[60px]">
                                    <img src={item.img.src} alt={`Partner ${index + 1}`} className="max-h-full object-contain" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
