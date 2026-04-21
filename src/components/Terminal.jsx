import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Initializing Portfolio Terminal...' },
        { type: 'output', content: 'Welcome to Saif\'s Workspace v1.0.0' },
        { type: 'output', content: 'Type /help to see available commands.' },
    ]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const commands = {
        '/help': 'Available commands: /skills, /projects, /status, /clear, /about',
        '/skills': 'Core: C++, Data Structures, OOP, Competitive Programming (ICPC). Tools: n8n, Supabase, GitHub, Python.',
        '/projects': 'Systems: [1] AskMe (CLI Q&A) [2] Hospital System (Queue Mgmt) [3] Library System (Inventory).',
        '/status': 'Status: Active Learner | GPA: 3.4 | ICPC: Trainee',
        '/about': 'Saif Alfeshawy: CS Student at Helwan University focused on building solid software engineering foundations.',
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', content: cmd }];

            if (cmd === '/clear') {
                setHistory([]);
            } else if (commands[cmd]) {
                newHistory.push({ type: 'output', content: commands[cmd] });
                setHistory(newHistory);
            } else {
                newHistory.push({ type: 'output', content: `Command not found: ${cmd}. Type /help for assistance.` });
                setHistory(newHistory);
            }
            setInput('');
        }
    };

    return (
        <section id="terminal" className="py-20 px-6 bg-[#0a0a0c]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="terminal-window h-[400px] flex flex-col"
                >
                    <div className="bg-[#1a1a1e] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="flex-1 text-center">
                            <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase">root@alfeshawy: ~</span>
                        </div>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex-1 p-6 font-mono text-sm overflow-y-auto custom-scrollbar"
                    >
                        {history.map((item, i) => (
                            <div key={i} className={`mb-2 ${item.type === 'input' ? 'text-eng-accent' : 'text-white/70'}`}>
                                {item.type === 'input' ? <span className="mr-2">$</span> : null}
                                {item.content}
                            </div>
                        ))}
                        <div className="flex items-center text-eng-accent">
                            <span className="mr-2">$</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent border-none outline-none flex-1 text-white"
                                autoFocus
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Terminal;
