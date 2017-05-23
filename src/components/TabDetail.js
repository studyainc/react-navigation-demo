import React from 'react'
import { View, Text } from 'react-native'
import RightButton from './RightButton'

export default class TabDetail extends React.Component {
 static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation
    return {
      title: 'TabDetail',
      headerRight: <RightButton navState={state} setParams={setParams} />,
    }
  }

  get isListPreview() {
    const { state } = this.props.navigation
    return state.params && state.params.isListPreview    
  }

  render() {
    return (
      <View>
        <Text>Hello, Tab Detail!</Text>
        <Text>Next preview mode: { this.isListPreview ? 'List' : 'Grid' }</Text>
      </View>
    )
  }
}
