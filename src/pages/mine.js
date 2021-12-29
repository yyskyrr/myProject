import Tab from '../component/tab';
import React from 'react';

import {Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {SafeAreaView} from 'react-navigation';

class Mine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        <Tab></Tab>
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
