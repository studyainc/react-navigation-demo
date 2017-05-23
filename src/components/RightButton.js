import React, { PropTypes } from 'react'
import {
  Button,
  Text,
} from 'react-native'

export default class RightButton extends React.Component {
  static propTypes = {
    navState: PropTypes.shape({
      params: PropTypes.object,
    }),
    setParams: PropTypes.func.isRequired,
  }

  isListPreview() {
    const { params } = this.props.navState    
    return params && params.isListPreview    
  }

  get previewMode() {
    return this.isListPreview() ? 'Gird' : 'List'
  }

  render() {
    const { setParams } = this.props
    return (
      <Button 
        transparent 
        onPress={() => {
          setParams({isListPreview: !this.isListPreview()})
        }}
        title={this.previewMode}
      />
    )
  }
}