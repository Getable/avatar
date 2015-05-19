import React, {PropTypes, Component} from 'react'
import {addons} from 'react/addons'
import classNames from 'classnames'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'avatar'
const hasDigitRegEx = /\d/
const hasDigit = (digit) => hasDigitRegEx.test(digit)
const sizes = ['large', 'normal']

export default class Avatar extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    const className = classNames(
      namespace
      , {[`${namespace}--${this.props.size}`]: typeof this.props.size === 'string'}
      , {[`${namespace}--normal`]: !this.props.size}
      , {[`${namespace}--borderless`]: this.props.borderless}
    )
    const width = hasDigit(this.props.size) ? this.props.size : null

    return (<div className={className} onClick={this.props.onClick} style={width ? {width, height: width} : null} >
      <img src={this.props.image} />
    </div>)
  }
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired
  , size: function validateSize (props, propName, componentName) {
    const value = props[propName]
    if (value && !hasDigit(value) && sizes.indexOf(value) < 0) {
      throw new Error(`${componentName} size must be a number or one of: ${sizes.join(', ')}`)
    }
  }
  , onClick: PropTypes.func
  , borderless: PropTypes.bool
}

Avatar.defaultProps = {
  borderless: false
}
