"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const recentSearches = ["DSLR Camera", "Camping Tent", "Power Drill"];

const categories = [
    { icon: "devices", label: "Electronics" },
    { icon: "construction", label: "Tools" },
    { icon: "apparel", label: "Apparel" },
    { icon: "fitness_center", label: "Sports" },
];

const categoryOptions = ["Electronics", "Tools", "Home Gear", "Photography"];

const conditionOptions = [
    { icon: "verified", label: "Brand New", sub: "Unused or factory sealed" },
    { icon: "thumb_up", label: "Good Condition", sub: "Slightly used, well maintained" },
    { icon: "history_edu", label: "Used", sub: "Visible wear, fully functional" },
];

export default function SearchPage() {
    const router = useRouter();
    const [selectedDistance, setSelectedDistance] = useState("Within 2km");
    const [selectedCondition, setSelectedCondition] = useState("Good Condition");
    const [selectedCategories, setSelectedCategories] = useState<string[]>(["Electronics"]);

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-40">
            {/* Header Section */}
            <header className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                    >
                        <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight">Pro Rental</h1>
                    <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">notifications</span>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative flex items-center gap-2 mb-2">
                    <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input
                            className="w-full bg-white dark:bg-slate-800 border-none rounded-full py-3.5 pl-12 pr-4 focus:ring-2 focus:ring-primary text-sm shadow-sm outline-none"
                            placeholder="Search for items, categories..."
                            type="text"
                        />
                    </div>
                    <button className="bg-primary text-white p-3 rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">tune</span>
                    </button>
                </div>
            </header>

            <main className="px-4">
                {/* Recent Searches */}
                <section className="mt-6">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Recent Searches</h2>
                        <button className="text-xs font-medium text-primary">Clear All</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {recentSearches.map(search => (
                            <div key={search} className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                                <span className="material-symbols-outlined text-xs text-slate-400">history</span>
                                <span className="text-sm font-medium">{search}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Popular Categories */}
                <section className="mt-8">
                    <h2 className="text-lg font-bold mb-4">Popular Categories</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {categories.map(cat => (
                            <div key={cat.label} className="flex flex-col items-center gap-2">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                                </div>
                                <span className="text-xs font-medium">{cat.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Filters Section */}
                <section className="mt-10 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Filters</h2>
                        <button
                            onClick={() => {
                                setSelectedDistance("Within 2km");
                                setSelectedCondition("Good Condition");
                                setSelectedCategories(["Electronics"]);
                            }}
                            className="text-primary font-medium text-sm"
                        >
                            Reset
                        </button>
                    </div>

                    {/* Price Range */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold">Price Range (Daily)</h3>
                            <span className="text-primary font-bold">₹500 - ₹5000</span>
                        </div>
                        <div className="relative w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                            <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
                            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-primary rounded-full shadow-md"></div>
                            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-primary rounded-full shadow-md"></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-slate-400">
                            <span>₹0</span>
                            <span>₹10,000+</span>
                        </div>
                    </div>

                    {/* Distance Filter */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-4">Distance</h3>
                        <div className="flex gap-2">
                            {["Within 2km", "5km", "10km+"].map(dist => (
                                <button
                                    key={dist}
                                    onClick={() => setSelectedDistance(dist)}
                                    className={`flex-1 py-2 px-3 rounded-full border text-sm font-medium transition-colors ${
                                        selectedDistance === dist
                                            ? "border-primary bg-primary text-white"
                                            : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                                    }`}
                                >
                                    {dist}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category Multiselect */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-4">Categories</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {categoryOptions.map(cat => (
                                <label key={cat} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                        className="w-5 h-5 rounded text-primary focus:ring-primary border-slate-300"
                                    />
                                    <span className="text-sm font-medium">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Condition */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-4">Condition</h3>
                        <div className="flex flex-col gap-2">
                            {conditionOptions.map(cond => {
                                const isSelected = selectedCondition === cond.label;
                                return (
                                    <div
                                        key={cond.label}
                                        onClick={() => setSelectedCondition(cond.label)}
                                        className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-colors ${
                                            isSelected
                                                ? "border-primary/40 bg-primary/5"
                                                : "border-slate-200 dark:border-slate-700"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">{cond.icon}</span>
                                            <div>
                                                <p className="text-sm font-bold">{cond.label}</p>
                                                <p className="text-xs text-slate-500">{cond.sub}</p>
                                            </div>
                                        </div>
                                        <input
                                            type="radio"
                                            name="condition"
                                            checked={isSelected}
                                            onChange={() => setSelectedCondition(cond.label)}
                                            className="w-5 h-5 text-primary"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 rounded-full font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform">
                        Apply Filters
                    </button>
                </section>
            </main>

            {/* Bottom Navigation Bar */}
            <nav className="fixed bottom-6 left-4 right-4 h-20 bg-white/80 backdrop-blur-xl rounded-full z-50 flex items-center justify-around px-6 shadow-2xl border border-white/20">
                <Link href="/search" className="flex flex-col items-center justify-center gap-1 group">
                    <div className="text-primary transition-all group-hover:-translate-y-1">
                        <span className="material-symbols-outlined text-[28px]">explore</span>
                    </div>
                    <span className="text-[10px] font-bold text-primary">Explore</span>
                </Link>
                <Link href="/categories" className="flex flex-col items-center justify-center gap-1 group">
                    <div className="text-slate-400 transition-all group-hover:-translate-y-1">
                        <span className="material-symbols-outlined text-[28px]">category</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">Categories</span>
                </Link>
                <Link href="/post-item" className="flex flex-col items-center justify-center -mt-12">
                    <div className="size-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 border-4 border-background-light dark:border-background-dark active:scale-90 transition-transform">
                        <span className="material-symbols-outlined text-3xl">add</span>
                    </div>
                </Link>
                <Link href="/cart" className="flex flex-col items-center justify-center gap-1 group">
                    <div className="text-slate-400 transition-all group-hover:-translate-y-1 relative">
                        <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
                        <span className="absolute -top-1 -right-1 size-4 bg-red-500 text-white text-[8px] flex items-center justify-center rounded-full border-2 border-white">2</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">Cart</span>
                </Link>
                <Link href="/profile" className="flex flex-col items-center justify-center gap-1 group">
                    <div className="text-slate-400 transition-all group-hover:-translate-y-1">
                        <span className="material-symbols-outlined text-[28px]">person</span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">Profile</span>
                </Link>
            </nav>
        </div>
    );
}
