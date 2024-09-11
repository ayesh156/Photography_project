import logo from '../assets/logo.png';
import React from "react";
import {footerSocialIcons} from "../constants/index.jsx";

const CTAFooter = () => {

    return (
        <div className="relative min-h-screen bg-primary-black">

            <div className="relative lg:h-[1107px] h-[800px] pt-[121px] flex justify-center">

                {/* Call-to-Action Section */}
                <div
                    className="absolute lg:h-[638px] mx-2 lg:mx-0 lg:w-[1099px] flex flex-col items-center bg-secondary-green lg:py-16 lg:px-16 py-12 px-4 space-y-10 lg:space-y-20 z-10">

                    {/* Heading */}
                    <div className="lg:w-[566px]">
                        <h4 className="text-center text-3xl lg:text-[67px] lg:leading-[81.14px] font-[400] font-['Cormorant']">Get more info
                            other discount prices</h4>
                    </div>

                    {/* Email Input and Submit Button */}
                    <div className="flex items-center lg:w-[702px] w-full bg-white border border-gray-300 px-2 overflow-hidden">
                        <input type="text" placeholder="Enter Your Email Address"
                               className="flex-1 font-[400] lg:h-[80px] lg:text-[26px] leading-[31px] pr-2 pt-2 pb-2 lg:pl-[34px] font-[Cormorant] bg-white text-primary-white outline-none"/>
                        <button className="bg-secondary-green text-white lg:text-[26px] px-4 text-[16px] lg:py-2 h-9 lg:h-[65px] lg:w-[151px] hover:bg-primary-green">Submit</button>
                    </div>

                    {/* Terms and Policy Text */}
                    <div className="lg:text-xl text-[16px] lg:w-[794px] text-center font-[300]">* By clicking “<span className="font-[600]">Submit</span>”
                        button, you agree to our Terms and that you have read our <span className="font-[600]">Data
                        Use Policy.</span>
                    </div>
                </div>

                {/* Footer Section */}
                <div
                    className="absolute flex flex-col justify-between items-center bottom-0 w-full h-[465px] bg-primary-green py-14 lg:py-12 lg:px-[120px] z-0">
                    <div className="flex flex-col lg:flex-row lg:w-full justify-between mt-48">
                    <img src={logo} alt="logo" className="lg:h-[27px] h-5"/>
                        <div className="flex flex-row lg:w-[252px] justify-between pt-10 lg:pt-0">
                            {footerSocialIcons.map((item, i) => (
                                <a key={i} href="#">
                                    <img src={item.image} alt={item.name}/>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Copyright Text */}
                    <span className="font-[500] text-[16px] lg:text-[17px]">(C) Copyright 2022 I Photographer</span>
                </div>
            </div>


        </div>
    );

}

export default CTAFooter;
