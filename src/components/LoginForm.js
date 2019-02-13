import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'

export default class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      });
  }

  onLoginSuccess = () => {
    this.setState({ email: '', password: '', error: '', loading: false })
  }

  onLoginFail = () => {
    this.setState({ loading: false, error: 'Authentication Failed' })
  }

  renderButton() {
    return this.state.loading
      ? <Spinner size='small' />
      : <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })} />
        </CardSection>
        <CardSection>
        <Input
            label='Password'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true} />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}