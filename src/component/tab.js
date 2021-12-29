import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../route/navigation';

import {increase, decrease, reset} from '../store/actions';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          width: 375,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={styles.btn}>
          <Button title="首页" onPress={() => navigate('Index')} />
        </View>
        <View style={styles.btn}>
          <Button
            title="我的"
            onPress={() => this.props.navigation.navigate('Mine')}
          />
        </View>
        <View style={styles.btn}>
          <Button title="商品列表" onPress={() => navigate('GoodsList')} />
        </View>
        <View style={styles.btn}>
          <Button title="商品详情" onPress={() => navigate('GoodsDetail')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 80,
    margin: 6,
  },
});

export default Tab;
