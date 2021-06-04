import React from 'react'

import newLineNodes from 'lib/newLineNodes'

const ExperienceTemplate = ({ Experience }) => {
  return (
    <div>
      <div className="section-full subsection">
        <div>
          <div>
            {newLineNodes(Experience.name, (paragraph, i) => (
              <h3 key={i}>{paragraph}</h3>
            ))}
          </div>
          <h4>{Experience.organisation}</h4>
          <h5>
            {Experience.location} | {Experience.dates}
          </h5>
        </div>
        {Experience.desc &&
          newLineNodes(Experience.desc, (paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        {Experience.bullets && (
          <ul>
            {Experience.bullets.map((bullet, i) => (
              <li key={i}>
                <p>{bullet}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ExperienceTemplate
