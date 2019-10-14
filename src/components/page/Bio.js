import React from 'react'

import TabAnchor from '../lib/TabAnchor'
import Technology from '../lib/Technology'
import { bioImage, bioText } from '../../content/bio'
import { knownTechs } from '../../content/tech'

const Bio = () => {
// !!! Add FM image to content folder
  return (
    <section id="bio">
      <div className="container">
        <div className="section-third subsection">
          <TabAnchor href="https://github.com/fearchar">
            <img src={bioImage} alt="Fearchar MacLean"/>
          </TabAnchor>
        </div>
        <div className="section-third subsection">
          <h3>My Bio</h3>
          <p>
            {bioText}
          </p>
        </div>
        <div className="section-third subsection">
          <h3>Tech</h3>
          <div className="techs">
            {knownTechs.map(tech =>
              <Technology
                key={tech.name}
                {...tech}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
