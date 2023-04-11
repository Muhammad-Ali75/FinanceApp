import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ConfirmButton = ({ onPress, title, disabled }) => (
  <TouchableOpacity
    disabled={disabled}
    style={styles.button}
    onPress={() => {
      onPress();
    }}
  >
    {disabled ? (
      <ActivityIndicator size="small" color="white" />
    ) : (
      <Text style={styles.text}>{title}</Text>
    )}
  </TouchableOpacity>
);

export default ConfirmButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F76654',
    width: '95%',
    height: 55,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 15,
    textAlign: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
  },
});
