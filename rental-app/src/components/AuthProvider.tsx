"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/lib/authStore";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const setUser = useAuthStore((state) => state.setUser);
    const initialized = useAuthStore((state) => state.initialized);

    useEffect(() => {
        // Initial session fetch
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user || null, session || null);
        });

        // Listen for changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null, session || null);
        });

        return () => subscription.unsubscribe();
    }, [setUser]);

    return (
        <>
            {/* Show a subtle loading overlay until we check auth at least once */}
            {!initialized && (
                <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-900 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                    <div className="size-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            {children}
        </>
    );
}
