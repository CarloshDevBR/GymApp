import { Image, ScrollView, Text, View } from 'react-native';

import bg from '@assets/background.png';

import LogoSvg from '@assets/logo.svg';

import { Button, TextField } from '@components/index';

import { useNavigation } from '@react-navigation/native';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export default function SignIn() {
  const navigate = useNavigation<AuthNavigatorRoutesProps>();

  const handleNavigateSignUp = () => {
    navigate.navigate('signUp');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View className="flex-1 bg-gray-seventh relative">
        <Image source={bg} defaultSource={bg} alt="bg-training" className="absolute" />

        <View className="w-full flex items-center mt-[128px]">
          <LogoSvg width={195} height={40} />

          <Text className="text-gray-primary text-sm">Treine sua mente e o seu corpo</Text>
        </View>

        <View className="flex-1 justify-end mx-[40px] mb-16">
          <Text className="text-gray-primary text-xl text-center font-semibold mb-4">Acesse sua conta</Text>

          <TextField title="E-mail" keyboardType="email-address" />

          <TextField title="Senha" secureTextEntry />

          <Button title="Acessar" />
        </View>

        <View className="mx-[40px] mb-4">
          <Text className="text-gray-primary text-center mb-4">Ainda não tem acesso?</Text>

          <Button title="Criar conta" type="outlined" onPress={handleNavigateSignUp} />
        </View>
      </View>
    </ScrollView>
  );
}
