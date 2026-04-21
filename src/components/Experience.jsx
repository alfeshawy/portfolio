import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'ICPC Helwan Community',
            role: 'Competitive Programmer & Trainee',
            period: '2023 - Present',
            description: 'Building a strong foundation in C++ and advanced data structures. Actively participating in training cycles and regional contests to improve algorithmic problem-solving.'
        },
        {
            company: 'Automation & Scripting',
            role: 'AI & Workflow Enthusiast',
            period: '2024 - Present',
            description: 'Exploring AI tools, n8n workflows, and Supabase integrations to automate tasks and build functional software prototypes.'
        },
        {
            company: 'Tech Community Events',
            role: 'Active Participant',
            period: '2022 - 2024',
            description: 'Attended major tech conferences like AI-Everything, CU-AI-Nexus, and CIT-AI Cairo to stay updated on industry trends and connect with the developer community.'
        }
    ];

    return (
        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-eng-accent font-mono text-xs uppercase tracking-[0.3em] mb-4">03: Experience_Timeline</h2>
                <h3 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">My Journey</h3>
            </motion.div>

            <div className="relative border-l border-white/5 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 bg-eng-accent rounded-full border-4 border-eng-bg shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                        <div className="glass-card hover:translate-x-2 transition-transform">
                            <span className="text-xs font-mono text-eng-accent uppercase tracking-[0.2em] mb-3 block">
                                [{exp.period}]
                            </span>
                            <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                            <h5 className="text-eng-muted mb-4 font-medium">{exp.company}</h5>
                            <p className="text-eng-muted leading-relaxed max-w-3xl text-sm md:text-base">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};


export default Experience;
