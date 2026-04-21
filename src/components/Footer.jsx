import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="py-16 px-6 border-t border-white/5 bg-[#08080a]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-xs text-eng-muted font-mono uppercase tracking-widest">
                    &copy; {year} Saif Alfeshawy <span className="mx-2 opacity-30">//</span> Logical_Architect
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.2em] font-medium text-eng-muted">
                    <Link to="hero" smooth={true} duration={500} className="hover:text-eng-accent transition-colors cursor-pointer">System_Home</Link>
                    <Link to="about" smooth={true} duration={500} className="hover:text-eng-accent transition-colors cursor-pointer">Module_Info</Link>
                    <Link to="projects" smooth={true} duration={500} className="hover:text-eng-accent transition-colors cursor-pointer">Logic_Base</Link>
                    <Link to="experience" smooth={true} duration={500} className="hover:text-eng-accent transition-colors cursor-pointer">Work_Flow</Link>
                    <Link to="contact" smooth={true} duration={500} className="hover:text-eng-accent transition-colors cursor-pointer">Comm_Link</Link>
                </div>

                <div className="text-[10px] text-eng-muted font-mono opacity-50">
                    STATUS: STABLE_V2.0
                </div>
            </div>
        </footer>
    );
};

export default Footer;
