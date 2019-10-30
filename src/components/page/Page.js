import React, { useRef, useState } from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Bio from './Bio'
import Banner from './Banner'
import Carousel from './Carousel'
import ProjectTemplate from './ProjectTemplate'
import ExperienceTemplate from './ExperienceTemplate'
import projects from '../../content/projects'
import experiences from '../../content/experiences'
import textWhipAnimation from '../../lib/textWhipAnimation'

const Page = () => {
  const [isHeroFull, setIsHeroFull] = useState(true)
  const [headings, setHeadings] = useState([
    /*{ref: nodeRef, beenBelowView: bool, aboveMidPoint: bool}*/
  ])
  const pageRef = useRef(null)

  function manageHeroHeight(pageNode) {
    const atTop = pageNode.scrollTop <= 5 ? true : false
    setIsHeroFull(atTop)
  }

  function manageHeadingAnimations(headings) {
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    const midPoint = viewHeight / 2
    headings.forEach(heading => {
      const node = heading.ref.current
      const { top } = node.getBoundingClientRect()
      heading.beenBelowView = heading.beenBelowView || top > viewHeight
      const aboveMidPoint = top < midPoint
      if (heading.beenBelowView && aboveMidPoint && !heading.aboveMidPoint) {
        textWhipAnimation(node)
        heading.beenBelowView = false
      }
      heading.aboveMidPoint = aboveMidPoint
    })
  }

  function storeRef(ref) {
    setHeadings(headings => [...headings, { ref: ref, aboveMidPoint: null }])
  }

  return (
    <div
      ref={pageRef}
      className="page"
      onScroll={() => {
        manageHeroHeight(pageRef.current)
        manageHeadingAnimations(headings)
      }}
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
          id="experience"
          heading="Experience"
          storeRef={storeRef}
        />
        <Carousel
          Template={ExperienceTemplate}
          slides={experiences}
          slideName="Experience"
        />
        <Banner
          id="projects"
          heading="Projects"
          storeRef={storeRef}
        />
        <Carousel
          Template={ProjectTemplate}
          slides={projects}
          slideName="project"
        />
      </main>
    </div>
  )
}

export default Page
