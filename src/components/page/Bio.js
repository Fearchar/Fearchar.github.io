import React from 'react'

import TabAnchor from 'components/shared/TabAnchor'
import Technology from 'components/shared/Technology'
import { bioImage, bioText } from 'content/bio'
import { knownTechs } from 'content/tech'
import newLineNodes from 'lib/newLineNodes'

const Bio = () => {
  return (
    <section>
      <div className="nav-offset" id="bio" />
      <div className="container">
        <div className="section-third subsection">
          <TabAnchor href="https://github.com/fearchar">
            <img src={bioImage} alt="Fearchar MacLean" />
          </TabAnchor>
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

export default Bio
