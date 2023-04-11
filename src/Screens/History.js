import { Text } from 'react-native';
import SafeArea from '../Components/SafeArea';

function History() {
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
        This is History
      </Text>
    </SafeArea>
  );
}
export default History;
