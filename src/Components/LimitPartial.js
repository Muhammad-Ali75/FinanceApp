import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from '@rneui/themed';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector';

const DATA = [
  { key: 1, label: '1' },
  { key: 2, label: '3' },
  { key: 3, label: '5' },
  { key: 4, label: '7' },
  { key: 5, label: '10' },
];
function LimitPartial({ title }) {
  const [value, setValue] = useState(200000);
  const [open, setOpen] = useState(false);
  const [dropValue, setDropValue] = useState(DATA[0].label);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily limit for {title}</Text>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Text style={{ color: '#7A7A7A', fontWeight: 'bold' }}>
          Limit amount
        </Text>
        <View style={{ flex: 1 }}></View>
        <Text style={{ color: 'white', fontSize: 16 }}>{value} USD</Text>
      </View>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={500000}
        minimumValue={5000}
        step={5000}
        allowTouchTrack
        minimumTrackTintColor={'purple'}
        trackStyle={{
          height: 5,
          backgroundColor: 'transprent',
        }}
        thumbStyle={{ height: 25, width: 25 }}
        thumbProps={{ color: 'white' }}
      />
      {/* <DropDownPicker
        open={open}
        value={dropValue}
        items={items}
        setOpen={setOpen}
        setValue={setDropValue}
        setItems={setItems}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: 'white',
        }}
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="rotate-3d-variant"
            size={24}
            color="white"
          />
        </View>
        <ModalSelector
          data={DATA}
          initValue={dropValue}
          onChange={(option) => {
            setDropValue(option.label);
          }}
          style={{ flex: 1 }}
          selectStyle={{
            borderWidth: 0,
            borderRadius: 0,
          }}
          selectTextStyle={{ fontSize: 20 }}
        />
        <AntDesign
          name="down"
          size={18}
          color="white"
          style={{ marginTop: 7, marginRight: 7 }}
        />
      </View>
    </View>
  );
}

export default LimitPartial;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },

  iconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#F76654',
    borderRadius: 10,
    marginHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
