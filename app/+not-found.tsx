import { useTranslation } from 'react-i18next';
import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function NotFoundScreen() {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen options={{ title: t('notFound.title') }} />
      <View className="flex-1 items-center justify-center bg-white p-5">
        <Text className="text-xl font-bold">
          {t('notFound.text')}
        </Text>
        <Link href="/" className="mt-4 py-4">
          <Text className="text-blue-500">
            {t('notFound.linkText')}
          </Text>
        </Link>
      </View>
    </>
  );
}
