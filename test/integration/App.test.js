'use strict'

import utils from '../utils'

const { expect, deviceDriver, devices } = utils

describe('App', () => {
  before(() => {
    return deviceDriver.init(devices.android).setImplicitWaitTimeout(3000)
  })

  after(() => {
    return deviceDriver.quit()
  })

  it('should have a welcome text', () => {
    return expect(deviceDriver.elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.widget.TextView[1]'))
      .to.eventually.exist
  })

  it('should have an instruction test', () => {
    return expect(deviceDriver.elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup[1]/android.widget.TextView[3]'))
      .to.eventually.exist
  })
})

