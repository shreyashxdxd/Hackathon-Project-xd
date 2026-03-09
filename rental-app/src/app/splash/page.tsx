"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
    const router = useRouter();

    // Auto-redirect to login after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/login");
        }, 3000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-background-dark via-[#0f172a] to-primary/20 overflow-hidden font-display text-slate-100 antialiased">

            {/* Background decorative blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD04pE3iCa1s1ykjM2hrU4EepCSzBTV-B9kgb4uBmVsEja6DAqBMOsMEKvucWAgO7UeYzHnbXyduI6U9S03yiOiLP4hs26fJCTLyp4PtkaMcmEmoXvaMRl_8Lm-mWiAjfjDdnjBCs67VIS4i_kVjtiHREp1DnJziLltxfNHbWilhT3mKwZEOYMyzWs0g_VP1AfSyKijI82E_ntj144cTlsvH9qMmthnkOXsqHXxbSXpyKzE0AS9LiIAhY4r8-VvBlNXdcXVL4MhWQ')",
                }}
            />

            {/* Main content */}
            <div className="flex flex-col items-center justify-center z-10">

                {/* Logo with liquid glass effect */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110" />
                    <div
                        className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-xl border border-white/20"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
                        }}
                    >
                        <span className="material-symbols-outlined text-white text-6xl md:text-7xl font-light opacity-90">
                            key
                        </span>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent rounded-xl pointer-events-none" />
                    </div>
                </div>

                {/* App name */}
                <div className="mt-12 text-center">
                    <h1 className="text-white tracking-tight text-5xl md:text-6xl font-bold leading-tight pb-2">
                        Pro Rental
                    </h1>
                    <p className="text-slate-400 text-lg font-light tracking-widest uppercase">
                        Premium Mobility
                    </p>
                </div>

                {/* Loading progress */}
                <div className="mt-20 w-64 flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                        <p className="text-white/60 text-xs font-medium uppercase tracking-tighter">
                            System Initializing
                        </p>
                        <p className="text-primary text-xs font-bold">65%</p>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary rounded-full"
                            style={{
                                width: "65%",
                                boxShadow: "0 0 15px rgba(48,110,232,0.6)",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom status bar */}
            <div className="absolute bottom-12 flex flex-col items-center gap-6">
                <div
                    className="flex gap-4 items-center px-6 py-3 rounded-full"
                    style={{
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                    }}
                >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/70 text-sm font-medium">
                        Encrypted Connection Active
                    </span>
                </div>
                <div className="flex items-center gap-8 opacity-40">
                    <span className="material-symbols-outlined text-white text-xl">shield</span>
                    <span className="material-symbols-outlined text-white text-xl">distance</span>
                    <span className="material-symbols-outlined text-white text-xl">electric_car</span>
                </div>
            </div>
        </div>
    );
}
