import { AppConfig } from './types';
import { env } from './env';
import devConfig from './config.dev';
import stagingConfig from './config.staging';
import prodConfig from './config.prod';

const configs: Record<string, AppConfig> = {
  development: devConfig,
  staging: stagingConfig,
  production: prodConfig,
};

const config = configs[env.EXPO_PUBLIC_APP_ENV] || devConfig;

export default config;
export * from './types';
