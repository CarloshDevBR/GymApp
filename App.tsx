import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Loading } from '@components/index';

import { SignIn } from '@screens/SignIn';

export default function App() {
  const [fontLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontLoaded) return <Loading />;

  return (
    <SafeAreaView className="flex-1 bg-gray-seventh">
      <StatusBar backgroundColor="transparent" style="light" translucent />

      <SignIn />
    </SafeAreaView>
  );
}
