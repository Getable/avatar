require('babel/polyfill')

import test from 'tape'
import {createElement} from 'react'
import {addons} from 'react/addons'
import Avatar from './index.jsx'
const {TestUtils} = addons
const {isElement, createRenderer} = TestUtils
const defaultProps = {image: 'http://image.ocm'}

test('Avatar: constructor', (t) => {
  const avatar = createElement(Avatar, defaultProps)
  t.ok(
    isElement(avatar)
    , 'is a valid react component'
  )

  t.end()
})

test('Avatar: props: image', (t) => {
  const dom = createRenderer()
  dom.render(createElement(Avatar, defaultProps))
  const output = dom.getRenderOutput()
  const children = output.props.children
  const firstChild = children

  t.equal(
    firstChild.type
    , 'img'
    , 'the first child is an img'
  )

  t.equal(
    firstChild.props.src
    , defaultProps.image
    , 'sets the src'
  )
  t.end()
})

test('Avatar: props: size: class', (t) => {
  const dom = createRenderer()
  dom.render(createElement(Avatar, Object.assign({size: 'large'}, defaultProps)))
  const output = dom.getRenderOutput()
  const classes = output.props.className.split(' ')

  t.equal(
    classes[0]
    , 'avatar'
    , 'sets the namespace class'
  )

  t.equal(
    classes[1]
    , 'avatar--large'
    , 'sets the size modifier class'
  )

  t.end()
})

test('Avatar: props: size: arbitrary width', (t) => {
  const dom = createRenderer()
  const width = 300
  dom.render(createElement(Avatar, Object.assign({size: width}, defaultProps)))
  const output = dom.getRenderOutput()
  const style = output.props.style

  t.equal(
    style.width
    , width
    , 'sets an inline style for width when a number is passed to size'
  )

  t.equal(
    style.height
    , width
    , 'sets an inline style for height when a number is passed to size'
  )

  t.end()
})
