import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const CardSection = props => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

CardSection.propTypes = {
  children: PropTypes.objectOf(Component)
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export { CardSection }