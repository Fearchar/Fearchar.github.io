import React, { useRef, useState } from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Bio from './Bio'
import Banner from './Banner'
import Carousel from './Carousel'
import Project from './Project'
import Expirience from './Expirience'
import projects from '../content/projects'
import expiriences from '../content/expiriences'
import textWhipAnimation from '../lib/textWhipAnimation'

const Page = () => {
  const [isHeroFull, setIsHeroFull] = useState(true)
  const [headingRefs, setHeadingRefs] = useState([])
  const pageRef = useRef(null)

  function manageFullHeight(refs) {
    const pageNode = pageRef.current
    const atTop = pageNode.scrollTop <= 5 ? true : false
    setIsHeroFull(atTop)
    refs.forEach(ref => {
      const node = ref.current
      if (pageRef.scrollTop === node.getBoundingClientRect().y) {
        textWhipAnimation(node)
      }
    })
  }

  function storeRef(ref) {
    setHeadingRefs([...headingRefs, ref])
  }

  return (
    <div
      ref={pageRef}
      className="page"
      onScroll={() => manageFullHeight(headingRefs)}
    >
      <header>
        <Navbar displayNav={!isHeroFull}/>
        <Hero
          isHeroFull={isHeroFull}
          pageNode={pageRef.current}
        />
      </header>
      <main>
        <Bio />
        <Banner
          id="expirience"
          heading="Expirience"
          storeRef={storeRef}
        />
        <Carousel Template={Expirience} slides={expiriences} slideName="expirience" />
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
