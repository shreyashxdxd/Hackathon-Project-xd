"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PostItemPage() {
    const router = useRouter();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-28">

            {/* Header */}
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
                <div className="flex items-center justify-between px-6 py-4 max-w-2xl mx-auto">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight">List New Item</h1>
                    <div className="size-10" />
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-6 py-8">

                {/* Progress Stepper */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-3 rounded-full bg-primary ring-4 ring-primary/20" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Details</span>
                    </div>
                    <div className="h-px w-12 bg-primary/30" />
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Media</span>
                    </div>
                    <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Price</span>
                    </div>
                    <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
                    <div className="flex flex-col items-center gap-2">
                        <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Review</span>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-8">

                    {/* Item Information */}
                    <section>
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">info</span>
                            Item Information
                        </h2>
                        <div className="grid gap-5">
                            <label className="block">
                                <span className="block text-sm font-semibold mb-2 ml-1">Item Name</span>
                                <input
                                    type="text"
                                    placeholder="e.g. Sony A7III Mirrorless Camera"
                                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                />
                            </label>
                            <label className="block">
                                <span className="block text-sm font-semibold mb-2 ml-1">Category</span>
                                <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none">
                                    <option>Select Category</option>
                                    <option>Electronics</option>
                                    <option>Cameras &amp; Photography</option>
                                    <option>Tools &amp; Equipment</option>
                                    <option>Party &amp; Events</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="block text-sm font-semibold mb-2 ml-1">Description</span>
                                <textarea
                                    placeholder="Describe your item, include key specs and condition..."
                                    rows={4}
                                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                />
                            </label>
                        </div>
                    </section>

                    {/* Media & Photos */}
                    <section>
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">image</span>
                            Media &amp; Photos
                        </h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="aspect-square rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/10 transition-colors group">
                                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                                    add_a_photo
                                </span>
                                <span className="text-[10px] font-bold text-primary uppercase">Add Main</span>
                            </div>
                            <div className="aspect-square rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-400">image</span>
                            </div>
                            <div className="aspect-square rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-400">image</span>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-3 ml-1">
                            Upload at least 3 high-quality photos for better visibility.
                        </p>
                    </section>

                    {/* Pricing */}
                    <section>
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">payments</span>
                            Pricing (₹)
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="block">
                                <span className="block text-sm font-semibold mb-2 ml-1">Price per Day</span>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 pl-8 pr-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    />
                                </div>
                            </label>
                            <label className="block">
                                <span className="block text-sm font-semibold mb-2 ml-1">Price per Week</span>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 pl-8 pr-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    />
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Submit */}
                    <div className="pt-6">
                        <button className="w-full bg-primary text-white font-bold py-5 rounded-xl shadow-lg shadow-primary/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            Submit Listing
                            <span className="material-symbols-outlined">send</span>
                        </button>
                        <p className="text-center text-xs text-slate-500 mt-4 px-8">
                            By clicking submit, you agree to our{" "}
                            <a href="#" className="text-primary underline">Terms of Service</a>{" "}
                            and confirm the item is in your possession.
                        </p>
                    </div>
                </div>
            </main>

            {/* Bottom Nav */}
            <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md z-50">
                <div
                    className="rounded-full px-4 py-2 flex items-center justify-between shadow-2xl border border-white/20"
                    style={{
                        background: "rgba(255,255,255,0.8)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        borderTop: "1px solid rgba(48,110,232,0.1)",
                    }}
                >
                    <Link href="/" className="flex flex-col items-center justify-center p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">explore</span>
                        <span className="text-[10px] font-bold mt-1">Explore</span>
                    </Link>
                    <Link href="/cart" className="flex flex-col items-center justify-center p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">receipt_long</span>
                        <span className="text-[10px] font-bold mt-1">Orders</span>
                    </Link>
                    <div className="relative -top-6">
                        <Link
                            href="/post-item"
                            className="size-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 ring-4 ring-background-light dark:ring-background-dark"
                        >
                            <span className="material-symbols-outlined text-3xl">add</span>
                        </Link>
                    </div>
                    <Link href="/categories" className="flex flex-col items-center justify-center p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">chat_bubble</span>
                        <span className="text-[10px] font-bold mt-1">Inbox</span>
                    </Link>
                    <Link href="/profile" className="flex flex-col items-center justify-center p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">account_circle</span>
                        <span className="text-[10px] font-bold mt-1">Profile</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
