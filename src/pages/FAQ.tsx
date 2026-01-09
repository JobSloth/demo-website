
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "How does the matching AI actually work?",
        answer: "Our AI analyzes thousands of data points from your profile, resume, and preferences to match you with opportunities. Unlike simple keyword matching, we understand context, transferable skills, and cultural fit to ensure matches that actually make sense for your career trajectory."
    },
    {
        question: "Is Odysly free for candidates?",
        answer: "Yes, Odysly is completely free for candidates. We believe talent shouldn't have to pay to find their dream job. We make money by charging companies a fee when they successfully hire someone through our platform."
    },
    {
        question: "How long does the hiring process take?",
        answer: "Our goal is to drastically reduce time-to-hire. Typically, candidates on Odysly receive interview requests within 1 week of completing their profile, and the average time to offer is under 21 days—about 3x faster than the industry average."
    },
    {
        question: "Can I remain anonymous?",
        answer: "Absolutely. You can choose to keep your profile anonymous until you decide to accept an interview request. This way, you can explore opportunities without your current employer knowing."
    },
    {
        question: "What kind of companies use Odysly?",
        answer: "We partner with forward-thinking companies ranging from high-growth startups to innovative enterprises. They all share a commitment to using technology to find the best talent and offer competitive compensation packages."
    }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-theme-border/50 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-lg md:text-xl font-medium text-theme-text group-hover:text-theme-primary transition-colors">
                    {question}
                </span>
                <span className={`p-2 rounded-full border border-theme-border/50 transition-colors ${isOpen ? 'bg-theme-surface text-theme-primary' : 'text-theme-text-muted group-hover:text-theme-primary'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-theme-text-muted leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    return (
        <div className="w-full min-h-screen bg-theme-bg pt-32 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-theme-text mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-theme-text-muted">
                        Everything you need to know about Odysly.
                    </p>
                </div>

                <div className="space-y-2">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
