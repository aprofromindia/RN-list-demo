/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import ListView from './components/ListView';

export default class MapApp extends PureComponent {
  render() {
    return (
      <View style={ styles.container }>
        <ListView />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


AppRegistry.registerComponent('MapApp', () => MapApp);
