import React from 'react'
import ReactDOM from 'react-dom'

import Hero from './components/Hero'

class App extends React.Component {

  render () {
    return (
      <Hero />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
