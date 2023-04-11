import { View, Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';

import SafeArea from '../../Components/SafeArea';
import Header from '../../Components/Header';
import ButtonTile from '../../Components/ButtonTile';
import FormInputField from '../../Components/FormInputField';
import PrimaryButton from '../../Components/PrimaryButton';

function OtherInfo({ navigation }) {
  const { control, handleSubmit } = useForm();

  function onPressHandler() {
    navigation.goBack();
  }
  function onButtonPressHandler(data) {
    console.log(data);
    navigation.navigate('ConfirmPayment');
  }
  return (
    <SafeArea>
      <Header title={'Other Information'} onPress={onPressHandler} />
      <Text style={styles.text}>Other information</Text>
      <ButtonTile title={'Urgent Payment'} icon={'urgent'} />
      <FormInputField
        title={'Purpose Code'}
        name={'pCode'}
        placeholder={'Enter Purpose Code'}
        icon={'pcode'}
        autoCap={'sentences'}
        control={control}
      />
      <ButtonTile
        title={'Transfer payer OIB to recipient'}
        icon={'add-person'}
      />
      <ButtonTile title={'Save Payment as template'} icon={'save'} />
      <FormInputField
        title={'Template name'}
        name={'tname'}
        placeholder={'Enter template name'}
        icon={'add-person'}
        control={control}
      />
      <View style={{ flex: 1 }} />
      <PrimaryButton
        onPress={handleSubmit(onButtonPressHandler)}
        title={'Continue to Recipt'}
      />
    </SafeArea>
  );
}

export default OtherInfo;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    margin: 15,
  },
});
