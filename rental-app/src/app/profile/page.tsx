"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import { useAuthStore } from "@/lib/authStore";

export default function ProfilePage() {
    const router = useRouter();
    const { user, signOut } = useAuthStore();

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
    };

    if (!user) {
        return (
            <div className="bg-slate-50 dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col pb-32">
                <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 sticky top-0 z-10 px-4 py-4 flex items-center justify-center">
                    <h1 className="text-lg font-extrabold tracking-tight">Profile</h1>
                </header>
                
                <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <div className="size-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <span className="material-symbols-outlined text-5xl text-slate-300">account_circle</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Join RentIt</h2>
                    <p className="text-slate-500 text-sm mb-8 px-4">
                        Sign in to manage your rentals, add listings, and track your earnings.
                    </p>
                    
                    <div className="w-full max-w-xs space-y-3">
                        <Link href="/login" className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 transition-all text-sm">
                            Sign In
                        </Link>
                        <Link href="/signup" className="flex items-center justify-center w-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-all text-sm">
                            Create Account
                        </Link>
                    </div>
                </main>
                <BottomNav />
            </div>
        );
    }

    // Determine user name from metadata or email fallback
    const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || "User";

    return (
        <div className="bg-slate-50 dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col pb-32 antialiased">

            {/* Header */}
            <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 sticky top-0 z-10 px-4 py-4 flex items-center justify-between">
                <div className="size-8" />
                <h1 className="text-lg font-extrabold tracking-tight">Profile</h1>
                <button className="size-8 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-200 transition-colors">
                    <span className="material-symbols-outlined text-[20px] text-slate-600 dark:text-slate-400">settings</span>
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">

                {/* Profile Header */}
                <section className="p-6 flex flex-col items-center text-center bg-white dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                    <div className="relative mb-4">
                        <div className="size-28 rounded-full border-4 border-primary/10 overflow-hidden bg-slate-100 relative shadow-inner">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=306ee8&color=fff&size=256`}
                                alt={displayName}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[14px] font-bold font-fill">verified</span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-extrabold">{displayName}</h2>
                    <p className="text-sm text-slate-500 mb-2">{user.email}</p>
                    
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                        Verified Member
                    </div>
                </section>

                {/* Optional Stats Row */}
                <section className="px-4 py-6">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
                            <span className="text-xl font-extrabold text-primary">0</span>
                            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1 text-center">Active Listings</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center">
                            <span className="text-xl font-extrabold text-primary">0</span>
                            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1 text-center">Items Rented</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center">
                            <div className="flex items-center gap-1">
                                <span className="text-xl font-extrabold text-primary">—</span>
                                <span className="material-symbols-outlined text-amber-400 text-sm font-fill">star</span>
                            </div>
                            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1">Rating</span>
                        </div>
                    </div>
                </section>

                {/* Menu Options */}
                <section className="px-4 pb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-2">Account Settings</p>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden divide-y divide-slate-100 dark:divide-slate-700/50">

                        {[
                            { icon: "inventory_2", label: "My Listings", href: "/listings" },
                            { icon: "history", label: "Rental History", href: "/history" },
                            { icon: "favorite", label: "Wishlist", href: "/saved" },
                            { icon: "account_balance_wallet", label: "Payments & Wallet", href: "/payments", badge: "₹ 0" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-[22px]">{item.icon}</span>
                                    <span className="font-semibold text-sm">{item.label}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {item.badge && (
                                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                    <span className="material-symbols-outlined text-slate-300 text-[20px]">chevron_right</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Logout Button */}
                    <button 
                        onClick={handleSignOut}
                        className="w-full mt-6 py-4 flex items-center justify-center gap-2 text-rose-500 font-bold bg-white dark:bg-slate-800 rounded-2xl border border-rose-100 dark:border-rose-900/30 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors shadow-sm"
                    >
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                        Sign Out
                    </button>
                </section>
            </main>

            <BottomNav />
        </div>
    );
}
