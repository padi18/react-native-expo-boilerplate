import { AppConfig } from './types';
import { env } from './env';

const devConfig: AppConfig = {
  env: 'development',
  api: {
    url: env.EXPO_PUBLIC_API_URL,
    timeout: env.EXPO_PUBLIC_API_TIMEOUT,
  },
  features: {
    enableAnalytics: env.EXPO_PUBLIC_ENABLE_ANALYTICS,
  },
  supabase: {
    url: env.EXPO_PUBLIC_SUPABASE_URL,
    anonKey: env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  },
};

export default devConfig;
