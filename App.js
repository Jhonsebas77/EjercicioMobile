/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/pages/Login';
import HomeScreen from './src/pages/HomeScreen';
import UserDetails from './src/pages/UserDetails';


const ScreenMain = StackNavigator({
  Login:{screen: Login},
  HomeScreen: {screen: HomeScreen},
  Usuario:{screen: UserDetails},
});


export default class App extends React.Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    return ( <ScreenMain/> );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
