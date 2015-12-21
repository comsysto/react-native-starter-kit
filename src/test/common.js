import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { MockComponents } from './mocks'
import expect from 'expect'
import expectJSX from 'expect-jsx'

expect.extend(expectJSX)

export default {
  expect,
  createRenderer: ReactTestUtils.createRenderer,
  React,
  MockComponents
}
