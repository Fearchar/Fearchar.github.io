import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'

import Hero from './components/Hero'

class App extends React.Component {

  render () {
    return (
      <header>
        <Hero />
      </header>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
