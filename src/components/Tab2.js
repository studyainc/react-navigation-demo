import React from 'react'
import { Text } from 'react-native'

export default class Tab2 extends React.Component {
  static navigationOptions = {
    title: 'Tab2',
  }

  showDetail = () => {
    this.props.navigation.navigate('TabDetail')
  }

  render() {
    return <Text onPress={this.showDetail}>Hello, Tab2!</Text>
  }
}
