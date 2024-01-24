import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  const [fontLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontLoaded) return;

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}
