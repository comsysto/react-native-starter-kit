import App from './App'
import common from '../test/common'

const { createRenderer, React, expect, MockComponents } = common
const { Text } = MockComponents

describe('App', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()
    renderer.render(<App />)
    output = renderer.getRenderOutput()
  })

  it('should render a welcome text text', () => {
    expect(output).toIncludeJSX(
        <Text style={{fontSize: 20,
                      textAlign: 'center',
                      margin: 10}}>
        Welcome to React Native!
      </Text>
    )
  })

  it('should tell where to start', () => {
    expect(output).toIncludeJSX(
        <Text style={{color: '#333333',
                      textAlign: 'center',
                      marginBottom: 5}}>
        To get started, edit index.js
      </Text>
    )
  })

  it('should explain the dev menu', () => {
    expect(output).toIncludeJSX(
        <Text style={{color: '#333333',
                      textAlign: 'center',
                      marginBottom: 5}}>
        Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
      </Text>
    )
  })
})
