import App from './App'
import utils from '../../test/utils'

const { createRenderer, React, expect, MockComponents } = utils
const { Text } = MockComponents

describe('App', () => {
  let output

  beforeEach(() => {
    const renderer = createRenderer()
    renderer.render(<App />)
    output = renderer.getRenderOutput()
  })

  it('should render a welcome text text', () => {
    expect(output).to.include(
        <Text style={{fontSize: 20,
                      textAlign: 'center',
                      margin: 10}}>
        Welcome to React Native!
      </Text>
    )
  })

  it('should tell where to start', () => {
    expect(output).to.include(
        <Text style={{color: '#333333',
                      textAlign: 'center',
                      marginBottom: 5}}>
        To get started, edit index.js
      </Text>
    )
  })

  it('should explain the dev menu', () => {
    expect(output).to.include(
        <Text style={{color: '#333333',
                      textAlign: 'center',
                      marginBottom: 5}}>
        Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
      </Text>
    )
  })
})
