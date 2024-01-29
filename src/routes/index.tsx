import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

import { PrivateRoutes } from './private.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <PrivateRoutes />
    </NavigationContainer>
  );
}
