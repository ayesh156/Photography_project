import React from "react";

// PriceCard component displays pricing details
const PriceCard = ({price,duration,photos,retouch,finish}) => {

    return (
            <div
                className="lg:w-[508px] h-[684px] backdrop-blur-sm bg-secondary-green/20 px-[63px] py-8 flex flex-col items-center space-y-14">
                <div className="text-center">
                    <h2 className="uppercase text-3xl lg:text-4xl font-[500]">premium</h2>
                    <span className="text text-4xl lg:text-[40px] font-['Cormorant']">{price}</span>
                </div>
                <div className="flex flex-row w-full justify-between text-xl lg:text-[26px]">
                    <span className="font-[600]">Duration</span>
                    <span className="font-[400]">{duration}</span>
                </div>
                <div className="flex flex-row w-full justify-between text-xl lg:text-[26px]">
                    <span className="font-[600]">Lots of Photos</span>
                    <span className="font-[400]">{photos}</span>
                </div>
                <div className="flex flex-row w-full justify-between text-xl lg:text-[26px]">
                    <span className="font-[600]">Detailed Retouching</span>
                    <span className="font-[400]">{retouch}</span>
                </div>
                <div className="flex flex-row w-full justify-between text-xl lg:text-[26px]">
                    <span className="font-[600]">Finishing</span>
                    <span className="font-[400]">{finish}</span>
                </div>
                <div className="border-2 text-xl lg:text-3xl py-4 px-3 font-[500]">
                    <span>Photo Session Schedule</span>
                </div>
            </div>
    );

}
export default PriceCard;