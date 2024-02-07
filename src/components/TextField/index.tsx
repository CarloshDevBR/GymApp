import { TextInput, TextInputProps, View } from 'react-native';

type TextFieldProps = TextInputProps & {
  title: string;
  containerClass?: string;
};

export const TextField = ({ title, containerClass = 'bg-black-primary', ...rest }: TextFieldProps) => {
  return (
    <View className={`h-[56px] rounded-md ${containerClass} mb-3 pl-4 border border-black-primary focus:border-green-primary`}>
      <TextInput
        className="flex-1 text-white"
        placeholder={title}
        placeholderTextColor="#7C7C8A"
        autoCorrect={false}
        autoCapitalize="none"
        {...rest}
      />
    </View>
  );
};
