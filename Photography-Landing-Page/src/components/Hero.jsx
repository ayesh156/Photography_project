import noah from '../assets/noahPhotoRoom.png';
import {socialIcons} from '../constants/index.jsx';

const Hero = () => {

    return (
        <div className="relative min-h-screen bg-primary-black text-white">

            {/* Main Section */}
            <div className="relative grid grid-cols-2 h-[1024px]">
                {/* Left Section */}
                <div className="bg-[#233942]">

                </div>

                {/* Right Section */}
                <div className="relative flex justify-center items-center z-10  bg-primary-black p-10">
                    {/* Overlay Text */}
                    <div
                        className="absolute lg:bottom-[250px] bottom-[30rem] lg:left-[183px] transform lg:transform-none -translate-x-1/2 -translate-y-1/2  lg:w-[326px] z-20 text-center lg:text-left">
                        <p className="text-[18px] lg:text-[22px] text-primary-white">
                            Pellentesque Mauris A Lobortis In Bibendum Sed Lobortis Semper.
                            Eget Eu Vel Eu Vitae.
                        </p>
                    </div>

                </div>

                {/* Centered Image */}
                <img
                    src={noah}
                    alt="Photography"
                    className="absolute lg:inset-0 mx-auto my-auto object-contain lg:h-[851px] bottom-0 lg:top-[173px] w-auto opacity-90 z-10"
                />

                {/* Left side Text */}
                <div
                    className="absolute top-44 left-1/2 transform -translate-x-1/2 text-center font-[400] z-30 text-5xl font-['Cormorant']
                        lg:left-[120px] lg:top-[345px] lg:text-[90px] leading-tight lg:leading-[109px] lg:transform-none lg:-translate-x-0">
                    <div>
                        <h1><span>PHOTO</span><br/>
                        <span className="lg:ml-24">GRAPHY</span></h1>
                    </div>
                </div>


                {/* Order Now Button */}
                <div
                    className="absolute lg:bottom-[101px] bottom-[27rem] left-1/2 transform -translate-x-1/2 lg:w-[238px] lg:h-[66px] z-30">
                    <button
                        className="text-primary-white lg:text-[26px] border-[1.5px] border-white py-2 px-6 w-full h-full hover:bg-white hover:text-black transition">
                        Order Now
                    </button>
                    {/* Removing part of the right-side border */}
                    <div className="absolute right-[-1px] top-3 lg:top-4 h-1/2 w-[3px] bg-primary-black z-40"></div>
                </div>
            </div>

            {/* Social Links */
            }
            <div className="absolute lg:right-[108px] right-9 top-[115px] z-40">
                <div className="flex flex-col items-center space-y-6">
                    {/* Vertical Line */}
                    <div className="h-[215px] w-[2px] bg-[#233942]"></div>

                    {/* Icons */}
                    {socialIcons.map((item, i) => (
                        <a key={i} href="#" className="py-4">
                            <img src={item.image} alt={item.name}/>
                        </a>
                    ))}

                    {/* Vertical Line */}
                    <div className="h-[215px] w-[2px] bg-[#233942]"></div>
                </div>
            </div>
        </div>
    );

}

export default Hero;
