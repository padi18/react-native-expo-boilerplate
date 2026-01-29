export type AppEnv = 'development' | 'staging' | 'production';

export interface AppConfig {
  env: AppEnv;
  api: {
    url: string;
    timeout: number;
  };
  features: {
    enableAnalytics: boolean;
  };
  supabase: {
    url: string;
    anonKey: string;
  };
}
