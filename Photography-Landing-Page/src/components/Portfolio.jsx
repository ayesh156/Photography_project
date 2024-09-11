
import {portfolioItems} from '../constants/index.jsx';
import React, { useState } from 'react';
import Gallery from "./common/Gallery.jsx";

const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative min-h-screen bg-primary-black">

            <div className="relative h-[3000px] lg:h-[1170px] pt-[76px]">

                <div className="flex flex-col justify-between">

                    <div
                        className="lg:mx-[120px] font-[400] text-5xl font-['Cormorant'] text-center lg:text-right lg:text-[70px] lg:leading-[85px] text-white">
                        <h1>PORTFOLIO</h1>
                    </div>

                    <div
                        className="lg:mx-[120px] text-center mt-8 lg:mt-[55px] lg:text-right">
                        <div className="lg:flex lg:justify-end">
                            <ul className="flex flex-col lg:flex-row gap-2 lg:gap-0 font-['Cormorant']">
                                {/* Repeated Components */}
                                {portfolioItems.map((item, i) => (
                                    <li key={i} className="lg:ml-[68px]">
                                        <button
                                            onClick={() => setActiveIndex(i)} // Set active index on click
                                            className={` text-2xl lg:text-3xl capitalize ${activeIndex === i ? 'text-white' : 'text-primary-white'}`} // Conditionally apply text-white
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div
                    className="absolute top-[372px] w-full">
                    <Gallery />
                </div>
            </div>


        </div>
    );

}

export default AboutUs;
