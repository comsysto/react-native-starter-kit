import React, { AppRegistry } from 'react-native'
import App from './src/containers/App'

class Main extends React.Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('ReactNativeStarterKit', () => Main)
