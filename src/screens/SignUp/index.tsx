import { Image, ScrollView, Text, View } from 'react-native';

import bg from '@assets/background.png';

import LogoSvg from '@assets/logo.svg';

import { Button, TextField } from '@components/index';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigate = useNavigation<AuthNavigatorRoutesProps>();

  const handleNavigateSignIn = () => {
    navigate.navigate('signIn');
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
          <Text className="text-gray-primary text-xl text-center font-semibold mb-4">Crie sua conta</Text>

          <TextField title="Nome" keyboardType="email-address" />

          <TextField title="E-mail" keyboardType="email-address" />

          <TextField title="Senha" secureTextEntry />

          <TextField title="Confirmar a Senha" secureTextEntry />

          <Button title="Acessar" />
        </View>

        <Button className="mx-[40px] mb-4" title="Voltar para o login" type="outlined" onPress={handleNavigateSignIn} />
      </View>
    </ScrollView>
  );
}
