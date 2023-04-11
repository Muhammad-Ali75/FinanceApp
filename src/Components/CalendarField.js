import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CalendarField = ({ title }) => {
  function dateNow() {
    let date = new Date();
    let fDate = `${date.getDate()}/${
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }/${date.getFullYear()}`;
    return fDate;
  }
  return (
    <View style={styles.topContainer}>
      <Text style={{ color: '#646464' }}>{title}</Text>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Feather name="calendar" size={24} color="white" />
        </View>
        <Text style={styles.input}>{dateNow()}</Text>
      </View>
    </View>
  );
};

export default CalendarField;

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
