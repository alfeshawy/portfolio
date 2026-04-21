import React from 'react';
import SpiderCanvas from './SpiderCanvas';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-grid grainy">
            <SpiderCanvas />

            <div className="absolute top-10 left-10 z-20">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-medium text-white/70">
                        Status: Focusing on Data Structures & Algorithms
                    </span>
                </div>
            </div>

            <motion.div
                className="relative z-10 text-center px-6 max-w-5xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-4 inline-block">
                    <span className="text-eng-accent font-mono text-sm tracking-[0.3em] uppercase">
                        &lt; CS Student & Aspiring Software Engineer /&gt;
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 glow-text"
                >
                    Saif <span className="text-white/40">Alfeshawy</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl text-eng-muted mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    A first-year <span className="text-white">Computer Science & AI</span> student at Helwan University (3.4 GPA).
                    I build functional systems and solve complex problems with a practical, hands-on engineering approach.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="contact" smooth={true} duration={500} className="btn-primary">
                        Get in Touch
                    </Link>
                    <Link to="experience" smooth={true} duration={500} className="btn-secondary">
                        View Experience
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7-7-7" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;

