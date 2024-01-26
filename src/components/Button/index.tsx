import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: 'outlined' | 'contained';
};

export const Button = ({ title, className, type = 'contained', ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`h-[56px] flex justify-center items-center rounded-md ${className}
       ${type === 'contained' ? 'bg-green-primary' : 'border-2 border-green-primary'}`}
      {...rest}
    >
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};
