import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Honestly, I was skeptical about another 'AI' job site. But Odysly didn't just match keywords—it matched my vibe. I found a company that actually cares about work-life balance.",
        author: "Alex Chen",
        role: "Senior Frontend Dev",
        image: "/images/sketch_developer_1767823434393.png" // Update with actual filename if diff
    },
    {
        quote: "We hired our Lead Engineer in 4 days. 4 days. Usually takes us 2 months. The candidates were already vetted and interested. It felt like cheating.",
        author: "Sarah Jenkins",
        role: "VP of Engineering @ TechFlow",
        image: "/images/sketch_manager_1767823456097.png" // Update with actual filename
    },
    {
        quote: "As a startup, we can't afford to hire the wrong people. Odysly's guarantee gave us the confidence to move fast. Best hiring decision we've made.",
        author: "Marcus Ray",
        role: "Founder, RocketLaunch",
        image: "/images/sketch_rocket_1767823478459.png" // Update with actual filename
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold mb-6">Love Letters</h2>
                    <p className="text-xl text-theme-text-muted">Don't take our word for it.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-theme-surface/30 border border-theme-border p-8 rounded-3xl relative"
                        >
                            {/* Sketch Image - absolute positioned or standard */}
                            <div className="mb-6 h-32 flex justify-center">
                                <img
                                    src={t.image}
                                    alt="Sketch"
                                    className="h-full object-contain opacity-90 contrast-125 mix-blend-multiply dark:mix-blend-normal dark:invert"
                                />
                            </div>

                            <p className="text-lg text-theme-text font-medium mb-6 italic">"{t.quote}"</p>

                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold text-theme-text">{t.author}</div>
                                    <div className="text-sm text-theme-text-muted">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
