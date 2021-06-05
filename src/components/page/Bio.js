import React from 'react'

import { NewTabAnchor } from 'components/shared/NewTabAnchor'
import Technology from 'components/shared/Technology'
import { bioImage, bioText } from 'content/bio'
import { knownTechs } from 'content/tech'

export function Bio() {
  return (
    <section>
      <div className="nav-offset" id="bio" />
      <div className="container">
        <div className="section-third subsection">
          <NewTabAnchor href="https://github.com/fearchar">
            <img src={bioImage} alt="Fearchar MacLean" />
          </NewTabAnchor>
        </div>
        <div className="section-third subsection">
          <h3>My Bio</h3>
          {bioText.map((paragraph, i) => (
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
  )
}
