import React, { useRef, useEffect } from 'react'

import SpanText from './SpanText'

const Banner = ({ heading, storeRef }) => {
  const h2Ref = useRef('h2Ref')
  useEffect(() => storeRef(h2Ref), [])
  return (
    <div className="banner">
      <h2 ref={h2Ref}>
        <SpanText text={heading}/>
      </h2>
    </div>
  )
}

export default Banner
