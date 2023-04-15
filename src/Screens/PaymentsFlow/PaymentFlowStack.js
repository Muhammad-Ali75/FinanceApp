import { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Payment from './Payment';
import RecipientInfo from './RecipientInfo';
import PaymentInfo from './PaymentInfo';
import OtherInfo from './OtherInfo';
import ConfirmPayment from './ConfirmPayment';
import PaymentComplete from './PaymentComplete';

const PaymentFlow = createStackNavigator();

const PaymentFlowScreen = ({ navigation, route }) => {
  const tabHiddenRoutes = [
    'RecipientInfo',
    'PaymentInfo',
    'OtherInfo',
    'ConfirmPayment',
    'PaymentComplete',
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
    <PaymentFlow.Navigator screenOptions={{ headerShown: false }}>
      <PaymentFlow.Screen name="Pay" component={Payment} />
      <PaymentFlow.Screen name="RecipientInfo" component={RecipientInfo} />
      <PaymentFlow.Screen name="PaymentInfo" component={PaymentInfo} />
      <PaymentFlow.Screen name="OtherInfo" component={OtherInfo} />
      <PaymentFlow.Screen name="ConfirmPayment" component={ConfirmPayment} />
      <PaymentFlow.Screen name="PaymentComplete" component={PaymentComplete} />
    </PaymentFlow.Navigator>
  );
};

export default PaymentFlowScreen;
