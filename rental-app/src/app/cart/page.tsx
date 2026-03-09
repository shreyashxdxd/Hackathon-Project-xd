"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const cartItems = [
    {
        name: "Sony A7 IV Camera",
        price: "₹4,500",
        duration: "3 Days Rental",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEEXbcD6V7aZtwa9oU4gwc3bliehr3O7RpqtAQi2NQGLJD48k7Of2E737EfscWGq05P7CrGMXY3senCHxiM7E8x1MgInqE6TN2HPb2ae9fjymx77UhaTwI3fDx1ClEHgOAe3eYE0gZY4P19Fk_nsLhrGpr-8hUjGDFydaHz1kfiHzzecGejCVZqeRLkgD3amF4GdO0-DnlKW-WQ3z977v-63b9SfyJsBLhjSJFaGQikjCHRHtweHO_K1ciiDriG46g0gSs16Sf3A",
    },
    {
        name: "24-70mm f/2.8 GM II",
        price: "₹3,000",
        duration: "3 Days Rental",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHzuDWKHqwh4Yj8EW-sZbW-6vvE0Pzq9GOcN7axSfgJq1CzXUmA_G7hiFufOWf9nTVzupX2XP3dnScUioTbMw8V6qnTVixHaBqY2MfiBlv7J1XsccEfc6fvOU6JLz9IDvBqM6BaafqbzDzRkQntNnyQopGNt8dkiIfNDKx6IEkGctiBKvyRdc9hLqfxyO2bSOZLXxF4tyR-VlYcm0kW_B138amva-6G9MQbgTehXG1q1jrCLfYcn7JywlmRU3YHB_swg_EHNbfcQ",
    },
    {
        name: "DJI RS 3 Pro Gimbal",
        price: "₹2,500",
        duration: "2 Days Rental",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM2g3xi9v_61dPGSXrR1XvyDQ9bSO8H0KKVT2xIiK1qq8UekgJKkP8vrbIVjuKU2gAUVEqM-lOekgn3xnhBjU4g8qtDKbQKR6MBu7-gm7pBGVF_YIM4pgRuRvRz5YR1326nSArjUMDKSDjqe-HiRV7OOd4bbNvzlOehW0Rr0g7ty4aNFnmlhdRSbjMGQIY5D383Mer8x4MJgf24wVwA0p1JYeEt8t3bospcUDtvzGVGS0YN05u0RNkdOER0RpWD3xDAWQ-yUCQaA",
    },
];

export default function CartPage() {
    const router = useRouter();

    return (
        <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark pb-32 font-display text-slate-900 dark:text-slate-100">

            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-primary/10">
                <button
                    onClick={() => router.back()}
                    className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 cursor-pointer"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
                    Your Cart
                </h2>
            </div>

            {/* Cart Items */}
            <div className="flex flex-col gap-4 p-4">
                {cartItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex gap-4 bg-white dark:bg-slate-800/50 p-4 rounded-xl shadow-sm border border-primary/5"
                    >
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-[80px] shrink-0"
                            style={{ backgroundImage: `url("${item.img}")` }}
                        />
                        <div className="flex flex-1 flex-col justify-between">
                            <div>
                                <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-tight">
                                    {item.name}
                                </p>
                                <p className="text-primary text-sm font-medium mt-1">
                                    {item.price}{" "}
                                    <span className="text-slate-500 dark:text-slate-400 font-normal">/ day</span>
                                </p>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">{item.duration}</p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                            <button className="text-slate-400 hover:text-red-500 transition-colors">
                                <span className="material-symbols-outlined text-sm">delete</span>
                            </button>
                            <div className="flex items-center gap-3 bg-background-light dark:bg-slate-700 rounded-full px-2 py-1">
                                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-600 text-primary shadow-sm">
                                    −
                                </button>
                                <span className="text-sm font-bold w-4 text-center">1</span>
                                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className="mx-4 mt-6 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
                <h3 className="text-slate-900 dark:text-slate-100 font-bold mb-4">Rental Summary</h3>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
                        <span className="font-medium">₹27,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Security Deposit (Refundable)</span>
                        <span className="font-medium">₹5,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Delivery Fee</span>
                        <span className="text-green-600 font-medium">FREE</span>
                    </div>
                    <div className="pt-3 border-t border-primary/10 flex justify-between">
                        <span className="text-base font-bold text-slate-900 dark:text-slate-100">Total Amount</span>
                        <span className="text-xl font-bold text-primary">₹32,500</span>
                    </div>
                </div>
            </div>

            {/* Checkout Button */}
            <div className="p-4 mt-4">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2">
                    <span>Proceed to Rent</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 px-8">
                    By proceeding, you agree to Pro Rental&apos;s terms of service and damage policy.
                </p>
            </div>

            {/* Bottom Nav */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
                <div className="flex items-center justify-around bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl px-4 py-3 rounded-full shadow-2xl border border-white/20 dark:border-slate-800/50">
                    <Link href="/" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">home</span>
                        <p className="text-[10px] font-medium">Home</p>
                    </Link>
                    <Link href="/nearby" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">search</span>
                        <p className="text-[10px] font-medium">Explore</p>
                    </Link>
                    <Link href="/cart" className="flex flex-col items-center gap-1 text-primary relative">
                        <span className="material-symbols-outlined font-fill">shopping_cart</span>
                        <p className="text-[10px] font-bold">Cart</p>
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                            3
                        </div>
                    </Link>
                    <Link href="/saved" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">favorite</span>
                        <p className="text-[10px] font-medium">Saved</p>
                    </Link>
                    <Link href="/profile" className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">person</span>
                        <p className="text-[10px] font-medium">Profile</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
