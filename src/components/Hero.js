import React, { useRef, useEffect } from 'react'

import textWhipAnimation from '../lib/textWhipAnimation'
import SpanText from './SpanText'
import TabAnchor from './TabAnchor'

const Hero = ({ isHeroFull }) => {

  const h1Ref = useRef(null)
  useEffect(() => textWhipAnimation(h1Ref), [h1Ref])

  return (
    <div
      id="hero"
      className={`hero banner ${isHeroFull ? 'full' : ''}`}
      onClick={() => textWhipAnimation(h1Ref)}
    >
      <h1 ref={h1Ref}>
        <SpanText text="Fearchar MacLean" />
      </h1>
      <h2>Full Stack Developer</h2>
      <p>with a passion for tabletop gaming,</p>
      <p>music and literature</p>
      <div>
        <TabAnchor href="https://github.com/Fearchar">
          <i className="devicon-github-plain" />
          <p>/fearchar</p>
        </TabAnchor>
        <TabAnchor href="https://www.linkedin.com/in/fearchar/">
          <i className="fab fa-linkedin" />
          <p>/fearchar</p>
        </TabAnchor>
        <TabAnchor href="mailto: fearchar.maclean@gmail.com">
          <i className="fas fa-envelope" />
          <p>fearchar.maclean@gmail.com</p>
        </TabAnchor>
      </div>
      {isHeroFull && <i className="fas fa-angle-down fa-3x" />}
    </div>
  )
}

export default Hero
