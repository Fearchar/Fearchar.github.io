import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'

import Hero from './components/Hero'
import About from './components/About'
import Banner from './components/Banner'
import Expirience from './components/Expirience'

class App extends React.Component {

  render () {
    return (
      <div>
        <header>
          <Hero />
        </header>
        <main>
          <About />
          <Banner title="Expirience" />
          <Expirience />
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
