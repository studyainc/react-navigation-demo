import React from 'react'
import { Text } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class Splash extends React.Component {
  static navigationOptions = {
    title: 'Splash',
  }

  componentDidMount() {
    console.log('Splash Loaded!!!!')
    const { dispatch } = this.props.navigation
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Root'})
      ]
    })
    dispatch(resetAction)
  }

  render() {
    return <Text>Hello, Splash!</Text>
  }
}
