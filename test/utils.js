import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { MockComponents } from './mocks/ReactNativeMocks'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiJSX from 'jsx-chai'
import wd from 'wd'

chai.use(chaiAsPromised)
chaiAsPromised.transferPromiseness = wd.transferPromiseness

chai.use(chaiJSX)

export default {
  expect: chai.expect,
  createRenderer: ReactTestUtils.createRenderer,
  deviceDriver: wd.promiseChainRemote('0.0.0.0', 4723),
  React,
  MockComponents,
  devices: {
    android: {
      'appium-version': '1.0',
      platformName: 'Android',
      platformVersion: '5.1',
      deviceName: 'Nexus 5',
      app: process.cwd() + '/android/app/build/outputs/apk/app-release-unsigned.apk'
    }
  }
}
