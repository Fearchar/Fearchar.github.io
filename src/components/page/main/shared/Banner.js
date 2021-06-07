import React from 'react'

export function Banner({ id, heading }) {
  return (
    <div className="banner">
      <div className="nav-offset" id={id} />
      <h2>{heading}</h2>
    </div>
  )
}
