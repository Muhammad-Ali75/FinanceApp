import { View, TextInput, StyleSheet, Text } from 'react-native';

import { Controller } from 'react-hook-form';

const PinInputField = ({ title, control, name, rule, max }) => {
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
            <Text style={{ color: '#646464', alignSelf: 'center' }}>
              {title}
            </Text>
            <View
              style={[
                styles.container,
                { borderColor: error ? 'red' : 'black' },
              ]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={true}
                style={styles.input}
                keyboardType={'number-pad'}
                maxLength={max}
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

export default PinInputField;

const styles = StyleSheet.create({
  topContainer: {
    width: '60%',
    borderBottomWidth: 4,
    borderColor: '#646464',
    borderStyle: 'dashed',
    marginHorizontal: 10,
    marginBottom: 20,
    alignSelf: 'center',
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
  input: {
    marginLeft: 10,
    marginRight: 10,
    width: '100%',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
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
    textAlign: 'center',
  },
});
