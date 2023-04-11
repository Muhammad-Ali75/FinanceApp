import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SegmentedButtons } from 'react-native-paper';
import SafeArea from '../../Components/SafeArea';
import CardPartial from '../../Components/CardPartial';
import PaymentType from '../../Components/PaymentType';

const ButtonData = [
  {
    value: 'pay',
    label: 'Payments',
    checkedColor: '#523CF8',
    uncheckedColor: '#7A7A7A',
    style: { borderRadius: 5 },
  },
  {
    value: 'exch',
    label: 'Exchange',
    uncheckedColor: '#7A7A7A',
    checkedColor: '#523CF8',
    style: { borderRadius: 5 },
  },
];
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

function Payment() {
  const [value, setValue] = useState('pay');
  return (
    <SafeArea>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment & Exchanges</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        style={styles.segmentButtons}
        density="medium"
        buttons={ButtonData}
      />
      {value === 'exch' ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              textAlign: 'center',
            }}
          >
            Comming Soon
          </Text>
        </View>
      ) : (
        //! add converter
        <Main />
      )}
    </SafeArea>
  );
}

export default Payment;

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
  },
  segmentButtons: {
    borderRadius: -10,
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  payType: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    marginBottom: 20,
  },
});

function Main() {
  const navigation = useNavigation();

  function onPressHandler(title) {
    navigation.navigate('RecipientInfo', { title: title });
  }

  return (
    <>
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
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.payType}>Payment Type</Text>
      <View
        style={{
          flex: 30,
          justifyContent: 'flex-start',
          paddingBottom: 70,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <PaymentType
            title={'USD'}
            icon={'usd'}
            onPress={() => onPressHandler('usd')}
          />
          <PaymentType
            title={'GBP'}
            icon={'gbp'}
            onPress={() => onPressHandler('gbp')}
          />
          <PaymentType
            title={'EUR'}
            icon={'eur'}
            onPress={() => onPressHandler('eur')}
          />
        </ScrollView>
      </View>
    </>
  );
}
