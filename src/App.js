import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Header, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

export default class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyCT6u_6dgOkZhvhtZOuJdfy_v3WZGiO2SY',
      authDomain: 'auth-react-native-29eff.firebaseapp.com',
      databaseURL: 'https://auth-react-native-29eff.firebaseio.com',
      projectId: 'auth-react-native-29eff',
      storageBucket: 'auth-react-native-29eff.appspot.com',
      messagingSenderId: '710945700655'
    })

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user })
    })
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 40 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication'></Header>
        {this.renderContent()}
      </View>
    )
  }
}