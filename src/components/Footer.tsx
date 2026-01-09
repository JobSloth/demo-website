import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = {
        product: [
            { label: 'How it Works', href: '/#candidate-section' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Start Hiring', href: '/#employer-section' },
        ],
        company: [
            { label: 'About', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' },
        ],
        legal: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
        ],
    };

    const socials = [
        { icon: Linkedin, href: 'https://linkedin.com/company/odysly', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:contact@odysly.tech', label: 'Email' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Github, href: '#', label: 'GitHub' },
    ];

    return (
        <footer className="relative">

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
                                        target="_blank"
                                        rel="noreferrer"
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
                                        {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                                            <Link
                                                to={item.href}
                                                className="text-sm text-theme-text/70 hover:text-theme-primary transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="text-sm text-theme-text/70 hover:text-theme-primary transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-theme-text-muted">
                        © {currentYear} Odysly AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
