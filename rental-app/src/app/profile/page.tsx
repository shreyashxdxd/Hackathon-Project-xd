"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">

            {/* Header */}
            <header className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 px-4 py-4 flex items-center justify-between">
                <button onClick={() => router.back()} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl">arrow_back</span>
                </button>
                <h1 className="text-lg font-bold tracking-tight">Profile</h1>
                <div className="flex items-center">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">more_vert</span>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 pb-28 overflow-y-auto">

                {/* Profile Header */}
                <section className="p-6 flex flex-col items-center text-center bg-white dark:bg-background-dark">
                    <div className="relative mb-4">
                        <div className="size-32 rounded-full border-4 border-primary/10 overflow-hidden bg-slate-100 relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEblyR6YvsCXAgflGyyKRV_O8Q62-YsvQci9RgFBwjd5HXi5SPIaHRnxCv29wIc6v16X1LqFQ6fUaT-dXhDED04pgXY2PRYr1305zEpWmq3c4xSIYogZU_XpZ5qoDJUcafZhIOT7iPBNWoay9ZcLNy_1CDa2u0vgUOIDpoZepSXK1yIaoOhXp8vnH_m3aWQrI4Vg_snXmYG7WY3Fef2aUneawpnSrc9tTREkNahQy1sDlD0p3GcdAzO97-PcamYkMPy_acPfqFiQ"
                                alt="Arjun Sharma profile"
                                fill
                                className="object-cover"
                                sizes="128px"
                            />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-4 border-white dark:border-background-dark flex items-center justify-center">
                            <span
                                className="material-symbols-outlined text-[16px] font-bold font-fill"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                verified
                            </span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold">Arjun Sharma</h2>
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 mt-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span className="text-sm font-medium">New Delhi, India</span>
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                        Verified Member
                    </div>
                    <button className="mt-6 w-full max-w-xs bg-primary text-white py-3 px-6 rounded-full font-bold hover:bg-primary/90 transition-colors">
                        Edit Profile
                    </button>
                </section>

                {/* Stats Row */}
                <section className="px-4 py-6">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center">
                            <span className="text-xl font-bold text-primary">24</span>
                            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1 text-center">Items Listed</span>
                        </div>
                        <div className="bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center">
                            <span className="text-xl font-bold text-primary">156</span>
                            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1 text-center">Items Rented</span>
                        </div>
                        <div className="bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                            <div className="flex items-center gap-1">
                                <span className="text-xl font-bold text-primary">4.9</span>
                                <span
                                    className="material-symbols-outlined text-primary text-sm"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    star
                                </span>
                            </div>
                            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1">Rating</span>
                        </div>
                    </div>
                </section>

                {/* Menu Options */}
                <section className="px-4 pb-8">
                    <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden divide-y divide-slate-50 dark:divide-slate-800">

                        {[
                            { icon: "inventory_2", label: "My Listings", href: "/listings" },
                            { icon: "history", label: "Rental History", href: "/history" },
                            { icon: "bookmark", label: "Saved Items", href: "/saved" },
                            { icon: "settings", label: "Settings", href: "/settings" },
                            { icon: "help", label: "Help Center", href: "/help" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                            </Link>
                        ))}

                        {/* Payments row with wallet balance badge */}
                        <Link
                            href="/payments"
                            className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                                <span className="font-medium">Payments &amp; Wallet</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                                    ₹2,450
                                </span>
                                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                            </div>
                        </Link>
                    </div>

                    {/* Logout Button */}
                    <button className="w-full mt-6 py-4 flex items-center justify-center gap-2 text-rose-500 font-bold bg-white dark:bg-background-dark rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors">
                        <span className="material-symbols-outlined">logout</span>
                        Logout
                    </button>
                </section>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 dark:bg-background-dark/90 dark:border-slate-800 px-4 pb-6 pt-2 z-50">
                <div className="flex items-end justify-between max-w-lg mx-auto relative">
                    <Link href="/" className="flex flex-col items-center gap-1 flex-1 py-1">
                        <span className="material-symbols-outlined text-slate-400">home</span>
                        <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Home</p>
                    </Link>
                    <Link href="/nearby" className="flex flex-col items-center gap-1 flex-1 py-1">
                        <span className="material-symbols-outlined text-slate-400">search</span>
                        <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Search</p>
                    </Link>

                    {/* Central Plus Button */}
                    <div className="flex-1 flex justify-center -translate-y-4">
                        <Link
                            href="/post-item"
                            className="size-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/40 ring-4 ring-white dark:ring-background-dark"
                        >
                            <span className="material-symbols-outlined text-3xl">add</span>
                        </Link>
                    </div>

                    <Link href="/cart" className="flex flex-col items-center gap-1 flex-1 py-1">
                        <span className="material-symbols-outlined text-slate-400">receipt_long</span>
                        <p className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">Orders</p>
                    </Link>
                    <Link href="/profile" className="flex flex-col items-center gap-1 flex-1 py-1">
                        <span
                            className="material-symbols-outlined text-primary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            person
                        </span>
                        <p className="text-[10px] font-bold uppercase tracking-tighter text-primary">Profile</p>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
