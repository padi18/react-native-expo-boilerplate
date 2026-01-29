import { useColorScheme } from 'nativewind';

export const useTheme = () => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();
  return {
    theme: colorScheme,
    toggleTheme: toggleColorScheme,
    setTheme: setColorScheme,
    isDark: colorScheme === 'dark',
  };
};
