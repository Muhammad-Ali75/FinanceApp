import { View, Image, TextInput, StyleSheet, Text } from 'react-native';

import { Controller } from 'react-hook-form';
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

const FormInputField = ({
  title,
  control,
  name,
  rule,
  placeholder,
  icon,
  secureTextEntry,
  keyboardType,
  max,
  autoCap,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rule}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.topContainer,
              { borderColor: error ? 'red' : '#646464' },
            ]}
          >
            <Text style={{ color: '#646464' }}>{title}</Text>
            <View
              style={[
                styles.container,
                { borderColor: error ? 'red' : 'black' },
              ]}
            >
              <View style={styles.iconContainer}>
                <Icon title={icon} />
              </View>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor="#646464"
                secureTextEntry={secureTextEntry}
                style={styles.input}
                keyboardType={keyboardType || 'default'}
                maxLength={max}
                autoCapitalize={autoCap || 'none'}
              />
            </View>
          </View>
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.error}>{error.message || 'Error'}</Text>
            </View>
          )}
        </>
      )}
    />
  );
};

export default FormInputField;

const styles = StyleSheet.create({
  topContainer: {
    borderBottomWidth: 1,
    borderColor: '#646464',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  container: {
    height: 40,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#F76654',
    borderRadius: 10,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    width: '100%',
    color: 'white',
  },
  errorContainer: {
    width: '75%',
    alignSelf: 'center',
    marginTop: -15,
    marginBottom: 0,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  iconCircle: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
  },
});
