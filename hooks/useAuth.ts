import { useAuthStore } from '@/stores/authStore';

export const useAuth = () => {
  const { session, loading, signOut } = useAuthStore();
  return {
    session,
    loading,
    signOut,
    user: session?.user ?? null,
    isAuthenticated: !!session,
  };
};
