"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { addItem } from "@/lib/itemStore";
import { useAuthStore } from "@/lib/authStore";
import Link from "next/link";

export default function PostItemPage() {
    const router = useRouter();
    const { user } = useAuthStore();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        name: "",
        category: "",
        description: "",
        condition: "Good Condition",
        pricePerDay: "",
        pricePerWeek: "",
        pricePerHour: "",
        location: "",
    });
    const [images, setImages] = useState<string[]>([]);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target?.result) {
                    setImages(prev => [...prev, ev.target!.result as string]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.category || !form.pricePerDay) {
            alert("Please fill in Item Name, Category, and Price per Day.");
            return;
        }
        setSubmitting(true);
        
        const ownerName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || "User";
        
        const newItem = await addItem({
            name: form.name,
            category: form.category,
            description: form.description || "No description provided.",
            condition: form.condition,
            pricePerDay: Number(form.pricePerDay) || 0,
            pricePerWeek: Number(form.pricePerWeek) || 0,
            pricePerHour: Number(form.pricePerHour) || 0,
            location: form.location || "Unknown Location",
            distance: "Nearby",
            images: images.length > 0 ? images : [
                "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80"
            ],
            ownerName,
            ownerAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(ownerName)}&background=306ee8&color=fff`,
            rating: 5.0,
            reviewCount: 0,
            status: "available",
        });
        if (newItem) {
            router.push(`/product/${newItem.id}`);
        } else {
            setSubmitting(false);
            alert("Failed to save item. Please check your Supabase connection.");
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4 font-display text-slate-900 dark:text-slate-100 antialiased">
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-sm w-full text-center shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="size-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-4xl text-primary">lock</span>
                    </div>
                    <h2 className="text-xl font-extrabold tracking-tight mb-2">Sign In Required</h2>
                    <p className="text-slate-500 text-sm mb-6">You need to have an account to list an item on RentIt.</p>
                    <Link href="/login" className="w-full block bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all mb-3 text-sm">
                        Sign In
                    </Link>
                    <button onClick={() => router.back()} className="text-sm font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-28">

            {/* Header */}
            <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
                <div className="flex items-center justify-between px-6 py-4 max-w-2xl mx-auto">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight">List New Item</h1>
                    <div className="size-10" />
                </div>
            </header>

            <form onSubmit={handleSubmit}>
                <main className="max-w-2xl mx-auto px-6 py-8">

                    {/* Progress Stepper */}
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-3 rounded-full bg-primary ring-4 ring-primary/20" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Details</span>
                        </div>
                        <div className="h-px w-12 bg-primary/30" />
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-3 rounded-full bg-primary/50 ring-4 ring-primary/10" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">Media</span>
                        </div>
                        <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
                        <div className="flex flex-col items-center gap-2">
                            <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Price</span>
                        </div>
                    </div>

                    <div className="space-y-8">

                        {/* Item Information */}
                        <section>
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">info</span>
                                Item Information
                            </h2>
                            <div className="grid gap-5">
                                <label className="block">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Item Name *</span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Sony A7III Mirrorless Camera"
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        required
                                    />
                                </label>
                                <label className="block">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Category *</span>
                                    <select
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none"
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option>Electronics</option>
                                        <option>Cameras & Photography</option>
                                        <option>Tools & Equipment</option>
                                        <option>Party & Events</option>
                                        <option>Sports & Fitness</option>
                                        <option>Home & Garden</option>
                                        <option>Apparel</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Condition</span>
                                    <select
                                        name="condition"
                                        value={form.condition}
                                        onChange={handleChange}
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none"
                                    >
                                        <option>Brand New</option>
                                        <option>Good Condition</option>
                                        <option>Used</option>
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Location / Area</span>
                                    <input
                                        type="text"
                                        name="location"
                                        value={form.location}
                                        onChange={handleChange}
                                        placeholder="e.g. Andheri East, Mumbai"
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    />
                                </label>
                                <label className="block">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Description</span>
                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Describe your item, include key specs and condition..."
                                        rows={4}
                                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                    />
                                </label>
                            </div>
                        </section>

                        {/* Media & Photos */}
                        <section>
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">image</span>
                                Media & Photos
                            </h2>
                            <div className="grid grid-cols-3 gap-4">
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="aspect-square rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/10 transition-colors group"
                                >
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">add_a_photo</span>
                                    <span className="text-[10px] font-bold text-primary uppercase">Add Photo</span>
                                </div>
                                {images.map((img, i) => (
                                    <div key={i} className="aspect-square rounded-xl overflow-hidden relative border border-slate-200 dark:border-slate-700">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={img} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                                        <button
                                            type="button"
                                            onClick={() => setImages(prev => prev.filter((_, idx) => idx !== i))}
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full size-5 flex items-center justify-center text-xs"
                                        >✕</button>
                                    </div>
                                ))}
                                {images.length < 2 && Array.from({ length: 2 - images.length }).map((_, i) => (
                                    <div key={i} className="aspect-square rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-400">image</span>
                                    </div>
                                ))}
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                            <p className="text-xs text-slate-500 mt-3 ml-1">
                                Upload at least 1 high-quality photo for better visibility.
                            </p>
                        </section>

                        {/* Pricing */}
                        <section>
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">payments</span>
                                Pricing (₹)
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <label className="block">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Price per Hour</span>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                                        <input
                                            type="number"
                                            name="pricePerHour"
                                            value={form.pricePerHour}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            min="0"
                                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 pl-8 pr-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </label>
                                <label className="block">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Price per Day *</span>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                                        <input
                                            type="number"
                                            name="pricePerDay"
                                            value={form.pricePerDay}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            min="0"
                                            required
                                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 pl-8 pr-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </label>
                                <label className="block col-span-2">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Price per Week</span>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                                        <input
                                            type="number"
                                            name="pricePerWeek"
                                            value={form.pricePerWeek}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                            min="0"
                                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl h-14 pl-8 pr-5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </label>
                            </div>
                        </section>

                        {/* Submit */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-primary text-white font-bold py-5 rounded-xl shadow-lg shadow-primary/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                            >
                                {submitting ? "Publishing..." : "Submit Listing"}
                                <span className="material-symbols-outlined">{submitting ? "hourglass_empty" : "send"}</span>
                            </button>
                            <p className="text-center text-xs text-slate-500 mt-4 px-8">
                                By clicking submit, you agree to our{" "}
                                <a href="#" className="text-primary underline">Terms of Service</a>{" "}
                                and confirm the item is in your possession.
                            </p>
                        </div>
                    </div>
                </main>
            </form>
        </div>
    );
}
