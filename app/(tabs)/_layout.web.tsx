import { Slot } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Sidebar } from '../../components/Sidebar';

export default function TabLayout() {
  return (
    <View className="flex-1 flex-row h-full w-full">
      <Sidebar />
      <View className="flex-1 bg-white h-full">
        <Slot />
      </View>
    </View>
  );
}
