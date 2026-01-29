import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  const { t } = useTranslation();
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-xl font-bold text-slate-800 dark:text-slate-100">
        {t('profile.title')}
      </Text>
    </View>
  );
}
