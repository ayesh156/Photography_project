import React from "react";

// TestimonialCard component displays a testimonial with an image, name, social media handle, and description
const TestimonialCard = ({img,name,social,desc}) => {

    return (
    <div className="h-[331px] mx-8 lg:mx-0 lg:w-[387.5px] bg-secondary-green p-6 lg:p-[37px]">
        <div className="flex flex-row gap-7">
            <img src={img} alt={name}/>
            <div>
                <h4 className="text-[24px] font-['Cormorant'] capitalize">{name}</h4>
                <span className="text-[15px] capitalize">{social}</span>
            </div>
        </div>
        <hr className="my-8 bg-white opacity-35"/>
        <p className="font-[300] text-[15px]">{desc}</p>
    </div>
    );

}
export default TestimonialCard;