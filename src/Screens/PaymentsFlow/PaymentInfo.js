import {
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useForm } from 'react-hook-form';

import SafeArea from '../../Components/SafeArea';
import Header from '../../Components/Header';
import FormInputField from '../../Components/FormInputField';
import CalendarField from '../../Components/CalendarField';
import ReferenceField from '../../Components/ReferenceField';
import PrimaryButton from '../../Components/PrimaryButton';

function PaymentInfo({ navigation }) {
  const { control, handleSubmit } = useForm();

  function onPressHandler() {
    navigation.goBack();
  }
  function onButtonPressHandler(data) {
    console.log(data);
    navigation.navigate('OtherInfo');
  }

  return (
    <SafeArea>
      <Header title={'Payment Information'} onPress={onPressHandler} />

      <Text style={styles.text}>Payment information</Text>
      <KeyboardAvoidingView style={{ flex: 1, paddingBottom: 0 }} enabled>
        <ScrollView>
          <FormInputField
            title={'Ammount'}
            name={'ammount'}
            placeholder={'Enter Ammount'}
            icon={'ammount'}
            keyboardType={'number-pad'}
            max={6}
            control={control}
            rule={{
              required: 'This Field cannot be empty.',
            }}
          />
          <CalendarField title={'Payment Date'} />
          <FormInputField
            title={'Description'}
            name={'description'}
            placeholder={'Enter Description'}
            icon={'des'}
            autoCap={'sentences'}
            control={control}
          />
          <FormInputField
            title={'Model'}
            name={'model'}
            placeholder={'Enter Model'}
            icon={'mod'}
            keyboardType={'number-pad'}
            max={3}
            control={control}
            rule={{
              required: 'This Field cannot be empty.',
            }}
          />
          <ReferenceField />

          <PrimaryButton
            title={'Next'}
            onPress={handleSubmit(onButtonPressHandler)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}

export default PaymentInfo;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    margin: 10,
  },
});
