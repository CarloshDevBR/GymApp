import { View } from 'react-native';

import { Header } from './components/Header';

export function Home() {
  return (
    <View className="flex-1 bg-black-primary">
      <Header />
    </View>
  );
}
