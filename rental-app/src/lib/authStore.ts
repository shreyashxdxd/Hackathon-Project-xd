import { create } from 'zustand';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

interface AuthState {
  user: User | null;
  session: Session | null;
  initialized: boolean;
  setUser: (user: User | null, session: Session | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  initialized: false,
  setUser: (user, session) => set({ user, session, initialized: true }),
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null });
  },
}));
