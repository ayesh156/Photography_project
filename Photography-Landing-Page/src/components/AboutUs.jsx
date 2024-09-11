import down_arrow from '../assets/down-arrow.svg'
import ImageSlider from "./common/ImageSlider.jsx";

const AboutUs = () => {

    return (
        <div className="relative min-h-screen bg-primary-black">

            {/* Main Section */}
            <div className="relative h-[1393px] pt-[152px]">

                <div className="flex flex-col lg:flex-row justify-between">
                    {/* Left Section */}
                    <div
                        className="lg:mx-[120px] font-[400] text-5xl font-['Cormorant'] text-center lg:text-left lg:text-[70px] lg:leading-[85px] text-white">
                        <div>
                            <span>ABOUT</span><br/>
                            <span>US</span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div
                        className="lg:w-[512px] lg:mx-[120px] mx-4 mt-5 lg:mt-0">
                        <p className="lg:text-xl text-[16px] text-[#898D92] leading-8">
                            Tincidunt sagittis mollis nec suspendisse sed felis massa urna nec. Urna quisque blandit
                            turpis
                            ultrices arcu ut sed. Ultricies diam est aliquet porta fermentum molestie morbi libero.
                            Ultrices
                            sit in elit eget nullam sem. Urna velit imperdiet habitant in.
                        </p>
                    </div>
                </div>

                {/* Down Arrow */}
                <div className="absolute lg:left-[254px] left-5 top-[470px] lg:top-[312px] z-20">
                    <img src={down_arrow} alt=""/>
                </div>

                {/* Statistics */}
                <div
                    className="absolute top-[503px] left-1/2 h-[190px] transform -translate-x-1/2 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-0">
                    <div className="text-right  xl:leading-[3.5rem] leading-[2.5rem] border-r-2 border-white lg:w-[246px] pr-9">
                        <span className="lg:text-6xl text-4xl font-['Cormorant']">+10 Years</span><br/>
                        <span className="lg:text-[24px]">Experience</span>
                    </div>
                    <div className="text-right xl:leading-[3.5rem] leading-[2.5rem] border-r-2 border-white lg:ml-[117px] pr-9">
                        <span className="lg:text-6xl text-4xl font-['Cormorant']">+450</span><br/>
                        <span className="lg:text-[24px]">Customers</span>
                    </div>
                    <div className="text-right xl:leading-[3.5rem] leading-[2.5rem] border-r-2 border-white lg:ml-[117px] lg:w-[210px] pr-9">
                        <span className="lg:text-6xl text-4xl font-['Cormorant']">+15K</span><br/>
                        <span className="lg:text-[24px]">Portfolio Photos</span>
                    </div>
                </div>

                {/* Image Slider */}
                <div
                    className="absolute top-[800px] w-full">
                <ImageSlider/>
                </div>
            </div>

        </div>
    );

}

export default AboutUs;
