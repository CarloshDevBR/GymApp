import { Text, View } from 'react-native';

import { ListExercises } from './components/listExercises';

export default function Historic() {
  return (
    <View className="flex-1 bg-black-primary">
      <View className="h-[100px] bg-gray-sixth justify-center items-center h-">
        <Text className="text-gray-primary text-xl">Histórico de Exercícios</Text>
      </View>

      <View className="px-[32px]">
        <ListExercises />

        <ListExercises />
      </View>
    </View>
  );
}
