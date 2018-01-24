

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './MainScreen';
import NextScreen from './NextScreen';


class App extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Hello MainScreen ',
          component: MainScreen,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App = StackNavigator({
  Main: {screen: MainScreen},
  NextScreen: {screen: NextScreen},
});