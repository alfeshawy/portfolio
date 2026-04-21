import React from 'react';
import { motion } from 'framer-motion';

const SystemArchitecture = () => {
    const modules = [
        { id: 'algorithms', label: 'Algorithm Design', color: 'bg-blue-500/20', border: 'border-blue-500/50' },
        { id: 'automation', label: 'Automation & Scripting', color: 'bg-purple-500/20', border: 'border-purple-500/50' },
        { id: 'cpp', label: 'C++ Backend Logic', color: 'bg-green-500/20', border: 'border-green-500/50' },
        { id: 'frontend', label: 'Frontend Development', color: 'bg-eng-accent/20', border: 'border-eng-accent/50' },
    ];

    return (
        <section className="py-24 px-6 bg-[#0a0a0c] relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineering Focus</h2>
                    <p className="text-eng-muted max-w-2xl mx-auto">
                        A structured approach to building reliable software and solving algorithmic challenges.
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
                    {modules.map((mod, i) => (
                        <React.Fragment key={mod.id}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`flex-1 w-full md:w-auto p-6 rounded-2xl border ${mod.border} ${mod.color} backdrop-blur-sm text-center`}
                            >
                                <span className="font-mono text-xs uppercase tracking-tighter opacity-50 block mb-2">Module 0{i + 1}</span>
                                <h3 className="font-bold text-lg">{mod.label}</h3>
                            </motion.div>
                            
                            {i < modules.length - 1 && (
                                <div className="hidden md:block">
                                    <motion.div 
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        className="w-12 h-[1px] bg-white/20 origin-left"
                                    ></motion.div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-card">
                        <h4 className="text-eng-accent font-mono text-sm mb-2">&gt; Engineering_Principles</h4>
                        <p className="text-sm text-eng-muted">Focusing on clean code, modular design, and algorithmic efficiency.</p>
                    </div>
                    <div className="glass-card">
                        <h4 className="text-eng-accent font-mono text-sm mb-2">&gt; Learning_Roadmap</h4>
                        <p className="text-sm text-eng-muted">Mastering CS fundamentals while exploring modern automation tools.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemArchitecture;
