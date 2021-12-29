import React, {Component} from 'react';
import Tab from '../component/tab';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

export default class Scroll extends Component {
  render() {
    params = this.props.navigation.state.params;
    return (
      <View>
        <Text>商品详情</Text>
        <Tab></Tab>
      </View>
    );
  }
}
