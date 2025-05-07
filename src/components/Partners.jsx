'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { partners } from '@/constants/constants';

export default function Partners() {
    return (
        <div className="partners mt-12">
            <div className="container">
                <div className="box py-5 border rounded-2xl">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={6}
                        // spaceBetween={10}
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
                                <div className="flex items-center justify-center h-20">
                                    <img src={item.img.src} alt={`Partner ${index + 1}`} className="h-full object-contain" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};