import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useForm } from 'react-hook-form';

import SafeArea from '../../Components/SafeArea';
import Header from '../../Components/Header';
import TemplateButtons from '../../Components/TemplateButtons.js';
import FormInputField from '../../Components/FormInputField';
import PrimaryButton from '../../Components/PrimaryButton';

const ibanREGEX = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/;
const NAME_REGEX = /^[aA-zZ\s]+$/;

function RecipientInfo({ route, navigation }) {
  const [value, setValue] = useState('temp');
  const { control, handleSubmit } = useForm();

  function onPressHandler() {
    navigation.goBack();
  }
  function onButtonPressHandler(data) {
    navigation.navigate('PaymentInfo');
  }

  return (
    <SafeArea>
      <Header title={'Recipient Information'} onPress={onPressHandler} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TemplateButtons
          title={'Template'}
          selected={value === 'temp'}
          onPress={() => setValue(() => 'temp')}
          icon={'temp'}
        />
        <TemplateButtons
          title={'QR Code Scan'}
          selected={value === 'qr'}
          onPress={() => setValue(() => 'qr')}
          icon={'qr'}
        />
      </View>
      {value === 'qr' ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              textAlign: 'center',
            }}
          >
            Comming Soon
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.text}>Recipient information</Text>
          <KeyboardAvoidingView style={{ flex: 1, paddingBottom: 0 }} enabled>
            <ScrollView>
              <FormInputField
                title={'Account IBAN'}
                name={'iban'}
                placeholder={'Enter IBAN'}
                icon={'bank'}
                autoCap={'characters'}
                control={control}
                rule={{
                  required: 'IBAN cannot be empty.',
                  pattern: {
                    value: ibanREGEX,
                    message: 'Enter correct IBAN.',
                  },
                }}
              />
              <FormInputField
                title={'Recipient Name'}
                name={'name'}
                placeholder={'Enter Name'}
                icon={'add-person'}
                autoCap={'words'}
                control={control}
                rule={{
                  required: 'Name cannot be empty.',
                  pattern: {
                    value: NAME_REGEX,
                    message: 'Enter can only contain alphabets.',
                  },
                }}
              />
              <FormInputField
                title={'Street Address'}
                name={'address'}
                placeholder={'Enter Address'}
                icon={'address'}
                autoCap={'words'}
                control={control}
                rule={{
                  required: 'Address cannot be empty.',
                }}
              />
              <FormInputField
                title={'City'}
                name={'city'}
                placeholder={'Enter City'}
                icon={'city'}
                autoCap={'words'}
                control={control}
                rule={{
                  required: 'City cannot be empty.',
                }}
              />
              <FormInputField
                title={'OIB'}
                name={'oib'}
                placeholder={'Enter OIB'}
                icon={'oib'}
                keyboardType={'number-pad'}
                max={11}
                control={control}
                rule={{
                  required: 'OIB cannot be empty.',
                  minLength: {
                    value: 11,
                    message: 'OIB must contain 11 numbers.',
                  },
                }}
              />
              <PrimaryButton
                title={'Next'}
                onPress={handleSubmit(onButtonPressHandler)}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </>
      )}
    </SafeArea>
  );
}

export default RecipientInfo;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    margin: 10,
  },
});
