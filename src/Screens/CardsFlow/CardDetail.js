import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Modal, Portal, Provider } from 'react-native-paper';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import SafeArea from '../../Components/SafeArea';
import Header from '../../Components/Header';
import ShowDetailTile from '../../Components/ShowDetailTile';
import CalendarField from '../../Components/CalendarField';

const CARD_DATA = {
  key: '1',
  title: 'Card 1',
  cardNumber: '**** **** **** 1123',
  date: '07/2023',
  balance: '34000',
};
function CardDetail({ navigation }) {
  const [value, setValue] = useState(CARD_DATA.title);
  const [visible, setVisible] = useState(false);

  function onTextPress() {
    setVisible(() => !visible);
  }
  function onPressHandler() {
    navigation.goBack();
  }
  function onChange(txt) {
    setValue(() => txt);
  }
  return (
    <SafeArea>
      <ScrollView>
        <Provider>
          <Header title={'Card Details'} onPress={onPressHandler} />
          <View style={styles.container}>
            <Text style={styles.title}>{value}</Text>
            <Text style={styles.cardNumber}>{CARD_DATA.cardNumber}</Text>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.balance}>{CARD_DATA.balance} USD</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>
                Current balance
              </Text>
            </View>
          </View>
          <ShowDetailTile
            title={'Card type'}
            icon={'bank'}
            value={'Visa business card'}
          />
          <ShowDetailTile
            title={'Card type'}
            icon={'bank'}
            value={'Credit Card'}
          />
          <ShowDetailTile
            title={'Card Owner'}
            icon={'bank'}
            value={'Bianca Rossi'}
          />
          <ShowDetailTile title={'Currency'} icon={'bank'} value={'USD'} />
          <ShowDetailTile title={'Status'} icon={'bank'} value={'Acticce'} />
          <CalendarField title={'Date of Issue'} />
          <CalendarField title={'Expiry Date'} />

          <View style={styles.topContainer}>
            <Text style={{ color: '#646464' }}>Card Name</Text>
            <TouchableOpacity
              style={styles.inputcontainer}
              onPress={onTextPress}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="format-text"
                  size={24}
                  color="white"
                />
              </View>
              <Text style={styles.text}>{value}</Text>

              <Ionicons
                name="arrow-forward-outline"
                size={24}
                color="#F76654"
              />
            </TouchableOpacity>
          </View>
          {/* Modal for Input Change */}
          <Portal>
            <Modal
              visible={visible}
              onDismiss={onTextPress}
              contentContainerStyle={styles.containerStyle}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.modalHeader}>Change card name</Text>
                <Text style={styles.modalSubHeader}>
                  Please enter new card name:
                </Text>
                <View style={styles.modalTextInputContainer}>
                  <Text style={styles.modalText}>New name</Text>

                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={styles.modalInput}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity
                    style={styles.modalCancleButton}
                    onPress={onTextPress}
                  >
                    <Text>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalSaveButton}
                    onPress={onTextPress}
                  >
                    <Text style={{ color: 'white' }}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </Portal>
        </Provider>
      </ScrollView>
    </SafeArea>
  );
}

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
    width: '95%',
    margin: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#523CF8',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  cardNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  balance: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    top: 30,
    right: 30,
    height: 40,
    width: 40,
    borderRadius: 20,
    paddingTop: 8,
    paddingLeft: 7,
    backgroundColor: '#F76654',
  },
  buttonGroupContainer: {
    marginBottom: -30,
    marginTop: 15,
    marginLeft: -7,
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: 30,
  },
  buttonGroupButton: {
    borderWidth: 0,
    borderRadius: 10,
    width: 40,
    backgroundColor: 'transparent',
  },
  buttonGroupButtonContainer: {
    alignItems: 'center',
    flex: 0,
    height: 30,
  },
  topContainer: {
    borderBottomWidth: 1,
    borderColor: '#646464',
    marginHorizontal: 10,
    marginBottom: 80,
  },
  inputcontainer: {
    height: 40,
    alignSelf: 'flex-start',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#F76654',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 15,
    flex: 1,
  },
  input: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 15,
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    height: 50,
  },
  containerStyle: {
    backgroundColor: '#646464',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    height: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    top: '10%',
  },
  modalHeader: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalSubHeader: {
    color: '#DCDCDC',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  modalTextInputContainer: {
    flex: 1,
  },
  modalText: {
    color: '#C4C4C4',
    marginBottom: 20,
  },
  modalInput: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  modalCancleButton: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
  },
  modalSaveButton: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F76654',
    borderRadius: 10,
  },
});
