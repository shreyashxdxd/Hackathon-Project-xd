"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/lib/cartStore";

const navItems = [
    { href: "/", icon: "dashboard", label: "Explore" },
    { href: "/categories", icon: "grid_view", label: "Categories" },
    { href: "/cart", icon: "shopping_cart", label: "Cart" },
    { href: "/profile", icon: "manage_accounts", label: "Profile" },
];

export default function BottomNav() {
    const pathname = usePathname();
    const cartItemsCount = useCartStore((state) => state.items.length);

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50">
            <div className="liquid-glass dark:liquid-glass-dark rounded-full px-2 py-2 flex items-center justify-around shadow-2xl border-white/50">
                {navItems.slice(0, 2).map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-16 transition-colors ${isActive ? "text-primary" : "text-slate-400"}`}
                        >
                            <span className={`material-symbols-outlined text-2xl ${isActive ? "font-fill" : ""}`}>
                                {item.icon}
                            </span>
                            <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}

                {/* Center Add Button */}
                <div className="relative w-16 flex justify-center">
                    <Link
                        href="/post-item"
                        className="absolute -top-12 bg-slate-900 dark:bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center ring-4 ring-background-light dark:ring-background-dark active:scale-95 transition-transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        <span className="material-symbols-outlined text-3xl">add</span>
                    </Link>
                </div>

                {navItems.slice(2).map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-16 transition-colors relative ${isActive ? "text-primary" : "text-slate-400"}`}
                        >
                            <span className={`material-symbols-outlined text-2xl ${isActive ? "font-fill" : ""}`}>
                                {item.icon}
                            </span>
                            
                            {/* E-commerce Cart Badge */}
                            {item.label === "Cart" && cartItemsCount > 0 && (
                                <span className="absolute top-0 right-3 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-slate-900">
                                    {cartItemsCount}
                                </span>
                            )}

                            <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
