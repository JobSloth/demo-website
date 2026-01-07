import { motion } from 'framer-motion';
import { Briefcase, User, Sparkles } from 'lucide-react';

interface ThemeToggleProps {
    userType: 'candidate' | 'employer';
    onToggle: (type: 'candidate' | 'employer') => void;
}

export const ThemeToggle = ({ userType, onToggle }: ThemeToggleProps) => {
    return (
        <div className="relative">
            <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-20"
                animate={{
                    background: userType === 'candidate'
                        ? 'linear-gradient(135deg, #6366f1, #ec4899)'
                        : 'linear-gradient(135deg, #3b82f6, #10b981)',
                }}
                transition={{ duration: 0.5 }}
            />

            {/* Main toggle container */}
            <div className="relative glass rounded-full p-1.5 shadow-2xl">
                {/* Sliding indicator */}
                <motion.div
                    className="absolute top-1.5 bottom-1.5 rounded-full z-0"
                    animate={{
                        left: userType === 'candidate' ? '6px' : 'calc(50% + 2px)',
                        width: 'calc(50% - 8px)',
                        background: userType === 'candidate'
                            ? 'linear-gradient(135deg, #6366f1, #818cf8)'
                            : 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                        mass: 0.8
                    }}
                    style={{
                        boxShadow: userType === 'candidate'
                            ? '0 4px 15px rgba(99, 102, 241, 0.35)'
                            : '0 4px 15px rgba(59, 130, 246, 0.35)',
                    }}
                />

                {/* Toggle buttons */}
                <div className="relative flex items-center z-10">
                    <button
                        onClick={() => onToggle('candidate')}
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full w-28 transition-all duration-300 ${userType === 'candidate'
                            ? 'text-white font-semibold'
                            : 'text-theme-text-muted hover:text-theme-text'
                            }`}
                    >
                        <motion.div
                            animate={{
                                scale: userType === 'candidate' ? 1.1 : 1,
                                rotate: userType === 'candidate' ? [0, -10, 10, 0] : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <User size={18} />
                        </motion.div>
                        <span className="text-sm tracking-wide">Talent</span>
                        {userType === 'candidate' && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                            >
                                <Sparkles size={12} className="text-theme-accent" />
                            </motion.div>
                        )}
                    </button>

                    <button
                        onClick={() => onToggle('employer')}
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full w-28 transition-all duration-300 ${userType === 'employer'
                            ? 'text-theme-bg font-semibold'
                            : 'text-theme-text-muted hover:text-theme-text'
                            }`}
                    >
                        <motion.div
                            animate={{
                                scale: userType === 'employer' ? 1.1 : 1,
                                rotate: userType === 'employer' ? [0, 10, -10, 0] : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Briefcase size={18} />
                        </motion.div>
                        <span className="text-sm tracking-wide">Business</span>
                        {userType === 'employer' && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                            >
                                <Sparkles size={12} className="text-theme-accent" />
                            </motion.div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
