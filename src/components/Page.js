import React, { useState } from 'react'

import Hero from './Hero'
import About from './About'
import Banner from './Banner'
import Expirience from './Expirience'

const Page = () => {
  const [isHeroFull, setIsHeroFull] = useState(true)
  const heroRef = React.createRef()

  function manageFullHeight() {
    const atTop = heroRef.current.scrollTop === 0 ? true : false
    setIsHeroFull(atTop)
  }

  return (
    <div
      ref={heroRef}
      className="temp"
      onScroll={manageFullHeight}
    >
      <header>
        <Hero isHeroFull={isHeroFull}/>
      </header>
      <main>
        <About />
        <Banner title="Expirience" />
        <Expirience />
      </main>
    </div>
  )
}

export default Page
