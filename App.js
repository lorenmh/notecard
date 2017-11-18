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
    backgroundColor: 'rgb(15,20,40)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(255,0,0)'
  },
});
