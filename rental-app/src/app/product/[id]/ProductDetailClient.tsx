"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import BottomNav from "@/components/BottomNav";
import { getItemById, RentalItem } from "@/lib/itemStore";
import { useCartStore } from "@/lib/cartStore";

export default function ProductDetailClient({ id }: { id: string }) {
    const router = useRouter();
    const [selectedPricing, setSelectedPricing] = useState<"hourly" | "daily" | "weekly">("daily");
    const [item, setItem] = useState<RentalItem | null>(null);
    const [activeImage, setActiveImage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [wishlisted, setWishlisted] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    
    const addToCart = useCartStore((state) => state.addItem);

    useEffect(() => {
        getItemById(id).then((found) => {
            setItem(found);
            setLoading(false);
        });
    }, [id]);

    /* ─── Loading ─── */
    if (loading) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col">
                <div className="animate-pulse">
                    <div className="w-full aspect-square bg-slate-200 dark:bg-slate-800" />
                    <div className="p-5 space-y-3">
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4" />
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full w-1/2" />
                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full w-2/3" />
                    </div>
                </div>
            </div>
        );
    }

    /* ─── Not Found ─── */
    if (!item) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
                <div className="text-center px-8">
                    <div className="size-24 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <span className="material-symbols-outlined text-5xl text-slate-300">inventory_2</span>
                    </div>
                    <h2 className="font-bold text-slate-800 dark:text-white text-xl mb-1">Item Not Found</h2>
                    <p className="text-slate-400 text-sm mb-6">This listing may have been removed.</p>
                    <Link href="/" className="bg-primary text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const prices: Record<string, number> = {
        hourly: item.pricePerHour,
        daily: item.pricePerDay,
        weekly: item.pricePerWeek,
    };

    const priceLabels: Record<string, string> = {
        hourly: "/ hour",
        daily: "/ day",
        weekly: "/ week",
    };

    const statusConfig: Record<string, { label: string; color: string }> = {
        available: { label: "Available Now", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" },
        low_stock: { label: "Low Stock", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400" },
        rented: { label: "Currently Rented", color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400" },
    };
    const statusInfo = statusConfig[item.status];

    const handleRentNow = () => {
        if (!item) return;
        addToCart(item, selectedPricing, prices[selectedPricing]);
        setAddedToCart(true);
        setTimeout(() => router.push("/cart"), 800);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 antialiased pb-32">

            {/* ─── Top Nav ─── */}
            <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                <button
                    onClick={() => router.back()}
                    className="size-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                </button>
                <span className="font-bold text-sm truncate max-w-[200px]">{item.name}</span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setWishlisted(!wishlisted)}
                        className="size-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-colors hover:bg-rose-50 dark:hover:bg-rose-900/20"
                    >
                        <span className={`material-symbols-outlined text-[20px] transition-colors ${wishlisted ? "text-rose-500 font-fill" : "text-slate-400"}`}>favorite</span>
                    </button>
                    <button className="size-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[20px] text-slate-400">share</span>
                    </button>
                </div>
            </div>

            {/* ─── Image Gallery ─── */}
            <div className="relative">
                {/* Main image */}
                <div className="relative w-full aspect-square bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={item.images?.[activeImage] || item.images?.[0] || "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800"}
                        alt={item.name}
                        className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    {/* Status overlay */}
                    <div className="absolute top-4 left-4">
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm ${statusInfo.color}`}>
                            {statusInfo.label}
                        </span>
                    </div>
                    {item.isUserPosted && (
                        <div className="absolute top-4 right-4">
                            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary text-white backdrop-blur-sm shadow-md">
                                Your Listing
                            </span>
                        </div>
                    )}
                    {/* Image count */}
                    {item.images?.length > 1 && (
                        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                            {activeImage + 1} / {item.images.length}
                        </div>
                    )}
                </div>

                {/* Thumbnail strip */}
                {item.images?.length > 1 && (
                    <div className="flex gap-2 px-4 py-3 bg-white dark:bg-slate-900 overflow-x-auto no-scrollbar border-b border-slate-100 dark:border-slate-800">
                        {item.images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveImage(i)}
                                className={`w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${i === activeImage
                                    ? "border-primary shadow-md shadow-primary/20"
                                    : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={img} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ─── Item Info ─── */}
            <div className="px-4 pt-5">
                {/* Category tag */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">{item.category}</span>
                    <span className="text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{item.condition}</span>
                </div>

                <h1 className="text-2xl font-extrabold leading-tight mb-2">{item.name}</h1>

                {/* Rating & Location */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className={`material-symbols-outlined text-[16px] ${star <= Math.round(item.rating) ? "text-amber-400 font-fill" : "text-slate-300"}`}>star</span>
                            ))}
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{item.rating.toFixed(1)}</span>
                        </div>
                        <span className="text-xs text-slate-400">({item.reviewCount} reviews)</span>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-5">
                    <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                    <span className="font-medium">{item.location}</span>
                    {item.distance && <span className="text-slate-400">· {item.distance} away</span>}
                </div>
            </div>

            {/* ─── Pricing ─── */}
            <div className="px-4 mb-5">
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Rental Options</p>
                    <div className="grid grid-cols-3 gap-2">
                        {(["hourly", "daily", "weekly"] as const).map((opt) => {
                            const p = prices[opt];
                            const disabled = p === 0;
                            return (
                                <button
                                    key={opt}
                                    onClick={() => !disabled && setSelectedPricing(opt)}
                                    disabled={disabled}
                                    className={`flex flex-col items-center py-3 px-2 rounded-xl border-2 transition-all ${selectedPricing === opt && !disabled
                                        ? "border-primary bg-primary/5 shadow-sm"
                                        : "border-slate-200 dark:border-slate-700"
                                        } ${disabled ? "opacity-40 cursor-not-allowed" : "hover:border-primary/40 cursor-pointer"}`}
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{opt}</span>
                                    <span className={`text-base font-extrabold ${selectedPricing === opt && !disabled ? "text-primary" : "text-slate-800 dark:text-white"}`}>
                                        {disabled ? "—" : `₹${p}`}
                                    </span>
                                    {!disabled && <span className="text-[9px] text-slate-400 mt-0.5">{priceLabels[opt]}</span>}
                                </button>
                            );
                        })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Selected Price</span>
                        <div>
                            <span className="text-xl font-extrabold text-primary">₹{prices[selectedPricing]}</span>
                            <span className="text-xs text-slate-400 ml-1">{priceLabels[selectedPricing]}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Description ─── */}
            <div className="px-4 mb-5">
                <h3 className="font-bold text-base mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">description</span>
                    Description
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description || "No description provided."}</p>
            </div>

            {/* ─── Item Details ─── */}
            <div className="px-4 mb-5">
                <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">info</span>
                    Item Details
                </h3>
                <div className="space-y-2">
                    {[
                        { label: "Category", value: item.category, icon: "category" },
                        { label: "Condition", value: item.condition, icon: "verified" },
                        { label: "Location", value: item.location, icon: "location_on" },
                        { label: "Listed On", value: new Date(item.createdAt).toLocaleDateString("en-IN", { dateStyle: "medium" }), icon: "calendar_today" },
                        { label: "Status", value: statusInfo.label, icon: "check_circle" },
                    ].map((detail) => (
                        <div key={detail.label} className="flex items-center justify-between py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-0">
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-[15px]">{detail.icon}</span>
                                {detail.label}
                            </div>
                            <span className="text-sm font-semibold text-slate-800 dark:text-white">{detail.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ─── Owner ─── */}
            <div className="px-4 mb-6">
                <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">person</span>
                    Listed By
                </h3>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={item.ownerAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.ownerName)}&background=306ee8&color=fff`}
                            alt={item.ownerName}
                            className="size-12 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div>
                            <p className="font-bold text-slate-900 dark:text-white">{item.ownerName}</p>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="material-symbols-outlined text-emerald-500 text-[13px] font-fill">verified</span>
                                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Trusted Lender</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="size-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-[18px]">chat</span>
                        </button>
                        <button className="size-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ─── Fixed Bottom CTA ─── */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 p-4 z-40">
                <div className="flex items-center gap-3 max-w-md mx-auto">
                    <div className="text-center">
                        <p className="text-xs text-slate-400">Price</p>
                        <p className="font-extrabold text-primary text-lg">₹{prices[selectedPricing]}<span className="text-xs text-slate-400 font-normal ml-1">{priceLabels[selectedPricing]}</span></p>
                    </div>
                    <Link href="/cart" className="flex-1">
                        <button
                            onClick={handleRentNow}
                            disabled={item.status === "rented" || addedToCart}
                            className={`w-full font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm ${item.status === "rented"
                                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                                : addedToCart
                                    ? "bg-emerald-500 text-white"
                                    : "bg-primary text-white hover:bg-primary/90 active:scale-[0.98] shadow-primary/30"
                                }`}
                        >
                            <span className="material-symbols-outlined text-[18px]">
                                {addedToCart ? "check_circle" : item.status === "rented" ? "block" : "shopping_cart"}
                            </span>
                            {addedToCart ? "Added to Cart!" : item.status === "rented" ? "Currently Unavailable" : `Rent Now — ₹${prices[selectedPricing]}`}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
