// Polyfill first
import 'core-js/stable'
// Set up global stuff
import './globals'
// import './styles/global.scss'

// import React from 'react'
// Rendering
import { render } from 'react-dom'
import App from './components/App'

render(
  <App />,
  document.getElementById('app')
)
