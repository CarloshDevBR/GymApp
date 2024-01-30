import { Image, Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native';

import Avatar from '@assets/userPhotoDefault.png';

import { MaterialIcons } from '@expo/vector-icons';

type ExerciseProps = TouchableOpacityProps & {
  title: string;
  description: string;
};

export const Exercise = ({ title, description, ...rest }: ExerciseProps) => {
  return (
    <TouchableOpacity className="h-[83px] flex-row items-center justify-between pl-[6px] bg-gray-fifth rounded-lg pr-2 mb-2" {...rest}>
      <View className="flex-row items-center">
        <Image source={Avatar} width={67} height={67} />

        <View className="ml-3">
          <Text className="text-white text-lg font-semibold mb-[6px]">{title}</Text>

          <Text className="text-gray-secondary">{description}</Text>
        </View>
      </View>

      <MaterialIcons name="keyboard-arrow-right" size={25} color="#7C7C8A" />
    </TouchableOpacity>
  );
};
