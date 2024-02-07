import { Text, View } from 'react-native';

export const Exercise = () => {
  return (
    <View className="h-[88px] flex flex-row justify-between items-center bg-gray-sixth mb-4 px-6 rounded-lg">
      <View>
        <Text className="text-white font-semibold pb-2">Costas</Text>

        <Text className="text-lg text-gray-primary">Puxada frontal</Text>
      </View>

      <Text className="text-gray-terciary">08:32</Text>
    </View>
  );
};
