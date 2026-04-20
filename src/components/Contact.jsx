import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 11c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
    </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);
        
        try {
            const response = await fetch("https://formspree.io/f/mqewlrad", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-sm uppercase tracking-widest text-white/50 mb-4">Get In Touch</h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8">Let's collaborate on your next project.</h3>
                    <p className="text-white/60 text-lg mb-12 max-w-md">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="flex space-x-6">
                        <a href="https://github.com/alfeshawy/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                            <GithubIcon size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/saif-alfeshawy/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                            <LinkedinIcon size={24} />
                        </a>
                        <a href="mailto:saif.alfeshawy@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    {status === 'success' ? (
                        <div className="glass-card h-full flex flex-col items-center justify-center text-center p-12 min-h-[400px] animate-fade-in">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 text-green-400">
                                <CheckCircle size={48} />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Message Sent Successfully!</h4>
                            <p className="text-white/50 max-w-xs mx-auto">
                                Thank you for reaching out. I'll get back to you as soon as possible.
                            </p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-sm font-medium text-white/40 hover:text-white transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-medium">Name</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        required
                                        disabled={status === 'submitting'}
                                        className="w-full bg-[#212121] border border-white/10 rounded-xl px-4 py-4 focus:border-white/30 focus:outline-none transition-colors disabled:opacity-50"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-medium">Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        required
                                        disabled={status === 'submitting'}
                                        className="w-full bg-[#212121] border border-white/10 rounded-xl px-4 py-4 focus:border-white/30 focus:outline-none transition-colors disabled:opacity-50"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-medium">Message</label>
                                <textarea 
                                    name="message"
                                    rows="6"
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full bg-[#212121] border border-white/10 rounded-xl px-4 py-4 focus:border-white/30 focus:outline-none transition-colors resize-none disabled:opacity-50"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            {status === 'error' && (
                                <p className="text-red-400 text-sm italic">Something went wrong. Please try again later.</p>
                            )}
                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2 disabled:opacity-50"
                            >
                                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                                {status !== 'submitting' && <Send size={18} />}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
