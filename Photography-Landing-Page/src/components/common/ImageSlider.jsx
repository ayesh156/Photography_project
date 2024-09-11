import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/effect-coverflow'; // Import coverflow effect styles
import 'swiper/css/pagination'; // Import pagination styles
import 'swiper/css/navigation'; // Import navigation styles
import {aboutImg} from "../../constants/index.jsx"; // Import image data

import {Navigation} from 'swiper/modules'; // Import Navigation module
import {CircleArrowLeft, CircleArrowRight} from "lucide-react"; // Import arrow icons

const ImageSlider = () => {

    return (
        <div className="relative min-h-screen text-white">
            <div className="swiper-custom">
            <Swiper
                effect={'coverflow'}
                slidesPerView={5}
                grabCursor={true}
                loop={true}
                spaceBetween={26}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                breakpoints={{
                    // When width is >= 1024px
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 26
                    },
                    // When width is < 1024px
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 8
                    },
                }}
                modules={[Navigation]}
                className="mt-20"
            >
                {/* Render images in SwiperSlide */}
                {aboutImg.map((item, i) => (
                    <SwiperSlide key={i} className="flex justify-center h-[358px] w-[293px]">
                        <img className="h-full w-full object-cover" src={item.image} alt={item.name}/>
                    </SwiperSlide>
                ))}
                <div className="slider-controler"></div>
            </Swiper>
                {/* Navigation buttons */}
            <button className="swiper-button-prev"><CircleArrowLeft/></button>
            <button className="swiper-button-next"> <CircleArrowRight/></button>
            </div>
        </div>
    );

}

export default ImageSlider;
