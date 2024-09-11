import logo from '../assets/logo.png';
import {navItems} from '../constants/index.jsx';
import {Menu, X} from "lucide-react";
import {useState} from "react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    // Toggle function for mobile drawer
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="fixed w-full h-[100px] flex justify-center items-center text-primary-white top-0 z-50 backdrop-blur-lg border-b border-gray-900">
            <div className="container px-4 lg:px-28 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <img className="h-5 lg:h-[27px] mr-2" src={logo} alt="logo"/>

                    {/* Desktop Navigation Menu */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, i) => (
                            <li key={i}>
                                <a href={item.href} className="text-[16px] uppercase">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Menu */}
                {mobileDrawerOpen && (
                    <div className="absolute top-16 right-0 bg-neutral-900 z-50 w-full px-12 py-4 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, i) => (
                                <li key={i} className="py-4">
                                    <a href={item.href} className="text-[16px] uppercase">{item.label}</a>
                                </li>
                            ))}
                        </ul>

                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;