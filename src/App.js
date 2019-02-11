import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyCT6u_6dgOkZhvhtZOuJdfy_v3WZGiO2SY',
      authDomain: 'auth-react-native-29eff.firebaseapp.com',
      databaseURL: 'https://auth-react-native-29eff.firebaseio.com',
      projectId: 'auth-react-native-29eff',
      storageBucket: 'auth-react-native-29eff.appspot.com',
      messagingSenderId: '710945700655'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication'></Header>
        <Text>An app</Text>
      </View>
    )
  }
}