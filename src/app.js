import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'

import Page from './components/page/Page'

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return <Page />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
