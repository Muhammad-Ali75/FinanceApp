import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

function TemplateButtons({ title, selected, onPress, icon }) {
  return (
    <TouchableOpacity
      style={selected ? styles.container : styles.notSelected}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        {icon === 'temp' ? (
          <MaterialCommunityIcons
            name="clipboard-text-outline"
            size={30}
            color="#F76654"
          />
        ) : (
          <Ionicons name="md-qr-code" size={24} color="#F76654" />
        )}
      </View>
      <Text style={selected ? { color: 'white' } : { color: 'grey' }}>
        Pay with:
      </Text>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default TemplateButtons;

const styles = StyleSheet.create({
  container: {
    height: 125,
    width: 170,
    padding: 20,
    backgroundColor: '#F76654',
    borderRadius: 10,
  },
  notSelected: {
    height: 125,
    width: 170,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
