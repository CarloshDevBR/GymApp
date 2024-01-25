import { View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Loading } from '@components/index';

import { SignIn } from '@screens/SignIn';

export default function App() {
  const [fontLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontLoaded) return <Loading />;

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <SignIn />
    </View>
  );
}
