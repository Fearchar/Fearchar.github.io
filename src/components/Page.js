import React, { useRef, useState } from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Bio from './Bio'
import Banner from './Banner'
import Expirience from './Expirience'

const Page = () => {
  const [isHeroFull, setIsHeroFull] = useState(true)
  const [headingRefs, setHeadingRefs] = useState([])
  const pageRef = useRef(null)

  function manageFullHeight() {
    const atTop = pageRef.current.scrollTop <= 5 ? true : false
    setIsHeroFull(atTop)
  }

  function storeRef(ref) {
    setHeadingRefs([...headingRefs, ref])
  }

  return (
    <div
      id="page-top"
      ref={pageRef}
      className="page"
      onScroll={manageFullHeight}
    >
      <header>
        <Navbar displayNav={!isHeroFull}/>
        <Hero isHeroFull={isHeroFull}/>
      </header>
      <main>
        <Bio />
        <Banner
          id="expirience"
          heading="Expirience"
          storeRef={storeRef}
        />
        <Expirience />
      </main>
    </div>
  )
}

export default Page
