
export const Terms = () => {
    return (
        <div className="w-full min-h-screen bg-theme-bg pt-32 pb-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto space-y-8 text-theme-text-muted">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-theme-text mb-12">Terms of Service</h1>

                <section className="space-y-4">
                    <h2 className="text-2xl font-display font-semibold text-theme-text">1. Agreement to Terms</h2>
                    <p>
                        By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                        If you do not agree with these terms, you are prohibited from using or accessing this site or using any other services provided by Odysly.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-display font-semibold text-theme-text">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Odysly's website for personal,
                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on Odysly's website;</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-display font-semibold text-theme-text">3. Disclaimer</h2>
                    <p>
                        The materials on Odysly's website are provided on an 'as is' basis. Odysly makes no warranties, expressed or implied,
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <div className="pt-8 border-t border-theme-border/50">
                    <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};
