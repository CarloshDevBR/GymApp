import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type GroupProps = TouchableOpacityProps & {
  title: string;
  isActive: boolean;
};

export const Group = ({ title, isActive, ...rest }: GroupProps) => {
  return (
    <TouchableOpacity
      className={`w-[96px] h-[43px] items-center justify-center bg-gray-sixth rounded ${isActive && 'border border-green-secondary'} mr-2`}
      {...rest}
    >
      <Text className={`text-xs text-gray-secondary ${isActive && 'text-green-secondary'} uppercase`}>{title}</Text>
    </TouchableOpacity>
  );
};
