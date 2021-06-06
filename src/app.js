import React from 'react'
import ReactDOM from 'react-dom'

import { Page } from './components/page/Page'

import 'styles/global.css'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return <Page />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
