import WhyMeCard from "./common/WhyMeCard.jsx";
import { whymeItems} from "../constants/index.jsx";

const Benefit = () => {

    return (
        <div className="relative min-h-screen bg-primary-black flex justify-center items-center">

            <div className="lg:h-[682px] h-[1510px] pt-[75px] w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col lg:flex-row mx-4 lg:mx-0 justify-center items-center">

                    <div
                        className="font-[400] text-center lg:text-left text-white lg:pl-[62.5px] lg:w-[380px] ">
                        <h1 className="text-5xl lg:text-[70px] font-['Cormorant']">WHY ME</h1>
                        <p className="text-primary-white capitalize text-[20px] pt-6">Tincidunt sagittis mollis nec suspendisse sed
                            felis massa urna
                            nec. Urna quisque blandit turpis ultrices arcu ut sed.</p>
                    </div>

                    {/* Repeated Components */}
                    {whymeItems.slice(0, 2).map((item, i) => (
                        <WhyMeCard key={i} textColor={item.textColor} topic={item.topic}
                                   desc={item.desc} img={item.img}/>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center lg:mt-[113px]">
                    {/* Repeated Components */}
                    {whymeItems.slice(2, 5).map((item, i) => (
                        <WhyMeCard key={i} left={item.left} textColor={item.textColor} topic={item.topic}
                                   desc={item.desc} img={item.img}/>
                    ))}
                </div>

            </div>

        </div>
    );

}

export default Benefit;
