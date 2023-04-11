import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
function Header({ title, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="arrow-back" size={28} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 50,
  },
});
