import React from 'react'

import newLineElements from '../lib/newLineElements'

const Expirience = ({ expirience }) => {
  return (
    <div>
      <div className="section-full subsection">
        <div>
          <div>
            {newLineElements(expirience.name, (paragraph, i) =>
              <h3 key={i}>{paragraph}</h3>
            )}
          </div>
          <h4>{expirience.organisation}</h4>
          <h5>{expirience.location} | {expirience.dates}</h5>
        </div>
        {expirience.desc && newLineElements(expirience.desc, (paragraph, i) =>
          <p key={i}>{paragraph}</p>
        )}
        {expirience.bullets &&
          <ul>
            {expirience.bullets.map((bullet, i) =>
              <li key={i}><p>{bullet}</p></li>
            )}
          </ul>
        }
      </div>
    </div>
  )
}

export default Expirience
