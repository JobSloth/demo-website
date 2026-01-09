
export const Privacy = () => {
    return (
        <div className="w-full min-h-screen bg-theme-bg pt-32 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto space-y-8 text-theme-text-muted">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-theme-text mb-12">Privacy Policy</h1>

                <section className="space-y-4">
                    <h2 className="text-2xl font-display font-semibold text-theme-text">1. Introduction</h2>
                    <p>
                        Welcome to Odysly. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-display font-semibold text-theme-text">2. Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Identity Data includes first name, last name, username or similar identifier.</li>
                        <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                        <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-display font-semibold text-theme-text">3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    </ul>
                </section>

                <div className="pt-8 border-t border-theme-border/50">
                    <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};
