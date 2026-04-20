import React from 'react';

const About = () => {
    const skills = [
        'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
        'Three.js', 'Node.js', 'Framer Motion', 'Canvas API'
    ];

    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-sm uppercase tracking-widest text-white/50 mb-4">About Me</h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        Bridging the gap between <span className="text-white/60 italic">algorithms and intelligent systems.</span>
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        I am a Computer Science and Artificial Intelligence student at Helwan University with a deep passion for solving complex algorithmic problems and exploring the frontiers of technology. As a dedicated ICPC trainee, I thrive in competitive programming environments, constantly sharpening my analytical thinking. 
                    </p>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        Beyond the code, I specialize in the professional orchestration of AI tools to build efficient, future-ready solutions. I am a lifelong learner and a regular attendee of global tech summits and exhibitions, staying at the cutting edge of the software industry.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-0">
                    <div className="glass-card">
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                             Competitive Programming
                        </h4>
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                            Expert in data structures and algorithms (ICPC Trainee). I enjoy solving challenging problems that require abstract thinking and optimized implementations.
                        </p>
                    </div>

                    <div className="glass-card">
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                             AI Orchestration
                        </h4>
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                            Professional use of LLMs, Agentic workflows, and AI-driven development. I focus on integrating intelligence into everyday software solutions.
                        </p>
                    </div>

                    <div className="glass-card">
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                             Continuous Learning
                        </h4>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Active participant in tech conferences and networking events, keeping pace with the rapid evolution of the global tech landscape.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
