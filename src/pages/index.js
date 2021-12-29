import Tab from '../component/tab';
import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import {increase, decrease} from '../store/actions';

class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
      <View style={styles.contaner}>
        <Text
          onPress={() => {
            this.props.navigation.navigate('Mine');
          }}>
          首页
        </Text>
        <Text style={{fontSize: 18}}>{this.props.counter.count}</Text>

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
  },

  btn: {
    width: 80,
    margin: 6,
  },

  content: {
    fontWeight: 500,

    justifyContent: 'center',

    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  counter: state.counter,
});
export default connect(mapStateToProps)(Index);
