"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
    const router = useRouter();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark">
                {/* Top App Bar */}
                <div className="flex items-center p-4 justify-between bg-transparent">
                    <button 
                        onClick={() => router.back()}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">close</span>
                    </button>
                    <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Confirmation</h2>
                </div>

                {/* Success Animation/Icon Area */}
                <div className="flex flex-col items-center justify-center pt-8 pb-6">
                    <div className="relative flex items-center justify-center">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-success/20 blur-3xl rounded-full scale-150"></div>
                        
                        {/* Main Icon Circle */}
                        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-success text-white shadow-lg shadow-success/30">
                            <span 
                                className="material-symbols-outlined !text-5xl" 
                                style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}
                            >
                                check_circle
                            </span>
                        </div>
                    </div>
                    
                    <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl font-bold leading-tight mt-8 text-center">
                        Payment Successful!
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal mt-2 text-center px-6">
                        Your rental for Pro Rental is confirmed and your items are being prepared.
                    </p>
                </div>

                {/* Order Summary Card */}
                <div className="px-6 py-4">
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                            Rental Summary
                        </p>
                        
                        <div className="flex gap-4">
                            <div 
                                className="h-20 w-20 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg bg-center bg-cover border border-slate-100 dark:border-slate-700" 
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIG0pgmjxkLnVzxZ9E3BHO_527tJsxCLLj8j7xool5qhH5Oej8APc1CAAPrhcABYxD6NnUwgNGLY_Dr3XkR_f89FqUga0Ql1jhye8iGzNuPsN8U3RR5jNkMRANvMbf3sj4gI1JowDKI2S4Mg8FvljIdqmOa9cDDVrvduMT86x6F4ex5YIS4Ua0LhLXd8-8TJZG7vheo0nrMsmSVADODO5DVHzaaBAWgfs9CLA1CaulcGuug9zZTjQxWxIX2bd8KS0VIvO4OwgBcw")' }}
                            ></div>
                            <div className="flex flex-col justify-center flex-1">
                                <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-snug">Sony WH-1000XM5</p>
                                <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
                                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                                    <p className="text-sm font-normal">Oct 24 - Oct 27, 2023</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500 dark:text-slate-400">Rental Fee (3 days)</span>
                                <span className="text-slate-900 dark:text-slate-100 font-medium">₹2,400.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-500 dark:text-slate-400">Security Deposit</span>
                                <span className="text-slate-900 dark:text-slate-100 font-medium">₹5,000.00</span>
                            </div>
                            <div className="flex justify-between items-center text-base pt-2">
                                <span className="font-bold text-slate-900 dark:text-slate-100">Total Paid</span>
                                <span className="font-bold text-primary text-xl">₹7,400.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order ID/Meta */}
                <div className="px-6 pb-8 flex flex-col items-center">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full">
                        <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500">Order ID:</span>
                        <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">#PR-99281-XM5</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto px-6 pb-10 space-y-3">
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        View Order Status
                        <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </button>
                    <Link href="/" className="block w-full">
                        <button className="w-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 py-4 rounded-xl font-bold text-base hover:scale-[0.98] transition-all">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
