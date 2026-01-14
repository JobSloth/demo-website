import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Step {
    id: number;
    title: string;
    description: string;
    renderContent: () => JSX.Element;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps: Step[] = [
        {
            id: 1,
            title: "Welcome to Odysly",
            description: "Our AI recruitment platform helps candidates find jobs they'll actually love, and helps companies find perfect-fit talent faster. Let's walk you through how it works.",
            renderContent: () => (
                <div className="flex flex-col items-center justify-center h-full py-12">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-lg"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-theme-primary to-theme-accent flex items-center justify-center shadow-lg shadow-theme-accent/20">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-white">
                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" x2="12" y1="19" y2="22" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-theme-text mb-4">
                            AI-Powered Career Matching
                        </h3>
                        <p className="text-lg text-theme-text-muted leading-relaxed">
                            Instead of endless scrolling and guessing, our AI conducts conversational interviews to understand what you really want in your next role.
                        </p>
                    </motion.div>
                </div>
            )
        },
        {
            id: 2,
            title: "Step 1: Initial Conversation",
            description: "Our AI starts by getting to know you through natural conversation. It asks about your background, experience level, and what you're looking for in your next role.",
            renderContent: () => (
                <div className="flex flex-col space-y-4 py-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="self-start max-w-[75%]"
                    >
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-theme-accent to-theme-primary flex items-center justify-center shadow-lg shadow-theme-accent/20 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                    <line x1="12" x2="12" y1="19" y2="22" />
                                </svg>
                            </div>
                            <div className="bg-theme-bg-secondary border border-theme-border/50 rounded-2xl rounded-tl-sm p-5 shadow-lg">
                                <p className="text-theme-text text-sm md:text-base leading-relaxed">
                                    Hi! I'm here to help you find your ideal role. Let's start with the basics—what's your current experience level?
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="self-end max-w-[75%]"
                    >
                        <div className="bg-gradient-to-br from-theme-primary to-theme-accent p-[1px] rounded-2xl rounded-tr-sm">
                            <div className="bg-theme-bg/90 backdrop-blur-md rounded-2xl rounded-tr-sm p-4 border border-white/10">
                                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                    Senior level, 7+ years in frontend
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="self-start max-w-[75%]"
                    >
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-theme-accent to-theme-primary flex items-center justify-center shadow-lg shadow-theme-accent/20 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                    <line x1="12" x2="12" y1="19" y2="22" />
                                </svg>
                            </div>
                            <div className="bg-theme-bg-secondary border border-theme-border/50 rounded-2xl rounded-tl-sm p-5 shadow-lg">
                                <p className="text-theme-text text-sm md:text-base leading-relaxed">
                                    Great! Now tell me—what are you really looking for in your next role?
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )
        },
        {
            id: 3,
            title: "Step 2: You Share Your Preferences",
            description: "Express exactly what you want—tech stack, company stage, culture, compensation, remote preferences, and more. The AI understands nuanced requirements like 'high ownership' and 'smaller teams'.",
            renderContent: () => (
                <div className="flex flex-col space-y-4 py-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="self-end max-w-[85%] md:max-w-[80%]"
                    >
                        <div className="bg-gradient-to-br from-theme-primary to-theme-accent p-[1px] rounded-2xl rounded-tr-sm">
                            <div className="bg-theme-bg/90 backdrop-blur-md rounded-2xl rounded-tr-sm p-5 border border-white/10">
                                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                    I'm looking for Senior FE roles, React heavy. Must be remote-first, series B or C. I thrive in smaller teams where I have high ownership. No large corps.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="self-start"
                    >
                        <div className="flex gap-2 p-4 bg-theme-bg-secondary rounded-2xl rounded-tl-sm border border-theme-border/50 items-center">
                            <span className="w-2 h-2 bg-theme-text-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-theme-text-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-theme-text-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </motion.div>
                </div>
            )
        },
        {
            id: 4,
            title: "Step 3: AI Processes Your Requirements",
            description: "The AI extracts key criteria from your message and scans thousands of companies in real-time. It understands context—like translating 'high ownership' into company culture filters and 'Series B/C' into funding stage requirements.",
            renderContent: () => (
                <div className="flex flex-col space-y-4 py-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="self-start max-w-[85%] md:max-w-[80%]"
                    >
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-theme-accent to-theme-primary flex items-center justify-center shadow-lg shadow-theme-accent/20 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                    <line x1="12" x2="12" y1="19" y2="22" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <div className="bg-theme-bg-secondary border border-theme-border/50 rounded-2xl rounded-tl-sm p-5 shadow-lg">
                                    <p className="text-theme-text text-sm md:text-base leading-relaxed mb-4">
                                        Got it. I'll filter for high-autonomy environments in mid-stage startups. Focusing on Series B/C companies where you can have direct impact.
                                    </p>

                                    <div className="flex items-center gap-2 text-xs font-mono text-theme-accent mb-3">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-accent opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-accent"></span>
                                        </span>
                                        Scanning 15,000+ startups...
                                    </div>

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
                </div>
            )
        },
        {
            id: 5,
            title: "Step 4: Get Personalized Matches",
            description: "Receive curated job recommendations with match scores and detailed explanations. See exactly why each role fits your criteria—no more guessing if you're a good fit.",
            renderContent: () => (
                <div className="flex flex-col items-center justify-center py-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="w-full max-w-md"
                    >
                        <div className="relative group cursor-pointer">
                            {/* Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-theme-primary to-theme-accent rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500" />

                            <div className="relative bg-[#0F1115] rounded-2xl p-6 border border-white/10">
                                {/* Match Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 bg-[#635BFF] rounded-lg flex items-center justify-center text-white font-bold text-2xl">S</div>
                                        <div>
                                            <h3 className="font-bold text-white text-xl">Stripe</h3>
                                            <p className="text-white/60 text-sm">Staff Engineer</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-theme-accent">96%</div>
                                        <p className="text-xs text-white/50">Match</p>
                                    </div>
                                </div>

                                {/* Why it fits */}
                                <div className="space-y-2 mb-5">
                                    <p className="text-xs font-mono uppercase text-white/40 mb-2">WHY IT FITS:</p>
                                    <ul className="space-y-2">
                                        {[
                                            "Matches salary floor",
                                            "Async culture (High Autonomy)",
                                            "Direct access to founders"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                                                <svg className="w-4 h-4 text-theme-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action */}
                                <div className="flex gap-3">
                                    <button className="flex-1 py-2.5 bg-theme-bg-secondary hover:bg-theme-bg-secondary/80 rounded-lg text-sm font-medium text-white/60 transition-colors">
                                        Dismiss
                                    </button>
                                    <button className="flex-1 py-2.5 bg-white text-black hover:bg-gray-100 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-white/10">
                                        Review Opportunity
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )
        }
    ];

    const goToNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToPreviousStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleClose = () => {
        setCurrentStep(0);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-[#121217] border border-white/10 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                        {/* Background Gradients */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-theme-primary/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-theme-accent/10 rounded-full blur-[100px] pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                            <X size={20} className="text-white/70" />
                        </button>

                        {/* Content Container */}
                        <div className="relative z-10 flex flex-col h-full max-h-[90vh]">

                            {/* Header with Title & Description */}
                            <div className="px-8 pt-8 pb-4 border-b border-white/5">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                                        {steps[currentStep].title}
                                    </h2>
                                    <p className="text-theme-text-muted leading-relaxed text-sm md:text-base">
                                        {steps[currentStep].description}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Step Content */}
                            <div className="flex-1 overflow-y-auto px-8 py-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="min-h-full"
                                    >
                                        {steps[currentStep].renderContent()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Navigation Footer */}
                            <div className="px-8 py-6 border-t border-white/5 bg-gradient-to-t from-[#121217] to-transparent">
                                <div className="flex items-center justify-between">
                                    {/* Previous Button */}
                                    <button
                                        onClick={goToPreviousStep}
                                        disabled={currentStep === 0}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${currentStep === 0
                                                ? 'opacity-30 cursor-not-allowed bg-white/5 text-white/40'
                                                : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                                            }`}
                                    >
                                        <ChevronLeft size={18} />
                                        Previous
                                    </button>

                                    {/* Step Indicator */}
                                    <div className="flex items-center gap-2">
                                        {steps.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-2 rounded-full transition-all ${index === currentStep
                                                        ? 'w-8 bg-gradient-to-r from-theme-primary to-theme-accent'
                                                        : index < currentStep
                                                            ? 'w-2 bg-theme-accent/60'
                                                            : 'w-2 bg-white/20'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={goToNextStep}
                                        disabled={currentStep === steps.length - 1}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${currentStep === steps.length - 1
                                                ? 'opacity-30 cursor-not-allowed bg-white/5 text-white/40'
                                                : 'bg-gradient-to-r from-theme-primary to-theme-accent hover:shadow-lg hover:shadow-theme-primary/30 text-white'
                                            }`}
                                    >
                                        Next
                                        <ChevronRight size={18} />
                                    </button>
                                </div>

                                {/* Step Counter Text */}
                                <div className="text-center mt-4">
                                    <p className="text-xs text-white/50 font-medium">
                                        Step {currentStep + 1} of {steps.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
