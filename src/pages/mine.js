import Tab from '../component/tab';
import React from 'react';

import {Text, StyleSheet, StatusBar, Button, View} from 'react-native';
import {increase, decrease} from '../store/actions';
import {connect} from 'react-redux';

import {SafeAreaView} from 'react-navigation';

class Mine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _onPressInc() {
    this.props.dispatch(increase());
  }

  _onPressDec() {
    this.props.dispatch(decrease());
  }

  render() {
    return (
      <SafeAreaView style={styles.contaner}>
        <StatusBar barStyle="dark-content" />

        <Text
          onPress={() => {
            this.props.navigation.navigate('Index');
          }}
          style={{fontSize: 18}}>
          我的
        </Text>

        <Text>{this.props.counter.count}</Text>
        <Button title="加1" onPress={() => this._onPressInc()} />

        <Button title="减1" onPress={() => this._onPressDec()} />

        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            width: 375,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={styles.btn}>
            <Button
              title="首页"
              onPress={() => this.props.navigation.navigate('Index')}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="我的"
              onPress={() => this.props.navigation.navigate('Mine')}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="商品列表"
              onPress={() => this.props.navigation.navigate('GoodsList')}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="商品详情"
              onPress={() => this.props.navigation.navigate('GoodsDetail')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contaner: {
    backgroundColor: '#fff',

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  btn: {
    width: 80,
    margin: 6,
  },

  test: {
    width: 150,

    height: 150,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#f00',
  },
});
const mapStateToProps = state => ({
  counter: state.counter,
});
export default connect(mapStateToProps)(Mine);
