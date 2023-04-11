import { Text } from 'react-native';
import SafeArea from '../Components/SafeArea';

function Wallet() {
  return (
    <SafeArea>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
        }}
      >
        This is Wallet
      </Text>
    </SafeArea>
  );
}
export default Wallet;
