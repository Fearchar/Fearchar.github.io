import React from 'react'

import newLineNodes from 'lib/newLineNodes'

const ExperienceTemplate = ({ experience }) => {
  return (
    <div>
      <div className="section-full subsection">
        <div>
          <div>
            {newLineNodes(experience.name, (paragraph, i) => (
              <h3 key={i}>{paragraph}</h3>
            ))}
          </div>
          <h4>{experience.organisation}</h4>
          <h5>
            {experience.location} | {experience.dates}
          </h5>
        </div>
        {experience.desc &&
          newLineNodes(experience.desc, (paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        {experience.bullets && (
          <>
            <p className="responsibilities-header">Responsibilities:</p>
            <ul>
              {experience.bullets.map((bullet, i) => (
                <li key={i}>
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default ExperienceTemplate
