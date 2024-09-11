import {priceItems} from "../constants/index.jsx";
import React from "react";
import bg from "../assets/price_bg.jpg"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import PriceCard from "./common/PriceCard.jsx";

const PriceList = () => {

    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >

            <div className="absolute inset-0 bg-[rgba(13,15,17,0.83)]"></div> {/* Overlay for background */}

            <div className="relative h-[1061px] pt-[75px]">

                <div
                    className="font-[400] lg:mx-[120px] text-5xl font-['Cormorant'] text-center lg:text-left lg:text-[70px] lg:leading-[85px] text-white">
                    <h1>PRICELIST</h1>
                </div>
                <div className="flex">
                    {/* Swiper Component for price list */}
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={2.9}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 30,
                            modifier: 3,
                            scale: 1,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        navigation={true}
                        initialSlide={3} // Start with the second slide
                        breakpoints={{
                            // When width is >= 1024px
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            // When width is < 1024px
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mt-[81px]"
                    >
                        {/* Map through priceItems to display PriceCard components */}
                        {priceItems.map((item, i) => (
                            <SwiperSlide key={i} className="flex justify-center">
                                <PriceCard price={item.price} duration={item.duration} photos={item.photos}
                                           retouch={item.retouch} finish={item.finish}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination mb-16 lg:mb-12"></div> {/* Pagination dots */}
                </div>
            </div>


        </div>
    );

}

export default PriceList;
