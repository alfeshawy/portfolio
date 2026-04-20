import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: 'Tech Horizons',
            role: 'Senior Frontend Engineer',
            period: '2022 - Present',
            description: 'Leading the development of high-performance dashboard using React and Three.js.'
        },
        {
            company: 'Creative Studio',
            role: 'UI/UX Developer',
            period: '2020 - 2022',
            description: 'Designed and implemented interactive landing pages for luxury brands.'
        },
        {
            company: 'Launchpad Inc',
            role: 'Frontend Developer',
            period: '2018 - 2020',
            description: 'Built scalable web applications using Vue.js and Tailwind CSS.'
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-white/50 mb-4">Journey</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-16">Experience</h3>

            <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 bg-white rounded-full border-4 border-graphite-bg" />
                        
                        <div className="glass-card">
                            <span className="text-xs font-medium text-white/40 uppercase tracking-widest mb-2 block">
                                {exp.period}
                            </span>
                            <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                            <h5 className="text-white/60 mb-4">{exp.company}</h5>
                            <p className="text-white/50 leading-relaxed max-w-2xl text-sm md:text-base">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
