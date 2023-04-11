import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonGroup } from '@rneui/base';
import { Entypo } from '@expo/vector-icons';

function CardPartial({ title, cardNumber, balance }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cardNumber}>{cardNumber}</Text>
      <View style={styles.exchange}>
        <ButtonGroup
          buttons={['EUR', 'USD', 'GBP']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            setSelectedIndex(value);
          }}
          innerBorderStyle={{ color: 'transparent' }}
          selectedButtonStyle={{ backgroundColor: '#523CF8' }}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonGroupButton}
          buttonContainerStyle={styles.buttonGroupButtonContainer}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.balance}>{balance}</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Current balance</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default CardPartial;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 350,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#2F2E33',
    flex: 1,
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
});
