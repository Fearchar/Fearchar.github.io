import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'

import Page from './components/Page'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isHeroFull: true
    }
    this.heroRef = React.createRef()
    this.manageFullHeight = this.manageFullHeight.bind(this)
  }

  manageFullHeight() {
    const scrollTop = this.heroRef.current.scrollTop
    let isHeroFull = false
    if (scrollTop === 0) isHeroFull = true
    this.setState({ isHeroFull })
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
