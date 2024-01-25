import { Image, View } from 'react-native';

import bg from '@assets/background.png';

import LogoSvg from '@assets/logo.svg'

export function SignIn() {
  return (
    <View className="flex-1 bg-gray-seventh">
      <Image source={bg} alt="bg-training" />

      <LogoSvg width={120} height={40} />
    </View>
  );
}
