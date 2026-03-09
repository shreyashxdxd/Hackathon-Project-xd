"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
            <div className="relative flex h-auto w-full max-w-[480px] flex-col bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden">

                {/* Top Navigation */}
                <div className="flex items-center bg-transparent p-4 pb-2 justify-between">
                    <button
                        onClick={() => router.back()}
                        className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <div className="w-10" />
                </div>

                <div className="px-6 py-4">
                    <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-[32px] font-bold leading-tight pb-2">
                        Create Account
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-base">
                        Join Pro Rental to start managing your assets today.
                    </p>
                </div>

                <form className="flex flex-col gap-1 px-6 pb-8">

                    {/* Full Name */}
                    <div className="flex flex-col py-2">
                        <label className="flex flex-col w-full">
                            <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal pb-2">
                                Full Name
                            </p>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                                    person
                                </span>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal"
                                />
                            </div>
                        </label>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col py-2">
                        <label className="flex flex-col w-full">
                            <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal pb-2">
                                Email Address
                            </p>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                                    mail
                                </span>
                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal"
                                />
                            </div>
                        </label>
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col py-2">
                        <label className="flex flex-col w-full">
                            <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal pb-2">
                                Phone Number
                            </p>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                                    call
                                </span>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 placeholder:text-slate-400 pl-12 pr-4 text-base font-normal"
                                />
                            </div>
                        </label>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col py-2">
                        <label className="flex flex-col w-full">
                            <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal pb-2">
                                Password
                            </p>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                                    lock
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    className="w-full rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-14 placeholder:text-slate-400 pl-12 pr-12 text-base font-normal"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                                >
                                    <span className="material-symbols-outlined">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </label>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3 py-4">
                        <input
                            id="terms"
                            type="checkbox"
                            className="mt-1 h-5 w-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary"
                        />
                        <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400 leading-tight">
                            By creating an account, you agree to our{" "}
                            <a href="#" className="text-primary font-medium">Terms of Service</a> and{" "}
                            <a href="#" className="text-primary font-medium">Privacy Policy</a>.
                        </label>
                    </div>

                    {/* Sign Up Button */}
                    <Link
                        href="/"
                        className="flex w-full items-center justify-center h-14 px-4 bg-primary text-white text-base font-bold tracking-wide rounded-xl transition-all hover:bg-primary/90 active:scale-[0.98]"
                    >
                        Sign Up
                    </Link>

                    {/* Divider */}
                    <div className="flex items-center gap-4 py-6">
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                            Or continue with
                        </span>
                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="flex items-center justify-center h-12 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnjxVF6YScAu0CzyfebJg4WP_o56YeJbA2oaf6RDTtmbdqBw1Ar7opuZ3Miq_c-awYDdsOWD3rgkTMWdphHi59t2EZTEI9P68L8ydSu2RJ-kEdBP1202IgiXYIae-ETB5Cr8NDXFt424cL-YPtEL54LPMZJECIfYNUiQAUZKonnHgdTUv_sqJ_FSEvcG_4fL59u4LNqwxoEgF7LJTm5j-5riY9C5JHreC0gDEKAiOI8o6zzhD18UKw74h5uZNtqVgF_cTL0HWtFg"
                                alt="Google"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            <span className="text-sm font-semibold">Google</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center h-12 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            <span className="material-symbols-outlined text-slate-900 dark:text-white mr-2">ios</span>
                            <span className="text-sm font-semibold">Apple</span>
                        </button>
                    </div>

                    {/* Footer link */}
                    <div className="pt-8 text-center">
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary font-bold hover:underline">
                                Log In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
