import React from 'react'

const Expirience = ({ expirience }) => {
  function dynamicMultiline(text, callback) {
    return text.split('\n').map(callback)
  }

  return (
    <div>
      <div className="section-full subsection">
        <div>
          <div>
            {dynamicMultiline(expirience.name, (paragraph, i) =>
              <h3 key={i}>{paragraph}</h3>
            )}
          </div>
          <h4>{expirience.organisation}</h4>
          <h5>{expirience.location} | {expirience.dates}</h5>
        </div>
        {expirience.desc && dynamicMultiline(expirience.desc, (paragraph, i) =>
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
