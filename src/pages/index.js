import Tab from '../component/tab';
import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {increase, decrease, reset} from '../store/actions';

class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  _onPressReset() {
    this.props.dispatch(reset());
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
        <Text>{this.props.counter.count}</Text>
        <TouchableOpacity
          style={styles.reset}
          onPress={() => this._onPressReset()}>
          <Text>归零</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.start}
          onPress={() => this._onPressInc()}>
          <Text>加1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.stop}
          onPress={() => this._onPressDec()}>
          <Text>减1</Text>
        </TouchableOpacity>
        <Tab props={this.props}></Tab>
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
