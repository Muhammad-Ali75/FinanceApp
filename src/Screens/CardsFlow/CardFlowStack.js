import { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Card from './Card';
import ChangePin from './ChangePin';
import SecuritySettings from './SecuritySettings';
import CardDetail from './CardDetail';
import LimitSettings from './LimitSettings';

const CardFlow = createStackNavigator();

const CardFlowScreen = () => {
  return (
    <CardFlow.Navigator screenOptions={{ headerShown: false }}>
      <CardFlow.Screen name="Card" component={Card} />
      <CardFlow.Screen name="ChangePin" component={ChangePin} />
      <CardFlow.Screen name="SecuritySettings" component={SecuritySettings} />
      <CardFlow.Screen name="CardDetail" component={CardDetail} />
      <CardFlow.Screen name="LimitSettings" component={LimitSettings} />
    </CardFlow.Navigator>
  );
};

export default CardFlowScreen;
