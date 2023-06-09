import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

import Wallet from './Wallet';
import CardFlowScreen from './CardsFlow/CardFlowStack';
import History from './History';
import PaymentFlowScreen from './PaymentsFlow/PaymentFlowStack';

const Tab = createBottomTabNavigator();

function MainFlowStack() {
  return (
    <Tab.Navigator
      initialRouteName="Cards"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#523CF8',
        tabBarActiveBackgroundColor: '#2F2E33',
        tabBarInactiveBackgroundColor: '#2F2E33',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
          overflow: 'hidden',
        },
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardFlowScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-card-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bar-chart" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentFlowScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="text-document-inverted" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainFlowStack;
