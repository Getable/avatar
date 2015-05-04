import React from 'react'
import Avatar from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<Avatar {...data} />, document.getElementById('app'))
