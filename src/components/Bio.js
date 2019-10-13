import React from 'react'

import TabAnchor from './TabAnchor'
import Technology from './Technology'
import bioText from '../content/bioText'
import { knownTechs } from '../content/techContent'

const Bio = () => {
// !!! Add FM image to content folder
  return (
    <section id="bio">
      <div className="section-third subsection">
        <TabAnchor href="https://github.com/fearchar">
          <img src="https://i.imgur.com/2siaQqK.jpg" alt="Fearchar MacLean"/>
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
    </section>
  )
}

export default Bio
