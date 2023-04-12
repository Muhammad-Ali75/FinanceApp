import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons';

function Icon({ title }) {
  switch (title) {
    case 'lock':
      return <Ionicons name="lock-closed-outline" size={20} color="white" />;
    case 'filter':
      return <FontAwesome name="sliders" size={20} color="white" />;
    case 'protect':
      return <Feather name="shield" size={22} color="white" />;

    case 'card':
      return <FontAwesome name="credit-card" size={20} color="white" />;

    default:
      return null;
  }
}
function SettingsTile({ title, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.iconContainer}>
          <Icon title={icon} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={{ marginRight: 10, marginTop: 5 }}>
        <Ionicons name="arrow-forward-outline" size={24} color="#F76654" />
      </View>
    </TouchableOpacity>
  );
}

export default SettingsTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 60,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#7A7A7A',
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 20,
  },

  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#F76654',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
