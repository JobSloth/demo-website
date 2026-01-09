import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CandidateAgentDemo = () => {
    const [step, setStep] = useState(0);

    // Sequence of events
    useEffect(() => {
        const sequence = async () => {
            // Step 0: Initial delay
            await new Promise(r => setTimeout(r, 1000));
            setStep(1); // User types/sends message

            // Step 1: Agent thinking
            await new Promise(r => setTimeout(r, 2000));
            setStep(2); // Agent responds + Tags

            // Step 2: Scanning / Transition to results
            await new Promise(r => setTimeout(r, 3500));
            setStep(3); // Show Match Card
        };
        sequence();
    }, []);

    const userMessage = "I'm looking for Senior FE roles, React heavy. Must be remote-first, series B or C. I thrive in smaller teams where I have high ownership. No large corps.";

    // Agent response split for typing effect or just direct show
    const agentResponse = "Got it. I'll filter for high-autonomy environments in mid-stage startups. Focusing on Series B/C companies where you can have direct impact.";

    return (
        <section className="w-full h-full overflow-hidden relative rounded-3xl">
            {/* Demo Container */}
            <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-full bg-[#121217] border border-white/5 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-theme-primary/10 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-theme-accent/10 rounded-full blur-[100px] -z-10" />

                <div className="p-6 md:p-8 h-full flex flex-col relative z-10">
                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col space-y-6 overflow-y-auto custom-scrollbar pb-20">

                        {/* User Message */}
                        <AnimatePresence>
                            {step >= 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    className="self-end max-w-[85%] md:max-w-[70%]"
                                >
                                    <div className="bg-gradient-to-br from-theme-primary to-theme-accent p-[1px] rounded-2xl rounded-tr-sm">
                                        <div className="bg-theme-bg/90 backdrop-blur-md rounded-2xl rounded-tr-sm p-4 md:p-5 border border-white/10">
                                            <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                                {userMessage}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Agent Thinking/Response */}
                        <AnimatePresence>
                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="self-start"
                                >
                                    <div className="flex gap-2 p-4 bg-theme-bg-secondary rounded-2xl rounded-tl-sm border border-theme-border/50 items-center">
                                        <span className="w-2 h-2 bg-theme-text-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 bg-theme-text-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 bg-theme-text-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}

                            {step >= 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    className="self-start max-w-[85%] md:max-w-[75%]"
                                >
                                    <div className="flex gap-4">
                                        {/* Avatar */}
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-theme-accent to-theme-primary flex items-center justify-center shadow-lg shadow-theme-accent/20 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                                        </div>

                                        <div className="space-y-3">
                                            {/* Text Bubble */}
                                            <div className="bg-theme-bg-secondary border border-theme-border/50 rounded-2xl rounded-tl-sm p-5 shadow-lg">
                                                <p className="text-theme-text text-sm md:text-base leading-relaxed mb-4">
                                                    {agentResponse}
                                                </p>

                                                {/* Scanning Status */}
                                                <div className="flex items-center gap-2 text-xs font-mono text-theme-accent mb-3">
                                                    <span className="relative flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-accent"></span>
                                                    </span>
                                                    Scanning 15,000+ startups...
                                                </div>

                                                {/* Generated Tags */}
                                                <div className="flex flex-wrap gap-2">
                                                    {['Senior Frontend', 'Remote-First', 'Series B-C', 'High Ownership', '>$180k'].map((tag, i) => (
                                                        <motion.span
                                                            key={tag}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                                            className="px-3 py-1 rounded-full text-xs font-medium bg-theme-bg/50 border border-theme-border text-theme-text-muted"
                                                        >
                                                            {tag}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Result Card (Slides Up) */}
                        <AnimatePresence>
                            {step >= 3 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="self-center w-full max-w-sm"
                                >
                                    <div className="relative group cursor-pointer mt-4">
                                        {/* Glow Effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-theme-primary to-theme-accent rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500" />

                                        <div className="relative bg-[#0F1115] rounded-2xl p-5 border border-white/10">
                                            {/* Match Header */}
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-[#635BFF] rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                                                    <div>
                                                        <h3 className="font-bold text-white text-lg">Stripe</h3>
                                                        <p className="text-white/60 text-sm">Staff Engineer</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <div className="radial-progress text-theme-accent text-xs font-bold" style={{ "--value": 96, "--size": "2.5rem" } as any}>
                                                        96%
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Why it fits */}
                                            <div className="space-y-2 mb-4">
                                                <p className="text-xs font-mono uppercase text-white/40 mb-1">Why it fits:</p>
                                                <ul className="space-y-1.5">
                                                    {[
                                                        "Matches salary floor",
                                                        "Async culture (High Autonomy)",
                                                        "Direct access to founders"
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                                                            <svg className="w-4 h-4 text-theme-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Action */}
                                            <div className="flex gap-2 mt-2">
                                                <button className="flex-1 py-2 bg-theme-bg-secondary hover:bg-theme-bg-secondary/80 rounded-lg text-sm font-medium text-white/60 transition-colors">
                                                    Dismiss
                                                </button>
                                                <button className="flex-1 py-2 bg-white text-black hover:bg-gray-100 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-white/10">
                                                    Review Opportunity
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* Input Area (Visual Only) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[#121217] via-[#121217] to-transparent pt-20">
                        <div className="relative">
                            <input
                                type="text"
                                disabled
                                placeholder={step === 0 ? "Typing..." : ""}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-theme-text placeholder:text-theme-text-muted/50 focus:outline-none backdrop-blur-sm"
                            />
                            <div className="absolute right-2 top-2 bottom-2">
                                <button className="h-full aspect-square bg-theme-primary/20 rounded-lg flex items-center justify-center text-theme-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
