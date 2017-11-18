import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RCOLORS = [
        '#ee4035',
        '#f37736',
        '#fdf498',
        '#7bc043',
        '#0392cf',
      ],
      RLEN = RCOLORS.length
;

class RainbowChar extends Component {
  render() {
    let { char, color } = this.props;

    return (
      <Text style={{fontWeight: 'bold', color}}>
        {char}
      </Text>
    );
  }
}

export default class RainbowString extends Component {
  render() {
    let { string } = this.props;

    return (
      string
        .split('')
        .map(
          (c,i) => (
            <RainbowChar
              color={RCOLORS[i%RLEN]}
              key={i}
              char={c}
            />
          )
        )
    );
  }
}
