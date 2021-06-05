import React, { useRef, useState } from 'react'

import Navbar from './Navbar'
import { Hero } from './Hero'
import { About } from './About'
import { Banner } from './Banner'
import Carousel from './Carousel'
import ProjectTemplate from './ProjectTemplate'
import ExperienceTemplate from './ExperienceTemplate'
import projects from 'content/projects'
import experiences from 'content/experiences'

export function Page() {
  const [isHeroFull, setIsHeroFull] = useState(true)
  const pageRef = useRef(null)

  /* todo: fm - change pageNode name - maybe pageRefCurrent*/
  /* todo: fm - perhaps we can describe this in terms of the widnow position*/
  function manageHeroHeight(pageNode) {
    const atTop = pageNode.scrollTop <= 5 ? true : false
    setIsHeroFull(atTop)
  }

  return (
    <div
      ref={pageRef}
      className="page"
      onScroll={() => {
        manageHeroHeight(pageRef.current)
      }}
    >
      <header>
        <Navbar displayNav={!isHeroFull} />
        <Hero isHeroFull={isHeroFull} pageRef={pageRef} />
      </header>

      <main>
        <Banner id="about" heading="About" />
        <About />
        <Banner id="experience" heading="Experience" />
        <Carousel
          Template={ExperienceTemplate}
          slides={experiences}
          slideName="experience"
        />
        <Banner id="projects" heading="Projects" />
        <Carousel
          Template={ProjectTemplate}
          slides={projects}
          slideName="project"
        />
      </main>
      {/* todo: fm - add footer - maybe here I could say built from scratch in react? */}
    </div>
  )
}
