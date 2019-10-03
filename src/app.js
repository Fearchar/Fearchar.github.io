import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'

import Page from './components/Page'

class App extends React.Component {
  constructor() {
    super()
  }
  render () {
    return (
      <Page />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
