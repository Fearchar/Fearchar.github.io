import React from 'react'

import SpanText from 'components/shared/SpanText'

export function Banner({ id, heading }) {
  return (
    <div className="banner">
      <div className="nav-offset" id={id} />
      <h2>
        <SpanText text={heading} />
      </h2>
    </div>
  )
}
