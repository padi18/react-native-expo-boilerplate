import { Link, usePathname } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Home, User } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColorScheme } from 'nativewind';

export function Sidebar() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  const menuItems = [
    { name: 'Home', path: '/', Icon: Home },
    { name: 'Profile', path: '/profile', Icon: User },
  ] as const;

  return (
    <View 
      className="w-64 bg-gray-100 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 h-full"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <View className="p-6 border-b border-gray-200 dark:border-slate-800">
        <Text className="text-xl font-bold text-gray-800 dark:text-slate-100">My App</Text>
      </View>
      
      <View className="flex-1 py-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
          
          return (
            <Link key={item.path} href={item.path} asChild>
              <Pressable 
                className={`flex-row items-center px-6 py-4 space-x-4 ${isActive ? 'bg-white dark:bg-slate-800 border-r-4 border-blue-500' : 'hover:bg-gray-50 dark:hover:bg-slate-800/50'}`}
              >
                <item.Icon 
                  size={20} 
                  color={isActive ? '#3b82f6' : (isDark ? '#94a3b8' : '#6b7280')} 
                  style={{ marginRight: 12 }}
                />
                <Text className={`text-base ${isActive ? 'text-blue-500 font-semibold' : 'text-gray-600 dark:text-slate-400'}`}>
                  {item.name}
                </Text>
              </Pressable>
            </Link>
          );
        })}
      </View>

      <View className="p-6 border-t border-gray-200 dark:border-slate-800">
        <Text className="text-sm text-gray-500 dark:text-slate-500">© 2024 App Version</Text>
      </View>
    </View>
  );
}
