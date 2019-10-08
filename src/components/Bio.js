import React from 'react'

import { bioText, techs } from '../content/bio'
import Technology from './Technology'

const Bio = () => {

  return (
    <section id="bio">
      <div className="subsection">
        <figure>
          <img src="../images/Fearchar-5.jpg" alt="Fearchar MacLean"/>
        </figure>
      </div>
      <div className="subsection">
        <h3>My Bio</h3>
        <p>
          {bioText}
        </p>
      </div>
      <div className="subsection">
        <h3>Tech</h3>
        <div className="techs">
          {techs.map((tech, i) =>
            <Technology
              key={i}
              {...tech}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Bio
