import { PUBLIC_ROUTES } from './routes';

import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

type AuthRoutesProps = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesProps>;

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="signIn" screenOptions={{ headerShown: false }}>
      {PUBLIC_ROUTES.map((item) => (
        <Screen key={item.name} name={item.name} component={item.page} />
      ))}
    </Navigator>
  );
}
