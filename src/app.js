import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'

import Hero from './components/Hero'
import BioSection from './components/Bio'

class App extends React.Component {

  render () {
    return (
      <div>
        <header>
          <Hero />
        </header>
        <main>
          <BioSection />
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
