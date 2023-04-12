import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SafeArea from '../../Components/SafeArea';
import Header from '../../Components/Header';
import LimitPartial from '../../Components/LimitPartial';

function LimitSettings({ navigation }) {
  function onBackPress() {
    navigation.goBack();
  }
  return (
    <SafeArea>
      <ScrollView>
        <Header title={'Limit Settings'} onPress={onBackPress} />
        <LimitPartial title={'online shopping'} />
        <LimitPartial title={'background transactions'} />
        <LimitPartial title={'buying'} />
      </ScrollView>
    </SafeArea>
  );
}

export default LimitSettings;

const styles = StyleSheet.create({});
