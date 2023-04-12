import { View, Text, StyleSheet } from 'react-native';

function TransactionPartial({ item }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          {item.title}
        </Text>
        <Text style={{ color: '#646464' }}>{item.date}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ color: item.amount[0] === '-' ? '#EE4F31' : '#523CF8' }}>
          {item.amount}
        </Text>
        <Text style={styles.currency}>{item.currency}</Text>
      </View>
    </View>
  );
}

export default TransactionPartial;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#646464',
    flexDirection: 'row',
  },
  currency: {
    color: '#646464',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
