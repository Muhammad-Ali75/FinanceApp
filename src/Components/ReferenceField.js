import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ReferenceField = ({ title }) => {
  function generateRandomNumber() {
    const firstPart = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, '0');
    const secondPart = Math.floor(Math.random() * 10000000)
      .toString()
      .padStart(7, '0');
    const thirdPart = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, '0');
    return `${firstPart}-${secondPart}-${thirdPart}`;
  }

  return (
    <View style={styles.topContainer}>
      <Text style={{ color: '#646464' }}>Reference</Text>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Feather name="square" size={22} color="white" />
        </View>
        <Text style={styles.input}>{generateRandomNumber()}</Text>
      </View>
    </View>
  );
};

export default ReferenceField;

const styles = StyleSheet.create({
  topContainer: {
    borderBottomWidth: 1,
    borderColor: '#646464',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  container: {
    height: 40,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#F76654',
    borderRadius: 10,
    marginHorizontal: 10,
    marginLeft: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    marginLeft: 0,
    marginRight: 10,
    width: '100%',
    color: 'white',
  },
  errorContainer: {
    width: '75%',
    alignSelf: 'center',
    marginTop: -15,
    marginBottom: 0,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  iconCircle: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
  },
});
