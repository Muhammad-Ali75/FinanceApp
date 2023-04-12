import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import SafeArea from '../../Components/SafeArea';
import { Ionicons } from '@expo/vector-icons';
import { Modal, Portal, Provider } from 'react-native-paper';
import SettingsTile from '../../Components/SettingsTile';
import CardPartial from '../../Components/CardPartial';
import TransactionPartial from '../../Components/TransactionPartial';

const CARD_DATA = [
  {
    key: '1',
    title: 'Card 1',
    cardNumber: '1233-2313-4141-1123',
    balance: '34000',
  },
  {
    key: '2',
    title: 'Card 2',
    cardNumber: '1244-2313-4141-4123',
    balance: '88000',
  },
  {
    key: '3',
    title: 'Card 3',
    cardNumber: '1233-2313-4141-1314',
    balance: '43000',
  },
  {
    key: '4',
    title: 'Card 4',
    cardNumber: '1233-2313-4141-9070',
    balance: '31000',
  },
];
const TRANSACTION_DATA = [
  {
    key: '1',
    title: 'Taxi Transport',
    currency: 'EUR',
    date: '13th May, 16:00',
    amount: '-34000',
  },
  {
    key: '2',
    title: 'Food Delivery',
    currency: 'USD',
    date: '12th May, 16:00',
    amount: '-88000',
  },
  {
    key: '3',
    title: 'Food Delivery',
    currency: 'EUR',
    date: '10th May, 16:00',
    amount: '+43000',
  },
  {
    key: '4',
    title: 'Taxi Transport',
    currency: 'USD',
    date: '03rd May, 16:00',
    amount: '+31000',
  },
  {
    key: '5',
    title: 'Food Delivery',
    currency: 'EUR',
    date: '10th May, 16:00',
    amount: '+43000',
  },
  {
    key: '6',
    title: 'Taxi Transport',
    currency: 'USD',
    date: '03rd May, 16:00',
    amount: '+31000',
  },
];

function Card({ navigation }) {
  const [visible, setVisible] = useState(false);

  function onSettingPress() {
    setVisible(() => !visible);
  }
  function onDetailsPress() {
    navigation.navigate('CardDetail');
  }
  function onLimitPress() {
    navigation.navigate('LimitSettings');
  }
  function onPINPress() {
    navigation.navigate('ChangePin');
  }
  function onSecurityPress() {
    navigation.navigate('SecuritySettings');
  }
  return (
    <SafeArea>
      <Provider>
        {/* Modal for Settings */}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={onSettingPress}
            contentContainerStyle={styles.containerStyle}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={styles.modalHeaderText}>Card Option</Text>
              <TouchableOpacity
                style={styles.modalIconContainer}
                onPress={onSettingPress}
              >
                <Ionicons name="close-sharp" size={26} color="#523CF8" />
              </TouchableOpacity>
            </View>
            <SettingsTile
              title={'Card Details'}
              icon={'card'}
              onPress={onDetailsPress}
            />
            <SettingsTile
              title={'Limit Settings'}
              icon={'filter'}
              onPress={onLimitPress}
            />
            <SettingsTile
              title={'Change PIN'}
              icon={'lock'}
              onPress={onPINPress}
            />
            <SettingsTile
              title={'Security Settings'}
              icon={'protect'}
              onPress={onSecurityPress}
            />
          </Modal>
        </Portal>
        {/* END of Modal for Settings */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Cards</Text>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={onSettingPress}
          >
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, marginBottom: 80, flex: 1 }}>
          <FlatList
            data={CARD_DATA}
            horizontal
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <CardPartial
                title={item.title}
                cardNumber={item.cardNumber}
                balance={item.balance}
              />
            )}
            style={{ marginBottom: -390 }}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.recentContainer}>
            <Text style={styles.recentText}>Recent Transactions</Text>
            <FlatList
              data={TRANSACTION_DATA}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => <TransactionPartial item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Provider>
    </SafeArea>
  );
}

export default Card;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginRight: 40,
  },
  iconContainer: {
    marginTop: 2,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  containerStyle: {
    backgroundColor: '#646464',
    borderRadius: 25,
    padding: 20,
    width: '90%',
    height: 350,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    bottom: '-15%',
  },
  modalIconContainer: {
    height: 35,
    width: 35,
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  recentContainer: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#2F2E33',
    width: '95%',
    alignSelf: 'center',
  },
  recentText: {
    color: 'white',
    margin: 20,
    fontSize: 18,
  },
});
