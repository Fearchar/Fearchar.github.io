import React from 'react'

import { NewTabAnchor } from 'components/shared/NewTabAnchor'
import Technology from 'components/shared/Technology'
import { aboutImage, aboutText } from 'content/about'
import { knownTechs } from 'content/tech'
import { Banner } from '../shared/Banner'

export function AboutSection() {
  return (
    <>
      {/* todo: fm - move banner into section if you can*/}
      <Banner id="about" heading="About" />

      <section>
        <div className="nav-offset" />
        <div className="container">
          <div className="section-third subsection">
            <NewTabAnchor href="https://github.com/fearchar">
              <img src={aboutImage} alt="Fearchar MacLean" />
            </NewTabAnchor>
          </div>

          <div className="section-third subsection">
            <h3>My About</h3>
            {aboutText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="section-third subsection">
            <h3>Tech</h3>
            <div className="techs">
              {knownTechs.map((tech) => (
                <Technology key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
