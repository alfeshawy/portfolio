import React from 'react';
import SpiderCanvas from './SpiderCanvas';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
            <SpiderCanvas />
            
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-in">
                    Saif <span className="text-white/60">Alfeshawy</span>
                </h1>
                <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    CS & AI Student | Competitive Programmer | AI Integration Specialist
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="contact" smooth={true} duration={500} className="btn-primary cursor-pointer">
                        Let's Talk
                    </Link>
                    <Link to="experience" smooth={true} duration={500} className="btn-secondary cursor-pointer">
                        View Work
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
