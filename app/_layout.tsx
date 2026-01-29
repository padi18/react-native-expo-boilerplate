import '../global.css';
import { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/authStore';
import { supabase } from '@/lib/supabase';
import { View, ActivityIndicator } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18next from '@/lib/i18n';

const queryClient = new QueryClient();

function InitialLayout() {
  const { session, loading, setSession } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);

  useEffect(() => {
    if (loading) return;

    // const inAuthGroup = segments[0] === '(auth)';
    //
    // // Basic Auth Guard
    // if (!session && !inAuthGroup) {
    //   router.replace('/(auth)/login');
    // } else if (session && inAuthGroup) {
    //   router.replace('/(tabs)');
    // }
  }, [session, loading, segments, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <InitialLayout />
      </QueryClientProvider>
    </I18nextProvider>
  );
}
