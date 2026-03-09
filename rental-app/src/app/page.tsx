"use client";

import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { useEffect, useState } from "react";
import { getAllItems, RentalItem } from "@/lib/itemStore";

const CATEGORIES = ["All", "Electronics", "Tools", "Cameras & Photography", "Sports & Fitness", "Party & Events", "Home & Garden", "Apparel"];

const statusConfig = {
    available: { label: "Available", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" },
    low_stock: { label: "Low Stock", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400" },
    rented: { label: "Rented", color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400" },
};

function ItemCard({ item }: { item: RentalItem }) {
    const status = statusConfig[item.status];
    return (
        <Link href={`/product/${item.id}`} className="group block bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {/* Image */}
            <div className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-slate-700 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={item.images?.[0] || "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Status badge */}
                <div className="absolute top-2.5 left-2.5">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${status.color}`}>
                        {status.label}
                    </span>
                </div>

                {/* User posted badge */}
                {item.isUserPosted && (
                    <div className="absolute top-2.5 right-2.5">
                        <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary text-white shadow-sm">
                            Your Listing
                        </span>
                    </div>
                )}

                {/* Wishlist */}
                <button
                    onClick={(e) => e.preventDefault()}
                    className="absolute bottom-2.5 right-2.5 size-8 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-rose-50"
                >
                    <span className="material-symbols-outlined text-slate-400 hover:text-rose-500 transition-colors text-[18px]">favorite</span>
                </button>
            </div>

            {/* Info */}
            <div className="p-3">
                <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1 flex-1">{item.name}</h3>
                    <div className="flex items-center gap-0.5 shrink-0">
                        <span className="material-symbols-outlined text-amber-400 font-fill text-[13px]">star</span>
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{item.rating.toFixed(1)}</span>
                    </div>
                </div>

                <p className="text-[11px] text-slate-400 dark:text-slate-500 mb-2 line-clamp-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">location_on</span>
                    {item.location} {item.distance && `· ${item.distance}`}
                </p>

                {/* Pricing row */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/50">
                    <div>
                        <span className="text-base font-extrabold text-primary">₹{item.pricePerDay}</span>
                        <span className="text-[10px] text-slate-400 ml-1">/ day</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                        {item.pricePerHour > 0 && <span className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md text-slate-500 dark:text-slate-400">₹{item.pricePerHour}/hr</span>}
                        {item.pricePerWeek > 0 && <span className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded-md text-slate-500 dark:text-slate-400">₹{item.pricePerWeek}/wk</span>}
                    </div>
                </div>
            </div>
        </Link>
    );
}

function SkeletonCard() {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden animate-pulse border border-slate-100 dark:border-slate-700">
            <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-700 w-full" />
            <div className="p-3 space-y-2">
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4" />
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-1/2" />
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full w-1/3 mt-3" />
            </div>
        </div>
    );
}

export default function Home() {
    const [items, setItems] = useState<RentalItem[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllItems().then((data) => {
            setItems(data);
            setLoading(false);
        });
    }, []);

    const filtered = items.filter((item) => {
        const matchCat = activeCategory === "All" || item.category === activeCategory;
        const matchSearch = !search ||
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase()) ||
            item.location.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const featuredItems = items.filter((i) => !i.isUserPosted).slice(0, 3);
    const userItems = items.filter((i) => i.isUserPosted);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">

            {/* ─────────── STICKY HEADER ─────────── */}
            <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
                <div className="px-4 pt-4 pb-3">
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="size-8 bg-primary rounded-xl flex items-center justify-center shadow-md">
                                    <span className="material-symbols-outlined text-white text-[18px]">handyman</span>
                                </div>
                                <h1 className="text-xl font-extrabold tracking-tight">RentIt</h1>
                            </div>
                            <p className="text-[10px] text-slate-400 mt-0.5 ml-10">Find · Rent · Earn</p>
                        </div>
                        <div className="flex gap-2">
                            <Link href="/nearby">
                                <button className="size-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">near_me</span>
                                </button>
                            </Link>
                            <button className="size-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors relative">
                                <span className="material-symbols-outlined text-[18px]">notifications</span>
                                <span className="absolute top-1.5 right-1.5 size-2 bg-rose-500 rounded-full" />
                            </button>
                            <Link href="/cart">
                                <button className="size-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative mb-3">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[18px]">search</span>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-10 pr-10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                            placeholder="Search items, categories, locations..."
                        />
                        {search && (
                            <button onClick={() => setSearch("")} className="absolute right-3.5 top-1/2 -translate-y-1/2">
                                <span className="material-symbols-outlined text-slate-400 text-[18px]">close</span>
                            </button>
                        )}
                    </div>

                    {/* Category chips */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === cat
                                    ? "bg-primary text-white shadow-md shadow-primary/30"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="pb-32">

                {/* ─────────── HERO BANNER ─────────── */}
                {!search && activeCategory === "All" && (
                    <section className="px-4 pt-4 mb-6">
                        <div className="relative w-full rounded-2xl overflow-hidden h-44 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 shadow-xl shadow-primary/20">
                            {/* BG pattern */}
                            <div className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

                            <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                                <div>
                                    <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Rent Anything</span>
                                    <h2 className="text-white text-2xl font-extrabold leading-tight mt-1">Tools, Tech & More<br />Near You 📍</h2>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link href="/post-item" className="bg-white text-primary font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[14px]">add_circle</span>
                                        List Your Item
                                    </Link>
                                    <div className="text-right">
                                        <p className="text-white font-extrabold text-xl">{items.length}+</p>
                                        <p className="text-white/70 text-[10px]">Items Listed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ─────────── QUICK STATS ─────────── */}
                {!search && activeCategory === "All" && (
                    <section className="px-4 mb-6">
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { icon: "local_shipping", label: "Free Delivery", sub: "On orders ₹500+", color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
                                { icon: "verified_user", label: "Verified Items", sub: "100% trusted", color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600" },
                                { icon: "currency_rupee", label: "Best Rates", sub: "Price matched", color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600" },
                            ].map((s) => (
                                <div key={s.label} className={`rounded-xl p-3 ${s.color} flex flex-col items-center text-center gap-1`}>
                                    <span className="material-symbols-outlined text-xl">{s.icon}</span>
                                    <p className="text-[10px] font-bold leading-tight">{s.label}</p>
                                    <p className="text-[9px] opacity-70">{s.sub}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ─────────── NEARBY BANNER ─────────── */}
                {!search && activeCategory === "All" && (
                    <section className="px-4 mb-6">
                        <Link href="/nearby" className="flex items-center justify-between bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-4 shadow-lg group">
                            <div className="flex items-center gap-3">
                                <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-xl">near_me</span>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">Explore on Map</p>
                                    <p className="text-white/60 text-[10px]">{filtered.length} items near Nagpur</p>
                                </div>
                            </div>
                            <div className="size-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <span className="material-symbols-outlined text-white text-sm">arrow_forward</span>
                            </div>
                        </Link>
                    </section>
                )}

                {/* ─────────── YOUR LISTINGS ─────────── */}
                {!search && activeCategory === "All" && userItems.length > 0 && (
                    <section className="mb-6">
                        <div className="px-4 flex items-center justify-between mb-3">
                            <h2 className="font-extrabold text-base flex items-center gap-2">
                                <span className="size-6 bg-primary rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-[13px]">person_check</span>
                                </span>
                                Your Listings
                                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">{userItems.length}</span>
                            </h2>
                            <Link href="/post-item" className="text-xs text-primary font-semibold flex items-center gap-0.5">
                                + Add more
                            </Link>
                        </div>
                        <div className="px-4 grid grid-cols-2 gap-3">
                            {userItems.map((item) => <ItemCard key={item.id} item={item} />)}
                        </div>
                    </section>
                )}

                {/* ─────────── FEATURED / ALL ITEMS ─────────── */}
                {!search && activeCategory === "All" && featuredItems.length > 0 && (
                    <section className="mb-6">
                        <div className="px-4 flex items-center justify-between mb-3">
                            <h2 className="font-extrabold text-base flex items-center gap-2">
                                <span className="size-6 bg-amber-400 rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-[13px] font-fill">star</span>
                                </span>
                                Featured Items
                            </h2>
                            <button className="text-xs text-primary font-semibold">See all</button>
                        </div>
                        <div className="px-4 grid grid-cols-2 gap-3">
                            {featuredItems.map((item) => <ItemCard key={item.id} item={item} />)}
                        </div>
                    </section>
                )}

                {/* ─────────── FILTERED RESULTS ─────────── */}
                {(search || activeCategory !== "All") && (
                    <section className="px-4">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="font-extrabold text-sm text-slate-500 uppercase tracking-wider">
                                    {activeCategory !== "All" ? activeCategory : "Search Results"}
                                </h2>
                                <p className="text-xs text-slate-400 mt-0.5">{filtered.length} items found</p>
                            </div>
                            <button className="flex items-center gap-1 text-xs text-primary font-semibold bg-primary/10 px-3 py-1.5 rounded-full">
                                <span className="material-symbols-outlined text-[13px]">sort</span>
                                Sort
                            </button>
                        </div>

                        {loading ? (
                            <div className="grid grid-cols-2 gap-3">
                                {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
                            </div>
                        ) : filtered.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="size-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-4xl text-slate-300">search_off</span>
                                </div>
                                <p className="text-slate-500 font-bold text-base">No items found</p>
                                <p className="text-slate-400 text-sm mt-1">Try a different category or search term</p>
                                <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-4 text-primary font-semibold text-sm">
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-3">
                                {filtered.map((item) => <ItemCard key={item.id} item={item} />)}
                            </div>
                        )}
                    </section>
                )}

                {/* ─────────── ALL ITEMS (default view) ─────────── */}
                {!search && activeCategory === "All" && (
                    <section className="px-4">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-extrabold text-base flex items-center gap-2">
                                <span className="size-6 bg-slate-800 dark:bg-slate-200 rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white dark:text-slate-800 text-[13px]">apps</span>
                                </span>
                                All Items
                                <span className="text-slate-400 text-xs font-normal">({items.length})</span>
                            </h2>
                            <button className="flex items-center gap-1 text-xs text-primary font-semibold bg-primary/10 px-3 py-1.5 rounded-full">
                                <span className="material-symbols-outlined text-[13px]">sort</span>
                                Sort
                            </button>
                        </div>
                        {loading ? (
                            <div className="grid grid-cols-2 gap-3">
                                {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-3">
                                {items.map((item) => <ItemCard key={item.id} item={item} />)}
                            </div>
                        )}
                    </section>
                )}
            </main>

            <BottomNav />
        </div>
    );
}
