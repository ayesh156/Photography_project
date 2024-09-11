const WhyMeCard = ({ textColor, img, topic, desc }) => (
    <div
        className="flex flex-col justify-center items-center lg:items-start mt-10 lg:mt-0 text-center capitalize lg:text-left text-white lg:w-[380px] mx-10 lg:mx-0 lg:px-[62.5px] lg:my-[10px]"
    >
        <img src={img} alt="img1" className="mb-5"/>
        <span className={`font-[500] text-xl ${textColor}`}>{topic}</span>
        <p className={`font-[300] text-[16px] mt-5 ${textColor}`}>
            {desc}
        </p>
    </div>

);

export default WhyMeCard;