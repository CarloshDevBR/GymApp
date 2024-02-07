import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';
import Home from '@screens/Home';
import Historic from '@screens/Historic';
import Profile from '@screens/Profile';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

export const PUBLIC_ROUTES = [
  {
    name: 'signIn',
    page: SignIn,
  },
  {
    name: 'signUp',
    page: SignUp,
  },
];

export const PRIVATE_ROUTES = [
  {
    name: 'home',
    page: Home,
    icon: (color: string) => <HomeSvg height={25} width={25} fill={color} />,
  },
  {
    name: 'history',
    page: Historic,
    icon: (color: string) => <HistorySvg height={25} width={25} fill={color} />,
  },
  {
    name: 'profile',
    page: Profile,
    icon: (color: string) => <ProfileSvg height={25} width={25} fill={color} />,
  },
];
