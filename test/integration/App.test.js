'use strict'

import utils from '../utils'

const { expect, deviceDriver } = utils

const device = {
  'appium-version': '1.0',
  platformName: 'Android',
  platformVersion: '5.1',
  deviceName: 'Moto G',
  app: '/Users/thomas/Projects/react-native-starter-kit/android/app/build/outputs/apk/app-release-unsigned.apk'
}

describe('App', () => {
  before(() => {
    return deviceDriver.init(device).setImplicitWaitTimeout(3000)
  })

  after(() => {
    return deviceDriver.quit()
  })

  it('should have a welcome text', () => {
    return expect(deviceDriver.elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.widget.TextView[1]'))
      .to.eventually.exist
  })

  it('should have an instruction test', () => {
    return expect(deviceDriver.elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.widget.TextView[3]'))
      .to.eventually.exist
  })
})

