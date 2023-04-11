import { createStackNavigator } from '@react-navigation/stack';
import Payment from './Payment';
import RecipientInfo from './RecipientInfo';
import PaymentInfo from './PaymentInfo';
import OtherInfo from './OtherInfo';
import ConfirmPayment from './ConfirmPayment';
import PaymentComplete from './PaymentComplete';

const PaymentFlow = createStackNavigator();

const PaymentFlowScreen = () => (
  <PaymentFlow.Navigator screenOptions={{ headerShown: false }}>
    <PaymentFlow.Screen name="Pay" component={Payment} />
    <PaymentFlow.Screen name="RecipientInfo" component={RecipientInfo} />
    <PaymentFlow.Screen name="PaymentInfo" component={PaymentInfo} />
    <PaymentFlow.Screen name="OtherInfo" component={OtherInfo} />
    <PaymentFlow.Screen name="ConfirmPayment" component={ConfirmPayment} />
    <PaymentFlow.Screen name="PaymentComplete" component={PaymentComplete} />
  </PaymentFlow.Navigator>
);

export default PaymentFlowScreen;
