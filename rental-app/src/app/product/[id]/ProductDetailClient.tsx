"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";

export default function ProductDetailClient() {
    const router = useRouter();
    const [selectedPricing, setSelectedPricing] = useState<"hourly" | "daily" | "weekly">("daily");

    const prices = { hourly: "₹10.20", daily: "₹45.00", weekly: "₹180.00" };

    return (
        <div className="relative mx-auto max-w-md min-h-screen bg-white dark:bg-slate-900 shadow-xl overflow-x-hidden pb-32">

            {/* Top Navigation */}
            <div className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 justify-between border-b border-slate-100 dark:border-slate-800">
                <button
                    onClick={() => router.back()}
                    className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
                    Product Details
                </h2>
                <div className="flex size-10 items-center justify-end">
                    <button className="text-slate-900 dark:text-slate-100 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </div>
            </div>

            {/* Hero Image Gallery */}
            <div className="px-4 py-3">
                <div
                    className="relative flex flex-col justify-end overflow-hidden rounded-xl min-h-80 bg-slate-200"
                    style={{
                        backgroundImage:
                            "linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpuua2mTo61I5vFJkEeQAS2S3bjdiletDUxTma2y8HSIWyHZHQv6vxmi-wYvgj54IpcXnhEclxhrhuRTWrmjOOmD3qmuwiZrJw0KvxHi9NB_RWglI41AqxrxotX9S3NwgESLqsLGTaibDrrVmI-virBDPTr_zzqgGwpDotcvZrCosOojPkaIYhBOJDZZ4dCcIWT20yVhqe_1cA7hC0bz2nt7YMGDEuJshGWpjvKYw1m0YWfAHzyCpPTe1fZPhboXap-Peodg7KLw')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute top-4 right-4">
                        <button className="size-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                            <span className="material-symbols-outlined">favorite</span>
                        </button>
                    </div>
                    <div className="flex justify-center gap-2 p-5">
                        <div className="size-2 rounded-full bg-white"></div>
                        <div className="size-2 rounded-full bg-white/50"></div>
                        <div className="size-2 rounded-full bg-white/50"></div>
                        <div className="size-2 rounded-full bg-white/50"></div>
                    </div>
                </div>
            </div>

            {/* Title and Rating */}
            <div className="px-4 pt-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-slate-900 dark:text-slate-100 text-2xl font-extrabold leading-tight">
                            Sony WH-1000XM5 Studio
                        </h1>
                        <div className="flex items-center gap-2 mt-1 text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                            <span className="text-sm font-medium">Andheri East, 1.2km away</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-sm font-fill">star</span>
                            <span className="text-primary font-bold text-sm">4.9</span>
                        </div>
                        <span className="text-xs text-slate-400 mt-1">128 reviews</span>
                    </div>
                </div>
            </div>

            {/* Pricing Toggle */}
            <div className="px-4 py-6">
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider">
                    Rental Options
                </p>
                <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 p-1 gap-1">
                    {(["hourly", "daily", "weekly"] as const).map((option) => (
                        <button
                            key={option}
                            onClick={() => setSelectedPricing(option)}
                            className={`flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-bold transition-all ${selectedPricing === option
                                ? "bg-white dark:bg-slate-700 shadow-sm text-primary"
                                : "text-slate-500 dark:text-slate-400"
                                }`}
                        >
                            {option.charAt(0).toUpperCase() + option.slice(1)}: {prices[option]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Rent Now Button */}
            <div className="px-4 pb-6">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2">
                    <span>Rent Now — {prices[selectedPricing]}</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>

            {/* Description & Specs */}
            <div className="px-4 py-4 space-y-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Description</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        Industry-leading noise cancellation with two processors controlling eight microphones, and a specially
                        developed driver unit. Perfect for professional studio work or immersive travel.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-3 py-2">
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                        <span className="material-symbols-outlined text-primary mb-1">graphic_eq</span>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Frequency</p>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100">30Hz-40kHz</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                        <span className="material-symbols-outlined text-primary mb-1">noise_aware</span>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">NC Tech</p>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100">Auto NC Opt.</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                        <span className="material-symbols-outlined text-primary mb-1">bluetooth</span>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Version</p>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100">BT 5.2</p>
                    </div>
                </div>
            </div>

            {/* Owner Information */}
            <div className="px-4 py-6 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">Owner</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-12 rounded-full overflow-hidden bg-slate-200 border-2 border-primary/20 relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTHCWY31TOpvP2pTEm_fWpH5baLAvlokb8564DdR55AqDRCOfOxnTs3rTb-6aJmBRtcY1A7J0CjlWrrli2Yi-4FZ4ZjXKholO8RQW7iV6VdCcEGjBg1e2qV7PI-nuQ07IGyPujFE2xOCpRXeM5TkKMzbCnCkCz2s8lFMXfu9sC3ZKMJY2wppa-M-HcknEtqB8LeG1NDiWF3bePrZ7RtDJ3ACpaLIL8ck3Gd9VHKl6ArfkXVjgv37TXCN_h1EFh5ozqsjDH0pC4WA"
                                alt="Owner profile"
                                fill
                                className="object-cover"
                                sizes="48px"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900 dark:text-slate-100">Arjun Sharma</p>
                            <div className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded-md">
                                <span className="material-symbols-outlined text-green-600 text-[12px] font-fill">verified</span>
                                <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">Trusted Owner</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">chat</span>
                        </button>
                        <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">call</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Location Map Preview */}
            <div className="px-4 pb-6">
                <div className="rounded-xl overflow-hidden h-32 bg-slate-200 relative">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPK5uUIHt4dNtGar6mJwskrJWP4P_GGbLLyJODPN-o7CX7LC8xwt1D-RsRxkdlRNO4fyrtpg1OvCNx0TP4QmUunOP57BS8imT0GX5V9yZ5bkvC9QfP4SuZ1qEyyGhZW3PpMjfK4LUZYgZxYD2kjZSB42rWtJPnpgK0UunbUvP3xPv0iJJ8KJp_gGYX4-RguONh9xp6GyQ6x6Pvk_p1rBs5LQ9kk9BeKh0OknRJ-A9N1llRHQLFDDWPgDz8HA_WybxXnc0I_tdlcw"
                        alt="Map view of pickup location"
                        fill
                        className="object-cover grayscale opacity-60"
                        sizes="(max-width: 448px) 100vw, 448px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white ring-4 ring-primary/20">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Items */}
            <div className="px-4 py-6 bg-slate-50 dark:bg-slate-800/50">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">You might also like</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {[
                        {
                            name: "Bose QuietComfort",
                            price: "₹40.00/day",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7lBw7gf8pfgmMXD9yFX6tLUUKmykr5EUlQH_WKeRDPu43Y8o63cuZtsxcrLZVKj8MvHUwQfSoozZcVfR0eLP9bTGgOpSKIkxyQ3Ju2ijudagQuCcKD2NoO8imfiia3Qr399INL-6jlcphGtZG4pNNwBbFC2Etn0-XBCma-2Kj_SYZHiFoXMuZISQQ9LwHRSO_-ELzWMROuFV8uDTTA4p5iyYVipo8F7UQ1DaWCrUCaluhFwQJHaMWOPRTHzNo1PpwjeKdm--imw",
                        },
                        {
                            name: "Sennheiser HD 660S",
                            price: "₹55.00/day",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0QuD3MjlbqHlOnFfIGj_7TTHMpj_HY1m-9JcMZpILLqy0u6H7lUmr3a0M_yjJpDry9-Fl3fOc9J4VifVU8-xSjVBWm0euxXph7yjwymJYc7q9wPJnMYz4APn825gUKauL7b5U048F_e4vpaiPxyblBaPfhFPvxchxugYPS2mcGirGd35mKFAWpW60qdYb03c2qBUjQzDstJBhhWIKp4zelt6bsgIsYi2OHJ31GIq4J1PEhy5MZ_NbPHEfi99dNVRPIz7AYgltAw",
                        },
                        {
                            name: "Audio-Technica M50x",
                            price: "₹25.00/day",
                            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXfcVDRYpf7jZbzs2Lb2oqk9TGCub4Aj0aG3FBAM3853RHcKVONY7r0f_tC3WTdrePTF4SKJgXn0k5oMOMcxFsaMrnway7CS6QGR8kG7MUXyWf5GfALlMOJr1MQ7mIbQ2mvmTYNH0Vvvq8GXzBqXvT5R4kPnXwmkuODJ2DrjpF6reOo3fK-IbkaHCKOOafqRGUmGhfGDHIFRwQetV7KD6P3JRtj6zW_n_X6ANEr5b34kaWhu3rRS4TLx2HNvzkcnwaSqeYPNEpOw",
                        },
                    ].map((item) => (
                        <Link href="/product/1" key={item.name} className="min-w-[160px] bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 block">
                            <div className="aspect-square rounded-xl bg-slate-100 mb-3 overflow-hidden relative">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                    sizes="160px"
                                />
                            </div>
                            <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{item.name}</p>
                            <p className="text-[10px] text-primary font-bold mt-1">{item.price}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="h-10 bg-white dark:bg-slate-900"></div>
            <BottomNav />
        </div>
    );
}
