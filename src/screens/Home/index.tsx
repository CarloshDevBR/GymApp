import { View } from 'react-native';

import { Header } from './components/Header';
import { Groups } from './components/Groups';
import { ListExercises } from './components/ListExercises';

import { EXERCISES, GROUPS } from 'src/constants';

export default function Home() {
  return (
    <View className="flex-1 bg-black-primary">
      <Header />

      <Groups data={GROUPS} />

      <ListExercises data={EXERCISES} />
    </View>
  );
}
