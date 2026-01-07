import { HeroSection } from './components/HeroSection';
import { FeatureShowcase } from './components/FeatureShowcase';
import { Footer } from './components/Footer';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-theme-bg transition-colors duration-700">
      {/* progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-theme-primary to-theme-accent transform origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 glass border-b border-theme-border/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Odysly.
          </motion.a>

          {/* Center - Scroll Links (Replaces Toggle) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center bg-theme-surface/50 rounded-full p-1 border border-theme-border/50 backdrop-blur-md"
          >
            <button
              onClick={() => scrollToSection('candidate-section')}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all hover:bg-theme-bg/50 hover:text-theme-primary"
            >
              Talent
            </button>
            <button
              onClick={() => scrollToSection('employer-section')}
              className="px-6 py-2 rounded-full text-sm font-medium transition-all hover:bg-theme-bg/50 hover:text-theme-accent"
            >
              Business
            </button>
          </motion.div>

          {/* Right - Nav Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a
              href="#features"
              className="text-sm font-medium text-theme-text-muted hover:text-theme-text transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-theme-text-muted hover:text-theme-text transition-colors"
            >
              Pricing
            </a>
            {/* Removed Login Button as requested */}
          </motion.div>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden">
            <button className="p-2 text-theme-text-muted">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* SECTION 1: CANDIDATE (Default Theme) */}
        <section id="candidate-section" className="relative">
          {/* Noise overlay only on dark section if desired, or global */}
          <div className="noise-overlay" />
          <div className="pt-20">
            <HeroSection userType="candidate" />
            <FeatureShowcase userType="candidate" />
          </div>
        </section>

        {/* SECTION 2: EMPLOYER (Cream Theme) */}
        <section id="employer-section" className="theme-employer relative bg-theme-bg text-theme-text border-t border-theme-border transition-colors duration-700">
          <div className="py-20">
            <HeroSection userType="employer" />
            <FeatureShowcase userType="employer" />
            <Testimonials />
            <Pricing />
          </div>
        </section>

        {/* SECTION 3: PRICING (Shared or Employer specific?) -> User said "Create a pricing page" */}
        {/* We will add Pricing component here later */}

        <Footer />
      </main>
    </div>
  );
}

export default App;
