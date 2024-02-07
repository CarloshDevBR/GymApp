import { Text, View } from 'react-native';

import { Exercise } from './exercise';

export const ListExercises = () => {
  return (
    <View className="pt-12">
      <Text className="text-gray-secondary font-semibold mb-3">26.08.24</Text>

      <View>
        <Exercise />

        <Exercise />
      </View>
    </View>
  );
};
