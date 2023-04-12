import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ButtonGroup } from '@rneui/base';
import SafeArea from '../../Components/SafeArea';
import Header from '../../Components/Header';
import ConfirmButton from '../../Components/ConfirmButton';
import { TouchableOpacity } from 'react-native';

const CARD_DATA = {
  key: '1',
  title: 'Card 1',
  cardNumber: '1233-2313-4141-1123',
  balance: '34000',
};
const P_DATA = {
  IBAN: 'AB23 2323 2323 2323 2333 1',
  RName: 'Smantha',
  model: '075',
  reference: '41-1231231-55',
  date: '11/04/2023',
  description: 'sending Money',
};
const currencyRates = {
  EUR: 0.84,
  USD: 1,
  GBP: 0.73,
};

function ConfirmPayment({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [amount, setAmount] = useState(`${CARD_DATA.balance} USD`);
  const currencies = ['EUR', 'USD', 'GBP'];

  const updateAmount = (index) => {
    const selectedCurrency = currencies[index];
    const exchangeRate = currencyRates[selectedCurrency];
    const convertedAmount = parseInt(CARD_DATA.balance) * exchangeRate;
    setAmount(`${convertedAmount} ${currencies[index]}`);
  };
  function onPressHandler() {
    navigation.goBack();
  }
  function onCancelPress() {
    navigation.popToTop();
  }
  function onConfirmPress() {
    navigation.navigate('PaymentComplete');
  }
  return (
    <SafeArea>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        scrollEnabled
      >
        <Header title={'Confirm Your Payment'} onPress={onPressHandler} />
        <View style={styles.container}>
          <Text style={styles.title}>{CARD_DATA.title}</Text>
          <Text style={styles.cardNumber}>{CARD_DATA.cardNumber}</Text>
          <View style={styles.exchange}>
            <ButtonGroup
              buttons={['EUR', 'USD', 'GBP']}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
                updateAmount(value);
              }}
              innerBorderStyle={{ color: 'transparent' }}
              selectedButtonStyle={{ backgroundColor: '#523CF8' }}
              containerStyle={styles.buttonGroupContainer}
              buttonStyle={styles.buttonGroupButton}
              buttonContainerStyle={styles.buttonGroupButtonContainer}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.balance}>{amount}</Text>
            <Text style={{ color: 'white', fontSize: 16 }}>
              Current balance
            </Text>
          </View>
        </View>
        <View style={styles.paymentInfoContainer}>
          <Text style={styles.cardNumber}>Account IBAN</Text>
          <Text style={styles.value}>{P_DATA.IBAN}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View>
              <Text style={styles.cardNumber}>Recipient Name</Text>
              <Text style={styles.value}>{P_DATA.RName}</Text>
              <Text style={styles.cardNumber}>Model</Text>
              <Text style={styles.value}>{P_DATA.model}</Text>
            </View>
            <View>
              <Text style={styles.cardNumber}>Payment Date</Text>
              <Text style={styles.value}>{P_DATA.date}</Text>
              <Text style={styles.cardNumber}>Reference</Text>
              <Text style={styles.value}>{P_DATA.reference}</Text>
            </View>
          </View>
          <Text style={styles.cardNumber}>Description</Text>
          <Text style={styles.value}>{P_DATA.description}</Text>
        </View>

        <View style={styles.ammountContainer}>
          <View>
            <Text style={styles.cardAmount}>Amount</Text>
            <Text style={styles.cardAmount}>Fee</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.valueAmount}>3000 EUR</Text>
            <Text style={styles.valueAmount}>200 EUR</Text>
            <Text style={styles.totalText}>Total amount</Text>
            <Text style={styles.total}>3800 EUR</Text>
          </View>
        </View>
        <ConfirmButton title={'Confirm Payment'} onPress={onConfirmPress} />
        <TouchableOpacity
          style={{ marginBottom: 80, marginTop: 10, alignSelf: 'center' }}
          onPress={onCancelPress}
        >
          <Text style={{ color: 'white' }}>Cancel Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeArea>
  );
}

export default ConfirmPayment;

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
    width: '95%',
    margin: 10,
    marginBottom: 2,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#2F2E33',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  cardNumber: {
    color: '#504E58',
    fontWeight: 'bold',
    fontSize: 14,
  },
  balance: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    height: 40,
    width: 40,
    borderRadius: 20,
    paddingTop: 8,
    paddingLeft: 7,
    backgroundColor: '#F76654',
  },
  buttonGroupContainer: {
    marginBottom: -30,
    marginTop: 15,
    marginLeft: -7,
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: 30,
  },
  buttonGroupButton: {
    borderWidth: 0,
    borderRadius: 10,
    width: 40,
    backgroundColor: 'transparent',
  },
  buttonGroupButtonContainer: {
    alignItems: 'center',
    flex: 0,
    height: 30,
  },

  paymentInfoContainer: {
    maxHeight: 230,
    width: '95%',
    margin: 10,
    marginTop: 5,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#2F2E33',
    flex: 1,
  },
  value: {
    fontSize: 18,
    color: 'white',
    marginTop: 2,
  },
  ammountContainer: {
    maxHeight: 200,
    width: '95%',
    margin: 10,
    marginTop: -3,
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#2F2E33',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardAmount: {
    color: '#504E58',
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 10,
  },
  valueAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 7,
    marginBottom: 10,
  },
  totalText: {
    color: '#F76654',
    fontSize: 14,
    marginTop: 10,
  },
  total: {
    color: '#F76654',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
