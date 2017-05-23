import React from 'react'
import { Text } from 'react-native'

export default class Tab1 extends React.Component {
 static navigationOptions = {
    title: 'TabDetail',
  }

  render() {
    return <Text>Hello, Tab Detail!</Text>
  }
}
