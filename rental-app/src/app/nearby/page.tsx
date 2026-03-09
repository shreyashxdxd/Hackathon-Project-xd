"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getAllItems, RentalItem } from "@/lib/itemStore";

const MapView = dynamic(() => import("@/components/MapView"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-200 dark:bg-slate-800 animate-pulse" />,
});

export default function NearbyPage() {
    const [items, setItems] = useState<RentalItem[]>([]);
    const [search, setSearch] = useState("");
    const [selectedItem, setSelectedItem] = useState<RentalItem | null>(null);

    useEffect(() => {
        getAllItems().then((allItems) => {
            setItems(allItems);
            if (allItems.length > 0) {
                setSelectedItem(allItems[0]);
            }
        });
    }, []);

    const filteredItems = items.filter(item => 
        !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative h-screen w-full flex flex-col overflow-hidden font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">

            {/* Full-screen Map Background */}
            <div className="absolute inset-0 z-0">
                <MapView items={filteredItems} onItemSelect={setSelectedItem} />
            </div>

            {/* Top Bar — Search & Filters */}
            <div className="relative z-10 p-4 pt-12 pointer-events-none">
                <div className="flex flex-col gap-4 pointer-events-auto">
                    {/* Search Row */}
                    <div className="flex gap-2 items-center">
                        <div
                            className="flex-1 rounded-full h-12 flex items-center px-4 shadow-sm border border-white/50 dark:border-slate-700/50"
                            style={{
                                background: "rgba(255,255,255,0.7)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                            }}
                        >
                            <span className="material-symbols-outlined text-slate-500 mr-2">search</span>
                            <input
                                className="bg-transparent border-none focus:ring-0 outline-none text-slate-800 dark:text-white placeholder:text-slate-500 w-full text-sm"
                                placeholder="Search items in Nagpur"
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <button
                            className="size-12 rounded-full flex items-center justify-center shadow-sm border border-white/50 dark:border-slate-700/50"
                            style={{
                                background: "rgba(255,255,255,0.7)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                            }}
                        >
                            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">tune</span>
                        </button>
                    </div>

                    {/* Category Chips */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full shadow-md whitespace-nowrap">
                            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                            <span className="text-sm font-medium">All</span>
                        </button>
                        <button
                            className="flex items-center gap-2 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full shadow-sm whitespace-nowrap border border-white/50 dark:border-slate-700/50"
                            style={{
                                background: "rgba(255,255,255,0.7)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                            }}
                        >
                            <span className="material-symbols-outlined text-[18px]">shutter_speed</span>
                            <span className="text-sm font-medium">Lenses</span>
                        </button>
                        <button
                            className="flex items-center gap-2 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full shadow-sm whitespace-nowrap border border-white/50 dark:border-slate-700/50"
                            style={{
                                background: "rgba(255,255,255,0.7)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                            }}
                        >
                            <span className="material-symbols-outlined text-[18px]">flight</span>
                            <span className="text-sm font-medium">Drones</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2 pointer-events-auto">
                <button
                    className="size-10 rounded-full flex items-center justify-center shadow-md text-slate-700 dark:text-slate-300"
                    style={{
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                >
                    <span className="material-symbols-outlined">add</span>
                </button>
                <button
                    className="size-10 rounded-full flex items-center justify-center shadow-md text-slate-700 dark:text-slate-300"
                    style={{
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                >
                    <span className="material-symbols-outlined">remove</span>
                </button>
                <button
                    className="size-10 rounded-full flex items-center justify-center shadow-md mt-4 text-primary"
                    style={{
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                    }}
                >
                    <span className="material-symbols-outlined">near_me</span>
                </button>
            </div>

            {/* Bottom Selected Item Card */}
            <div className="mt-auto relative z-10 px-4 pb-4 pointer-events-none">
                <div className="pointer-events-auto">
                    {selectedItem ? (
                        <Link
                            href={`/product/${selectedItem.id}`}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-100 dark:border-slate-800 flex gap-4 max-w-md mx-auto mb-4 block"
                        >
                            <div className="w-32 h-32 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 relative">
                                <Image
                                    src={selectedItem.images[0]}
                                    alt={selectedItem.name}
                                    fill
                                    className="object-cover"
                                    sizes="128px"
                                />
                            </div>
                            <div className="flex flex-col justify-between flex-1 py-1">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                                            {selectedItem.name}
                                        </h3>
                                        <span className="material-symbols-outlined text-slate-300 cursor-pointer">favorite</span>
                                    </div>
                                    <div className="flex items-center gap-1 mt-1">
                                        <span className="material-symbols-outlined text-yellow-400 text-sm font-fill">star</span>
                                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{selectedItem.rating.toFixed(1)}</span>
                                        <span className="text-xs text-slate-400">({selectedItem.reviewCount} reviews)</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div>
                                        <span className="text-primary font-bold text-xl">₹{selectedItem.pricePerDay}</span>
                                        <span className="text-xs text-slate-400">/ day</span>
                                    </div>
                                    <button
                                        onClick={(e) => e.preventDefault()}
                                        className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
                                    >
                                        Rent Now
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ) : (
                        <div className="max-w-md mx-auto mb-4 h-32" />
                    )}

                    {/* Bottom Navigation */}
                    <nav
                        className="rounded-2xl px-6 pb-2 pt-2 flex items-center justify-between shadow-2xl border border-slate-100 dark:border-slate-800"
                        style={{
                            background: "rgba(255,255,255,0.85)",
                            backdropFilter: "blur(12px)",
                            WebkitBackdropFilter: "blur(12px)",
                        }}
                    >
                        <Link href="/" className="flex flex-col items-center gap-1 text-primary">
                            <span className="material-symbols-outlined font-fill">explore</span>
                            <span className="text-[10px] font-semibold">Explore</span>
                        </Link>
                        <Link href="/saved" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
                            <span className="material-symbols-outlined">favorite</span>
                            <span className="text-[10px] font-medium">Saved</span>
                        </Link>
                        <div className="relative -top-6">
                            <Link
                                href="/post-item"
                                className="flex items-center justify-center text-white size-14 rounded-full shadow-lg border border-white/30"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(48,110,232,0.9), rgba(48,110,232,0.6))",
                                    backdropFilter: "blur(8px)",
                                    boxShadow: "0 8px 32px 0 rgba(48,110,232,0.37)",
                                }}
                            >
                                <span className="material-symbols-outlined text-3xl">add</span>
                            </Link>
                        </div>
                        <Link href="/cart" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
                            <span className="material-symbols-outlined">business_center</span>
                            <span className="text-[10px] font-medium">Rentals</span>
                        </Link>
                        <Link href="/profile" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
                            <span className="material-symbols-outlined">person</span>
                            <span className="text-[10px] font-medium">Profile</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}
