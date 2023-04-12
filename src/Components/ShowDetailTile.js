import { View, StyleSheet, Text } from 'react-native';

import {
  FontAwesome,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

function Icon({ title }) {
  switch (title) {
    case 'bank':
      return <FontAwesome name="bank" size={20} color="white" />;
    case 'add-person':
      return <AntDesign name="adduser" size={24} color="white" />;
    case 'address':
      return <Entypo name="location-pin" size={26} color="white" />;
    case 'city':
      return (
        <MaterialCommunityIcons name="home-city" size={20} color="white" />
      );
    case 'oib':
      return <Feather name="square" size={22} color="white" />;
    case 'ammount':
      return (
        <View style={styles.iconCircle}>
          <FontAwesome name={'usd'} size={15} color="white" />
        </View>
      );
    case 'des':
      return <Entypo name="text" size={20} color="white" />;
    case 'mod':
      return <Ionicons name="document-outline" size={24} color="white" />;
    case 'pcode':
      return <MaterialIcons name="show-chart" size={24} color="white" />;
    default:
      return null;
  }
}

const ShowDetailTile = ({ title, icon, value }) => {
  return (
    <View style={styles.topContainer}>
      <Text style={{ color: '#646464' }}>{title}</Text>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon title={icon} />
        </View>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
};

export default ShowDetailTile;

const styles = StyleSheet.create({
  topContainer: {
    borderBottomWidth: 1,
    borderColor: '#646464',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  container: {
    height: 40,
    alignSelf: 'flex-start',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#F76654',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 15,
  },
});
