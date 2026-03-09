"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "@/components/BottomNav";

export default function CartPage() {
    const router = useRouter();
    const { items, removeItem, updateDuration, getTotal } = useCartStore();

    const subtotal = getTotal();
    const deposit = items.length > 0 ? 500 : 0; // Fixed deposit if there are items
    const delivery = 0; // Free delivery
    const total = subtotal + deposit + delivery;

    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-slate-900 pb-32 font-display text-slate-900 dark:text-slate-100 antialiased">
            
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between px-4 py-3">
                    <button
                        onClick={() => router.back()}
                        className="size-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                    </button>
                    <h1 className="text-lg font-extrabold tracking-tight">Shopping Cart</h1>
                    <div className="size-9" />
                </div>
            </header>

            <main className="px-4 pt-6">
                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center pt-24 pb-12">
                        <div className="size-32 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-6xl text-slate-300">shopping_cart</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
                        <p className="text-slate-500 text-sm mb-8 text-center px-4">
                            Looks like you haven't added any items to rent yet. Browse our catalog to find what you need.
                        </p>
                        <Link href="/" className="bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-primary/25 transition-all">
                            Start Browsing
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="font-extrabold text-sm text-slate-500 uppercase tracking-wider">
                                {items.length} Item{items.length !== 1 && "s"} in Cart
                            </h2>
                        </div>

                        {/* Cart Items List */}
                        <div className="space-y-4 mb-8">
                            <AnimatePresence>
                                {items.map((cartItem) => (
                                    <motion.div
                                        key={cartItem.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, height: 0, marginBottom: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-white dark:bg-slate-800 rounded-2xl p-3 flex gap-3 shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden"
                                    >
                                        <div className="relative w-24 h-24 rounded-xl bg-slate-100 dark:bg-slate-700 overflow-hidden shrink-0">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={cartItem.item.images?.[0] || 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400'}
                                                alt={cartItem.item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col py-1">
                                            <div className="flex justify-between items-start gap-2">
                                                <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 leading-tight">
                                                    {cartItem.item.name}
                                                </h3>
                                                <button
                                                    onClick={() => removeItem(cartItem.id)}
                                                    className="size-6 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center shrink-0 hover:bg-rose-100 text-rose-500 transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-[14px]">close</span>
                                                </button>
                                            </div>
                                            <p className="text-xs text-slate-400 mt-1 capitalize">
                                                Pricing: <span className="font-semibold text-slate-600 dark:text-slate-300">{cartItem.pricingType}</span>
                                            </p>
                                            
                                            <div className="mt-auto flex items-center justify-between pt-2">
                                                <div className="flex items-center bg-slate-100 dark:bg-slate-700 rounded-lg p-1 gap-3">
                                                    <button 
                                                        onClick={() => updateDuration(cartItem.id, cartItem.duration - 1)}
                                                        disabled={cartItem.duration <= 1}
                                                        className="size-6 bg-white dark:bg-slate-600 rounded flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm disabled:opacity-50"
                                                    >
                                                        <span className="material-symbols-outlined text-[16px]">remove</span>
                                                    </button>
                                                    <span className="text-xs font-bold w-4 text-center">{cartItem.duration}</span>
                                                    <button 
                                                        onClick={() => updateDuration(cartItem.id, cartItem.duration + 1)}
                                                        className="size-6 bg-white dark:bg-slate-600 rounded flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm"
                                                    >
                                                        <span className="material-symbols-outlined text-[16px]">add</span>
                                                    </button>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-sm font-extrabold text-primary">₹{cartItem.price * cartItem.duration}</span>
                                                    <p className="text-[9px] text-slate-400">₹{cartItem.price} / {cartItem.pricingType.replace('ly', '')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[18px]">receipt_long</span>
                                Order Summary
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">₹{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Security Deposit (Refundable)</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">₹{deposit.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Delivery Fee</span>
                                    <span className="font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 rounded-md">FREE</span>
                                </div>
                                
                                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-700 flex flex-col">
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm font-bold">Total Amount</span>
                                        <span className="text-2xl font-extrabold text-primary">₹{total.toLocaleString()}</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 text-right mt-1">Includes all taxes and fees</p>
                                </div>
                            </div>
                        </div>

                        {/* Checkout CTA */}
                        <div className="fixed bottom-[80px] left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 p-4 z-40 pb-safe">
                            <div className="max-w-md mx-auto">
                                <Link href="/checkout" className="block w-full">
                                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2">
                                        <span>Proceed to Checkout</span>
                                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </main>
            <BottomNav />
        </div>
    );
}
