import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'

import Hero from './components/Hero'
import About from './components/About'
import Banner from './components/Banner'
import Expirience from './components/Expirience'

class App extends React.Component {
  constructor() {
    super()
    this.heroRef = React.createRef()

    this.manageFullHeight = this.manageFullHeight.bind(this)
  }

  manageFullHeight() {
    // const hero = heroRef.current
    const scrollTop = this.heroRef.current.scrollTop
    console.log(scrollTop)
    // if (scrollTop > 0) setIsFull(false)
    // else setIsFull(true)
  }

  render () {
    return (
      <div className="temp" ref={this.heroRef} onScroll={this.manageFullHeight}>
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
