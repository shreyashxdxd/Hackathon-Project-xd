import Link from "next/link";

const trendingCategories = [
    { icon: "construction", name: "Power Tools", count: "124 Items", featured: true },
    { icon: "videocam", name: "Cameras", count: "86 Items", featured: false },
    { icon: "directions_car", name: "Transport", count: "42 Items", featured: false },
];

const allCategories = [
    { icon: "laptop_mac", name: "Electronics" },
    { icon: "camera", name: "Photography" },
    { icon: "speaker_group", name: "Audio" },
    { icon: "apparel", name: "Apparel" },
    { icon: "sports_esports", name: "Gaming" },
    { icon: "forest", name: "Outdoor" },
    { icon: "home_repair_service", name: "Maintenance" },
    { icon: "directions_bike", name: "Bicycles" },
    { icon: "grid_view", name: "More" },
];

export default function CategoriesPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-28">

            {/* Header */}
            <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white">storefront</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Pro Rental</h1>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200/50 dark:bg-slate-800/50">
                    <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">notifications</span>
                </button>
            </header>

            <main className="max-w-2xl mx-auto px-6 pt-2">

                {/* Search */}
                <div className="mb-8">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
                                search
                            </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Search equipment categories..."
                            className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 border-none rounded-xl shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* Trending */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold">Trending Now</h2>
                        <a href="#" className="text-primary text-sm font-semibold">View All</a>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                        {trendingCategories.map((cat) => (
                            <div
                                key={cat.name}
                                className={`flex-shrink-0 w-40 p-4 rounded-xl ${cat.featured
                                        ? "bg-primary text-white shadow-xl shadow-primary/30"
                                        : "bg-white dark:bg-slate-900 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800"
                                    }`}
                            >
                                <span
                                    className={`material-symbols-outlined mb-2 text-3xl ${cat.featured ? "" : "text-primary"
                                        }`}
                                >
                                    {cat.icon}
                                </span>
                                <p className="font-bold">{cat.name}</p>
                                <p
                                    className={`text-xs ${cat.featured ? "text-white/80" : "text-slate-500"
                                        }`}
                                >
                                    {cat.count}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Categories Grid */}
                <h2 className="text-lg font-bold mb-4">All Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {allCategories.map((cat) => (
                        <div
                            key={cat.name}
                            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-primary/50 transition-all cursor-pointer group"
                        >
                            <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-primary text-2xl">{cat.icon}</span>
                            </div>
                            <span className="font-semibold text-sm">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </main>

            {/* Bottom Nav */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
                <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl rounded-full px-4 py-2 flex items-center justify-around">
                    <Link href="/" className="flex flex-col items-center p-2 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined">home</span>
                        <span className="text-[10px] font-medium mt-0.5">Home</span>
                    </Link>
                    <Link href="/categories" className="flex flex-col items-center p-2 text-primary">
                        <div className="relative">
                            <span className="material-symbols-outlined font-fill">grid_view</span>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                        </div>
                        <span className="text-[10px] font-bold mt-0.5">Categories</span>
                    </Link>
                    <Link href="/cart" className="flex flex-col items-center p-2 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined">receipt_long</span>
                        <span className="text-[10px] font-medium mt-0.5">Rentals</span>
                    </Link>
                    <Link href="/profile" className="flex flex-col items-center p-2 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-medium mt-0.5">Profile</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
