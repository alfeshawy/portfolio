import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-eng-accent font-mono text-xs uppercase tracking-[0.3em] mb-4">01: Core_Identity</h2>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">
                        Building a strong foundation in <span className="text-eng-muted italic">software engineering.</span>
                    </h3>
                    <p className="text-eng-muted text-lg leading-relaxed mb-8">
                        I am a first-year Computer Science and Artificial Intelligence student at Helwan University with a 3.4 GPA. I focus on building a rigorous technical foundation through academic excellence and intensive practical application.
                    </p>
                    <p className="text-eng-muted text-lg leading-relaxed">
                        As a dedicated trainee at the ICPC Helwan Community, I focus on C++ and deep diving into Data Structures and OOP principles. I leverage modern AI tools to accelerate my learning and build functional, efficient solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-0">
                    {[
                        { title: 'Competitive Programming', desc: 'Active member and trainee at ICPC Helwan Community. Codeforces Rating: 1180. Focused on mastering data structures and algorithmic efficiency in C++.' },
                        { title: 'Automation & Scripting', desc: 'Skilled in leveraging AI-assisted development tools (Cursor, LLMs) to accelerate coding, debugging, and project scaffolding.' },
                        { title: 'Software Engineering', desc: 'Building functional systems with a focus on core logic, algorithmic efficiency, and modular Object-Oriented Design (OOD).' }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card"
                        >
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-eng-accent font-mono text-sm opacity-50">0{i + 1}.</span> {card.title}
                            </h4>
                            <p className="text-eng-muted text-sm leading-relaxed">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default About;
