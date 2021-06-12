import React from 'react'

export function Technology({ name, iconName }) {
  return (
    <div>
      {iconName ? (
        <>
          <i className={`devicon-${iconName}`} />
          <h5>{name}</h5>
        </>
      ) : (
        <h5>
          <strong>{name}</strong>
        </h5>
      )}
    </div>
  )
}
