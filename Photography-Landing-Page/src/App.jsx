import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Benefit from "./components/Benefit.jsx";
import Testimonial from "./components/Testimonial.jsx";
import PriceList from "./components/PriceList.jsx";
import CTAFooter from "./components/CTAFooter.jsx";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import whatsappUser from "./assets/whatsapp_user.jpeg"
import gmail from "./assets/gmail-icon.svg"
import {useState} from "react";
import EmailModal from "./components/common/EmailModal.jsx";

function App() {
    const [open, setOpen] = useState(false); // Manage modal open/close state

    return (
        <>
            <Navbar/> {/* Navigation bar */}
            <Hero/> {/* Hero section */}
            <AboutUs/> {/* About us section */}
            <Portfolio /> {/* Portfolio section */}
            <Benefit /> {/* Benefit section */}
            <Testimonial /> {/* Testimonial section */}
            <PriceList /> {/* Price list section */}
            <CTAFooter /> {/* Call-to-action footer section */}
            <button onClick={() => setOpen(true)} className="fixed bottom-28 right-8 lg:right-[31px] z-50 bg-white rounded-full border border-gray-300 p-2">
                <img src={gmail} alt="gmail"/> {/* Button to open email modal */}
            </button>
            <EmailModal open={open} onClose={() => setOpen(false)} /> {/* Email modal */}
            <FloatingWhatsApp phoneNumber="+94 783233760" avatar={whatsappUser} accountName="Unknown User" className="text-primary-black"/> {/* WhatsApp floating button */}
        </>
    )
}

export default App;
