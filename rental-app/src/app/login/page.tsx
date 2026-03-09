"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4 font-display relative">

            {/* Background decoration */}
            <div className="fixed -z-10 inset-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
            </div>

            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-xl shadow-primary/5 overflow-hidden">

                {/* Header */}
                <div className="p-8 pb-0">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="size-10 bg-primary rounded flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">key</span>
                        </div>
                        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">
                            Pro Rental
                        </h2>
                    </div>
                    <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight">
                        Welcome back
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base mt-2">
                        Login to manage your rentals and view payments in ₹
                    </p>
                </div>

                {/* Form */}
                <div className="p-8 pt-6">
                    <form className="space-y-5">

                        {/* Email / Phone */}
                        <div className="flex flex-col gap-2">
                            <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold px-1">
                                Email or Phone
                            </label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    mail
                                </span>
                                <input
                                    type="text"
                                    placeholder="name@company.com"
                                    className="w-full pl-12 pr-4 h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                                    Password
                                </label>
                                <a href="#" className="text-primary text-sm font-semibold hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    lock
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 h-14 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/50 outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                >
                                    <span className="material-symbols-outlined">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <Link
                            href="/"
                            className="flex w-full h-14 items-center justify-center bg-gradient-to-r from-primary to-[#5a8fff] text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                        >
                            Login
                        </Link>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-slate-700" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 h-12 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhVC-3OGBkqp4ayvAGD39Vzc82XEral6JIedY2zlTr60RQtKfLGbuBRArRoEF30JCGGB4gmqIANBOsHbT4TyRMGkMDaP6s0WM_Yrk4r7rg_PF8Tra3I2wBz3hFo1270oaD5eF4xwoFI4KURMTE7LkCECRirRJth8ReUzIMJuTr4GhhSeN7qnz4Q9vINkkzVFi1NR6t8S4OF7mf9Fx9w7o-qtKghbIEb7g0aXORwlZ9NiZceJVBysG12UDdcZKAiXcglzIZypqZhA"
                                alt="Google"
                                width={20}
                                height={20}
                            />
                            <span className="text-slate-700 dark:text-slate-200 font-medium text-sm">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 h-12 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-slate-900 dark:text-white">ios</span>
                            <span className="text-slate-700 dark:text-slate-200 font-medium text-sm">Apple</span>
                        </button>
                    </div>

                    {/* Sign up link */}
                    <p className="text-center mt-8 text-slate-500 dark:text-slate-400 text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-primary font-bold hover:underline">
                            Sign up for free
                        </Link>
                    </p>
                </div>

                {/* Decorative bottom bar */}
                <div className="h-2 w-full bg-gradient-to-r from-primary via-blue-400 to-primary" />
            </div>
        </div>
    );
}
