import React, { useState } from 'react'

import Hero from './Hero'
import About from './About'
import Banner from './Banner'
import Expirience from './Expirience'

const Page = () => {
  const [isHeroFull, setIsHeroFull] = useState(true)
  const pageRef = React.createRef()

  function manageFullHeight() {
    const atTop = pageRef.current.scrollTop <= 5 ? true : false
    setIsHeroFull(atTop)
  }

  return (
    <div
      ref={pageRef}
      className="page"
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
