import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = {
        product: [
            { label: 'How it Works', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'Features', href: '#' },
        ],
        company: [
            { label: 'About', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' },
        ],
        legal: [
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
        ],
    };

    const socials = [
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Mail, href: '#', label: 'Email' },
    ];

    return (
        <footer className="relative border-t border-theme-border/30">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-display font-bold">Odysly.</h3>
                            <p className="text-theme-text-muted text-sm max-w-xs leading-relaxed">
                                The AI-powered platform connecting exceptional talent with innovative companies.
                            </p>

                            {/* Social links */}
                            <div className="flex gap-3 pt-2">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-xl bg-theme-surface/50 border border-theme-border/50 flex items-center justify-center text-theme-text-muted hover:text-theme-primary hover:border-theme-primary/50 transition-all duration-300"
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-theme-text-muted mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-sm text-theme-text/70 hover:text-theme-primary transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-theme-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-theme-text-muted">
                        © {currentYear} Odysly AI. All rights reserved.
                    </p>
                    <p className="text-xs text-theme-text-muted/60">
                        Made with purpose for the future of work.
                    </p>
                </div>
            </div>
        </footer>
    );
};
