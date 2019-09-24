import React from 'react'
import ReactDOM from 'react-dom'

import TryingHooks from './components/TryingHooks'

class App extends React.Component {

  render () {
    return (
      <TryingHooks />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
