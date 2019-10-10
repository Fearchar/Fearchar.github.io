import React, { useRef, useState } from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Bio from './Bio'
import Banner from './Banner'
import Carousel from './Carousel'
import Project from './Project'
import projects from '../content/projects'

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
          id="projects"
          heading="Projects"
          storeRef={storeRef}
        />
        <Carousel Template={Project} slides={projects} slideName="project" />
      </main>
    </div>
  )
}

export default Page
