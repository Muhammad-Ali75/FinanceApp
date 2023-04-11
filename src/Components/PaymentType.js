import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

function PaymentType({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <FontAwesome name={icon} size={26} color="white" />
        </View>
      </View>
      <Text style={styles.title}>{title} Payment</Text>
      <MaterialIcons name="arrow-forward" size={24} color="#F76654" />
    </TouchableOpacity>
  );
}

export default PaymentType;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '95%',
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    margin: 10,
    marginVertical: 5,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  iconContainer: {
    height: 70,
    width: 70,
    backgroundColor: '#F76654',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
});
