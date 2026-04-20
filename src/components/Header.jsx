import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 glass">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tighter cursor-pointer">
                    <Link to="hero" smooth={true} duration={500}>
                        ALFESHAWY
                    </Link>
                </div>
                
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-graphite-accent transition-colors">
                        About
                    </Link>
                    <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-graphite-accent transition-colors">
                        Experience
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-graphite-accent transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="md:hidden">
                    {/* Simplified mobile menu trigger */}
                    <button className="text-white p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
