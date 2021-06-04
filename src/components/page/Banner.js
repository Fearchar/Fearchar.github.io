import React, { useRef, useEffect } from 'react'

import SpanText from '../shared/SpanText'

const Banner = ({ id, heading, storeRef }) => {
  const h2Ref = useRef(null)
  useEffect(() => storeRef(h2Ref), [])
  return (
    <div className="banner">
      <div className="nav-offset" id={id} />
      <h2 ref={h2Ref}>
        <SpanText text={heading} />
      </h2>
    </div>
  )
}

export default Banner
