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

const CardFlowScreen = ({ navigation, route }) => {
  const tabHiddenRoutes = [
    'ChangePin',
    'SecuritySettings',
    'CardDetail',
    'LimitSettings',
  ];
  useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
          overflow: 'hidden',
        },
      });
    }
  }, [navigation, route]);
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
