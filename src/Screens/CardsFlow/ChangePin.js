import { View, Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';

import SafeArea from '../../Components/SafeArea';
import Header from '../../Components/Header';
import PinInputField from '../../Components/PinInputField';
import ConfirmButton from '../../Components/ConfirmButton';

function ChangePin({ navigation }) {
  const { control, handleSubmit, watch } = useForm();
  const pin = watch('pin');

  function onPressHandler() {
    navigation.goBack();
  }
  function onConfirmPress() {
    navigation.popToTop();
  }

  return (
    <SafeArea>
      <Header title={'Change PIN'} onPress={onPressHandler} />
      <View style={styles.container}>
        <Text style={styles.title}>Change your PIN</Text>
        <Text style={styles.text}>
          To change your PIN code, please enter the new desired PIN twice to
          confirm it.
        </Text>
        <PinInputField
          title={'Enter new PIN:'}
          name={'pin'}
          max={4}
          control={control}
          rule={{
            required: 'PIN cannot be empty.',
            minLength: {
              value: 4,
              message: 'PIN must contain 4 numbers.',
            },
          }}
        />
        <PinInputField
          title={'Confirm PIN:'}
          name={'cPin'}
          max={4}
          control={control}
          rule={{
            required: 'PIN cannot be empty.',
            validate: (value) => value === pin || 'PIN do not match.',
          }}
        />
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={{ paddingBottom: 80 }}>
        <ConfirmButton
          title={'Confirm'}
          onPress={handleSubmit(onConfirmPress)}
        />
      </View>
    </SafeArea>
  );
}

export default ChangePin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 20,
  },
});
