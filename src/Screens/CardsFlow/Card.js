import { View, Text, StyleSheet } from 'react-native';
import SafeArea from '../../Components/SafeArea';

function Card() {
  return (
    <SafeArea>
      <View>
        <Text style={{ color: 'white' }}>Card</Text>
      </View>
    </SafeArea>
  );
}

export default Card;

const styles = StyleSheet.create({});
