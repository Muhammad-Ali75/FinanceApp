import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SafeArea from '../../Components/SafeArea';

function PaymentComplete({ navigation }) {
  function onPressHandler() {
    navigation.popToTop();
  }
  return (
    <SafeArea>
      <Text style={styles.title}>Success</Text>
      <View style={{ flex: 1 }}></View>
      <Text style={styles.textBig}>Payments Complete</Text>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.text}>Back to Payments</Text>
      </TouchableOpacity>
    </SafeArea>
  );
}

export default PaymentComplete;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#523CF8',
    width: '95%',
    height: 55,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 75,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 15,
    textAlign: 'center',
  },
  textBig: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 38,
    marginBottom: 35,
    textAlign: 'center',
  },
});
