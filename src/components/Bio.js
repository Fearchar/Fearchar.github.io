import React from 'react'

import { bioText, techs } from '../content/bio'
import Technology from './Technology'

const BioSection = () => {

  return (
    <section className="bio">
      <div>
        <figure>
          <img src="../images/Fearchar-5.jpg" alt="Fearchar MacLean"/>
        </figure>
      </div>
      <div className="vr" />
      <div>
        <h3>Bio</h3>
        <p>
          {bioText}
        </p>
      </div>
      <div className="vr" />
      <div>
        <h3>Tech</h3>
        <div>
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

export default BioSection
