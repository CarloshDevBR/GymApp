import { Image, Text, TouchableOpacity, View } from 'react-native';

import Avatar from '@assets/userPhotoDefault.png';

import { MaterialIcons } from '@expo/vector-icons';

export const Header = () => {
  return (
    <View className="h-[100px] flex-row items-center bg-gray-sixth">
      <View className="flex-1 flex-row items-center ml-8">
        <Image source={Avatar} defaultSource={Avatar} alt="avatar" />

        <View className="ml-4">
          <Text className="text-white">Olá</Text>

          <Text className="text-white font-semibold">Carlos Henrique</Text>
        </View>
      </View>

      <TouchableOpacity className="mr-5">
        <MaterialIcons name="logout" size={25} color="#C4C4CC" />
      </TouchableOpacity>
    </View>
  );
};
