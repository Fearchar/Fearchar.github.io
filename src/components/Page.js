import React, { useRef, useState } from 'react'

import Hero from './Hero'
import About from './About'
import Banner from './Banner'
import Expirience from './Expirience'

const Page = () => {
  const [isHeroFull, setIsHeroFull] = useState(true)
  const [headingRefs, setHeadingRefs] = useState([])
  const pageRef = useRef('pageRef')

  function manageFullHeight() {
    const atTop = pageRef.current.scrollTop <= 5 ? true : false
    setIsHeroFull(atTop)
  }

  function storeRef(ref) {
    setHeadingRefs([...headingRefs, ref])
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
        <Banner
          heading="Expirience"
          storeRef={storeRef}
        />
        <Expirience />
      </main>
    </div>
  )
}

export default Page
