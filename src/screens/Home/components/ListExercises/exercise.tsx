import { Image, Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Exercise as Ex } from 'src/types';

type ExerciseProps = TouchableOpacityProps & {
  data: Ex;
};

export const Exercise = ({ data, ...rest }: ExerciseProps) => {
  return (
    <TouchableOpacity className="h-[83px] flex-row items-center justify-between pl-[6px] bg-gray-fifth rounded-lg pr-2 mb-2" {...rest}>
      <View className="flex-row items-center">
        <Image source={{ uri: data.image }} width={67} height={67} className="rounded-md" />

        <View className="ml-3">
          <Text className="text-white text-lg font-semibold mb-[6px]">{data.name}</Text>

          <Text className="text-gray-secondary">{data.description}</Text>
        </View>
      </View>

      <MaterialIcons name="chevron-right" size={25} color="#7C7C8A" />
    </TouchableOpacity>
  );
};
