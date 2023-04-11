import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import {
  FontAwesome,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from '@expo/vector-icons';

function Icon({ title }) {
  switch (title) {
    case 'urgent':
      return <FontAwesome name="forward" size={18} color="white" />;
    case 'add-person':
      return <AntDesign name="adduser" size={24} color="white" />;
    case 'save':
      return <FontAwesome name="save" size={24} color="white" />;
    default:
      return (
        <MaterialCommunityIcons name="format-text" size={24} color="white" />
      );
  }
}

function ButtonTile({ title, icon }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon title={icon} />
      </View>
      <Text style={styles.input}>{title}</Text>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color="#523CF8"
      />
    </View>
  );
}

export default ButtonTile;

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 10,
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#F76654',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    width: '100%',
    color: 'white',
    fontSize: 18,
  },
});
