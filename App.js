import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Test from './Test';
import RainbowString from './Rainbow';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RainbowString string="Hello World!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgb(240,245,250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
