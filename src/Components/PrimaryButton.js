import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PrimaryButton = ({ onPress, title, disabled }) => (
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
    <View style={styles.iconContainer}>
      <Ionicons name="arrow-forward" size={18} color="#523CF8" />
    </View>
  </TouchableOpacity>
);

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#523CF8',
    width: '95%',
    height: 55,
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 25,
    marginBottom: 80,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 40,
    paddingTop: 15,
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
