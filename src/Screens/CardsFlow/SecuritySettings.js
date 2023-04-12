import { View, Text, StyleSheet } from 'react-native';

import SafeArea from '../../Components/SafeArea';
import Header from '../../Components/Header';
import ButtonTile from '../../Components/ButtonTile';

function SecuritySettings({ navigation }) {
  function onPressHandler() {
    navigation.goBack();
  }

  return (
    <SafeArea>
      <Header title={'Security Settings'} onPress={onPressHandler} />
      <View style={{ marginTop: 20 }}>
        <ButtonTile title={'Location Security'} icon={'location'} />
        <ButtonTile title={'Swipe Payments'} icon={'card'} />
        <ButtonTile title={'ATM Withdraw'} icon={'coin'} />
        <ButtonTile title={'Online transactions'} icon={'exchange'} />
      </View>
    </SafeArea>
  );
}

export default SecuritySettings;

const styles = StyleSheet.create({});
