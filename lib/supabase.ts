import { AppState, Platform } from 'react-native';
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { MMKV } from 'react-native-mmkv';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import config from '@/config';

// MMKV only works on client side
let storage: MMKV | null = null;

const isServer = typeof window === 'undefined';

if (Platform.OS !== 'web') {
  // Check if running in Expo Go
  if (Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
    console.log('Running in Expo Go. Using AsyncStorage fallback instead of MMKV.');
  } else {
    try {
      // Attempt to instantiate MMKV.
      // @ts-ignore
      storage = new MMKV();
    } catch (e) {
      // Fallback to AsyncStorage if MMKV is not available (e.g. in some dev clients without native code)
      console.warn('Error instantiating MMKV:', e);
      console.warn('MMKV is not available. Falling back to AsyncStorage.');
    }
  }
}

export const mmkvStorage = {
  getItem: async (key: string) => {
    if (storage) {
      const value = storage.getString(key);
      return value === undefined ? null : value;
    }
    
    if (isServer) return null;

    // Fallback to AsyncStorage
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.warn('Error reading from AsyncStorage:', e);
      return null;
    }
  },
  setItem: async (key: string, value: string) => {
    if (storage) {
      storage.set(key, value);
      return;
    }
    // Fallback to AsyncStorage
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.warn('Error writing to AsyncStorage:', e);
    }
  },
  removeItem: async (key: string) => {
    if (storage) {
      storage.remove(key);
      return;
    }

    if (isServer) return;

    // Fallback to AsyncStorage
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.warn('Error removing from AsyncStorage:', e);
    }
  },
};

const supabaseUrl = config.supabase.url;
const supabaseAnonKey = config.supabase.anonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: mmkvStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
