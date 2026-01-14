import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#0f0f15] text-white flex flex-col items-center justify-center p-6 text-center">
                    <h1 className="text-4xl font-display font-bold mb-4">Oops! Something went wrong.</h1>
                    <p className="text-theme-text-muted mb-8 max-w-md">
                        The application crashed. This usually happens due to a browser incompatibility or a loading error.
                    </p>
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-left max-w-2xl overflow-auto mb-8 font-mono text-xs">
                        <p className="text-red-400 font-bold mb-2">Error Details:</p>
                        <p className="text-red-300">{this.state.error?.toString()}</p>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-3 bg-gradient-to-r from-theme-primary to-theme-accent rounded-full font-bold hover:shadow-lg transition-all"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
