import { Text, View } from 'react-native';

import { Avatar, Button, TextField } from '@components/index';

export default function Profile() {
  return (
    <View className="flex-1 bg-black-primary">
      <View className="h-[100px] bg-gray-sixth justify-center items-center h-">
        <Text className="text-gray-primary text-xl">Perfil</Text>
      </View>

      <View className="px-[40px] pt-4">
        <View className="justify-center items-center">
          <View className="w-[125px] h-[125px] border border-gray-500 rounded-full">
            <Avatar width={125} height={125} />
          </View>

          <Text className="text-green-secondary font-semibold mt-2 mb-8">Alterar foto</Text>
        </View>

        <TextField title="Nome" containerClass="bg-gray-sixth" />

        <TextField title="E-mail" containerClass="bg-gray-sixth" />
      </View>

      <View className="mt-10 px-[40px]">
        <Text className="text-gray-secondary font-semibold mb-2">Alterar senha</Text>

        <TextField title="Senha antiga" containerClass="bg-gray-sixth" />

        <TextField title="Nova senha" containerClass="bg-gray-sixth" />

        <Button title="Atualizar" />
      </View>
    </View>
  );
}
