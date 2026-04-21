import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        const formData = new FormData(e.target);
        try {
            const response = await fetch("https://formspree.io/f/mqewlrad", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) setStatus('success');
            else setStatus('error');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-eng-accent font-mono text-xs uppercase tracking-[0.3em] mb-4">Module 04: Communication_Channel</h2>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Initialize Connection</h3>
                    <p className="text-eng-muted text-lg mb-12 max-w-md">
                        Whether you're looking for a logic-based architectural design or an AI integration strategy, my inbox is open for collaboration.
                    </p>
                    
                    <div className="flex space-x-4">
                        {[
                            { icon: Github, url: 'https://github.com/alfeshawy/' },
                            { icon: Linkedin, url: 'https://www.linkedin.com/in/saif-alfeshawy/' },
                            { icon: Mail, url: 'mailto:saif.alfeshawy@gmail.com' }
                        ].map((item, i) => (
                            <motion.a 
                                key={i}
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                                className="p-4 bg-white/5 rounded-xl border border-white/5 transition-colors"
                            >
                                <item.icon size={22} className="text-eng-accent" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {status === 'success' ? (
                        <div className="glass-card h-full flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-20 h-20 bg-eng-accent/10 rounded-full flex items-center justify-center mb-6 text-eng-accent"
                            >
                                <CheckCircle size={48} />
                            </motion.div>
                            <h4 className="text-2xl font-bold mb-4">Transmission Successful</h4>
                            <p className="text-eng-muted max-w-xs mx-auto font-mono text-sm">
                                [Message logged in secure buffer]
                            </p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-sm font-mono text-eng-accent hover:underline transition-all"
                            >
                                Send another packet?
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-[10px] uppercase tracking-widest text-eng-muted font-mono font-bold">Input_Name</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        required
                                        disabled={status === 'submitting'}
                                        className="w-full bg-eng-card border border-white/5 rounded-xl px-5 py-4 focus:border-eng-accent/50 focus:outline-none transition-all disabled:opacity-50 font-mono text-sm"
                                        placeholder="Identification"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] uppercase tracking-widest text-eng-muted font-mono font-bold">Input_Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        required
                                        disabled={status === 'submitting'}
                                        className="w-full bg-eng-card border border-white/5 rounded-xl px-5 py-4 focus:border-eng-accent/50 focus:outline-none transition-all disabled:opacity-50 font-mono text-sm"
                                        placeholder="Address@Protocol"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[10px] uppercase tracking-widest text-eng-muted font-mono font-bold">Input_Payload</label>
                                <textarea 
                                    name="message"
                                    rows="6"
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full bg-eng-card border border-white/5 rounded-xl px-5 py-4 focus:border-eng-accent/50 focus:outline-none transition-all resize-none disabled:opacity-50 font-mono text-sm"
                                    placeholder="Describe your logical architecture..."
                                ></textarea>
                            </div>
                            {status === 'error' && (
                                <p className="text-red-400 font-mono text-xs">[ERROR: Connection Timeout. Please retry.]</p>
                            )}
                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="btn-primary w-full flex items-center justify-center space-x-3 disabled:opacity-50"
                            >
                                <span className="font-mono uppercase tracking-widest">{status === 'submitting' ? 'UPLOADING...' : 'SEND_PACKET'}</span>
                                {status !== 'submitting' && <Send size={18} />}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
