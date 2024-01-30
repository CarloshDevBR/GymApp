import { FlatList, Text, View } from 'react-native';

import { Exercise as Ex } from 'src/types';

import { Exercise } from './exercise';

type ListExercisesProps = {
  data: Ex[];
};

export const ListExercises = ({ data }: ListExercisesProps) => {
  return (
    <View className="flex-1 mx-8 mb-2">
      <View className="flex-row justify-between mb-4">
        <Text className="text-gray-secondary font-semibold">Exercícios</Text>

        <Text className="text-gray-secondary font-semibold">4</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Exercise title={item.name} description={item.description} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
