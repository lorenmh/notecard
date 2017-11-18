import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Test extends Component {
  render() {
    let { name, style } = this.props;
    return <Text style={style}>Hello { name }</Text>;
  }
}
