import React, { useRef, useState } from 'react'

import { AboutSection } from './main/AboutSection/AboutSection'
import { ExperienceSection } from './main/ExpirienceSection/ExperienceSection'
import { ProjectsSection } from './main/ProjectsSection/ProjectsSections'
import { Header } from './Header/Header'

import styles from './Page.css'

export function Page() {
  const [atStartingPosition, setAtStartingPosition] = useState(true)
  const pageRef = useRef(null)

  /* todo: fm - change pageNode name - maybe pageRefCurrent*/
  /* todo: fm - perhaps we can describe this in terms of the widnow position*/
  function manageHeroHeight(pageNode) {
    const atTop = pageNode.scrollTop <= 5 ? true : false

    setAtStartingPosition(atTop)
  }

  return (
    <div
      ref={pageRef}
      className={styles.main}
      onScroll={() => manageHeroHeight(pageRef.current)}
    >
      <Header atStartingPosition={atStartingPosition} pageRef={pageRef} />

      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      {/* todo: fm - add footer - maybe here I could say built from scratch in react? */}
    </div>
  )
}
