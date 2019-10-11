import React from 'react'

const Expirience = ({ expirience }) => {
  function breakUpText(text, callback) {
    return text.split('\n').map(callback)
  }

  return (
    <div>
      <div className="section-full subsection">
        {breakUpText(expirience.name, (paragraph, i) =>
          <h3 key={i}>{paragraph}</h3>
        )}
        <h3>{expirience.organisation}</h3>
        <h5>{expirience.location} | {expirience.dates}</h5>
        {expirience.desc && breakUpText(expirience.desc, (paragraph, i) =>
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
