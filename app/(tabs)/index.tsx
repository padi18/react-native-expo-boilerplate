import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
        {t('home.title')} 🚀
      </Text>
      <Text className="text-slate-600 dark:text-slate-400">
        {t('home.text')}
      </Text>
    </View>
  );
}
