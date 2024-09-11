
import {testimonialCardItems} from "../constants/index.jsx";
import React from "react";
import TestimonialCard from "./common/TestimonialCard.jsx";

const Testimonial = () => {

    return (
        <div className="relative min-h-screen bg-primary-green">

            <div className="lg:h-[685px] h-[1320px] pt-[88px] lg:px-[120px]">

                <div
                    className="font-[400] text-5xl font-['Cormorant'] text-center lg:text-left lg:text-[70px] lg:leading-[85px] text-white">
                    <h1>TESTIMONIALS</h1>
                </div>

                <div className="flex flex-col gap-5 mt-[61px] lg:flex-row items-center justify-between">
                    {/* Repeated Components */}
                    {testimonialCardItems.map((item, i) => (
                       <TestimonialCard key={i} img={item.img} name={item.name} social={item.social} desc={item.desc}  />
                    ))}
                </div>

            </div>


        </div>
    );

}

export default Testimonial;
