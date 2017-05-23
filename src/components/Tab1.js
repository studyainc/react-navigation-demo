import React from 'react'
import { Text } from 'react-native'

export default class Tab1 extends React.Component {
 static navigationOptions = {
    title: 'Tab1',
  }

  showDetail = () => {
    this.props.navigation.navigate('TabDetail')
  }

  render() {
    return <Text onPress={this.showDetail}>Hello, Tab1!</Text>
  }
}
