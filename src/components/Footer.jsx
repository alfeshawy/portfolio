import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-white/40 font-medium">
                    &copy; {year} Saif Alfeshawy. All rights reserved.
                </div>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-sm text-white/40">
                    <Link to="hero" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Home</Link>
                    <Link to="about" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">About</Link>
                    <Link to="experience" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Experience</Link>
                    <Link to="contact" smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">Contact</Link>
                    
                    <div className="hidden md:block w-px h-4 bg-white/10 mx-2"></div>
                    
                    <a href="https://github.com/alfeshawy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/saif-alfeshawy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </div>

                <div className="text-sm text-white/40">
                    Built with React + Tailwind v4
                </div>
            </div>
        </footer>
    );
};

export default Footer;
