import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { PRIVATE_ROUTES } from '../constants/routes';

const { Navigator, Screen } = createBottomTabNavigator();

type AuthRoutesProps = {
  home: undefined;
  history: undefined;
  exercise: undefined;
  profile: undefined;
};

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AuthRoutesProps>;

export function PrivateRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#00B37E',
        tabBarInactiveTintColor: '#C4C4CC',
        tabBarStyle: {
          backgroundColor: '#202024',
          paddingBottom: 30,
          paddingTop: 30,
        },
      }}
    >
      {PRIVATE_ROUTES.map((item) => (
        <Screen
          key={item.name}
          name={item.name}
          component={item.page}
          options={{
            tabBarIcon: ({ color }) => item.icon(color),
          }}
        />
      ))}
    </Navigator>
  );
}
