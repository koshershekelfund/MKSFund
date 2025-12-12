import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showForgotPopup, setShowForgotPopup] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Fake network delay
        setTimeout(() => {
            setLoading(false);
            setError('Wrong username or password');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <div className="inline-block border-y border-gold-500/30 py-2 px-8 mb-6">
                        <span className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold">Client Access</span>
                    </div>
                    <h1 className="text-3xl font-serif text-slate-100">Secure Portal</h1>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent pointer-events-none"></div>

                    {error && (
                        <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center font-mono">
                            System Alert: {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Client ID / Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-700 p-3 text-slate-200 focus:border-gold-500 focus:outline-none transition-colors"
                                placeholder="ENTER ID"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-950 border border-slate-700 p-3 text-slate-200 focus:border-gold-500 focus:outline-none transition-colors"
                                placeholder="••••••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-gold-500 text-slate-950 font-bold uppercase tracking-widest py-4 hover:bg-white transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Authenticating...' : 'Access Account'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowForgotPopup(true)}
                            className="text-xs text-slate-500 hover:text-gold-500 transition-colors"
                        >
                            Forgot Credentials?
                        </button>
                    </div>

                    {/* Forgot Password Popup */}
                    {showForgotPopup && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-6 animation-fade-in">
                            <div className="bg-slate-900 border border-gold-500/30 p-6 shadow-2xl relative max-w-sm w-full">
                                <button
                                    onClick={() => setShowForgotPopup(false)}
                                    className="absolute top-2 right-2 text-slate-500 hover:text-gold-500 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                                <h3 className="text-gold-500 font-serif text-lg mb-4 text-center">Security Notice</h3>
                                <p className="text-slate-300 text-sm text-center leading-relaxed">
                                    To recover your credentials, please send a direct message to our secure handle on Twitter.
                                </p>
                                <div className="mt-6 text-center">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-block bg-gold-500/10 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-slate-950 px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 font-bold"
                                    >
                                        Contact Support
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center text-slate-600 text-xs max-w-xs mx-auto">
                    Authorization required for access. All activities are monitored and logged for compliance purposes.
                </div>
            </div>
        </div>
    );
};
