import { TextInput, TextInputProps, View } from 'react-native';

type TextFieldProps = TextInputProps & {
  title: string;
};

export const TextField = ({ title, ...rest }: TextFieldProps) => {
  return (
    <View className="h-[56px] rounded-md bg-black-primary mb-3 pl-4">
      <TextInput className="flex-1" placeholder={title} placeholderTextColor="#7C7C8A" autoCorrect={false} {...rest} />
    </View>
  );
};
