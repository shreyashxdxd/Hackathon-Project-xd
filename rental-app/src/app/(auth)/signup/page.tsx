"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                },
            });

            if (signUpError) throw signUpError;
            
            // Auto login or redirect
            router.push("/");
        } catch (err: any) {
            setError(err.message || "Failed to sign up. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4 font-display text-slate-900 dark:text-slate-100 antialiased">
            <div className="w-full max-w-sm">
                <div className="mb-8 text-center flex flex-col items-center">
                    <div className="size-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-4">
                        <span className="material-symbols-outlined text-white text-3xl">person_add</span>
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight mb-2">Create Account</h1>
                    <p className="text-slate-500 text-sm">Join the leading rental marketplace today.</p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
                    <form onSubmit={handleSignup} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-sm rounded-xl border border-rose-100 dark:border-rose-900/50 flex items-start gap-2">
                                <span className="material-symbols-outlined text-[18px]">error</span>
                                <span>{error}</span>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">Full Name</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="Min 6 characters"
                                minLength={6}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {loading ? (
                                <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-bold hover:underline">
                            Sign In
                        </Link>
                    </div>
                </div>
                
                <div className="mt-8">
                    <button onClick={() => router.push("/")} className="w-full flex justify-center items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
