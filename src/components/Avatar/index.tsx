import { Image, ImageSourcePropType, ImageProps } from 'react-native';

import Av from '@assets/userPhotoDefault.png';

type AvatarProps = ImageProps & {
  src?: ImageSourcePropType;
};

export const Avatar = ({ src = Av, ...rest }: AvatarProps) => {
  return <Image source={src || Av} alt="avatar" {...rest} />;
};
