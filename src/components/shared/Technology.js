import React from 'react'

export function Technology({ name, iconName }) {
  return (
    <div>
      {iconName && <i className={`devicon-${iconName}`} />}
      {iconName && <h5>{name}</h5>}
      {!iconName && (
        <h5>
          <strong>{name}</strong>
        </h5>
      )}
    </div>
  )
}
