import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

import Wallet from './Wallet';
import Card from './CardsFlow/Card';
import History from './History';
import Payment from './PaymentsFlow/Payment';

const Tab = createBottomTabNavigator();

function MainFlowStack() {
  return (
    <Tab.Navigator
      initialRouteName="Payment"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#523CF8',
        tabBarActiveBackgroundColor: '#2F2E33',
        tabBarInactiveBackgroundColor: '#2F2E33',
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
        component={Card}
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
        component={Payment}
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
