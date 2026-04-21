import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Database, Layout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'AskMe - CLI Q&A System',
            description: 'A command-line social platform that simulates user interactions through a Q&A format.',
            tags: ['C++', 'CSV Storage', 'Authentication'],
            details: 'Features user authentication, threaded discussions with recursive deletion logic, and persistent data storage using pipe-delimited CSV files.',
            link: 'https://github.com/alfeshawy/Mastering-CPP-Projects/tree/main/AskMe',
            icon: Code2
        },
        {
            title: 'Hospital Management System',
            description: 'A system designed to manage patient intake and specialized medical department queues.',
            tags: ['C++', 'std::deque', 'Algorithms'],
            details: 'Utilizes std::deque for efficient queue operations, supporting up to 20 departments with priority handling for urgent cases.',
            link: 'https://github.com/alfeshawy/Mastering-CPP-Projects/tree/main/Hospital-System',
            icon: Database
        },
        {
            title: 'Library Management System',
            description: 'A modular application for managing library operations, including inventory tracking and borrowing cycles.',
            tags: ['C++', 'OOD', 'Search Optimization'],
            details: 'Focuses on search efficiency with prefix-based book searching and real-time stock validation using modular Object-Oriented Design (OOD).',
            link: 'https://github.com/alfeshawy/Mastering-CPP-Projects/tree/main/Library-System',
            icon: Layout
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h2 className="text-eng-accent font-mono text-xs uppercase tracking-[0.3em] mb-4">02: Featured_Projects</h2>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Software Systems</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card flex flex-col h-full group"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-eng-accent/10 rounded-xl text-eng-accent group-hover:bg-eng-accent group-hover:text-white transition-colors">
                                <project.icon size={24} />
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-eng-muted hover:text-white transition-colors"
                            >
                                <Github size={20} />
                            </a>
                        </div>

                        <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                        <p className="text-eng-muted text-sm mb-4 flex-grow">
                            {project.description}
                        </p>

                        <div className="space-y-4">
                            <p className="text-[11px] text-white/40 leading-relaxed font-mono">
                                // {project.details}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 border border-white/5 rounded-md text-eng-accent font-mono uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-eng-accent hover:gap-3 transition-all pt-2"
                            >
                                VIEW_SOURCE <ExternalLink size={12} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
